import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign up | Bloged",
  description: "Write your great ideas and thoughts in the form of blogs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <div className="max-w-[85%]  w-full">{children}</div>
    </div>
  );
}
