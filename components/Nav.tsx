import navStyles from "../styles/Nav.module.scss";

const Nav: React.FC = () => {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/nathan-kawaller-b035b01b6/"
            target="_blank"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://github.com/nkawaller">Github</a>
        </li>
        <li>
          <a href="https://twitter.com">Twitter</a>
        </li>
        <li>
          <a href="mailto: kawaller@gmail.com">Email</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
