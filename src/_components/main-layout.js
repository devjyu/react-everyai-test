import "@/app/globals.css";
import Header from "@/_components/header";
import Footer from "@/_components/footer";
import Logo from "./logo";

export const metadata = {
  title: "Every Ai",
  description: "ai 창작물 전문 플랫폼",
};

export default function MainLayout({children}) {
  return (
    <html lang="kr">
      <body>
        <Logo />
        <Header />
        <div className="container">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
