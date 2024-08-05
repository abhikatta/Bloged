import { NextResponse } from "next/server";
import prisma from "../../../../connect";
import { POSTS_PER_PAGE } from "@/constants";
import { auth } from "../../../../auth";

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page")) || 1;
  const cat = searchParams?.get("cat") || "";
  try {
    const [posts, count] = await prisma.$transaction([
      prisma.post.findMany({
        take: POSTS_PER_PAGE,
        skip: POSTS_PER_PAGE * (page - 1), // if page is 1, skip nothing else skip page * posts per page
        where: {
          ...(cat && { catSlug: cat }),
        },
        orderBy: {
          createdAt: "desc",
        },
      }),
      prisma.post.count({
        where: {
          ...(cat && { catSlug: cat }),
        },
      }),
    ]);

    return new NextResponse(JSON.stringify({ posts, count }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new NextResponse(JSON.stringify("Error getting posts!"), {
      status: 500,
    });
  }
};

// write a new blog
export const POST = async (req: Request) => {
  const user = (await auth())?.user;
  if (!user) {
    return new NextResponse(JSON.stringify({ message: "Please Login to write a post" }), {
      status: 401,
    });
  }

  try {
    const body = await req.json();
    const createComment = await prisma.post.create({
      data: { ...body, userEmail: user.email },
    });
    return new NextResponse(JSON.stringify(createComment), { status: 200 });
  } catch (error) {
    return new NextResponse(JSON.stringify({ message: "Something went wrong!" }), { status: 500 });
  }
};
