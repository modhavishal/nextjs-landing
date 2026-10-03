import ButtonLink from "@/components/ui/ButtonLink";
import ThemeToggle from "@/components/ui/ThemeToggle";
import MobileMenu from "@/components/layout/MobileMenu";

function BrandMark() {
  return (
    <span
      aria-hidden="true"
      className="grid size-[29px] place-items-center rounded-[9px] bg-ink text-accent dark:bg-[#292b24] dark:text-[#c8fa58] max-[480px]:size-[25px] max-[480px]:rounded-[8px]"
    >
      <svg className="size-[17px] max-[480px]:size-[15px]" fill="none" viewBox="0 0 20 20">
        <path
          d="M4 14.5 9.9 4 16 14.5h-4.1l-2-3.4-1.9 3.4H4Z"
          fill="currentColor"
        />
      </svg>
    </span>
  );
}

export default function Navbar() {
  return (
    <header className="relative z-10 mx-auto mt-[14px] flex h-[70px] w-[min(1160px,calc(100%-48px))] items-center justify-between rounded-[18px] border border-[#e8e8e2] bg-white/80 px-4 shadow-[0_8px_24px_#25251b08] backdrop-blur-[16px] max-[760px]:mt-[10px] max-[760px]:h-[72px] max-[760px]:w-[min(calc(100%-36px),560px)] max-[760px]:px-[13px] max-[480px]:h-16 max-[480px]:w-[calc(100%-32px)] max-[480px]:rounded-2xl dark:border-[#33342e] dark:bg-[#1b1c18] dark:shadow-[0_10px_32px_#00000030]">
      <a
        aria-label="Forma home"
        className="inline-flex shrink-0 items-center gap-2.5 whitespace-nowrap text-[19px] font-bold tracking-[-0.065em] text-ink dark:text-[#f2f2ec] max-[480px]:gap-2 max-[480px]:text-base"
        href="#top"
      >
        <BrandMark />
        <span>forma</span>
      </a>
      <nav
        aria-label="Main navigation"
        className="absolute left-1/2 flex -translate-x-1/2 items-center gap-[3px] rounded-full border border-[#eeeee9] bg-[#f7f7f4] p-1 max-[760px]:hidden dark:border-[#30312b] dark:bg-[#1a1b17]"
      >
        <a className="inline-flex min-h-[34px] items-center justify-center rounded-full px-[14px] text-[13px] font-medium text-[#666660] transition hover:bg-white hover:text-ink hover:shadow-[0_1px_4px_#25251b0c] focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#93b84b] dark:text-[#c0c1b8] dark:hover:bg-[#282923] dark:hover:text-white dark:hover:shadow-none" href="#features">
          Product
        </a>
        <a className="inline-flex min-h-[34px] items-center justify-center rounded-full px-[14px] text-[13px] font-medium text-[#666660] transition hover:bg-white hover:text-ink hover:shadow-[0_1px_4px_#25251b0c] focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#93b84b] dark:text-[#c0c1b8] dark:hover:bg-[#282923] dark:hover:text-white dark:hover:shadow-none" href="#how-it-works">
          How it works
        </a>
        <a className="inline-flex min-h-[34px] items-center justify-center rounded-full px-[14px] text-[13px] font-medium text-[#666660] transition hover:bg-white hover:text-ink hover:shadow-[0_1px_4px_#25251b0c] focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#93b84b] dark:text-[#c0c1b8] dark:hover:bg-[#282923] dark:hover:text-white dark:hover:shadow-none" href="#pricing">
          Pricing
        </a>
      </nav>
      <div className="flex items-center gap-[22px] max-[760px]:gap-[13px] max-[480px]:gap-2">
        <ThemeToggle />
        <MobileMenu />
        <a className="text-[13px] font-semibold text-[#55564f] transition hover:text-ink max-[760px]:hidden dark:text-[#f2f2ec]" href="#pricing">
          Log in
        </a>
        <ButtonLink className="min-h-[39px] px-[17px] text-xs font-semibold max-[350px]:hidden max-[480px]:min-h-[34px] max-[480px]:px-3 max-[480px]:text-[11px]" href="#pricing">
          Get started
        </ButtonLink>
      </div>
    </header>
  );
}