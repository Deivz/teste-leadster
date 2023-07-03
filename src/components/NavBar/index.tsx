import { NavBarContainer } from '@/styles/components/NavBar';
import { NavLink, NavLinks } from '@/utils/navLinks'

interface NavBarProps {
  links: NavLinks;
}

export default function NavBar({ links }: NavBarProps) {
  return (
    <NavBarContainer>
      <ul>
        {
          links.map((link: NavLink) => {
            return (
              <li key={link.id}>{link.title}</li>
            );
          })
        }
      </ul>
    </NavBarContainer>
  )
}
