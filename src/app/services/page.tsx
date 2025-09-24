import { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Services — Olatunde Adedeji",
  description: "Professional software development services: AI App Development, Full-Stack Platforms, MLOps & Cloud solutions.",
};

export default function Services() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Services
          </h1>
        </ScrollReveal>
        
        <ScrollReveal>
          <p className="mt-4 text-xl text-slate-700 dark:text-slate-300 max-w-3xl">
            I offer comprehensive software development services, specializing in AI applications,
            full-stack platforms, and cloud infrastructure. Let&apos;s build something amazing together.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <ScrollReveal>
            <article className="card p-8 hover:shadow-xl transition">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand to-accent text-white flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6">
                  <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">AI App Development</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                End-to-end AI solutions with RAG, vector search, guardrails, and cloud-native delivery. 
                From prototype to production with proper evaluation and monitoring.
              </p>
              <Link href="/contact" className="link-underline font-medium">Start a project →</Link>
            </article>
          </ScrollReveal>

          <ScrollReveal>
            <article className="card p-8 hover:shadow-xl transition">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-brand text-white flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6">
                  <path fill="currentColor" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Full-Stack Platforms</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Django + React systems with role-based auth, payments, analytics, and accessibility-first UI. 
                Scalable architecture designed for growth.
              </p>
              <Link href="/contact" className="link-underline font-medium">Let&apos;s talk scope →</Link>
            </article>
          </ScrollReveal>

          <ScrollReveal>
            <article className="card p-8 hover:shadow-xl transition">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-600 to-slate-800 text-white flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6">
                  <path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">MLOps & Cloud</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                CI/CD, containers, observability, evaluation, and cost-efficient inference pipelines. 
                Production-ready ML systems that scale.
              </p>
              <Link href="/contact" className="link-underline font-medium">Optimize delivery →</Link>
            </article>
          </ScrollReveal>

          <ScrollReveal>
            <article className="card p-8 hover:shadow-xl transition">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 text-white flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6">
                  <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Technical Consulting</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Architecture reviews, technology strategy, and team mentoring. 
                Help your team adopt best practices and modern development workflows.
              </p>
              <Link href="/contact" className="link-underline font-medium">Get guidance →</Link>
            </article>
          </ScrollReveal>

          <ScrollReveal>
            <article className="card p-8 hover:shadow-xl transition">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-teal-500 text-white flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6">
                  <path fill="currentColor" d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zM4 19h16v2H4z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">API Development</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                RESTful and GraphQL APIs with proper documentation, authentication, and rate limiting. 
                Built for reliability and developer experience.
              </p>
              <Link href="/contact" className="link-underline font-medium">Build APIs →</Link>
            </article>
          </ScrollReveal>

          <ScrollReveal>
            <article className="card p-8 hover:shadow-xl transition">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 text-white flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6">
                  <path fill="currentColor" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Performance Optimization</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Frontend and backend performance audits, database optimization, and caching strategies. 
                Make your applications lightning fast.
              </p>
              <Link href="/contact" className="link-underline font-medium">Speed things up →</Link>
            </article>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
              Whether you need a complete solution or help with a specific challenge, 
              I&apos;m here to help you build something exceptional.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn-primary rounded-xl">Start a Project</Link>
              <Link href="/projects" className="btn-ghost rounded-xl">View Past Work</Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
