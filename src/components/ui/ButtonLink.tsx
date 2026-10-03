import type { ComponentProps } from "react";

type ButtonLinkProps = ComponentProps<"a"> & {
  variant?: "primary" | "secondary" | "dark";
};

const variants = {
  primary:
    "min-h-[46px] bg-accent px-[21px] text-[#20201e] shadow-[0_5px_18px_#b8d87526] hover:bg-[#c7f45a] hover:shadow-[0_8px_24px_#b8d87540]",
  secondary:
    "min-h-[46px] border-[#e8e8e2] bg-white/65 px-5 hover:border-[#cfcfc7] hover:bg-white dark:border-[#3b3c35] dark:bg-[#22231e] dark:text-[#e8e9df] dark:hover:border-[#5b614d] dark:hover:bg-[#2b2d26]",
  dark: "min-h-12 bg-ink px-[22px] text-white hover:bg-[#383833] dark:bg-accent dark:text-[#20201e] dark:hover:bg-[#c7f45a]",
};

export default function ButtonLink({
  children,
  className = "",
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={`group inline-flex items-center justify-center gap-2.5 rounded-full border border-transparent text-[13px] font-semibold transition-[transform,background-color,border-color,box-shadow] duration-200 hover:-translate-y-0.5 focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#93b84b] ${variants[variant]} ${className}`.trim()}
      {...props}
    >
      {children}
      <svg
        aria-hidden="true"
        className="h-[15px] w-[15px] transition-transform duration-200 group-hover:translate-x-0.5"
        fill="none"
        viewBox="0 0 16 16"
      >
        <path
          d="M3.25 8h9.5m-4-4 4 4-4 4"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
      </svg>
    </a>
  );
}