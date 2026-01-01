import type { NavbarProps } from "../types";

// Navbar UI đơn giản
// - Props type đặt ở types.ts để tránh khai báo interface ngay trong file.

const Navbar = ({ user, logout }: NavbarProps) => {
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
