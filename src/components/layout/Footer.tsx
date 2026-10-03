function BrandMark() {
  return (
    <span
      aria-hidden="true"
      className="grid size-[25px] place-items-center rounded-lg bg-ink text-accent dark:bg-[#292b24] dark:text-[#c8fa58]"
    >
      <svg className="size-[15px]" fill="none" viewBox="0 0 20 20">
        <path
          d="M4 14.5 9.9 4 16 14.5h-4.1l-2-3.4-1.9 3.4H4Z"
          fill="currentColor"
        />
      </svg>
    </span>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-line py-[30px]">
      <div className="mx-auto flex w-[min(1160px,calc(100%-48px))] items-center justify-between gap-6 max-[760px]:w-[min(calc(100%-36px),560px)] max-[760px]:flex-wrap max-[760px]:gap-x-[14px] max-[760px]:gap-y-4 max-[480px]:w-[calc(100%-32px)]">
        <a
          aria-label="Forma home"
          className="inline-flex shrink-0 items-center gap-2.5 whitespace-nowrap text-base font-bold tracking-[-0.065em] text-ink dark:text-[#f2f2ec] max-[760px]:mr-auto"
          href="#top"
        >
          <BrandMark />
          <span>forma</span>
        </a>
        <span className="max-w-[280px] text-[11px] leading-relaxed text-[#96968f] dark:text-[#b1b2a9] max-[760px]:max-w-none max-[760px]:basis-full max-[480px]:text-xs">
          © 2026 Forma Studio. Made for good work.
        </span>
        <nav aria-label="Footer navigation" className="flex shrink-0 items-center gap-5 max-[760px]:order-2">
          <a className="text-[11px] text-[#76766f] hover:text-ink focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#93b84b] dark:text-[#b1b2a9]" href="#features">
            Product
          </a>
          <a className="text-[11px] text-[#76766f] hover:text-ink focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#93b84b] dark:text-[#b1b2a9]" href="#pricing">
            Pricing
          </a>
          <a className="text-[11px] text-[#76766f] hover:text-ink focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#93b84b] dark:text-[#b1b2a9]" href="mailto:hello@forma.example">
            Say hello
          </a>
        </nav>
      </div>
    </footer>
  );
}