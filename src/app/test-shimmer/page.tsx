'use client';

import { useState } from 'react';

export default function TestShimmerPage() {
  const [selectedVariant, setSelectedVariant] = useState('current');

  const variants = {
    current: {
      name: 'Current Implementation',
      className: 'bg-gradient-to-r from-slate-600 via-brand to-accent bg-[length:200%_100%] animate-shimmer bg-clip-text text-transparent dark:from-slate-300 dark:via-blue-400 dark:to-green-400',
      description: 'Updated gradient with better contrast'
    },
    original: {
      name: 'Original (Broken)',
      className: 'bg-gradient-to-r from-slate-200 via-white to-slate-200 bg-[length:200%_100%] animate-shimmer bg-clip-text text-transparent',
      description: 'Original implementation with poor contrast'
    },
    highContrast: {
      name: 'High Contrast',
      className: 'bg-gradient-to-r from-slate-800 via-brand to-accent bg-[length:200%_100%] animate-shimmer bg-clip-text text-transparent dark:from-slate-100 dark:via-blue-300 dark:to-green-300',
      description: 'Higher contrast for better visibility'
    },
    colorful: {
      name: 'Colorful Shimmer',
      className: 'bg-gradient-to-r from-purple-600 via-brand to-accent bg-[length:200%_100%] animate-shimmer bg-clip-text text-transparent dark:from-purple-400 dark:via-blue-400 dark:to-green-400',
      description: 'More colorful gradient'
    },
    subtle: {
      name: 'Subtle Effect',
      className: 'bg-gradient-to-r from-slate-700 via-slate-500 to-slate-700 bg-[length:200%_100%] animate-shimmer bg-clip-text text-transparent dark:from-slate-200 dark:via-slate-400 dark:to-slate-200',
      description: 'Subtle monochrome shimmer'
    },
    fallback: {
      name: 'Fallback (No Shimmer)',
      className: 'text-slate-600 dark:text-slate-300',
      description: 'Simple text without shimmer effect'
    }
  };

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-4">Shimmer Badge Testing</h1>
          <p className="text-slate-600 dark:text-slate-400">
            Test different shimmer effect implementations to ensure the badge text is visible and the animation works properly.
          </p>
        </div>

        {/* Current Hero Context */}
        <section className="card p-6">
          <h2 className="text-xl font-semibold mb-4">Hero Section Context</h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
            This shows how the shimmer badge appears in the actual hero section context.
          </p>
          
          <div className="relative max-w-md mx-auto">
            {/* Simulated profile image area */}
            <div className="w-full h-72 bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 rounded-2xl flex items-center justify-center text-slate-500 dark:text-slate-400">
              Profile Image Area
            </div>
            
            {/* Shimmer badge */}
            <div aria-hidden="true" className="absolute -bottom-4 left-6 px-4 py-2 rounded-xl bg-white/80 dark:bg-slate-900/70 border border-slate-200/70 dark:border-slate-800/70 backdrop-blur shadow-soft">
              <div className={`text-xs font-semibold ${variants[selectedVariant as keyof typeof variants].className}`}>
                Inclusive • Performant • Reliable
              </div>
            </div>
          </div>
        </section>

        {/* Variant Selector */}
        <section className="card p-6">
          <h2 className="text-xl font-semibold mb-4">Shimmer Variants</h2>
          <div className="mb-6">
            <label htmlFor="variant-select" className="block text-sm font-medium mb-2">
              Choose Variant:
            </label>
            <select
              id="variant-select"
              value={selectedVariant}
              onChange={(e) => setSelectedVariant(e.target.value)}
              className="w-full max-w-xs rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-4 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              {Object.entries(variants).map(([key, variant]) => (
                <option key={key} value={key}>
                  {variant.name}
                </option>
              ))}
            </select>
          </div>
          
          <div className="text-sm text-slate-600 dark:text-slate-400 mb-4">
            {variants[selectedVariant as keyof typeof variants].description}
          </div>
        </section>

        {/* All Variants Comparison */}
        <section className="card p-6">
          <h2 className="text-xl font-semibold mb-4">All Variants Comparison</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(variants).map(([key, variant]) => (
              <div key={key} className="space-y-3">
                <h3 className="font-medium text-sm">{variant.name}</h3>
                <div className="relative">
                  <div className="w-full h-32 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 rounded-xl flex items-center justify-center text-xs text-slate-400">
                    Image
                  </div>
                  <div className="absolute -bottom-2 left-3 px-3 py-1 rounded-lg bg-white/80 dark:bg-slate-900/70 border border-slate-200/70 dark:border-slate-800/70 backdrop-blur shadow-sm">
                    <div className={`text-xs font-semibold ${variant.className}`}>
                      Inclusive • Performant • Reliable
                    </div>
                  </div>
                </div>
                <p className="text-xs text-slate-500">{variant.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CSS Code Display */}
        <section className="card p-6">
          <h2 className="text-xl font-semibold mb-4">CSS Implementation</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">Current Classes:</h3>
              <div className="bg-slate-100 dark:bg-slate-800 rounded-xl p-4 text-sm font-mono overflow-x-auto">
                <div className="text-slate-600 dark:text-slate-400">className="</div>
                <div className="ml-2 text-brand break-all">
                  {variants[selectedVariant as keyof typeof variants].className}
                </div>
                <div className="text-slate-600 dark:text-slate-400">"</div>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium mb-2">Tailwind Animation Config:</h3>
              <div className="bg-slate-100 dark:bg-slate-800 rounded-xl p-4 text-sm font-mono">
                <div className="text-slate-600 dark:text-slate-400">// tailwind.config.js</div>
                <div className="text-slate-600 dark:text-slate-400">keyframes: {`{`}</div>
                <div className="ml-2">
                  <span className="text-purple-600 dark:text-purple-400">shimmer</span>
                  <span className="text-slate-600 dark:text-slate-400">: {`{`}</span>
                </div>
                <div className="ml-4">
                  <span className="text-green-600 dark:text-green-400">'0%'</span>
                  <span className="text-slate-600 dark:text-slate-400">: {`{`} </span>
                  <span className="text-blue-600 dark:text-blue-400">backgroundPosition</span>
                  <span className="text-slate-600 dark:text-slate-400">: </span>
                  <span className="text-orange-600 dark:text-orange-400">'-200% 0'</span>
                  <span className="text-slate-600 dark:text-slate-400"> {`}`},</span>
                </div>
                <div className="ml-4">
                  <span className="text-green-600 dark:text-green-400">'100%'</span>
                  <span className="text-slate-600 dark:text-slate-400">: {`{`} </span>
                  <span className="text-blue-600 dark:text-blue-400">backgroundPosition</span>
                  <span className="text-slate-600 dark:text-slate-400">: </span>
                  <span className="text-orange-600 dark:text-orange-400">'200% 0'</span>
                  <span className="text-slate-600 dark:text-slate-400"> {`}`}</span>
                </div>
                <div className="ml-2 text-slate-600 dark:text-slate-400">{`}`}</div>
                <div className="text-slate-600 dark:text-slate-400">{`}`}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Troubleshooting */}
        <section className="card p-6 bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800">
          <h2 className="text-xl font-semibold mb-4 text-yellow-900 dark:text-yellow-100">
            Troubleshooting Tips
          </h2>
          <div className="space-y-3 text-sm text-yellow-800 dark:text-yellow-200">
            <div>
              <h3 className="font-medium">Text Not Visible?</h3>
              <ul className="list-disc list-inside ml-2 space-y-1">
                <li>Check if gradient colors have sufficient contrast</li>
                <li>Ensure <code>bg-clip-text</code> and <code>text-transparent</code> are both applied</li>
                <li>Verify the gradient has enough color variation</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium">Animation Not Working?</h3>
              <ul className="list-disc list-inside ml-2 space-y-1">
                <li>Check if <code>animate-shimmer</code> class is applied</li>
                <li>Verify <code>bg-[length:200%_100%]</code> is set for the gradient</li>
                <li>Ensure Tailwind config includes the shimmer animation</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium">Browser Compatibility</h3>
              <ul className="list-disc list-inside ml-2 space-y-1">
                <li><code>bg-clip-text</code> requires <code>-webkit-background-clip</code> for older browsers</li>
                <li>Consider a fallback for browsers that don't support background-clip</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Instructions */}
        <section className="card p-6 bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
          <h2 className="text-xl font-semibold mb-4 text-blue-900 dark:text-blue-100">
            How to Apply Changes
          </h2>
          <div className="space-y-3 text-sm text-blue-800 dark:text-blue-200">
            <div>
              <h3 className="font-medium">1. Choose Your Preferred Variant</h3>
              <p>Test the variants above and select the one that looks best in both light and dark modes.</p>
            </div>
            <div>
              <h3 className="font-medium">2. Copy the CSS Classes</h3>
              <p>Copy the className from the "CSS Implementation" section above.</p>
            </div>
            <div>
              <h3 className="font-medium">3. Update the Homepage</h3>
              <p>Replace the shimmer badge classes in <code>src/app/page.tsx</code> around line 54.</p>
            </div>
            <div>
              <h3 className="font-medium">4. Test Across Themes</h3>
              <p>Make sure the effect works well in both light and dark modes.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
