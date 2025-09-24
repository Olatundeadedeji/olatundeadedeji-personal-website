import { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Projects — Olatunde Adedeji",
  description: "Projects by Olatunde Adedeji: Caddie RAG, LexSuite, DataPundits, StreamCati, QMXConsult, and more.",
};

export default function Projects() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Projects
          </h1>
        </ScrollReveal>
        
        <ScrollReveal>
          <p className="mt-4 text-xl text-slate-700 dark:text-slate-300 max-w-3xl">
            A selection of projects showcasing AI applications, full-stack platforms, and cloud solutions. 
            Each project demonstrates different aspects of modern software development.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <ScrollReveal>
            <article className="card p-6 hover:shadow-xl transition">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">
                  <Link href="#" className="link-underline">Caddie RAG</Link>
                </h3>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 text-slate-400">
                  <path fill="currentColor" d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
                </svg>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                RAG system with trust scoring, citations, and evaluation harness. 
                Built for accuracy and transparency in AI-powered information retrieval.
              </p>
              <ul className="flex flex-wrap gap-2 text-xs text-slate-600 dark:text-slate-400 mb-4" aria-label="Tech stack">
                <li className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800">Django</li>
                <li className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800">React</li>
                <li className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800">Pinecone</li>
                <li className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800">OpenAI</li>
              </ul>
              <div className="flex gap-3 text-sm">
                <Link href="#" className="link-underline">Live Demo</Link>
                <Link href="#" className="link-underline">GitHub</Link>
              </div>
            </article>
          </ScrollReveal>

          <ScrollReveal>
            <article className="card p-6 hover:shadow-xl transition">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">
                  <Link href="#" className="link-underline">LexSuite</Link>
                </h3>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 text-slate-400">
                  <path fill="currentColor" d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
                </svg>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                AI-powered law firm dashboard with document retrieval workflows. 
                Streamlines legal research and case management with intelligent automation.
              </p>
              <ul className="flex flex-wrap gap-2 text-xs text-slate-600 dark:text-slate-400 mb-4" aria-label="Tech stack">
                <li className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800">FastAPI</li>
                <li className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800">Next.js</li>
                <li className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800">Weaviate</li>
                <li className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800">PostgreSQL</li>
              </ul>
              <div className="flex gap-3 text-sm">
                <Link href="#" className="link-underline">Case Study</Link>
                <Link href="#" className="link-underline">Demo</Link>
              </div>
            </article>
          </ScrollReveal>

          <ScrollReveal>
            <article className="card p-6 hover:shadow-xl transition">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">
                  <Link href="#" className="link-underline">DataPundits</Link>
                </h3>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 text-slate-400">
                  <path fill="currentColor" d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
                </svg>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Learning analytics platform with real-time dashboards. 
                Provides insights into student performance and engagement patterns.
              </p>
              <ul className="flex flex-wrap gap-2 text-xs text-slate-600 dark:text-slate-400 mb-4" aria-label="Tech stack">
                <li className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800">Django</li>
                <li className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800">Vue 3</li>
                <li className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800">PostgreSQL</li>
                <li className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800">Redis</li>
              </ul>
              <div className="flex gap-3 text-sm">
                <Link href="#" className="link-underline">Learn More</Link>
                <Link href="#" className="link-underline">GitHub</Link>
              </div>
            </article>
          </ScrollReveal>

          <ScrollReveal>
            <article className="card p-6 hover:shadow-xl transition">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">
                  <Link href="#" className="link-underline">StreamCati</Link>
                </h3>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 text-slate-400">
                  <path fill="currentColor" d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
                </svg>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Real-time streaming platform with adaptive bitrate and CDN integration. 
                Scalable video delivery with global reach and low latency.
              </p>
              <ul className="flex flex-wrap gap-2 text-xs text-slate-600 dark:text-slate-400 mb-4" aria-label="Tech stack">
                <li className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800">Node.js</li>
                <li className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800">React</li>
                <li className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800">WebRTC</li>
                <li className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800">AWS</li>
              </ul>
              <div className="flex gap-3 text-sm">
                <Link href="#" className="link-underline">Live Platform</Link>
                <Link href="#" className="link-underline">Architecture</Link>
              </div>
            </article>
          </ScrollReveal>

          <ScrollReveal>
            <article className="card p-6 hover:shadow-xl transition">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">
                  <Link href="#" className="link-underline">QMXConsult</Link>
                </h3>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 text-slate-400">
                  <path fill="currentColor" d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
                </svg>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Business consulting platform with client portal and project management. 
                Streamlines consultant-client relationships with automated workflows.
              </p>
              <ul className="flex flex-wrap gap-2 text-xs text-slate-600 dark:text-slate-400 mb-4" aria-label="Tech stack">
                <li className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800">Django</li>
                <li className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800">React</li>
                <li className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800">Stripe</li>
                <li className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800">Docker</li>
              </ul>
              <div className="flex gap-3 text-sm">
                <Link href="#" className="link-underline">Visit Site</Link>
                <Link href="#" className="link-underline">Features</Link>
              </div>
            </article>
          </ScrollReveal>

          <ScrollReveal>
            <article className="card p-6 hover:shadow-xl transition">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">
                  <Link href="#" className="link-underline">AI Code Assistant</Link>
                </h3>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 text-slate-400">
                  <path fill="currentColor" d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
                </svg>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                VS Code extension for intelligent code completion and refactoring. 
                Leverages large language models for context-aware development assistance.
              </p>
              <ul className="flex flex-wrap gap-2 text-xs text-slate-600 dark:text-slate-400 mb-4" aria-label="Tech stack">
                <li className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800">TypeScript</li>
                <li className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800">VS Code API</li>
                <li className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800">OpenAI</li>
                <li className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800">Electron</li>
              </ul>
              <div className="flex gap-3 text-sm">
                <Link href="#" className="link-underline">Marketplace</Link>
                <Link href="#" className="link-underline">Source Code</Link>
              </div>
            </article>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold mb-6">Interested in Working Together?</h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
              These projects represent just a fraction of what&apos;s possible.
              Let&apos;s discuss how we can bring your ideas to life with cutting-edge technology.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn-primary rounded-xl">Start a Project</Link>
              <Link href="/services" className="btn-ghost rounded-xl">View Services</Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
