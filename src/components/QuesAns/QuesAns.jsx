import React from "react";
import "./QuesAns.css";

const QuesAns = () => {
  return (
    <div className="question-container">
      <div>
        <h1>Question and Answer</h1>
        <div>
          <h2>Question-1:Whats difference with props vs state ? </h2>
          <p>
            Ans: State is the local state of the component which cannot be
            accessed and modified outside of the component.On the other hand
            props make reusable by giving components the ability to receive data
            from their parent component.
          </p>
          <h2>Question-2:How does useState work?</h2>
          <p>
            Ans: UseState is react Hook that allows you to add state to a
            functional component.It return two array of values: current state
            and function update.The Hook takes initial state value and returns
            updated state value.
          </p>

          <h2>Question-3:What works other than use effect data load?</h2>
          <p>
            Ans: useEffect will check the list of dependency values against the
            values from the last render and will call your effect function if
            any one of them has changed. Other work in useEffect Running on
            state change: trigger animation on new array value and Running on
            props change: update paragraph list on fetched API data update
          </p>

          <h2>Question-4:How does react work?</h2>
          <p>
            Ans: React creates a virtual Dom in memory, where all it does
            necessary manipulating and changes in the browser Dom.React
            components work similarly to JavaScript functions as they accept
            arbitrary inputs called properties or props. It's possible to have
            as many components as necessary without cluttering your code
          </p>
        </div>
      </div>
      ;
    </div>
  );
};

export default QuesAns;
