import headerStyles from "../styles/Header.module.scss";

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>Nathan Kawaller</h1>

      <p className={headerStyles.description}>
        Paragraph explaining who I am and what I do
      </p>
    </div>
  );
};

export default Header;
