import navStyles from "../styles/Nav.module.css";

const Nav: React.FC = () => {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/nathan-kawaller-b035b01b6/"
            target="_blank"
            className={navStyles.middle}
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://github.com/nkawaller"
            target="_blank"
            className={navStyles.middle}
          >
            Github
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com"
            target="_blank"
            className={navStyles.middle}
          >
            Twitter
          </a>
        </li>
        <li>
          <a className={navStyles.middle} href="mailto: kawaller@gmail.com">
            Email
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
