import type { QuizItemProps } from "../types";

// Item đơn giản
// - React 18: thường dùng React.memo để giảm re-render.
// - React 19 + Compiler: compiler có thể tự tối ưu, nên code giữ dạng function component thuần.
//   (Lưu ý: lợi ích phụ thuộc compiler đã bật trong build.)

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
