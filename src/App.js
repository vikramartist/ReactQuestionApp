import { useState } from "react";
import "./styles.css";

const reactQuestions = [
  {
    id: 1,
    question: "What is React?",
    answer: "React is a JavaScript library for building user interfaces."
  },
  {
    id: 2,
    question: "What are the key features of React?",
    answer:
      "Key features of React include a virtual DOM, component-based architecture, and one-way data flow."
  },
  {
    id: 3,
    question: "What is JSX in React?",
    answer:
      "JSX is a syntax extension for JavaScript used in React to describe the structure of UI components."
  },
  {
    id: 4,
    question: "What is a React component?",
    answer:
      "A React component is a reusable, self-contained building block for creating user interfaces."
  },
  {
    id: 5,
    question: "How do you pass data from parent to child components in React?",
    answer: "You can pass data from parent to child components by using props."
  },
  {
    id: 6,
    question: "What is state in React?",
    answer:
      "State is a way to manage data that can change over time within a React component."
  },
  {
    id: 7,
    question: "Explain the concept of a virtual DOM in React.",
    answer:
      "The virtual DOM is a lightweight copy of the actual DOM used by React to optimize rendering and improve performance."
  },
  {
    id: 8,
    question: "What are React hooks?",
    answer:
      "React hooks are functions that allow you to use state and other React features in functional components."
  },
  {
    id: 9,
    question: "What is React Router?",
    answer:
      "React Router is a library that provides routing capabilities for single-page applications in React."
  },
  {
    id: 10,
    question: "What is the purpose of the useEffect hook?",
    answer:
      "The useEffect hook is used for performing side effects in functional components, such as data fetching or DOM manipulation."
  }
];

export default function App() {
  return (
    <div className="App">
      <FlashCards />
    </div>
  );
}

function FlashCards() {
  const [selectedId, setSelectedId] = useState(null);

  const handleQuestion = (idx) => {
    setSelectedId(idx !== selectedId ? idx : null);
  };

  return (
    <div className="flashcards">
      {reactQuestions.map((question) => (
        <div
          key={question.id}
          onClick={() => handleQuestion(question.id)}
          className={question.id === selectedId ? "selected" : ""}
        >
          <p>
            {selectedId === question.id ? question.answer : question.question}
          </p>
        </div>
      ))}
    </div>
  );
}
