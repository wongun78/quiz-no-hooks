import { useFormStatus } from "react-dom";

// Atom (Atomic Design)
// - Nhiệm vụ: chỉ render 1 nút submit + phản ánh trạng thái pending của form.
// - React 19: useFormStatus() đọc trạng thái submit của <form action={...}> gần nhất.
//   => Không cần tự quản lý loading bằng useState như React 18.
export default function SubmitButton() {
  const { pending } = useFormStatus();

  // pending=true khi form đang submit (Promise từ action chưa resolve)
  return <button disabled={pending}>{pending ? "Loading..." : "Login"}</button>;
}
