import { NextResponse } from "next/server";
import prisma from "../../../../connect";
import { Category } from "@prisma/client";
export const GET = async () => {
  try {
    const categories: Category[] = await prisma.category.findMany();
    return new NextResponse(JSON.stringify(categories), { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "Something went Wrong!" }),
      { status: 500 }
    );
  }
};
