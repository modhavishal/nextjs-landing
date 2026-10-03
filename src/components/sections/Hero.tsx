import ButtonLink from "@/components/ui/ButtonLink";

const columns = [
  {
    title: "To do",
    count: "3",
    cards: [
      { title: "Map out the launch story", tag: "Strategy", tone: "" },
      { title: "Collect customer quotes", tag: "Research", tone: "task-tag-peach" },
    ],
  },
  {
    title: "In progress",
    count: "2",
    cards: [
      { title: "Design the new homepage", tag: "Design", tone: "task-tag-lilac" },
      { title: "Review brand direction", tag: "Creative", tone: "" },
    ],
  },
  {
    title: "Done",
    count: "4",
    cards: [
      { title: "Kickoff & team sync", tag: "Team", tone: "task-tag-peach" },
      { title: "Project brief", tag: "Planning", tone: "" },
    ],
  },
];

const previewClasses = {
  stage:
    "relative mx-auto mt-[65px] h-[394px] w-[min(940px,calc(100%-48px))] animate-[fade-rise_850ms_120ms_cubic-bezier(0.2,0.7,0.25,1)_both] max-[760px]:mt-[42px] max-[760px]:h-[327px] max-[760px]:w-[calc(100%-28px)] max-[480px]:mt-[37px] max-[480px]:h-[246px] max-[480px]:w-[calc(100%-20px)]",
  dashboard:
    "absolute top-[21px] left-1/2 grid h-[362px] w-[min(780px,86%)] -translate-x-1/2 grid-cols-[156px_minmax(0,1fr)] overflow-hidden rounded-[15px] border border-[#e9e9e4] bg-white text-left shadow-[0_42px_90px_#25251b13,0_8px_22px_#25251b0a] animate-[dashboard-float_7s_ease-in-out_infinite] dark:border-[#34352f] dark:bg-[#1b1c18] dark:shadow-[0_42px_90px_#00000038] max-[760px]:top-[18px] max-[760px]:h-[300px] max-[760px]:w-[min(650px,100%)] max-[760px]:grid-cols-[115px_minmax(0,1fr)] max-[480px]:top-[14px] max-[480px]:h-[225px] max-[480px]:w-full max-[480px]:grid-cols-[78px_minmax(0,1fr)] max-[480px]:rounded-[11px]",
  sidebar:
    "border-r border-[#efefeb] bg-[#fdfdfb] p-[18px_12px] dark:border-[#33342e] dark:bg-[#171814] max-[760px]:p-[13px_8px] max-[480px]:p-[11px_6px]",
  brand:
    "mb-[23px] ml-1 flex items-center gap-[7px] text-[10px] font-bold max-[760px]:mb-4 max-[480px]:mt-0 max-[480px]:mb-3 max-[480px]:ml-px max-[480px]:gap-1 max-[480px]:text-[8px]",
  mark:
    "grid size-[19px] place-items-center rounded-[6px] bg-ink text-[10px] text-accent max-[480px]:size-[15px]",
  workspace:
    "mx-[5px] mb-2 text-[7px] font-semibold tracking-[0.1em] text-[#a0a099] uppercase dark:text-[#92938a] max-[480px]:text-[6px]",
  sidebarItem:
    "flex h-[27px] items-center gap-2 rounded-md px-[7px] text-[8px] text-[#7c7c76] dark:text-[#b1b2a9] max-[480px]:h-[23px] max-[480px]:gap-[5px] max-[480px]:px-1 max-[480px]:text-[6px]",
  activeSidebarItem:
    "bg-[#f0f2eb] font-semibold text-[#282923] dark:bg-[#2a2d23] dark:text-[#f0f0e9]",
  sidebarIcon:
    "size-[10px] shrink-0 rounded-[3px] border border-current opacity-70 max-[480px]:size-2",
  activeSidebarIcon:
    "border-[#7d9e39] bg-accent",
  sidebarBottom:
    "mt-[73px] ml-1 flex items-center gap-[7px] text-[8px] text-[#777771] max-[760px]:mt-[55px] max-[480px]:mt-[38px] max-[480px]:text-[6px]",
  avatar:
    "grid size-[21px] shrink-0 place-items-center rounded-full bg-[#ead1c3] text-[7px] font-bold text-[#59463f] max-[480px]:size-[17px]",
  main: "min-w-0 p-[19px_22px] max-[760px]:p-[15px_13px] max-[480px]:p-[12px_8px]",
  topbar:
    "flex items-center justify-between text-[8px] text-[#9a9a94] dark:text-[#b1b2a9] max-[480px]:text-[6px]",
  breadcrumbs: "flex min-w-0 items-center gap-[7px] truncate",
  currentCrumb: "text-[#484943] dark:text-[#f2f2ec]",
  tools: "flex shrink-0 items-center gap-[7px] max-[480px]:gap-[3px]",
  toolAvatar:
    "size-[17px] shrink-0 rounded-full border-2 border-white bg-[#a9c9b5] dark:border-[#1b1c18] max-[480px]:size-[13px]",
  share:
    "rounded-[5px] border-0 bg-[#242520] px-[9px] py-[5px] text-[7px] text-white max-[480px]:px-[5px] max-[480px]:py-1 max-[480px]:text-[6px]",
  heading:
    "mt-[25px] mb-[18px] flex items-end justify-between gap-1 max-[760px]:mt-[21px] max-[760px]:mb-[15px] max-[480px]:mt-[18px] max-[480px]:mb-[11px]",
  headingTitle:
    "m-0 text-[19px] font-semibold tracking-[-0.055em] dark:text-[#f2f2ec] max-[480px]:text-sm",
  headingDescription:
    "mt-[5px] mb-0 text-[8px] text-[#92928c] dark:text-[#b1b2a9] max-[480px]:text-[6px]",
  newTask:
    "shrink-0 rounded-[5px] border border-[#e8e8e2] bg-white px-[10px] py-[7px] text-[7px] text-[#4c4d47] dark:border-[#373832] dark:bg-[#22231f] dark:text-[#e8e9df] max-[480px]:px-[6px] max-[480px]:py-[5px] max-[480px]:text-[6px]",
  board:
    "grid h-[238px] grid-cols-3 gap-[11px] max-[760px]:h-[191px] max-[760px]:gap-[6px] max-[480px]:h-[151px] max-[480px]:gap-1",
  boardColumn:
    "min-w-0 rounded-[7px] border border-[#f0f0ec] bg-[#fbfbf9] p-[9px] dark:border-[#30312b] dark:bg-[#1a1b17] max-[760px]:p-[6px] max-[480px]:p-[5px_4px]",
  columnTitle:
    "mb-[9px] flex items-center justify-between text-[7px] font-semibold text-[#6d6e68] dark:text-[#f2f2ec] max-[480px]:text-[6px]",
  columnCount: "font-normal text-[#a2a29b] dark:text-[#92938a]",
  task:
    "mb-[7px] rounded-[5px] border border-[#ecece7] bg-white p-2 shadow-[0_2px_5px_#28281c06] dark:border-[#373832] dark:bg-[#22231f] max-[760px]:p-[6px] max-[480px]:mb-1 max-[480px]:p-[5px_4px]",
  taskTitle:
    "mb-[9px] text-[7px] leading-[1.4] font-medium text-[#41423c] dark:text-[#f2f2ec] max-[480px]:mb-[5px] max-[480px]:text-[6px]",
  taskMeta:
    "flex items-center justify-between text-[6px] text-[#989891] dark:text-[#b1b2a9] max-[480px]:text-[5px]",
  taskTag:
    "rounded-[3px] bg-[#f0f5e4] px-[5px] py-[3px] text-[#738b44] max-[480px]:px-[3px] max-[480px]:py-0.5",
  taskTagPeach: "bg-[#faf0e9] text-[#ae8063]",
  taskTagLilac: "bg-[#f0eef8] text-[#8072ac]",
  floatingNote:
    "absolute z-[2] flex items-center gap-[9px] rounded-[10px] border border-[#e9e9e3] bg-white px-[13px] py-[10px] text-left shadow-[0_12px_35px_#20201e14] animate-[note-float_6s_ease-in-out_infinite] dark:border-[#33342e] dark:bg-[#1b1c18] dark:shadow-[0_10px_32px_#00000030] max-[480px]:gap-1.5 max-[480px]:rounded-lg max-[480px]:px-2 max-[480px]:py-[7px]",
  floatingNoteLeft:
    "top-[107px] left-0 max-[760px]:top-[3px] max-[760px]:left-[-3px] max-[480px]:top-0 max-[480px]:left-0",
  floatingNoteRight:
    "right-0 bottom-[76px] [animation-delay:-2s] max-[760px]:right-[-2px] max-[760px]:bottom-[10px] max-[480px]:right-0 max-[480px]:bottom-0",
  noteIcon:
    "grid size-[27px] shrink-0 place-items-center rounded-lg bg-[#f0f5e4] text-xs text-[#708b39] max-[480px]:size-[22px]",
  noteIconPurple: "bg-[#f1eff8] text-[#8071ad]",
  noteCopy: "grid gap-[3px]",
  noteTitle:
    "text-[8px] font-semibold text-[#373832] dark:text-[#f2f2ec] max-[480px]:text-[7px]",
  noteDescription:
    "text-[7px] text-[#96968f] max-[480px]:text-[6px]",
};

function ProductPreview() {
  return (
    <div
      aria-label="A preview of the Forma project workspace"
      className={previewClasses.stage}
      role="img"
    >
      <div
        className={`${previewClasses.floatingNote} ${previewClasses.floatingNoteLeft}`}
      >
        <span aria-hidden="true" className={previewClasses.noteIcon}>
          ✓
        </span>
        <span className={previewClasses.noteCopy}>
          <strong className={previewClasses.noteTitle}>Nice work, team!</strong>
          <span className={previewClasses.noteDescription}>
            Milestone completed
          </span>
        </span>
      </div>
      <div className={previewClasses.dashboard}>
        <aside className={previewClasses.sidebar}>
          <div className={previewClasses.brand}>
            <span aria-hidden="true" className={previewClasses.mark}>
              ✳
            </span>
            studio north
          </div>
          <p className={previewClasses.workspace}>Workspace</p>
          <div className={`${previewClasses.sidebarItem} ${previewClasses.activeSidebarItem}`}>
            <span className={`${previewClasses.sidebarIcon} ${previewClasses.activeSidebarIcon}`} />
            My work
          </div>
          <div className={previewClasses.sidebarItem}>
            <span className={previewClasses.sidebarIcon} />
            Inbox
          </div>
          <p className={`${previewClasses.workspace} mt-[18px]`}>
            Your projects
          </p>
          <div className={`${previewClasses.sidebarItem} ${previewClasses.activeSidebarItem}`}>
            <span className={`${previewClasses.sidebarIcon} ${previewClasses.activeSidebarIcon}`} />
            Summer launch
          </div>
          <div className={previewClasses.sidebarItem}>
            <span className={previewClasses.sidebarIcon} />
            Brand refresh
          </div>
          <div className={previewClasses.sidebarItem}>
            <span className={previewClasses.sidebarIcon} />
            Website v2
          </div>
          <div className={previewClasses.sidebarBottom}>
            <span className={previewClasses.avatar}>AM</span>
            Alex Morgan
          </div>
        </aside>
        <div className={previewClasses.main}>
          <div className={previewClasses.topbar}>
            <div className={previewClasses.breadcrumbs}>
              Projects <span>/</span>{" "}
              <span className={previewClasses.currentCrumb}>Summer launch</span>
            </div>
            <div className={previewClasses.tools} aria-hidden="true">
              <span className={previewClasses.toolAvatar} />
              <span className={`${previewClasses.toolAvatar} bg-[#edc2aa]`} />
              <span className={`${previewClasses.toolAvatar} bg-[#b4add8]`} />
              <button className={previewClasses.share} type="button">
                Share
              </button>
            </div>
          </div>
          <div className={previewClasses.heading}>
            <div>
              <h2 className={previewClasses.headingTitle}>Summer launch</h2>
              <p className={previewClasses.headingDescription}>
                A little progress, every day.
              </p>
            </div>
            <button className={previewClasses.newTask} type="button">
              + New task
            </button>
          </div>
          <div className={previewClasses.board}>
            {columns.map((column) => (
              <div className={previewClasses.boardColumn} key={column.title}>
                <div className={previewClasses.columnTitle}>
                  <span>{column.title}</span>
                  <span className={previewClasses.columnCount}>{column.count}</span>
                </div>
                {column.cards.map((card) => (
                  <div className={previewClasses.task} key={card.title}>
                    <p className={previewClasses.taskTitle}>{card.title}</p>
                    <div className={previewClasses.taskMeta}>
                      <span
                        className={`${previewClasses.taskTag} ${
                          card.tone === "task-tag-peach"
                            ? previewClasses.taskTagPeach
                            : card.tone === "task-tag-lilac"
                              ? previewClasses.taskTagLilac
                              : ""
                        }`}
                      >
                        {card.tag}
                      </span>
                      <span>◷ &nbsp;2d</span>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className={`${previewClasses.floatingNote} ${previewClasses.floatingNoteRight}`}
      >
        <span
          aria-hidden="true"
          className={`${previewClasses.noteIcon} ${previewClasses.noteIconPurple}`}
        >
          ↗
        </span>
        <span className={previewClasses.noteCopy}>
          <strong className={previewClasses.noteTitle}>Moving right along</strong>
          <span className={previewClasses.noteDescription}>
            Project is 68% complete
          </span>
        </span>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative px-0 pt-[89px] pb-[82px] text-center max-[760px]:pt-[75px] max-[760px]:pb-[58px] max-[480px]:pt-[66px]"
      id="top"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -z-10 top-[-145px] left-1/2 h-[630px] w-[min(920px,100%)] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,#e7f2d8a6_0%,#f1f3e9a8_33%,#f8f8f500_72%)] dark:bg-[radial-gradient(ellipse,#29351c99_0%,#1b2117a8_34%,#11120f00_73%)]"
      />
      <div className="mx-auto w-[min(1160px,calc(100%-48px))] max-[760px]:w-[min(calc(100%-36px),560px)] max-[480px]:w-[calc(100%-32px)]">
        <div className="relative z-[1] mx-auto max-w-[790px] animate-[fade-rise_700ms_cubic-bezier(0.2,0.7,0.25,1)_both]">
          <div className="inline-flex min-h-[31px] items-center gap-2 rounded-full border border-[#e1e5d6] bg-white/60 px-[11px] text-[10px] font-medium text-[#4b4d44] dark:border-[#34362d] dark:bg-[#191a16] dark:text-[#d3d5c9]">
            <span aria-hidden="true" className="text-xs text-[#708f31]">
              ✳
            </span>
            A more thoughtful way to work
          </div>
          <h1
            className="mt-[23px] mb-4 text-[clamp(50px,7.5vw,96px)] leading-none font-medium tracking-[-0.075em] max-[760px]:text-[clamp(48px,11.5vw,72px)] max-[480px]:text-[clamp(45px,13vw,61px)]"
            id="hero-title"
          >
            Make room for
            <br />
            your{" "}
            <span className="relative isolate inline-block whitespace-nowrap after:absolute after:right-[-5px] after:bottom-[5px] after:left-[-3px] after:-z-10 after:h-[23%] after:rotate-[-1.5deg] after:rounded-[999px_80%_999px_70%] after:bg-accent after:content-['']">
              best work.
            </span>
          </h1>
          <p className="mx-auto max-w-[490px] text-base leading-[1.8] text-[#777771] max-[760px]:max-w-[390px] max-[760px]:text-sm max-[480px]:max-w-[330px] dark:text-[#b1b2a9]">
            The calm, connected workspace that helps good teams turn big ideas
            into work they&apos;re proud of.
          </p>
          <div className="mt-[26px] flex justify-center gap-[11px] max-[480px]:gap-2">
            <ButtonLink
              className="max-[480px]:min-h-[42px] max-[480px]:px-[15px] max-[480px]:text-[11px]"
              href="#pricing"
            >
              Start for free
            </ButtonLink>
            <ButtonLink
              className="max-[480px]:min-h-[42px] max-[480px]:px-[15px] max-[480px]:text-[11px]"
              href="#how-it-works"
              variant="secondary"
            >
              See how it works
            </ButtonLink>
          </div>
          <p className="mt-[14px] text-[10px] text-[#93938d] max-[480px]:text-[9px]">
            Free forever plan · No credit card needed
          </p>
        </div>
        <ProductPreview />
      </div>
    </section>
  );
}