export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
          
          {/* Navbar */}
          <nav style={{ padding: "1rem", background: "#111", color: "white" }}>
            <h2>Feedback App</h2>
          </nav>

          {/* Contenido */}
          <main style={{ flex: 1, padding: "2rem" }}>
            {children}
          </main>

          {/* Footer */}
          <footer style={{ padding: "1rem", background: "#eee" }}>
            <p>© 2026 Feedback App</p>
          </footer>

        </div>
      </body>
    </html>
  )
}