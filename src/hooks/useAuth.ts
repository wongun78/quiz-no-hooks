import { useCallback, useState } from "react";
import type { User } from "../types";
import { fakeLogin } from "../data";

// Custom Hook: tách logic (state + side effects) khỏi UI.
// - UI (App/Login) chỉ nhận dữ liệu/hành động.
// - Logic auth (login/logout/user state) gom về 1 chỗ.

export interface UseAuthResult {
  user: User | null;
  // React 19: action nhận FormData, thường được truyền thẳng vào <form action={...}>
  loginAction: (formData: FormData) => Promise<void>;
  logout: () => void;
}

export function useAuth(): UseAuthResult {
  const [user, setUser] = useState<User | null>(null);

  // useCallback: giữ reference ổn định cho props truyền xuống (thói quen tốt).
  const loginAction = useCallback(async (formData: FormData) => {
    // FormData có thể trả về null => ép về string an toàn
    const email = String(formData.get("email") ?? "");
    const nextUser = await fakeLogin(email);
    setUser(nextUser);
  }, []);

  const logout = useCallback(() => {
    setUser(null);
  }, []);

  return { user, loginAction, logout };
}
