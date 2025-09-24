import { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About — Olatunde Adedeji",
  description: "About Olatunde Adedeji — Senior Full‑Stack Software Engineer & AI Applications Developer, technical author, and entrepreneur.",
};

export default function About() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            About Me
          </h1>
        </ScrollReveal>
        
        <ScrollReveal>
          <div className="mt-8 prose prose-lg max-w-none dark:prose-invert">
            <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
              I&apos;m a Senior Full-Stack Software Engineer and AI Applications Developer with over 10 years of experience
              building scalable, accessible, and performant web applications.
            </p>

            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              My expertise spans the full stack, from designing intuitive user interfaces with React and Next.js
              to architecting robust backend systems with Django and Node.js. I specialize in AI-assisted applications,
              Retrieval-Augmented Generation (RAG), and event-driven architectures.
            </p>

            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              I&apos;m passionate about creating inclusive digital experiences that work for everyone. My work emphasizes
              performance, observability, and accessibility-first design principles to ensure every user can succeed.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-16 grid md:grid-cols-2 gap-12">
          <ScrollReveal>
            <div>
              <h2 className="text-2xl font-bold mb-6">Technical Expertise</h2>
              <div className="space-y-4">
                <div className="card p-4">
                  <h3 className="font-semibold text-lg mb-2">Frontend Development</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    React, Next.js, TypeScript, Tailwind CSS, Vue.js, Modern JavaScript (ES6+)
                  </p>
                </div>
                <div className="card p-4">
                  <h3 className="font-semibold text-lg mb-2">Backend Development</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Python, Django, Node.js, FastAPI, RESTful APIs, GraphQL
                  </p>
                </div>
                <div className="card p-4">
                  <h3 className="font-semibold text-lg mb-2">AI & Machine Learning</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    RAG Systems, Vector Databases, LangChain, OpenAI API, Hugging Face
                  </p>
                </div>
                <div className="card p-4">
                  <h3 className="font-semibold text-lg mb-2">DevOps & Cloud</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Docker, Kubernetes, AWS, CI/CD, Monitoring, Infrastructure as Code
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div>
              <h2 className="text-2xl font-bold mb-6">Experience Highlights</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-brand pl-4">
                  <h3 className="font-semibold text-lg">Senior Software Engineer</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">2020 - Present</p>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Leading development of AI-powered applications and mentoring junior developers. 
                    Architected scalable systems serving millions of users.
                  </p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <h3 className="font-semibold text-lg">Full-Stack Developer</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">2018 - 2020</p>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Built responsive web applications and RESTful APIs. Implemented automated testing 
                    and deployment pipelines.
                  </p>
                </div>
                <div className="border-l-4 border-slate-400 pl-4">
                  <h3 className="font-semibold text-lg">Software Developer</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">2014 - 2018</p>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Developed web applications using modern frameworks and contributed to open-source projects.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">Let&apos;s Work Together</h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
              I&apos;m always interested in new opportunities and challenging projects.
              Whether you need a full-stack developer, AI consultant, or technical advisor, let&apos;s discuss how we can work together.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/contact" className="btn-primary rounded-xl">Get In Touch</a>
              <a href="/projects" className="btn-ghost rounded-xl">View My Work</a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
