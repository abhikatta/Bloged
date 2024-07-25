import { NextResponse } from "next/server";
import prisma from "../../../../connect";

export const GET = async ({ req }: { req: Request }) => {
  const commentsUrl = new URL(req.url);
  const { searchParams } = commentsUrl;
  const slug = searchParams.get("postSlug");
  console.log(slug);

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
