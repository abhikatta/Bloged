import { NextResponse } from "next/server";
import prisma from "../../../../connect";
import { POSTS_PER_PAGE } from "@/constants";
import { Post } from "@prisma/client";

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page")) || 1;
  try {
    const query = {
      take: POSTS_PER_PAGE,
      skip: POSTS_PER_PAGE * (page - 1), // if page is 1, skip nothing else skip page * posts per page
    };
    const [posts, count] = await prisma.$transaction([
      prisma.post.findMany(query),
      prisma.post.count(),
    ]);
    return new NextResponse(JSON.stringify({ posts, count }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new NextResponse(JSON.stringify("Error getting posts!"), {
      status: 500,
    });
  }
};
