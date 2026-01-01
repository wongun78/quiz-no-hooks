import { useState } from "react";
import type { User } from "./types";
import Login from "./components/Login";
import QuizList from "./components/QuizList";
import { fakeLogin } from "./data";

function App() {
  const [user, setUser] = useState<User | null>(null);

  // React 18: Sử dụng async function với callback
  // const login = async (email: string) => {
  //   const user = await fakeLogin(email);
  //   setUser(user);
  // };`

  // React 19: Sử dụng form action với FormData
  async function loginAction(formData: FormData) {
    const email = formData.get("email") as string;
    const user = await fakeLogin(email);
    setUser(user);
  }

  return (
    <>{user ? <QuizList user={user} /> : <Login action={loginAction} />}</>
  );
}

export default App;
