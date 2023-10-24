import "@/app/globals.css";
import Logo from "./logo";

export const metadata = {
  title: "Every Ai",
  description: "ai 창작물 전문 플랫폼",
};

export default function UserLayout({children}) {
  return (
    <html lang="kr">
      <body>
        <Logo />
        <div className="no-container">
            <div className="inner-container">
                {children}
            </div>
        </div>
      </body>
    </html>
  );
}