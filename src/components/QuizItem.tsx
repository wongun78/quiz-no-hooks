import type { QuizItemProps } from "../types";

// React 18: Cần React.memo để tránh re-render không cần thiết
// const QuizItem = React.memo(({ quiz }: QuizItemProps) => {
//   console.log("QuizItem render", quiz.id);
//   return <div>{quiz.title}</div>;
// });

// React 19 + Compiler: Tự động memoization, không cần React.memo
const QuizItem = ({ quiz }: QuizItemProps) => {
  console.log("QuizItem render", quiz.id);
  return <div>{quiz.title}</div>;
};

export default QuizItem;
