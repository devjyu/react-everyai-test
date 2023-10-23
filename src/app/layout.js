import "./globals.css"
import Header from "./component/header";
import Footer from "./component/footer";

export const metadata = {
  title: "Every Ai",
  description: "ai 창작물 전문 플랫폼",
};

export default function RootLayout({ children }) {
  return (
    <html lang="kr">
      <Header />
      <body>{children}</body>
      <Footer />
    </html>
  );
}
