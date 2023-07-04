import { ReactNode } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { DefaultPageContainer, DivTypes } from "@/styles/components/DefaultPage";

interface DefaultPageProps {
  children: ReactNode;
}

export default function DefaultPage({ children }: DefaultPageProps) {
  return (
    <DefaultPageContainer>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </DefaultPageContainer>
  )
}
