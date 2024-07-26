import { NextResponse } from "next/server";
import prisma from "../../../../connect";
import { auth } from "../../../../auth";

export const GET = async (req: Request) => {
  const commentsUrl = new URL(req?.url);
  const { searchParams } = commentsUrl;
  const slug = searchParams.get("postSlug");

  try {
    const comments = await prisma.comment.findMany({
      where: {
        ...(slug && { postSlug: slug }),
      },
      include: { user: true },
    });

    return new NextResponse(JSON.stringify(comments), { status: 200 });
  } catch (error) {
    return new NextResponse(JSON.stringify("Error fetching data"), {
      status: 500,
    });
  }
};

// write comment
export const POST = async (req: Request) => {
  const user = (await auth())?.user;
  if (!user) {
    return new NextResponse(
      JSON.stringify({ message: "Please Login to write a comment" }),
      { status: 401 }
    );
  }

  try {
    const body = await req.json();
    const createComment = await prisma.comment.create({
      data: { ...body, userEmail: user.email },
    });
    return new NextResponse(JSON.stringify(createComment), { status: 200 });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};
