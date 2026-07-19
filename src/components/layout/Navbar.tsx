import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import useScrollPosition from "../../hooks/useScrollPosition";

export default function Navbar() {
  const scrolled = useScrollPosition();

  return (
    <motion.header
      animate={{
        y: 0,
        opacity: 1,
      }}
      initial={{
        y: -40,
        opacity: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      className="fixed inset-x-0 top-0 z-50 px-8 pt-6"
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl border px-7 py-5 transition-all duration-300 ${
          scrolled
            ? "border-white/10 bg-slate-950/70 shadow-2xl backdrop-blur-2xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <motion.div
          whileHover={{
            scale: 1.03,
          }}
          className="cursor-pointer"
        >
          <h1 className="text-3xl font-black tracking-tight text-white">
            Balaram Pai
          </h1>

          <p className="text-xs uppercase tracking-[0.35em] text-slate-500">
            Software Engineer
          </p>
        </motion.div>

        <div className="flex items-center gap-3">

          <NavItem to="/">
            Home
          </NavItem>

          <NavItem to="/projects">
            Projects
          </NavItem>

        </div>
      </nav>
    </motion.header>
  );
}

type NavItemProps = {
  to: string;
  children: React.ReactNode;
};

function NavItem({
  to,
  children,
}: NavItemProps) {
  return (
    <NavLink to={to}>
      {({ isActive }) => (
        <motion.div
          whileHover={{
            y: -2,
          }}
          className={`rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-300 ${
            isActive
              ? "bg-white/10 text-white"
              : "text-slate-400 hover:bg-white/5 hover:text-white"
          }`}
        >
          {children}
        </motion.div>
      )}
    </NavLink>
  );
}