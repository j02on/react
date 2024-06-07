import style from "./Footer.module.css";

function Footer() {
  return (
    <footer className={style.footerAll}>
      <hr />
      <div className={style.footerTmi}>
        <p>010-9382-0145</p>
        <p>pjylove08@dsm.hs.kr</p>
        <p>대덕소프트웨어마이스터고등학교</p>
      </div>
    </footer>
  );
}

export default Footer;
