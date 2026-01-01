import { use } from "react";
import { getQuizzes } from "../data";
import type { QuizListProps } from "../types";
import QuizItem from "./QuizItem";

// (Gần organism) danh sách quiz của user
// - Dùng React 19 `use()` để unwrap Promise từ data layer.
// - Bắt buộc có <Suspense> bọc bên ngoài (đã bọc ở App).

const QuizList = ({ user }: QuizListProps) => {
  console.log("QuizList render");

  // React 19: use() để unwrap Promise + kết hợp Suspense (được bọc ở App)
  const quizzes = use(getQuizzes());

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
