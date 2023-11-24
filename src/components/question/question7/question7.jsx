import { Link, animateScroll as scroll } from "react-scroll";
import "./Question7.scss";
function Question7({ count, setCount, nextPos, setNextPos }) {
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
    setNextPos(750);
    setCount(1);
    setTimeout(() => {
      console.log("after timeout");
      scrollTo();
    }, 100);
  };
  return (
    <div className="question7">
      <section className="question7__section">
        <h1 className="question7__title">As-tu déjà raté l'avion ?</h1>
        <img
          className="question7__image"
          src="../../../assets/MamaJaiRateLavion.jpg"
          alt="famille à noël"
        />
        <div className="question7__buttons--container">

          <button className="question7__buttons">
            <Link
              activeClass="active"
              /* to="question8" */
              spy={true}
              smooth={true}
              offset={0}
              duration={5000}
              onClick={handleclickGood}
            >
              Oui
            </Link>
          </button>
          <button className="question7__buttons">
            <Link
              activeClass="active"
              to="question1"
              spy={true}
              smooth={true}
              offset={0}
              duration={5000}
              onClick={handleclickWrong}
            >
              Non
            </Link>
          </button>
        </div>
      </section>
      <section className="question7__section">
      </section>
    </div>
  );
}

export default Question7;
