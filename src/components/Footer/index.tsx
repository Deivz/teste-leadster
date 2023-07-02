import Image from "next/image";
import { links } from "@/utils/links";
import Link from "next/link";
import { BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin } from "react-icons/bi";
import { FooterContainer, FooterLastDiv, SocialIconsContainer } from "@/styles/components/Footer";
import { DivContainer } from "@/styles/components/DefaultPage";
import LogoWithText from "../LogoWithText";

export default function Footer() {
  return (
    <FooterContainer>
      <DivContainer>
        <LogoWithText />
        <nav>
          {
            links.map((link) => {
              return (
                <ul key={link.id}>
                  <h4>{link.title}</h4>
                  {
                    link.itens.map((item) => {
                      return (
                        item === 'Redes Sociais'
                          ?
                          <SocialIconsContainer key={item}>
                            <span><BiLogoLinkedin /></span>
                            <span><BiLogoFacebook /></span>
                            <span><BiLogoInstagram /></span>
                          </SocialIconsContainer>
                          :
                          <li key={item}>{item}</li>
                      );
                    })
                  }
                </ul>
              );
            })
          }
        </nav>
      </DivContainer>
      <FooterLastDiv>
        <div>
          <span>Copyright &copy; 2015-2022 Todos os direitos reservados | <Link href="/">Leadster</Link></span>
          <span>Rua José Loureiro, 464 - Centro - Curitiba PR - CEP: 80010-000 | Termos de uso</span>
        </div>
      </FooterLastDiv>
    </FooterContainer>
  )
}
