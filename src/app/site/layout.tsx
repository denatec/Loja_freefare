import "../globals.css";

import { Navbar } from "@/../components/navbar";
import { Footer } from "@/../components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="site-body">
        <Navbar />

        <main className="content">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}