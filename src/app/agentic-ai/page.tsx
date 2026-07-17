import Link from 'next/link';
import React from 'react';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Agentic AI', href: '/agentic-ai' },
];

const keyPoints = [
  'Goal persistence',
  'Tool use',
  'Self-correction',
  'Orchestration',
];

const principles = [
  {
    title: '1. Ground every step, not just the final answer',
    body:
      'It\'s tempting to only fact-check the final output an agent produces. That\'s not enough. Every intermediate step — every retrieval, every calculation, every sub-conclusion — needs to be traceable back to a source. If an agent can\'t show its work at each hop, you don\'t actually have a reliable system; you have a black box that happens to sound confident.',
  },
  {
    title: '2. Keep humans in the loop at the right altitude',
    body:
      'The naive framing of "human-in-the-loop" is a human reviewing every single output, which defeats the purpose of automation. The better framing is a human reviewing at the right altitude — spot-checking high-stakes decisions, auditing a sample of routine ones, and being pulled in automatically whenever the agent\'s own confidence score drops below a threshold or it encounters a case pattern it hasn\'t handled before.',
  },
  {
    title: '3. Narrow the scope before you widen the autonomy',
    body:
      'The instinct when building agentic systems is to reach for generality — build one agent that can handle any clinical question. In my experience, the systems that actually work reliably in production go the opposite direction: narrow, well-defined task boundaries first, with autonomy expanded only after the narrow version has proven itself against real-world outcomes over time.',
  },
];

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8a7c74]">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#1f1714] sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-[#5f554f] sm:text-lg">{description}</p> : null}
    </div>
  );
}

export default function AgenticAIPage() {
  return (
    <main className="min-h-screen bg-[#f4efe9] text-[#1f1714]">
      <header className="sticky top-0 z-20 border-b border-black/5 bg-[#f4efe9]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-sm font-semibold uppercase tracking-[0.3em] text-[#1f1714]">
            Tulasee Rao Chintha
          </Link>
          <nav aria-label="Primary" className="flex items-center gap-6 text-sm font-medium text-[#5f554f]">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors hover:text-[#1f1714] ${item.href === '/agentic-ai' ? 'text-[#1f1714]' : ''}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-black/5 bg-[radial-gradient(circle_at_top,_rgba(197,156,120,0.18),_transparent_40%),linear-gradient(180deg,#f7f1eb_0%,#f4efe9_100%)]">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#8a7c74]">AI, Healthcare, LLMs, Agentic AI, Technology</p>
              <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-[#1f1714] sm:text-5xl lg:text-6xl">
                From Chatbots to Agents: Why Agentic AI Is Healthcare&apos;s Next Frontier
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-[#5f554f]">
                Three years ago, the conversation around AI in healthcare was almost entirely about chatbots — systems that could answer a question, summarize a paper, or draft a clinical note when prompted. Useful, but fundamentally passive. You asked, it answered, the interaction ended.
              </p>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-[#5f554f]">
                That era is closing. What&apos;s replacing it is <strong className="font-semibold text-[#1f1714]">agentic AI</strong>: systems that don&apos;t just respond to a single prompt, but plan, take actions, call tools, verify their own work, and pursue a multi-step goal with minimal hand-holding.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="#what-agentic-actually-means" className="rounded-full bg-[#1f1714] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#3a2b25] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c59c78] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f4efe9]">
                  Read the blog
                </Link>
                <Link href="#where-this-goes-next" className="rounded-full border border-[#d9cfc6] bg-white px-5 py-3 text-sm font-semibold text-[#1f1714] transition hover:border-[#c59c78] hover:text-[#7d5b40] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c59c78] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f4efe9]">
                  Jump to the conclusion
                </Link>
              </div>
            </div>

            <aside className="rounded-[2rem] border border-black/5 bg-white p-6 shadow-[0_20px_60px_rgba(31,23,20,0.08)]">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8a7c74]">What makes an agentic system</p>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-[#4f4742]">
                {keyPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 rounded-2xl bg-[#faf6f2] px-4 py-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#c59c78]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section id="what-agentic-actually-means" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow="The Shift Nobody Saw Coming (Except Those Building It)"
          title="What \"Agentic\" Actually Means"
          description="The word gets thrown around loosely, so it&apos;s worth being precise. An agentic system typically has four properties that a simple chatbot lacks."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {keyPoints.map((point, index) => (
            <article key={point} className="rounded-3xl border border-black/5 bg-white p-6 shadow-[0_12px_40px_rgba(31,23,20,0.06)]">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#c59c78]">0{index + 1}</p>
              <h3 className="mt-4 text-xl font-semibold text-[#1f1714]">{point}</h3>
              <p className="mt-3 text-sm leading-7 text-[#5f554f]">
                {index === 0 && 'It holds a multi-step objective in mind rather than resetting after each turn.'}
                {index === 1 && 'It can query databases, call APIs, run calculations, or retrieve documents as part of completing a task.'}
                {index === 2 && 'It can evaluate its own intermediate outputs, catch errors, and retry before surfacing a final answer.'}
                {index === 3 && 'For complex tasks, it can break a goal into sub-tasks and coordinate across specialized components.'}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-black/5 bg-[#fffaf5]">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-20">
          <article className="rounded-[2rem] bg-[#1f1714] p-8 text-white shadow-[0_20px_60px_rgba(31,23,20,0.2)]">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#d9cfc6]">Why Healthcare Is Both the Best and Worst Place to Deploy This</p>
            <p className="mt-5 text-lg leading-8 text-[#f4efe9]">
              Healthcare is an unusually good fit for agentic AI because so much clinical work is genuinely multi-step: gather information from disparate sources, reconcile conflicting data, apply guidelines, and produce a recommendation with justification. That&apos;s exactly the shape of task agentic systems are built for.
            </p>
            <p className="mt-4 text-lg leading-8 text-[#f4efe9]">
              But healthcare is also the worst place to deploy immature agentic systems, for one simple reason: the cost of a confidently wrong multi-step chain is much higher than the cost of a wrong single answer.
            </p>
          </article>

          <article className="rounded-[2rem] border border-black/5 bg-white p-8 shadow-[0_20px_60px_rgba(31,23,20,0.08)]">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8a7c74]">A simple example</p>
            <p className="mt-5 text-lg leading-8 text-[#5f554f]">
              A chatbot answers &quot;what&apos;s the recommended dosing for this drug in renal impairment?&quot; An agentic system, given the same question, might pull the patient&apos;s actual creatinine clearance from the record, cross-reference current monograph data, check for interacting medications already on the patient&apos;s list, flag a conflict, and draft a note to the prescriber — all before a human ever sees the output.
            </p>
            <p className="mt-4 text-lg leading-8 text-[#5f554f]">
              That&apos;s not a bigger chatbot. That&apos;s a different category of system.
            </p>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow="Three Design Principles That Actually Matter"
          title="The infrastructure question nobody talks about enough"
          description="After building and iterating on AI systems that process tens of millions of medical documents, a few principles have proven non-negotiable."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {principles.map((principle) => (
            <article key={principle.title} className="rounded-[2rem] border border-black/5 bg-white p-7 shadow-[0_12px_40px_rgba(31,23,20,0.06)]">
              <h3 className="text-xl font-semibold text-[#1f1714]">{principle.title}</h3>
              <p className="mt-4 text-base leading-8 text-[#5f554f]">{principle.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-black/5 bg-[linear-gradient(180deg,#fdfaf7_0%,#f4efe9_100%)]">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8a7c74]">Where This Goes Next</p>
          <h2 id="where-this-goes-next" className="mt-4 text-3xl font-semibold tracking-tight text-[#1f1714] sm:text-4xl">
            The hard part was never getting a model to sound smart.
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#5f554f]">
            My honest prediction: within the next two to three years, the phrase &quot;AI chatbot&quot; will start to sound as dated in healthcare as &quot;portal&quot; does today. The systems that win will be the ones that can take a genuinely multi-step clinical or operational task and complete it end-to-end with verifiable grounding at every step, not just a plausible-sounding final paragraph.
          </p>
          <p className="mt-4 text-lg leading-8 text-[#5f554f]">
            That&apos;s the real frontier, and it&apos;s the one worth building for.
          </p>
        </div>
      </section>

      <footer className="mx-auto max-w-6xl px-4 py-12 text-center text-sm leading-7 text-[#6d625b] sm:px-6 lg:px-8">
        <p className="italic">
          If you&apos;re working on agentic systems in healthcare or adjacent regulated industries, I&apos;d love to hear what&apos;s actually breaking in your production pipelines — the failure modes are usually more instructive than the success stories.
        </p>
      </footer>
    </main>
  );
}
