import type { LoginProps } from "../types";
import LoginForm from "./molecules/LoginForm";

// UI Component
// - Vai trò: màn Login ở mức "page section" (giữ API props gọn).
// - Design: tách UI thành molecule/atom để dễ test + tái sử dụng.

// React 18: Sử dụng onSubmit handler với loading state thủ công
// const Login = ({ onLogin }: LoginProps) => {
//   const [loading, setLoading] = useState(false);
//
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     await onLogin("test@gmail.com");
//     setLoading(false);
//   };
//
//   return (
//     <form onSubmit={handleSubmit}>
//       <button disabled={loading}>{loading ? "Loading..." : "Login"}</button>
//     </form>
//   );
// };

// React 19: Sử dụng form action prop (tự động xử lý pending state)
const Login = ({ action }: LoginProps) => {
  // Chỉ delegate cho molecule; không nhét logic ở đây.
  return <LoginForm action={action} />;
};

export default Login;
