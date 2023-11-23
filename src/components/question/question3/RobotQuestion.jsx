import "./RobotQuestion.scss";
import { Link, animateScroll as scroll } from "react-scroll";

function RobotQuestion({ count, setCount, nextPos, setNextPos }) {
  const scrollTo = () => {
    scroll.scrollTo(nextPos);
  };
  const handleclickGood = () => {
    console.log("nextPos avant inc Q1", nextPos);
    setNextPos(nextPos + 750);
    console.log("nextPos apres inc Q1", nextPos);
    setCount(count + 1);
    setTimeout(() => {
      console.log("after timeout");
      scrollTo();
    }, 100);
  };
  const handleclickWrong = () => {
    setCount(1);
    setTimeout(() => {
      console.log("after timeout");
      scrollTo();
    }, 100);
  };
  return (
    <div className="robotQuestion">
      <div className="robotQuestion__container">
        <div className="robotQuestion__title">
          <p>Choisissez le plus joli sapin</p>
          <h3>Êtes-vous humain ?</h3>
        </div>
        <div className="robotQuestion__grid">
          <Link
            activeClass="active"
            to="question1"
            spy={true}
            smooth={true}
            offset={0}
            duration={100}
            onClick={handleclickWrong}
            className="robotQuestion__answer--wrong"
          >
            <img
              src="src/assets/sapins/sapin4.jpg"
              alt=""
              className="robotQuestion__grid--img"
            />
          </Link>
          <Link
            activeClass="active"
            to="question1"
            spy={true}
            smooth={true}
            offset={0}
            duration={100}
            onClick={handleclickWrong}
            className="robotQuestion__answer--wrong"
          >
            <img
              src="src/assets/sapins/sapin3.jpeg"
              alt=""
              className="robotQuestion__grid--img"
            />
          </Link>
          <Link
            to="question1"
            spy={true}
            smooth={true}
            offset={0}
            duration={100}
            onClick={handleclickWrong}
            className="robotQuestion__answer--wrong"
          >
            <img
              src="src/assets/sapins/sapin1.jpg"
              alt=""
              className="robotQuestion__grid--img"
            />
          </Link>
          <Link
            to="question1"
            spy={true}
            smooth={true}
            offset={0}
            duration={100}
            onClick={handleclickWrong}
            className="robotQuestion__answer--wrong"
          >
            <img
              src="src/assets/sapins/sapin7.jpg"
              alt=""
              className="robotQuestion__grid--img"
            />
          </Link>
          <Link
            to="question1"
            spy={true}
            smooth={true}
            offset={0}
            duration={100}
            onClick={handleclickWrong}
            className="robotQuestion__answer--wrong"
          >
            <img
              src="src/assets/sapins/sapin5.jpg"
              alt=""
              className="robotQuestion__grid--img"
            />
          </Link>
          <Link
            to="question1"
            spy={true}
            smooth={true}
            offset={0}
            duration={100}
            onClick={handleclickWrong}
            className="robotQuestion__answer--wrong"
          >
            <img
              src="src/assets/sapins/sapin2.jpg"
              alt=""
              className="robotQuestion__grid--img"
            />
          </Link>
          <Link
            activeClass="active"
            /* to="question4" */
            spy={true}
            smooth={true}
            offset={0}
            duration={100}
            onClick={handleclickGood}
            className="robotQuestion__answer--right"
          >
            <img
              src="src/assets/sapins/burningsapin.jpg"
              alt=""
              className="robotQuestion__grid--img"
            />
          </Link>
          <Link
            to="question1"
            spy={true}
            smooth={true}
            offset={0}
            duration={100}
            onClick={handleclickWrong}
            className="robotQuestion__answer--wrong"
          >
            <img
              src="src/assets/sapins/sapin6.jpg"
              alt=""
              className="robotQuestion__grid--img"
            />
          </Link>
          <Link
            to="question1"
            spy={true}
            smooth={true}
            offset={0}
            duration={100}
            onClick={handleclickWrong}
            className="robotQuestion__answer--wrong"
          >
            <img
              src="src/assets/sapins/sapin8.jpg"
              alt=""
              className="robotQuestion__grid--img"
            />
          </Link>
        </div>
        <div className="robotQuestion__footer">
          <img
            src="../../../assets/footerrobotquestion.png"
            alt=""
            className="robotQuestion__footer--img"
          />
        </div>
      </div>
    </div>
  );
}

export default RobotQuestion;
