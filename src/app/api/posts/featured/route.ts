import { Post } from "@prisma/client";
import prisma from "../../../../../connect";

export const GET = async () => {
  try {
    const featuredPost: Post = await prisma.post.findFirst({
      orderBy: {
        views: "desc",
      },
    });

    return new Response(JSON.stringify(featuredPost), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Error getting featured post", { status: 500 });
  }
};
