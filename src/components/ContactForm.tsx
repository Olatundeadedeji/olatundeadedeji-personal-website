'use client';

import { useState } from "react";

export default function ContactForm() {
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('Sending...');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('Message sent successfully!');
      // Reset form
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setFormStatus(''), 3000);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" aria-describedby="contact-help" noValidate>
      <div aria-hidden="true" className="hidden">
        <label>Leave this field empty<input type="text" name="company" tabIndex={-1} autoComplete="off" /></label>
      </div>
      
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
          <input 
            id="name" 
            name="name" 
            type="text" 
            required 
            autoComplete="name"
            className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-4 py-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-invalid="false" 
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
          <input 
            id="email" 
            name="email" 
            type="email" 
            required 
            autoComplete="email"
            className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-4 py-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-invalid="false" 
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
        <input 
          id="subject" 
          name="subject" 
          type="text" 
          required
          className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-4 py-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          aria-invalid="false" 
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
        <textarea 
          id="message" 
          name="message" 
          rows={6} 
          required
          className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-4 py-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          aria-invalid="false"
        ></textarea>
      </div>

      <p id="contact-help" className="text-sm text-slate-600 dark:text-slate-400">
        All fields are required. You will receive a response within 2 business days.
      </p>

      <div className="flex items-center gap-4">
        <button type="submit" className="btn-primary rounded-xl">Send Message</button>
        {formStatus && (
          <span className="text-sm text-accent" role="status" aria-live="polite">
            {formStatus}
          </span>
        )}
      </div>
    </form>
  );
}
