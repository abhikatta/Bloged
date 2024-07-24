import { NextResponse } from "next/server";
import prisma from "../../../../connect";
import { Post } from "@prisma/client";

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page")) || 1;
  const POSTS_PER_PAGE = 2;
  try {
    const posts: Post[] = await prisma.post.findMany({
      take: POSTS_PER_PAGE,
      skip: POSTS_PER_PAGE * (page - 1),
    });
    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    console.error(error);
    return new NextResponse(JSON.stringify("Error getting posts!"), {
      status: 500,
    });
  }
};
