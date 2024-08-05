import { Post } from "@prisma/client";
import { NextResponse } from "next/server";
import prisma from "../../../../../connect";

export const GET = async (req: Request, { params }: { params: { slug: string } }) => {
  try {
    const { slug } = params;
    const post: Post = await prisma.post.update({
      where: { slug },
      data: { views: { increment: 1 } },
      include: { user: true },
    });
    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (error) {
    console.error(error);
    return new NextResponse(JSON.stringify("Error getting posts!"), {
      status: 500,
    });
  }
};
