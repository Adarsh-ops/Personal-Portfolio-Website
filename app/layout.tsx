import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adarsh Nagar's Portfolio",
  description: "This is Adarsh Nagar's Personal Portfolio website. I’m Adarsh Nagar, a second-year BSc Computer Science student at St. Xavier's College, Kolkata, with a passion for building web applications. I work with HTML, CSS, JavaScript, Typescript, React, Next.js,  PostgreSQL, Prisma, Node.js, Express.js, MongoDb and Websockets creating projects like a Real Time Chat Application, Personal Portfolio Website, Amazon clone, Netflix Clone, Course selling application Backend, a Paytm Cash App Clone to explore both frontend and backend development.I’m driven by the thrill of turning ideas into functional apps and constantly learning new ways to improve my craft. Excited to connect with fellow developers, share insights, and collaborate on creative tech projects. Let’s build something awesome together!",
  keywords:["Adarsh Nagar","Portfolio","Adarsh Nagar Github","Adarsh Nagar St. Xavier's College Student","Adarsh Nagar Web Developer","Adarsh Nagar full stack developer"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
