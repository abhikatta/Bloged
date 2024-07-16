import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | Bloged",
  description: "Write your great ideas and thoughts in the form of blogs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full flex flex-col min-h-screen  items-center">
      <div className="max-w-[85%] w-full">{children}</div>
    </div>
  );
}
