import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found — Olatunde Adedeji",
  description: "The page you're looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-6xl sm:text-8xl font-extrabold text-slate-200 dark:text-slate-800 mb-4">
            404
          </h1>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Page Not Found
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-8">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/" className="btn-primary rounded-xl">
              Go Home
            </Link>
            <Link href="/contact" className="btn-ghost rounded-xl">
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
