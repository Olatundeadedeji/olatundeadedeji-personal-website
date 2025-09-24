import { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Books — Olatunde Adedeji",
  description: "Technical books and publications by Olatunde Adedeji on full-stack development, AI applications, and software engineering best practices.",
};

export default function Books() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Books
          </h1>
        </ScrollReveal>
        
        <ScrollReveal>
          <p className="mt-4 text-xl text-slate-700 dark:text-slate-300 max-w-3xl">
            Technical books and guides covering modern software development practices, 
            AI applications, and production-ready system design.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <ScrollReveal>
            <article className="card overflow-hidden hover:shadow-xl transition">
              <img 
                src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop" 
                alt="Full-Stack Flask & React book cover" 
                className="h-48 w-full object-cover" 
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Full-Stack Flask & React (2nd Ed.)</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Production patterns, security, testing, and CI/CD for modern web applications. 
                  Complete guide from development to deployment.
                </p>
                <div className="flex gap-3 text-sm">
                  <Link href="#" className="link-underline">Learn more</Link>
                  <Link href="#" className="link-underline">Preview</Link>
                </div>
              </div>
            </article>
          </ScrollReveal>

          <ScrollReveal>
            <article className="card overflow-hidden hover:shadow-xl transition">
              <img 
                src="https://images.unsplash.com/photo-1457694587812-e8bf29a43845?q=80&w=1200&auto=format&fit=crop" 
                alt="Building Applications with Vector Databases book cover" 
                className="h-48 w-full object-cover" 
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Building Applications with Vector Databases</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  RAG, embeddings, evaluation, and productionization. 
                  Practical guide to building AI-powered applications with vector search.
                </p>
                <div className="flex gap-3 text-sm">
                  <Link href="#" className="link-underline">Preview</Link>
                  <Link href="#" className="link-underline">Buy Now</Link>
                </div>
              </div>
            </article>
          </ScrollReveal>

          <ScrollReveal>
            <article className="card overflow-hidden hover:shadow-xl transition">
              <img 
                src="https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1200&auto=format&fit=crop" 
                alt="Agentic Systems book cover" 
                className="h-48 w-full object-cover" 
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Agentic Systems: Patterns & Practices</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Designing resilient, auditable agent workflows. 
                  Architecture patterns for building reliable AI agent systems.
                </p>
                <div className="flex gap-3 text-sm">
                  <Link href="#" className="link-underline">Details</Link>
                  <Link href="#" className="link-underline">Pre-order</Link>
                </div>
              </div>
            </article>
          </ScrollReveal>

          <ScrollReveal>
            <article className="card overflow-hidden hover:shadow-xl transition">
              <img 
                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1200&auto=format&fit=crop" 
                alt="Modern Django Development book cover" 
                className="h-48 w-full object-cover" 
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Modern Django Development</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Advanced patterns, performance optimization, and scalable architecture. 
                  Best practices for enterprise Django applications.
                </p>
                <div className="flex gap-3 text-sm">
                  <Link href="#" className="link-underline">Read Sample</Link>
                  <Link href="#" className="link-underline">Purchase</Link>
                </div>
              </div>
            </article>
          </ScrollReveal>

          <ScrollReveal>
            <article className="card overflow-hidden hover:shadow-xl transition">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop" 
                alt="JavaScript Testing Mastery book cover" 
                className="h-48 w-full object-cover" 
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">JavaScript Testing Mastery</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Unit, integration, and end-to-end testing strategies. 
                  Comprehensive guide to testing modern JavaScript applications.
                </p>
                <div className="flex gap-3 text-sm">
                  <Link href="#" className="link-underline">Table of Contents</Link>
                  <Link href="#" className="link-underline">Buy Book</Link>
                </div>
              </div>
            </article>
          </ScrollReveal>

          <ScrollReveal>
            <article className="card overflow-hidden hover:shadow-xl transition">
              <img 
                src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200&auto=format&fit=crop" 
                alt="Cloud-Native Applications book cover" 
                className="h-48 w-full object-cover" 
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Cloud-Native Applications</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Microservices, containers, and Kubernetes deployment strategies. 
                  Building scalable applications for the cloud.
                </p>
                <div className="flex gap-3 text-sm">
                  <Link href="#" className="link-underline">Coming Soon</Link>
                  <Link href="#" className="link-underline">Notify Me</Link>
                </div>
              </div>
            </article>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
              Get notified about new book releases, updates, and exclusive content. 
              Join the community of developers building better software.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn-primary rounded-xl">Subscribe to Updates</Link>
              <Link href="/blog" className="btn-ghost rounded-xl">Read Blog</Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
