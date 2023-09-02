import { HeaderProps } from "../types";

const Header = (props: HeaderProps) => {
  return <h1>Hello, {props.name}</h1>;
};

export default Header;
