import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Movies",
  description: "movies ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <table
          style={{
            margin: " 1rem auto",
            alignContent: "center",
            textAlign: "center",            
          }}
        >
          <tr>
            <td
              className="nav-content"
              style={{              
                fontSize: "1.5rem",
                padding: "2rem",
              }}
            >
              <Link href="/">Home</Link>
            </td>
            <td
              className="nav-content"
              style={{
                fontSize: "1.5rem",
                padding: "2rem",
              }}
            >
              <Link href="/about">About</Link>
            </td>
            <td
              className="nav-content"
              style={{
                fontSize: "1.5rem",
                padding: "2rem",
              }}
            >
              <Link href="/contact">Contact</Link>
            </td>
            <td
              className="nav-content"
              style={{
                fontSize: "1.5rem",
                padding: "2rem",
              }}
            >
              <Link href="/movies">Movies</Link>
            </td>
            <td
              className="nav-content"
              style={{
                fontSize: "1.5rem",
                padding: "2rem",
              }}
            >
              <Link href="/comments">Comments</Link>
            </td>
          </tr>
        </table>
        {children}
      </body>
    </html>
  );
}
