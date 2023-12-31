import { Link, animateScroll as scroll } from "react-scroll";
import "./Question7.scss";
function Question7({ count, setCount, nextPos, setNextPos, show, setShow }) {
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
    setTimeout(() => {
      setNextPos(1725);
      setNextPos(1725);
      setCount(1);
      setShow(true);
    }, 2000);
  };
  return (
    <div className="question7">
      <section className="question7__section">
        <h1 className="question__title">Vous ratez souvent vos avions ?</h1>
        <img
          className="question__image"
          src="../../../assets/MamaJaiRateLavion.jpg"
          alt="famille à noël"
        />
        <div className="question7__buttons--container">
          <Link
            className="question__buttons"
            activeClass="active"
            /* to="question8" */
            spy={true}
            smooth={true}
            offset={0}
            duration={2000}
            onClick={handleclickGood}
          >
            Jamais.
          </Link>
          <Link
            className="question__buttons"
            activeClass="active"
            to="question1"
            spy={true}
            smooth={true}
            offset={0}
            duration={2000}
            onClick={handleclickWrong}
          >
            Tout le temps !!
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Question7;
