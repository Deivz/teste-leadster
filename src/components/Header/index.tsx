import { HeaderContainer } from '@/styles/components/Header';
import Image from 'next/image';

export default function Header() {
  return (
    <HeaderContainer>
      <Image src='/images/logo.png' alt='Logomarca da Leadster' width={194} height={42} />
    </HeaderContainer>
  )
}
