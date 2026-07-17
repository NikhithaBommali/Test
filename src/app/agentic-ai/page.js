'use client';

import Link from 'next/link';

const sections = [
  {
    title: 'The Shift Nobody Saw Coming (Except Those Building It)',
    paragraphs: [
      'Three years ago, the conversation around AI in healthcare was almost entirely about chatbots — systems that could answer a question, summarize a paper, or draft a clinical note when prompted. Useful, but fundamentally passive. You asked, it answered, the interaction ended.',
      "That era is closing. What's replacing it is **agentic AI**: systems that don't just respond to a single prompt, but plan, take actions, call tools, verify their own work, and pursue a multi-step goal with minimal hand-holding. Having spent years building AI architecture for clinical decision support, I've watched this shift up close — and I think it's the most consequential change in health tech since the LLM boom itself.",
      'This post is my attempt to lay out what agentic AI actually means in a healthcare context, why it\'s harder than it looks, and where the real opportunity is hiding.',
    ],
  },
  {
    title: 'What "Agentic" Actually Means',
    paragraphs: [
      'The word gets thrown around loosely, so it\'s worth being precise. An agentic system typically has four properties that a simple chatbot lacks:',
    ],
    list: [
      '**Goal persistence** — it holds a multi-step objective in mind rather than resetting after each turn.',
      '**Tool use** — it can query databases, call APIs, run calculations, or retrieve documents as part of completing a task, not just generate text.',
      '**Self-correction** — it can evaluate its own intermediate outputs, catch errors, and retry before surfacing a final answer.',
      '**Orchestration** — for complex tasks, it can break a goal into sub-tasks and coordinate across specialized components (sometimes other agents) to get there.',
    ],
    paragraphsAfter: [
      'A chatbot answers "what\'s the recommended dosing for this drug in renal impairment?" An agentic system, given the same question, might pull the patient\'s actual creatinine clearance from the record, cross-reference current monograph data, check for interacting medications already on the patient\'s list, flag a conflict, and draft a note to the prescriber — all before a human ever sees the output.',
      "That's not a bigger chatbot. That's a different category of system.",
    ],
  },
  {
    title: 'Why Healthcare Is Both the Best and Worst Place to Deploy This',
    paragraphs: [
      'Healthcare is an unusually good fit for agentic AI because so much clinical work is genuinely multi-step: gather information from disparate sources, reconcile conflicting data, apply guidelines, and produce a recommendation with justification. That\'s exactly the shape of task agentic systems are built for.',
      'But healthcare is also the worst place to deploy immature agentic systems, for one simple reason: **the cost of a confidently wrong multi-step chain is much higher than the cost of a wrong single answer.** A chatbot that hallucinates a fact gets caught because a human reads the one sentence it produced. An agent that hallucinates a fact halfway through a five-step process can compound that error silently across every downstream step, and the final output can look perfectly polished while being built on a rotten foundation.',
      'This is the central engineering problem of agentic AI in clinical settings: **how do you get the productivity gains of autonomy without inheriting the risk of unsupervised error propagation?**',
    ],
  },
  {
    title: 'Three Design Principles That Actually Matter',
    paragraphs: [
      'After building and iterating on AI systems that process tens of millions of medical documents, a few principles have proven non-negotiable:',
    ],
    subSections: [
      {
        title: '1. Ground every step, not just the final answer',
        paragraphs: [
          "It's tempting to only fact-check the final output an agent produces. That's not enough. Every intermediate step — every retrieval, every calculation, every sub-conclusion — needs to be traceable back to a source. If an agent can't show its work at each hop, you don't actually have a reliable system; you have a black box that happens to sound confident.",
          'In practice, this means building retrieval and verification into the *architecture*, not bolting it on as a post-hoc check. Vector search against a curated, vetted corpus (rather than open web retrieval) dramatically reduces the surface area for error, especially when the corpus itself has been reviewed by domain experts rather than scraped indiscriminately.',
        ],
      },
      {
        title: '2. Keep humans in the loop at the right altitude',
        paragraphs: [
          'The naive framing of "human-in-the-loop" is a human reviewing every single output, which defeats the purpose of automation. The better framing is a human reviewing at the *right altitude* — spot-checking high-stakes decisions, auditing a sample of routine ones, and being pulled in automatically whenever the agent\'s own confidence score drops below a threshold or it encounters a case pattern it hasn\'t handled before.',
          'This requires the agent to have some notion of its own uncertainty, which is still an open and genuinely hard problem. Confidence calibration in LLM-based systems is nowhere near as mature as classical statistical models, and anyone selling you a system that claims perfect self-awareness of its own errors should be treated with suspicion.',
        ],
      },
      {
        title: '3. Narrow the scope before you widen the autonomy',
        paragraphs: [
          'The instinct when building agentic systems is to reach for generality — build one agent that can handle any clinical question. In my experience, the systems that actually work reliably in production go the opposite direction: narrow, well-defined task boundaries first, with autonomy expanded only after the narrow version has proven itself against real-world outcomes over time.',
          'An agent that reliably handles drug-interaction checks for a defined formulary is more valuable — and safer — than an ambitious agent that vaguely attempts to reason about "any clinical question a physician might ask." Scope discipline is unglamorous, but it\'s the difference between a system that ships and one that becomes a liability.',
        ],
      },
    ],
  },
  {
    title: 'The Infrastructure Question Nobody Talks About Enough',
    paragraphs: [
      'There\'s a quieter shift happening alongside the model capability story: the infrastructure underneath agentic systems has become a competitive differentiator in its own right. Vector databases, orchestration layers, and managed cloud AI services have matured to the point where the bottleneck for most teams is no longer "can we get a model to reason well" — it\'s "can we build the plumbing around the model reliably enough that the reasoning is trustworthy at scale."',
      'Teams that treat this infrastructure as an afterthought tend to end up with brittle systems that work in demos and fail in production. Teams that invest early in solid retrieval pipelines, evaluation harnesses, and monitoring tend to move slower initially but compound much faster once the system is live, because they can actually detect and fix failure modes instead of discovering them from an angry end user.',
    ],
  },
  {
    title: 'Where This Goes Next',
    paragraphs: [
      'My honest prediction: within the next two to three years, the phrase "AI chatbot" will start to sound as dated in healthcare as "portal" does today. The systems that win will be the ones that can take a genuinely multi-step clinical or operational task — reconciling a medication list, generating a cost-effectiveness report for a P&T committee, triaging an inbox of provider questions — and complete it end-to-end with verifiable grounding at every step, not just a plausible-sounding final paragraph.',
      'The hard part was never getting a model to sound smart. It was always getting a system to be *trustworthy* when nobody is watching every step. That\'s the real frontier, and it\'s the one worth building for.',
    ],
  },
];

function formatText(text) {
  const parts = [];
  const regex = /\*\*(.+?)\*\*|\*(.+?)\*|"([^"]+)"/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) parts.push(text.slice(lastIndex, match.index));
    if (match[1]) parts.push(<strong key={`${match.index}-strong`}>{match[1]}</strong>);
    else if (match[2]) parts.push(<em key={`${match.index}-em`}>{match[2]}</em>);
    else if (match[3]) parts.push(<span key={`${match.index}-quote`}>"{match[3]}"</span>);
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return parts;
}

function Paragraph({ children }) {
  return <p className="mb-4 leading-7 text-[15px] text-[#e7e7e7] md:text-[16px]">{children}</p>;
}

export default function AgenticAiPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <header className="border-b border-white/10 bg-black/95">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
          <Link href="/" className="text-sm font-semibold tracking-[0.28em] text-white/90 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/60">
            TULASEE RAO CHINTHA
          </Link>
          <nav className="flex items-center gap-4 text-xs uppercase tracking-[0.22em] text-white/70">
            <Link href="/" className="transition hover:text-white focus:outline-none focus:ring-2 focus:ring-white/60">
              Home
            </Link>
            <Link href="/agentic-ai" className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/60">
              Agentic AI
            </Link>
          </nav>
        </div>
      </header>

      <section className="border-b border-white/10 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_40%),linear-gradient(180deg,#111,#050505)]">
        <div className="mx-auto max-w-4xl px-4 py-10 md:px-6 md:py-14">
          <p className="mb-3 text-[11px] uppercase tracking-[0.35em] text-white/50">Blog</p>
          <h1 className="max-w-3xl text-3xl font-semibold leading-tight md:text-5xl">From Chatbots to Agents: Why Agentic AI Is Healthcare&apos;s Next Frontier</h1>
          <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-white/65">
            <span>July 17, 2026</span>
            <span className="h-1 w-1 rounded-full bg-white/35" />
            <span>Tulasee Rao Chintha</span>
            <span className="h-1 w-1 rounded-full bg-white/35" />
            <span>AI, Healthcare, LLMs, Agentic AI, Technology</span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-8 md:px-6 md:py-12">
        <article className="rounded-none border border-white/10 bg-[#0c0c0c] px-4 py-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] md:px-8 md:py-10">
          {sections.map((section) => (
            <section key={section.title} className="mb-10 border-b border-white/10 pb-10 last:mb-0 last:border-0 last:pb-0">
              <h2 className="mb-5 text-2xl font-semibold leading-tight text-white md:text-[30px]">{section.title}</h2>
              {section.paragraphs?.map((paragraph) => (
                <Paragraph key={paragraph}>{formatText(paragraph)}</Paragraph>
              ))}
              {section.list ? (
                <ol className="mb-4 space-y-3 pl-5 text-[15px] leading-7 text-[#e7e7e7] md:text-[16px]">
                  {section.list.map((item) => (
                    <li key={item} className="list-decimal">
                      {formatText(item)}
                    </li>
                  ))}
                </ol>
              ) : null}
              {section.paragraphsAfter?.map((paragraph) => (
                <Paragraph key={paragraph}>{formatText(paragraph)}</Paragraph>
              ))}
              {section.subSections?.map((subSection) => (
                <div key={subSection.title} className="mt-8 rounded-none border border-white/10 bg-black/40 p-4 md:p-6">
                  <h3 className="mb-4 text-xl font-semibold text-white md:text-[24px]">{subSection.title}</h3>
                  {subSection.paragraphs.map((paragraph) => (
                    <Paragraph key={paragraph}>{formatText(paragraph)}</Paragraph>
                  ))}
                </div>
              ))}
            </section>
          ))}

          <p className="border-t border-white/10 pt-6 text-[15px] italic leading-7 text-white/70 md:text-[16px]">
            *If you&apos;re working on agentic systems in healthcare or adjacent regulated industries, I&apos;d love to hear what&apos;s actually breaking in your production pipelines — the failure modes are usually more instructive than the success stories.*
          </p>
        </article>
      </section>
    </main>
  );
}
