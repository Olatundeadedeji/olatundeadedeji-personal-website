import { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Blog — Olatunde Adedeji",
  description: "Technical blog posts about software engineering, AI applications, web development, and modern programming practices.",
};

export default function Blog() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Blog
          </h1>
        </ScrollReveal>
        
        <ScrollReveal>
          <p className="mt-4 text-xl text-slate-700 dark:text-slate-300 max-w-3xl">
            Insights, tutorials, and thoughts on software engineering, AI applications, 
            and building better developer experiences.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <ScrollReveal>
            <article className="card p-6 hover:shadow-xl transition">
              <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-3">
                <span className="px-2 py-1 rounded bg-brand/10 text-brand">AI/ML</span>
                <time dateTime="2025-06-15">June 15, 2025</time>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                <Link href="#" className="link-underline">Designing Accessible AI UIs</Link>
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Practical patterns to make AI features usable by everyone. 
                Learn how to design inclusive interfaces for AI-powered applications.
              </p>
              <div className="flex items-center justify-between">
                <Link href="#" className="link-underline text-sm">Read more →</Link>
                <span className="text-xs text-slate-500">5 min read</span>
              </div>
            </article>
          </ScrollReveal>

          <ScrollReveal>
            <article className="card p-6 hover:shadow-xl transition">
              <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-3">
                <span className="px-2 py-1 rounded bg-accent/10 text-accent">RAG</span>
                <time dateTime="2025-05-02">May 2, 2025</time>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                <Link href="#" className="link-underline">Evaluating RAG Systems</Link>
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Coverage, faithfulness, and latency—trade-offs that matter. 
                A comprehensive guide to measuring RAG system performance.
              </p>
              <div className="flex items-center justify-between">
                <Link href="#" className="link-underline text-sm">Read more →</Link>
                <span className="text-xs text-slate-500">8 min read</span>
              </div>
            </article>
          </ScrollReveal>

          <ScrollReveal>
            <article className="card p-6 hover:shadow-xl transition">
              <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-3">
                <span className="px-2 py-1 rounded bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">Django</span>
                <time dateTime="2025-03-10">March 10, 2025</time>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                <Link href="#" className="link-underline">From Proto to Prod with Django</Link>
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Security, migrations, and observability checklists. 
                Essential steps for taking Django applications to production.
              </p>
              <div className="flex items-center justify-between">
                <Link href="#" className="link-underline text-sm">Read more →</Link>
                <span className="text-xs text-slate-500">12 min read</span>
              </div>
            </article>
          </ScrollReveal>

          <ScrollReveal>
            <article className="card p-6 hover:shadow-xl transition">
              <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-3">
                <span className="px-2 py-1 rounded bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">React</span>
                <time dateTime="2025-02-18">February 18, 2025</time>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                <Link href="#" className="link-underline">React Server Components Deep Dive</Link>
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Understanding the new paradigm and when to use server components. 
                Practical examples and performance considerations.
              </p>
              <div className="flex items-center justify-between">
                <Link href="#" className="link-underline text-sm">Read more →</Link>
                <span className="text-xs text-slate-500">10 min read</span>
              </div>
            </article>
          </ScrollReveal>

          <ScrollReveal>
            <article className="card p-6 hover:shadow-xl transition">
              <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-3">
                <span className="px-2 py-1 rounded bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">DevOps</span>
                <time dateTime="2025-01-25">January 25, 2025</time>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                <Link href="#" className="link-underline">Kubernetes for Python Developers</Link>
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Container orchestration made simple. 
                Step-by-step guide to deploying Python applications on Kubernetes.
              </p>
              <div className="flex items-center justify-between">
                <Link href="#" className="link-underline text-sm">Read more →</Link>
                <span className="text-xs text-slate-500">15 min read</span>
              </div>
            </article>
          </ScrollReveal>

          <ScrollReveal>
            <article className="card p-6 hover:shadow-xl transition">
              <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-3">
                <span className="px-2 py-1 rounded bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400">Performance</span>
                <time dateTime="2024-12-08">December 8, 2024</time>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                <Link href="#" className="link-underline">Web Vitals Optimization Strategies</Link>
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Practical techniques for improving Core Web Vitals. 
                Real-world examples and measurement strategies.
              </p>
              <div className="flex items-center justify-between">
                <Link href="#" className="link-underline text-sm">Read more →</Link>
                <span className="text-xs text-slate-500">7 min read</span>
              </div>
            </article>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">Categories</h2>
            <div className="flex flex-wrap gap-3 justify-center mb-8">
              <Link href="#" className="px-4 py-2 rounded-full bg-brand/10 text-brand hover:bg-brand/20 transition">AI/ML</Link>
              <Link href="#" className="px-4 py-2 rounded-full bg-accent/10 text-accent hover:bg-accent/20 transition">Web Development</Link>
              <Link href="#" className="px-4 py-2 rounded-full bg-purple-100 text-purple-600 hover:bg-purple-200 dark:bg-purple-900/30 dark:text-purple-400 dark:hover:bg-purple-900/50 transition">Backend</Link>
              <Link href="#" className="px-4 py-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:hover:bg-blue-900/50 transition">Frontend</Link>
              <Link href="#" className="px-4 py-2 rounded-full bg-green-100 text-green-600 hover:bg-green-200 dark:bg-green-900/30 dark:text-green-400 dark:hover:bg-green-900/50 transition">DevOps</Link>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn-primary rounded-xl">Subscribe to Newsletter</Link>
              <Link href="#" className="btn-ghost rounded-xl">RSS Feed</Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
