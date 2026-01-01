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

// Types tập trung tại 1 nơi
// - Mục tiêu: không khai báo type/interface props rải rác trong component.
// - Giúp nhất quán và dễ refactor.

// React 18: Sử dụng callback function
// export interface LoginProps {
//   onLogin: (email: string) => void;
// }

// React 19: Sử dụng form action với FormData
export interface LoginProps {
  // action nhận FormData từ <form>, trả về Promise để React biết pending.
  action: (formData: FormData) => Promise<void>;
}

export interface QuizListProps {
  user: User;
}

export interface QuizItemProps {
  quiz: Quiz;
}

export interface NavbarProps {
  user: User | null;
  logout: () => void;
}
