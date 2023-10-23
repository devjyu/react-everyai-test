import "./globals.css";
import Header from "../_components/header";
import Footer from "../_components/footer";

export const metadata = {
  title: "Every Ai",
  description: "ai 창작물 전문 플랫폼",
};

export default function RootLayout({ children }) {
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
