import "./globals.css";

export const metadata = {
  title: "My App",
  description: "My awesome Next.js app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
