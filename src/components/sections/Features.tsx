const features = [
  {
    icon: (
      <svg fill="none" viewBox="0 0 20 20">
        <rect height="12" rx="2.5" stroke="currentColor" strokeWidth="1.4" width="14" x="3" y="4" />
        <path d="M7 8h6M7 11h3" stroke="currentColor" strokeLinecap="round" strokeWidth="1.4" />
      </svg>
    ),
    title: "Everything in its right place",
    description:
      "Projects, plans, and all the little details live together. Find what you need and get back to the good stuff.",
    decoration: "progress",
  },
  {
    icon: (
      <svg fill="none" viewBox="0 0 20 20">
        <path d="m10 2 1.8 5.8L17.5 10l-5.7 2.2L10 18l-2.1-5.8L2 10l5.9-2.2L10 2Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.4" />
      </svg>
    ),
    title: "Less busywork, more momentum",
    description:
      "Let the small stuff take care of itself with gentle automations that keep everyone moving.",
    decoration: "orbit",
  },
  {
    icon: (
      <svg fill="none" viewBox="0 0 20 20">
        <path d="M4 15.5V10m6 5.5V5m6 10.5V8" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6" />
      </svg>
    ),
    title: "A clearer view of the big picture",
    description:
      "Spot the wins, see what needs a hand, and make thoughtful decisions with progress everyone can understand.",
    decoration: "bars",
  },
];

export default function Features() {
  return (
    <section aria-labelledby="features-title" className="py-[53px] pb-[91px] max-[760px]:py-[30px] max-[480px]:py-[58px]" id="features">
      <div className="mx-auto w-[min(1160px,calc(100%-48px))] max-[760px]:w-[min(calc(100%-36px),560px)] max-[480px]:w-[calc(100%-32px)]">
        <div className="mx-auto mb-[43px] max-w-[560px] text-center max-[480px]:mb-[31px]" id="how-it-works">
          <span className="inline-flex items-center gap-[9px] text-xs font-semibold tracking-[0.13em] text-[#55564f] uppercase dark:text-[#d3d4cb]">
            <span aria-hidden="true" className="size-[7px] rounded-full bg-[#91bf36] shadow-[0_0_0_4px_#91bf361c]" />
            Thoughtfully made for teams
          </span>
          <h2 className="mt-[15px] mb-[11px] text-[clamp(31px,4vw,47px)] leading-[1.08] font-medium tracking-[-0.075em] max-[480px]:text-[34px]" id="features-title">
            Good work feels better together.
          </h2>
          <p className="mx-auto max-w-[430px] text-sm leading-[1.75] text-muted dark:text-[#b1b2a9] max-[480px]:text-sm">
            Everything you need to do your best work, without all the noise
            getting in the way.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-[13px] max-[760px]:grid-cols-2 max-[480px]:grid-cols-1 max-[480px]:gap-[10px]">
          {features.map((feature) => (
            <article className="relative min-h-[238px] overflow-hidden rounded-xl border border-[#e9e9e3] bg-white p-[23px] transition-[transform,box-shadow,border-color] duration-[220ms] hover:-translate-y-[5px] hover:border-[#d8dfc8] hover:shadow-[0_15px_40px_#25251b0c] dark:border-[#34362d] dark:bg-[#191a16] max-[760px]:min-h-[222px] max-[760px]:p-[19px] max-[480px]:min-h-[190px]" key={feature.title}>
              <span aria-hidden="true" className="grid size-[37px] place-items-center rounded-[10px] border border-[#e9e9e3] bg-[#fcfcfa] text-[#505148] dark:border-[#3b3c35] dark:bg-[#22231e] dark:text-[#e8e9df] [&>svg]:size-[17px]">
                {feature.icon}
              </span>
              <h3 className="mt-[35px] mb-2 text-base font-semibold tracking-[-0.035em] max-[760px]:mt-7 max-[480px]:mt-[23px]">
                {feature.title}
              </h3>
              <p className="m-0 max-w-[285px] text-[13px] leading-[1.7] text-[#81817b] dark:text-[#b1b2a9]">
                {feature.description}
              </p>
              <div
                aria-hidden="true"
                className={
                  feature.decoration === "progress"
                    ? "absolute right-[18px] bottom-[17px] flex gap-1 opacity-80"
                    : feature.decoration === "orbit"
                      ? "before:absolute before:size-[7px] before:rounded-full before:border before:border-white before:bg-[#c4e67c] before:content-[''] after:absolute after:right-0.5 after:bottom-1 after:size-[7px] after:rounded-full after:border after:border-white after:bg-[#c6bde7] after:content-[''] absolute right-6 bottom-5 flex size-11 items-center justify-center gap-1 rounded-full border border-[#e9ecdf]"
                      : "absolute right-[18px] bottom-[17px] flex h-[38px] items-end gap-1 opacity-80"
                }
              >
                {feature.decoration === "progress" ? (
                  <>
                    <span className="h-[5px] w-[25px] rounded-full bg-accent" />
                    <span className="h-[5px] w-[17px] rounded-full bg-[#e7e9df]" />
                    <span className="h-[5px] w-[11px] rounded-full bg-[#e7e9df]" />
                  </>
                ) : feature.decoration === "orbit" ? (
                  <>
                    <span className="size-[5px] rounded-full bg-[#d9ddce]" />
                    <span className="size-[5px] rounded-full bg-[#d9ddce]" />
                    <span className="size-[5px] rounded-full bg-[#d9ddce]" />
                  </>
                ) : (
                  <>
                    <span className="h-4 w-[7px] rounded-t-[3px] bg-[#d8e9b6]" />
                    <span className="h-[26px] w-[7px] rounded-t-[3px] bg-[#c6df94]" />
                    <span className="h-[35px] w-[7px] rounded-t-[3px] bg-[#b7d77b]" />
                  </>
                )}
              </div>
            </article>
          ))}
        </div>
        <div className="mt-[55px] flex items-center justify-center gap-[43px] border-y border-line py-[22px] text-[10px] text-[#8a8a83] max-[760px]:mt-[38px] max-[760px]:flex-wrap max-[760px]:gap-x-[25px] max-[760px]:gap-y-3 max-[760px]:text-center max-[480px]:gap-x-[17px] max-[480px]:gap-y-[13px] max-[480px]:text-[10px] dark:text-[#d3d4cb]">
          <span className="tracking-[0.12em] text-[#839f49]" aria-label="Five out of five stars">
            ★★★★★
          </span>
          <span>Loved by thoughtful teams</span>
          <strong className="text-sm tracking-[-0.05em] text-[#585951] max-[480px]:text-xs dark:text-[#d3d4cb]">
            4.9/5
          </strong>
          <span>from 2,000+ happy humans</span>
        </div>
      </div>
    </section>
  );
}