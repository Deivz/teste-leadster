import Image from "next/image";
import { FooterLinks, Links, links } from '@/utils/links'
import { useEffect, useState } from "react";

export default function Footer() {

  const [footerLinks, setFooterLinks] = useState<FooterLinks>([] as FooterLinks);

  return (
    <footer>
      <Image src='/images/logo.png' alt='Logomarca da Leadster' width={194} height={42} />
      <section>
        {
          links.map((link: Links) => <div>{link.title}</div>)
        }
        {
          links.map((link: Links) => link.itens.map((item: string) => <div>{item}</div>))
        }
      </section>
    </footer>
  )
}
