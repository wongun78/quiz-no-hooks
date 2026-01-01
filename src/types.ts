export interface User {
  id: string;
  name: string;
  role: "ADMIN" | "USER";
}

export interface Quiz {
  id: string;
  title: string;
  score: number;
}

// React 18: Sử dụng callback function
// export interface LoginProps {
//   onLogin: (email: string) => void;
// }

// React 19: Sử dụng form action với FormData
export interface LoginProps {
  action: (formData: FormData) => Promise<void>;
}

export interface QuizListProps {
  user: User;
}

export interface QuizItemProps {
  quiz: Quiz;
}
