import { quizzes } from "../data";
import type { QuizListProps } from "../types";
import QuizItem from "./QuizItem";

const QuizList = ({ user }: QuizListProps) => {
  console.log("QuizList render");

  return (
    <>
      <h2>{user.name}'s quizzes</h2>
      {quizzes.map((q) => (
        <QuizItem key={q.id} quiz={q} />
      ))}
    </>
  );
};

export default QuizList;
