import { Suspense } from "react";
import Login from "./components/Login";
import QuizList from "./components/QuizList";
import { useAuth } from "./hooks/useAuth";

// App: điều phối flow tổng
// - Chưa login => render Login
// - Login xong => render QuizList
// - Logic auth nằm trong useAuth (tách khỏi UI)

function App() {
  const { user, loginAction } = useAuth();

  // React 18: Sử dụng async function với callback
  // const login = async (email: string) => {
  //   const user = await fakeLogin(email);
  //   setUser(user);
  // };

  // React 19: thay callback bằng form action
  // - Login nhận action
  // - action nhận FormData trực tiếp

  return (
    <>
      {user ? (
        // React 19: QuizList dùng use(getQuizzes()) => cần được bọc bởi Suspense
        <Suspense fallback={null}>
          <QuizList user={user} />
        </Suspense>
      ) : (
        // Khi chưa có user: Login dùng <form action={loginAction}>
        <Login action={loginAction} />
      )}
    </>
  );
}

export default App;
