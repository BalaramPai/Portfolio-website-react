import type { HTMLAttributes, ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
}

export default function Card({
  children,
  className = "",
  ...props
}: CardProps) {
  return (
    <div
      className={`
        rounded-2xl
        border
        border-slate-800/60
        bg-slate-900/60
        backdrop-blur-xl
        shadow-lg
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-blue-500/40
        hover:shadow-blue-500/10
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}