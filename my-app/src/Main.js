import style from "./Main.module.css";
import dogImg from "./images/dog.jpg";
import faceImg from "./images/facebook.png";
import instaImg from "./images/instagram.png";
import githubImg from "./images/github.png";
import htmlImg from "./images/html.png";
import cssImg from "./images/css.png";
import jsImg from "./images/jsImg.png";

function Main() {
  return (
    <>
      <div className={style.pageAll}>
        <div className={style.iconAll}>
          <a
            href="https://www.facebook.com/profile.php?id=61557320422273"
            target="_blank"
            className={style.iconLink}
          >
            <img src={faceImg} className={style.icon} />
          </a>
          <a
            href="https://www.instagram.com/h_yy.0n/?next=%2F"
            target="_blank"
            className={style.iconLink}
          >
            <img src={instaImg} className={style.icon} />
          </a>
          <a
            href="https://github.com/j02on"
            target="_blank"
            className={style.iconLink}
          >
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
            className={style.stackLink}
          >
            <img src={htmlImg} className={style.stackImg}></img>
          </a>
          <a
            href="https://developer.mozilla.org/ko/docs/Learn/CSS/First_steps/What_is_CSS"
            target="_blank"
            className={style.stackLink}
          >
            <img src={cssImg} className={style.stackImg}></img>
          </a>
          <a
            href="https://developer.mozilla.org/ko/docs/Learn/JavaScript/First_steps/What_is_JavaScript"
            target="_blank"
            className={style.stackLink}
          >
            <img src={jsImg} className={style.stackImg}></img>
          </a>
        </div>
      </div>
    </>
  );
}

export default Main;
