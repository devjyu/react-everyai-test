import "@/app/globals.css";
import Header from "@/app/_components/header";
import Footer from "@/app/_components/footer";

export const metadata = {
  title: "Every Ai",
  description: "ai 창작물 전문 플랫폼",
};

export default function MainLayout({children}) {
  return (
    <html lang="kr">
      <body>
        <Header />
        <div className="container">{children}</div>
        <Footer />
      </body>
    </html>
  );
}