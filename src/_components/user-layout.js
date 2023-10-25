import "@/app/globals.css";
import Logo from "./logo";

export const metadata = {
  title: 'EVERY AI',
  description: 'Ai 공유 플랫폼',
}

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