import React from "react";
import ReactDOM from "react-dom";

const Header = (props) => {
  return <h1>{props.course}</h1>;
};
const Part = (props) => {
  return (
    <p>
      {" "}
      {props.part} {props.exercises}
    </p>
  );
};

const Total = (props) => {
  return (
    <p>
      Number of exercises is{" "}
      {props.exercises1 + props.exercises2 + props.exercises3}
    </p>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;
  const Content = () => {
    return (
      <div>
        <Part part={part1} exercises={exercises1} />
        <Part part={part2} exercises={exercises2} />
        <Part part={part3} exercises={exercises3} />
      </div>
    );
  };

  return (
    <div>
      <Header course={course} />
      <Content />
      <Total
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />

      {/* <h1>{course}</h1> 
      <p>
        {part1} {exercises1}
      </p> 
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>*/}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
