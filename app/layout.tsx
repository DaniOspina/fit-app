import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "FitConnect",
  description: "Conecta con entrenadores y agenda tus sesiones deportivas",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-gray-50 text-gray-900">
        <Navbar />
        <main className="container mx-auto mt-8">{children}</main>
      </body>
    </html>
  );
}
