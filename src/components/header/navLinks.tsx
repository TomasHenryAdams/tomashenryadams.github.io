import { Link } from "react-router-dom";
import styled from "styled-components";

const navLinks = [
  {
    label: "About",
    href: "/",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Articles",
    href: "/articles",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const NavItem = styled(Link)`
  width: 189px;
  height: 70px;
  overflow: hidden;
  border-radius: 20px;
  text-decoration: none;
  font-size: 2em;
  color: black;
  font-weight: bold;
  padding: 0 0.5em;
  margin: 0 1em;

  &:hover {
    background-color: rgba(122, 122, 122, 0.37);
  }
`;

const NavLinks = () => {
  return (
    <div>
      {navLinks.map(({ label, href }) => (
        <NavItem to={href} key={label}>{label}</NavItem>
      ))}
    </div>
  );
};
export default NavLinks;
