import type { Quiz, User } from "./types";

export const quizzes: Quiz[] = [
  { id: "1", title: "React Basics", score: 10 },
  { id: "2", title: "JS Advanced", score: 20 },
  { id: "3", title: "TypeScript", score: 15 },
];

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
