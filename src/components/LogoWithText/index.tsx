import { LogoWithTextContainer } from "@/styles/components/LogoWithText";
import Image from "next/image";

export default function LogoWithText() {
  return (
    <LogoWithTextContainer>
      <Image src='/images/logo.png' alt='Logomarca da Leadster' width={194} height={42} />
      <span>Transformando visitantes em clientes</span>
    </LogoWithTextContainer>
  )
}
