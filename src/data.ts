import type { Quiz, User } from "./types";

// Data layer (mock)
// - Ở dự án thật, phần này thường là gọi API (fetch/axios) => async.
// - Ở đây mock data để học React 19 Actions + use() + Suspense.

export const quizzes: Quiz[] = [
  { id: "1", title: "React Basics", score: 10 },
  { id: "2", title: "JS Advanced", score: 20 },
  { id: "3", title: "TypeScript", score: 15 },
];

// React 19: ví dụ data source bất đồng bộ để dùng với use()
// - Ta cache Promise ở module scope để không tạo Promise mới mỗi lần render.
// - Đây là pattern đơn giản để demo; app thật có thể dùng cache/fetch libs (TanStack Query).
const quizzesPromise: Promise<Quiz[]> = Promise.resolve(quizzes);

export const getQuizzes = (): Promise<Quiz[]> => quizzesPromise;

// Mock API đăng nhập
// - Trả về Promise<User> để mô phỏng network delay.
// - Nhờ đó UI có thể thể hiện pending state (SubmitButton dùng useFormStatus).
export const fakeLogin = async (email: string): Promise<User> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: "1",
        name: email.split("@")[0],
        role: "ADMIN",
      });
    }, 1000);
  });
};
