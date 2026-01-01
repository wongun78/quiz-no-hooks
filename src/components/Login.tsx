import { useFormStatus } from "react-dom";
import type { LoginProps } from "../types";

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
  return (
    <form action={action}>
      <input
        name="email"
        type="email"
        placeholder="Email"
        defaultValue="test@gmail.com"
      />
      <SubmitButton />
    </form>
  );
};

// React 19: Component con có thể sử dụng useFormStatus
function SubmitButton() {
  const { pending } = useFormStatus();
  return <button disabled={pending}>{pending ? "Loading..." : "Login"}</button>;
}

export default Login;
