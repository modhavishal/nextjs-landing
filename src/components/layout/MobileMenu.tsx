"use client";

import { useEffect, useRef } from "react";

export default function MobileMenu() {
  const menuRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    function closeOnOutsideClick(event: PointerEvent) {
      const menu = menuRef.current;

      if (menu?.open && event.target instanceof Node && !menu.contains(event.target)) {
        menu.open = false;
      }
    }

    function closeOnEscape(event: KeyboardEvent) {
      const menu = menuRef.current;

      if (event.key === "Escape" && menu?.open) {
        menu.open = false;
        menu.querySelector("summary")?.focus();
      }
    }

    document.addEventListener("pointerdown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  function closeMenu() {
    if (menuRef.current) {
      menuRef.current.open = false;
    }
  }

  return (
    <details className="group relative hidden max-[760px]:block" ref={menuRef}>
      <summary
        aria-label="Open navigation menu"
        className="grid size-[38px] cursor-pointer list-none place-items-center rounded-full border border-[#e7e7e1] bg-white/80 text-[#56574f] focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#93b84b] [&::-webkit-details-marker]:hidden dark:border-[#3b3c35] dark:bg-[#22231e] dark:text-[#e8e9df] max-[480px]:size-8"
      >
        <svg aria-hidden="true" className="size-[18px] max-[480px]:size-4" fill="none" viewBox="0 0 20 20">
          <path
            d="M3 5.5h14M3 10h14M3 14.5h14"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1.6"
          />
        </svg>
      </summary>
      <nav
        aria-label="Mobile navigation"
        className="absolute right-0 top-[calc(100%+12px)] z-20 hidden w-[min(260px,calc(100vw-44px))] gap-1 rounded-[15px] border border-[#e8e8e2] bg-white p-[9px] shadow-[0_18px_48px_#25251b1a] group-open:grid dark:border-[#33342e] dark:bg-[#1b1c18] dark:shadow-[0_18px_48px_#00000055]"
      >
        <a
          className="flex min-h-[42px] items-center rounded-[9px] px-[13px] text-sm font-medium text-[#55564f] hover:bg-[#f4f5ef] hover:text-ink focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#93b84b] dark:text-[#d3d4cb] dark:hover:bg-[#282923] dark:hover:text-white"
          href="#features"
          onClick={closeMenu}
        >
          Product
        </a>
        <a
          className="flex min-h-[42px] items-center rounded-[9px] px-[13px] text-sm font-medium text-[#55564f] hover:bg-[#f4f5ef] hover:text-ink focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#93b84b] dark:text-[#d3d4cb] dark:hover:bg-[#282923] dark:hover:text-white"
          href="#how-it-works"
          onClick={closeMenu}
        >
          How it works
        </a>
        <a
          className="flex min-h-[42px] items-center rounded-[9px] px-[13px] text-sm font-medium text-[#55564f] hover:bg-[#f4f5ef] hover:text-ink focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#93b84b] dark:text-[#d3d4cb] dark:hover:bg-[#282923] dark:hover:text-white"
          href="#pricing"
          onClick={closeMenu}
        >
          Pricing
        </a>
        <a
          className="flex min-h-[42px] items-center rounded-[9px] px-[13px] text-sm font-medium text-[#55564f] hover:bg-[#f4f5ef] hover:text-ink focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#93b84b] dark:text-[#d3d4cb] dark:hover:bg-[#282923] dark:hover:text-white"
          href="#pricing"
          onClick={closeMenu}
        >
          Log in
        </a>
        <a
          className="mt-1 hidden min-h-[43px] items-center justify-between rounded-[10px] bg-accent px-[13px] text-[13px] font-semibold text-[#20201e] focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#93b84b] max-[350px]:flex"
          href="#pricing"
          onClick={closeMenu}
        >
          Get started
          <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </details>
  );
}
