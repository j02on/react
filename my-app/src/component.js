import style from "./component.module.css";
import dogImg from "./images/dog.jpg";
import frontendImg from "./images/frontend.png";
import faceImg from "./images/facebook.png";
import instaImg from "./images/instagram.png";
import githubImg from "./images/github.png";
import htmlImg from "./images/html.png";
import cssImg from "./images/css.png";
import jsImg from "./images/jsImg.png";

function Component() {
  return (
    <>
      <header className={style.head}>Hello I'm jiyeon!😊</header>
      <div className={style.pageAll}>
        <div className={style.iconAll}>
          <a
            href="https://www.facebook.com/profile.php?id=61557320422273"
            target="_blank"
          >
            <img src={faceImg} className={style.icon} />
          </a>
          <a href="https://www.instagram.com/h_yy.0n/?next=%2F" target="_blank">
            <img src={instaImg} className={style.icon} />
          </a>
          <a href="https://github.com/j02on" target="_blank">
            <img src={githubImg} className={style.icon} />
          </a>
        </div>
        <img src={dogImg} className={style.dogImg} />
        <p className={style.tmi}>
          안녕하세요! 프론트엔드 개발자를 꿈꾸는 박지연입니다❤️
        </p>
        <div className={style.stackImgAll}>
          <a
            href="https://developer.mozilla.org/ko/docs/Learn/Getting_started_with_the_web/HTML_basics"
            target="_blank"
          >
            <img src={htmlImg} className={style.stackImg}></img>
          </a>
          <a
            href="https://developer.mozilla.org/ko/docs/Learn/CSS/First_steps/What_is_CSS"
            target="_blank"
          >
            <img src={cssImg} className={style.stackImg}></img>
          </a>
          <a
            href="https://developer.mozilla.org/ko/docs/Learn/JavaScript/First_steps/What_is_JavaScript"
            target="_blank"
          >
            <img src={jsImg} className={style.stackImg}></img>
          </a>
        </div>
      </div>
      <footer className={style.footerAll}>
        <hr />
        <div className={style.footerTmi}>
          <p>010-9382-0145</p>
          <p>pjylove08@dsm.hs.kr</p>
          <p>대덕소프트웨어마이스터고등학교</p>
        </div>
      </footer>
    </>
  );
}

export default Component;
