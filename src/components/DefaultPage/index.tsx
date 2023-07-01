import { ReactNode } from "react";
import Header from "../Header";
import Footer from "../Footer";

interface DefaultPageProps {
  children: ReactNode;
}

export default function DefaultPage({children}: DefaultPageProps) {
  return (
    <div>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}
