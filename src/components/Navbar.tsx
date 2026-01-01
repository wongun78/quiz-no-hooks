import type { User } from "../types";

interface Props {
  user: User | null;
  logout: () => void;
}

const Navbar = ({ user, logout }: Props) => {
  return (
    <header>
      <h3>Quiz App</h3>
      {user ? (
        <>
          <span>Welcome {user.name}</span>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <span>Guest</span>
      )}
    </header>
  );
};

export default Navbar;
