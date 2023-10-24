import "@/app/globals.css";

export const metadata = {
  title: "Every Ai",
  description: "ai 창작물 전문 플랫폼",
};

export default function UserLayout({children}) {
  return (
    <html lang="kr">
      <body>
        <div className="no-container">{children}</div>
      </body>
    </html>
  );
}