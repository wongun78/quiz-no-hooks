import type { LoginProps } from "../../types";
import SubmitButton from "../atoms/SubmitButton";

// Molecule (Atomic Design)
// - Gom các atom/input lại thành 1 khối form hoàn chỉnh.
// - React 19 Actions: dùng <form action={action}> để React quản lý submit/pending.
export default function LoginForm({ action }: Readonly<LoginProps>) {
  return (
    <form action={action}>
      {/* name="email" => Login action đọc formData.get("email") */}
      <input
        name="email"
        type="email"
        placeholder="Email"
        defaultValue="test@gmail.com"
      />
      <SubmitButton />
    </form>
  );
}
