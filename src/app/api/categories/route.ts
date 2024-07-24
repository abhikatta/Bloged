import { NextResponse } from "next/server";
import prisma from "../../../../connect";
export const GET = async () => {
  try {
    const categories = await prisma.category.findMany();
    return new NextResponse(JSON.stringify(categories), { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "Something went Wrong!" }),
      { status: 500 }
    );
  }
};
