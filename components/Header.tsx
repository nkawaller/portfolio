import headerStyles from "../styles/Header.module.css";

const Header: React.FC = () => {
  return (
    <section className={headerStyles.bio}>
      <h1 className={headerStyles.title}>Nathan Kawaller</h1>
      <br />
      <p className={headerStyles.description}>
        First Paragraph explaining who I am and what I do
      </p>
      <p className={headerStyles.description}>
        Second Paragraph explaining who I am and what I do
      </p>
      <p className={headerStyles.description}>
        Third Paragraph explaining who I am and what I do
      </p>
    </section>
  );
};

export default Header;
