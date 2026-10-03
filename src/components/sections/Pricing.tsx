import ButtonLink from "@/components/ui/ButtonLink";

const benefits = [
  "Unlimited projects and tasks",
  "All your favorite views",
  "Thoughtful automations",
  "Your first 10 teammates, free",
];

export default function Pricing() {
  return (
    <section aria-labelledby="pricing-title" className="pt-[84px] pb-[104px] max-[760px]:pt-[55px] max-[760px]:pb-[72px] max-[480px]:px-0 max-[480px]:py-9 max-[480px]:pb-[58px]" id="pricing">
      <div className="mx-auto w-[min(1160px,calc(100%-48px))] max-[760px]:w-[min(calc(100%-36px),560px)] max-[480px]:w-[calc(100%-32px)]">
        <div className="grid grid-cols-[1fr_0.78fr] items-center gap-[58px] rounded-2xl border border-[#e7e8df] bg-[radial-gradient(ellipse_at_0_100%,#e6f2d3a8_0%,#ffffff00_47%),#fff] p-[50px_58px] shadow-[0_16px_50px_#25251b08] max-[760px]:grid-cols-1 max-[760px]:gap-7 max-[760px]:p-8 max-[480px]:gap-[23px] max-[480px]:rounded-[13px] max-[480px]:p-[25px_20px] max-[480px]:px-5 dark:border-[#34362d] dark:bg-[radial-gradient(ellipse_at_0_100%,#26341a99_0%,#191a1600_52%),#191a16]">
          <div>
            <span className="inline-flex items-center gap-[9px] text-xs font-semibold tracking-[0.13em] text-[#55564f] uppercase dark:text-[#d3d4cb]">
              <span aria-hidden="true" className="size-[7px] rounded-full bg-[#91bf36] shadow-[0_0_0_4px_#91bf361c]" />
              Start small. Go wherever.
            </span>
            <h2 className="mt-4 mb-3 max-w-[450px] text-[clamp(31px,4vw,44px)] leading-[1.07] font-medium tracking-[-0.075em] max-[480px]:text-4xl" id="pricing-title">
              A little more ease, starting today.
            </h2>
            <p className="m-0 max-w-[380px] text-sm leading-[1.75] text-muted dark:text-[#b1b2a9]">
              Find your flow on the free plan, and only grow when you&apos;re
              ready. No pressure, no surprises.
            </p>
            <div className="mt-[22px] flex items-center gap-[9px] text-[10px] text-[#797a72] dark:text-[#b1b2a9]">
              <div aria-hidden="true" className="flex">
                <span className="relative ml-[-5px] grid size-[22px] place-items-center rounded-full border-2 border-white bg-[#e1c6b4] text-[6px] font-bold text-[#514038] first:ml-0 first:bg-[#c7d8c8] last:bg-[#c9c0de] dark:border-[#191a16]">
                  J
                </span>
                <span className="relative ml-[-5px] grid size-[22px] place-items-center rounded-full border-2 border-white bg-[#e1c6b4] text-[6px] font-bold text-[#514038] first:ml-0 first:bg-[#c7d8c8] last:bg-[#c9c0de] dark:border-[#191a16]">
                  M
                </span>
                <span className="relative ml-[-5px] grid size-[22px] place-items-center rounded-full border-2 border-white bg-[#e1c6b4] text-[6px] font-bold text-[#514038] first:ml-0 first:bg-[#c7d8c8] last:bg-[#c9c0de] dark:border-[#191a16]">
                  A
                </span>
              </div>
              <span>Join 12,000+ teams finding their flow</span>
            </div>
          </div>
          <div className="rounded-[11px] border border-[#ebebe6] bg-white p-[23px] shadow-[0_9px_29px_#25251b08] dark:border-[#33342e] dark:bg-[#1b1c18] dark:shadow-[0_10px_32px_#00000030] max-[480px]:p-[19px]">
            <div className="flex items-center justify-between text-[13px] font-semibold text-[#5e5f57] dark:text-[#d3d4cb]">
              <span>Free to get started</span>
              <span className="rounded-full bg-[#f1f5e9] px-2 py-[5px] text-[8px] font-medium text-[#6c853e] dark:bg-[#2b3521] dark:text-[#d2f49a]">
                Free forever
              </span>
            </div>
            <p className="mt-[19px] mb-[5px] text-[38px] font-semibold tracking-[-0.08em] dark:text-[#f2f2ec]">
              $0 <span className="text-[11px] font-normal tracking-normal text-[#85857e] dark:text-[#b1b2a9]">/ person / month</span>
            </p>
            <p className="m-0 text-[9px] text-[#92928b] dark:text-[#b1b2a9]">
              Everything you need to find your flow.
            </p>
            <div className="my-[18px] h-px bg-[#efefeb] dark:bg-[#363730]" />
            <ul className="mb-[19px] grid list-none gap-[11px] p-0 text-[11px] text-[#686962] dark:text-[#d3d4cb]">
              {benefits.map((benefit) => (
                <li className="flex items-center gap-2" key={benefit}>
                  <span aria-hidden="true" className="text-xs font-bold text-[#77963e]">
                    ✓
                  </span>
                  {benefit}
                </li>
              ))}
            </ul>
            <ButtonLink
              className="min-h-10 w-full text-[10px]"
              href="mailto:hello@forma.example"
              variant="dark"
            >
              Get started for free
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}