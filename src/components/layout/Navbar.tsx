import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-gray-900 text-white shadow-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold">Balaram Pai</h1>

        <div className="flex items-center gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "font-semibold text-blue-400" : "hover:text-blue-400"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? "font-semibold text-blue-400" : "hover:text-blue-400"
            }
          >
            Projects
          </NavLink>
        </div>
      </nav>
    </header>
  );
}