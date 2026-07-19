import type { HTMLAttributes, ReactNode } from "react";
import Container from "../common/Container";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function Section({
  children,
  className = "",
  id,
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-24 lg:py-32 ${className}`}
      {...props}
    >
      <Container>{children}</Container>
    </section>
  );
}