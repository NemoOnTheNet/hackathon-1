import { useState } from "react";
import Question1 from "../../components/question/question1/question1";
import Question2 from "../../components/question/question2/question2";
import RobotQuestion from "../../components/question/question3/RobotQuestion";
import Question4 from "../../components/question/question4/question4";
import Question5 from "../../components/question/question5/question5";
import Question6 from "../../components/question/question6/question6";
import Question7 from "../../components/question/question7/question7";
import Question8 from "../../components/question/question8/question8";
import Question9 from "../../components/question/question9/question9";

import "./Questions.scss";
import WrongAnswerPopup from "../../components/WrongAnswerPopup/WrongAnswerPopup";
import Excuse from "../../components/excuse/Excuse";

function Questions() {
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(1);
  const [nextPos, setNextPos] = useState(1725);
  return (
    <div className="questions">
      <aside className="questions__right">
        {show && <WrongAnswerPopup show={show} setShow={setShow} />}
        {count >= 1 && (
          <Question1
            setCount={setCount}
            count={count}
            nextPos={nextPos}
            setNextPos={setNextPos}
            show={show}
            setShow={setShow}
          />
        )}
        {count >= 2 && (
          <Question9
            setCount={setCount}
            count={count}
            nextPos={nextPos}
            setNextPos={setNextPos}
            show={show}
            setShow={setShow}
          />
        )}
        {count >= 3 && (
          <Question2
            setCount={setCount}
            count={count}
            nextPos={nextPos}
            setNextPos={setNextPos}
            show={show}
            setShow={setShow}
          />
        )}
        {count >= 4 && (
          <RobotQuestion
            setCount={setCount}
            count={count}
            nextPos={nextPos}
            setNextPos={setNextPos}
            show={show}
            setShow={setShow}
          />
        )}
        {count >= 5 && (
          <Question4
            setCount={setCount}
            count={count}
            nextPos={nextPos}
            setNextPos={setNextPos}
            show={show}
            setShow={setShow}
          />
        )}
        {count >= 6 && (
          <Question5
            setCount={setCount}
            count={count}
            nextPos={nextPos}
            setNextPos={setNextPos}
            show={show}
            setShow={setShow}
          />
        )}
        {count >= 7 && (
          <Question6
            setCount={setCount}
            count={count}
            nextPos={nextPos}
            setNextPos={setNextPos}
            show={show}
            setShow={setShow}
          />
        )}
        {count >= 8 && (
          <Question7
            setCount={setCount}
            count={count}
            nextPos={nextPos}
            setNextPos={setNextPos}
            show={show}
            setShow={setShow}
          />
        )}
        {count >= 9 && (
          <Question8
            setCount={setCount}
            count={count}
            nextPos={nextPos}
            setNextPos={setNextPos}
            show={show}
            setShow={setShow}
          />
        )}
        {count >= 10 && <Excuse />}
      </aside>
    </div>
  );
}

export default Questions;
