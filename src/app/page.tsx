import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { HeroProfileImage } from "@/components/ProfileImage";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section id="home" className="relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <ScrollReveal>
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                  Software Engineer & <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-accent">AI Applications</span> Developer
                </h1>
              </ScrollReveal>
              <ScrollReveal>
                <p className="mt-5 text-base sm:text-lg text-slate-700 dark:text-slate-300 max-w-xl">
                  I craft accessible, performant AI products for the web and cloud. 10+ years across Django, React, vector databases, and MLOps.
                </p>
              </ScrollReveal>
              <ScrollReveal>
                <div className="mt-7 flex flex-wrap gap-3" role="group" aria-label="Primary actions">
                  <Link href="/projects" className="btn-primary rounded-xl">View Projects</Link>
                  <Link href="/contact" className="btn-ghost rounded-xl">Contact Me</Link>
                </div>
              </ScrollReveal>
              <dl className="mt-8 grid grid-cols-3 gap-4 max-w-md text-center">
                <ScrollReveal>
                  <div className="card p-3">
                    <dt className="text-xs text-slate-500">Experience</dt>
                    <dd className="text-lg font-semibold">10+ yrs</dd>
                  </div>
                </ScrollReveal>
                <ScrollReveal>
                  <div className="card p-3">
                    <dt className="text-xs text-slate-500">Projects</dt>
                    <dd className="text-lg font-semibold">60+</dd>
                  </div>
                </ScrollReveal>
                <ScrollReveal>
                  <div className="card p-3">
                    <dt className="text-xs text-slate-500">Books</dt>
                    <dd className="text-lg font-semibold">3+</dd>
                  </div>
                </ScrollReveal>
              </dl>
            </div>
            <ScrollReveal>
              <figure className="relative">
                <HeroProfileImage
                  src="/olatunde-adedeji.png"
                  alt="Olatunde Adedeji, Software Engineer and AI Applications Developer"
                />
                <figcaption className="sr-only">Professional headshot of Olatunde Adedeji in his development workspace</figcaption>
                {/* Shimmer badge */}
                <div aria-hidden="true" className="absolute -bottom-4 left-6 px-4 py-2 rounded-xl bg-white/80 dark:bg-slate-900/70 border border-slate-200/70 dark:border-slate-800/70 backdrop-blur shadow-soft">
                  <div className="text-xs text-slate-600 dark:text-slate-300 bg-gradient-to-r from-slate-200 via-white to-slate-200 bg-[length:200%_100%] animate-shimmer bg-clip-text text-transparent font-semibold">Inclusive • Performant • Reliable</div>
                </div>
              </figure>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" aria-labelledby="about-title" className="bg-white/70 dark:bg-slate-900/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
          <ScrollReveal>
            <h2 id="about-title" className="text-3xl font-bold">About</h2>
          </ScrollReveal>
          <ScrollReveal>
            <p className="mt-4 max-w-3xl text-slate-700 dark:text-slate-300">
              I specialize in AI-assisted applications, Retrieval-Augmented Generation, and event-driven architectures.
              My work emphasizes performance, observability, and inclusive design so every user can succeed.
            </p>
          </ScrollReveal>
          <ul className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5" role="list">
            <ScrollReveal>
              <li className="card p-5">
                <h3 className="font-semibold text-lg">Core Stack</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">Python/Django • React/Next • Node • Postgres • Redis • Kubernetes</p>
              </li>
            </ScrollReveal>
            <ScrollReveal>
              <li className="card p-5">
                <h3 className="font-semibold text-lg">AI Focus</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">RAG • Vector DBs • Agents • Observability • Guardrails • A11y</p>
              </li>
            </ScrollReveal>
            <ScrollReveal>
              <li className="card p-5">
                <h3 className="font-semibold text-lg">Values</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">Accessibility • Reliability • Documentation • Testing • DX</p>
              </li>
            </ScrollReveal>
          </ul>
        </div>
      </section>

      {/* Services */}
      <section id="services" aria-labelledby="services-title">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
          <ScrollReveal>
            <h2 id="services-title" className="text-3xl font-bold">Services</h2>
          </ScrollReveal>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ScrollReveal>
              <article className="card p-6 hover:shadow-xl transition">
                <h3 className="font-semibold text-lg">AI App Development</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">End-to-end AI solutions with RAG, vector search, guardrails, and cloud-native delivery.</p>
                <Link href="/contact" className="mt-3 link-underline">Start a project</Link>
              </article>
            </ScrollReveal>
            <ScrollReveal>
              <article className="card p-6 hover:shadow-xl transition">
                <h3 className="font-semibold text-lg">Full-Stack Platforms</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Django + React systems with role-based auth, payments, analytics, and a11y-first UI.</p>
                <Link href="/contact" className="mt-3 link-underline">Let&apos;s talk scope</Link>
              </article>
            </ScrollReveal>
            <ScrollReveal>
              <article className="card p-6 hover:shadow-xl transition">
                <h3 className="font-semibold text-lg">MLOps & Cloud</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">CI/CD, containers, observability, evaluation, and cost-efficient inference pipelines.</p>
                <Link href="/contact" className="mt-3 link-underline">Optimize delivery</Link>
              </article>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Books */}
      <section id="books" aria-labelledby="books-title" className="bg-white/70 dark:bg-slate-900/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
          <ScrollReveal>
            <h2 id="books-title" className="text-3xl font-bold">Books</h2>
          </ScrollReveal>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ScrollReveal>
              <article className="card overflow-hidden">
                <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop" alt="Hardcover book on a desk" className="h-40 w-full object-cover" />
                <div className="p-5">
                  <h3 className="font-semibold">Full-Stack Flask & React (2nd Ed.)</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Production patterns, security, testing, and CI/CD.</p>
                  <Link href="#" className="mt-3 link-underline">Learn more</Link>
                </div>
              </article>
            </ScrollReveal>
            <ScrollReveal>
              <article className="card overflow-hidden">
                <img src="https://images.unsplash.com/photo-1457694587812-e8bf29a43845?q=80&w=1200&auto=format&fit=crop" alt="Book with green cover on a wooden table" className="h-40 w-full object-cover" />
                <div className="p-5">
                  <h3 className="font-semibold">Building Applications with Vector Databases</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">RAG, embeddings, evaluation, and productionization.</p>
                  <Link href="#" className="mt-3 link-underline">Preview</Link>
                </div>
              </article>
            </ScrollReveal>
            <ScrollReveal>
              <article className="card overflow-hidden">
                <img src="https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1200&auto=format&fit=crop" alt="Open book and glasses" className="h-40 w-full object-cover" />
                <div className="p-5">
                  <h3 className="font-semibold">Agentic Systems: Patterns & Practices</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Designing resilient, auditable agent workflows.</p>
                  <Link href="#" className="mt-3 link-underline">Details</Link>
                </div>
              </article>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section id="blog" aria-labelledby="blog-title">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
          <ScrollReveal>
            <h2 id="blog-title" className="text-3xl font-bold">Blog</h2>
          </ScrollReveal>
          <ul className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
            <ScrollReveal>
              <li className="card p-6">
                <article>
                  <h3 className="font-semibold"><Link className="link-underline" href="#">Designing Accessible AI UIs</Link></h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Practical patterns to make AI features usable by everyone.</p>
                  <time className="mt-2 block text-xs text-slate-500 dark:text-slate-400" dateTime="2025-06-15">June 15, 2025</time>
                </article>
              </li>
            </ScrollReveal>
            <ScrollReveal>
              <li className="card p-6">
                <article>
                  <h3 className="font-semibold"><Link className="link-underline" href="#">Evaluating RAG Systems</Link></h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Coverage, faithfulness, and latency—trade-offs that matter.</p>
                  <time className="mt-2 block text-xs text-slate-500 dark:text-slate-400" dateTime="2025-05-02">May 2, 2025</time>
                </article>
              </li>
            </ScrollReveal>
            <ScrollReveal>
              <li className="card p-6">
                <article>
                  <h3 className="font-semibold"><Link className="link-underline" href="#">From Proto to Prod with Django</Link></h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Security, migrations, and observability checklists.</p>
                  <time className="mt-2 block text-xs text-slate-500 dark:text-slate-400" dateTime="2025-03-10">March 10, 2025</time>
                </article>
              </li>
            </ScrollReveal>
          </ul>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" aria-labelledby="projects-title" className="bg-white/70 dark:bg-slate-900/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
          <ScrollReveal>
            <h2 id="projects-title" className="text-3xl font-bold">Projects</h2>
          </ScrollReveal>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ScrollReveal>
              <article className="card p-5">
                <h3 className="font-semibold"><Link href="#" className="link-underline">Caddie RAG</Link></h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">RAG with trust scoring, citations, and evaluation harness.</p>
                <ul className="mt-3 flex flex-wrap gap-2 text-xs text-slate-600 dark:text-slate-400" aria-label="Tech stack">
                  <li className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800">Django</li>
                  <li className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800">React</li>
                  <li className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800">Pinecone</li>
                </ul>
              </article>
            </ScrollReveal>
            <ScrollReveal>
              <article className="card p-5">
                <h3 className="font-semibold"><Link href="#" className="link-underline">LexSuite</Link></h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">AI-powered law-firm dashboard with retrieval workflows.</p>
                <ul className="mt-3 flex flex-wrap gap-2 text-xs text-slate-600 dark:text-slate-400" aria-label="Tech stack">
                  <li className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800">FastAPI</li>
                  <li className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800">Next.js</li>
                  <li className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800">Weaviate</li>
                </ul>
              </article>
            </ScrollReveal>
            <ScrollReveal>
              <article className="card p-5">
                <h3 className="font-semibold"><Link href="#" className="link-underline">DataPundits</Link></h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Learning analytics platform with real-time dashboards.</p>
                <ul className="mt-3 flex flex-wrap gap-2 text-xs text-slate-600 dark:text-slate-400" aria-label="Tech stack">
                  <li className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800">Django</li>
                  <li className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800">Vue 3</li>
                  <li className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800">Postgres</li>
                </ul>
              </article>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" aria-labelledby="contact-title">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
          <ScrollReveal>
            <h2 id="contact-title" className="text-3xl font-bold">Contact</h2>
          </ScrollReveal>
          <ScrollReveal>
            <p className="mt-2 text-slate-700 dark:text-slate-300">Have a project in mind? Send a message.</p>
          </ScrollReveal>

          <ScrollReveal>
            <form className="mt-8 grid sm:grid-cols-2 gap-6" aria-describedby="contact-help" noValidate>
              <div aria-hidden="true" className="hidden">
                <label>Leave this field empty<input type="text" name="company" tabIndex={-1} autoComplete="off" /></label>
              </div>
              <div className="sm:col-span-1">
                <label htmlFor="name" className="block text-sm font-medium">Name</label>
                <input id="name" name="name" type="text" required autoComplete="name"
                       className="mt-1 w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                       aria-invalid="false" />
              </div>
              <div className="sm:col-span-1">
                <label htmlFor="email" className="block text-sm font-medium">Email</label>
                <input id="email" name="email" type="email" required autoComplete="email"
                       className="mt-1 w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                       aria-invalid="false" />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium">Message</label>
                <textarea id="message" name="message" rows={5} required
                          className="mt-1 w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                          aria-invalid="false"></textarea>
              </div>
              <p id="contact-help" className="sm:col-span-2 text-sm text-slate-600 dark:text-slate-400">
                All fields are required. You will receive a response within 2 business days.
              </p>
              <div className="sm:col-span-2">
                <button type="submit" className="btn-primary rounded-xl">Send message</button>
                <span id="form-status" className="ml-3 text-sm" role="status" aria-live="polite"></span>
              </div>
            </form>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

