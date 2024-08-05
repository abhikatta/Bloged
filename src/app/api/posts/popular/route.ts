import { Post } from "@prisma/client";
import prisma from "../../../../../connect";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  try {
    const popularPosts: Post[] = await prisma.post.findMany({
      orderBy: {
        views: "desc",
      },
      include: { user: true },
      take: 10,
    });

    return new NextResponse(JSON.stringify(popularPosts), { status: 200 });
  } catch (error) {
    return new NextResponse(JSON.stringify("Error getting posts!"), { status: 500 });
  }
};
