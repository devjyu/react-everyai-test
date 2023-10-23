import "../globals.css";

export default function DashboardLayout({
    children, // will be a page or nested layout
}) {
    return (
        <html lang="kr">
            <body>
                <div className="no-container">
                    <div className="login-container">
                        {children}
                    </div>
                </div>
            </body>
        </html>
    )
}