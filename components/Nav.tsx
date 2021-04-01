import navStyles from "../styles/Nav.module.css";

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
          <a href="https://github.com/nkawaller" target="_blank">
            Github
          </a>
        </li>
        <li>
          <a href="https://twitter.com" target="_blank">
            Twitter
          </a>
        </li>
        <li>
          <a href="mailto: kawaller@gmail.com">Email</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
