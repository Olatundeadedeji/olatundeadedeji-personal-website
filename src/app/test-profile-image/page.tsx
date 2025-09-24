'use client';

import { useState } from 'react';
import ProfileImage, { HeroProfileImage, AdjustableProfileImage } from '@/components/ProfileImage';

export default function TestProfileImagePage() {
  const [selectedPosition, setSelectedPosition] = useState('center 20%');
  const [selectedPreset, setSelectedPreset] = useState<'center-top' | 'center-center' | 'center-bottom' | 'left-top' | 'right-top'>('center-top');

  const positionOptions = [
    'center top',
    'center 10%',
    'center 15%',
    'center 20%',
    'center 25%',
    'center 30%',
    'center center',
    'center 70%',
    'center 80%',
    'center bottom',
    'left top',
    'right top',
    '25% 20%',
    '75% 20%',
  ];

  const presetOptions: Array<'center-top' | 'center-center' | 'center-bottom' | 'left-top' | 'right-top'> = [
    'center-top',
    'center-center', 
    'center-bottom',
    'left-top',
    'right-top',
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
      <div className="space-y-12">
        <div>
          <h1 className="text-3xl font-bold mb-4">Profile Image Testing</h1>
          <p className="text-slate-600 dark:text-slate-400">
            Use this page to test different positioning options for your profile image and find the best setting for face visibility.
          </p>
        </div>

        {/* Current Hero Implementation */}
        <section className="card p-6">
          <h2 className="text-xl font-semibold mb-4">Current Hero Implementation</h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
            This is how your profile image currently appears on the homepage.
          </p>
          <div className="max-w-md mx-auto">
            <HeroProfileImage
              src="/olatunde-adedeji.png"
              alt="Olatunde Adedeji, Software Engineer and AI Applications Developer"
            />
          </div>
        </section>

        {/* Custom Position Testing */}
        <section className="card p-6">
          <h2 className="text-xl font-semibold mb-4">Custom Position Testing</h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
            Test different object-position values to find the optimal face positioning.
          </p>
          
          <div className="mb-6">
            <label htmlFor="position-select" className="block text-sm font-medium mb-2">
              Object Position:
            </label>
            <select
              id="position-select"
              value={selectedPosition}
              onChange={(e) => setSelectedPosition(e.target.value)}
              className="w-full max-w-xs rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-4 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              {positionOptions.map((position) => (
                <option key={position} value={position}>
                  {position}
                </option>
              ))}
            </select>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium mb-3">Preview</h3>
              <ProfileImage
                src="/olatunde-adedeji.png"
                alt="Test positioning"
                objectPosition={selectedPosition}
                className="w-full h-72 object-cover rounded-2xl shadow-soft"
              />
            </div>
            <div>
              <h3 className="font-medium mb-3">CSS Code</h3>
              <div className="bg-slate-100 dark:bg-slate-800 rounded-xl p-4 text-sm font-mono">
                <div className="text-slate-600 dark:text-slate-400">object-position:</div>
                <div className="text-brand font-semibold">{selectedPosition};</div>
              </div>
              <div className="mt-4 text-xs text-slate-500">
                Copy this value to use in your ProfileImage component's objectPosition prop.
              </div>
            </div>
          </div>
        </section>

        {/* Preset Position Testing */}
        <section className="card p-6">
          <h2 className="text-xl font-semibold mb-4">Preset Position Testing</h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
            Test the predefined position presets from the AdjustableProfileImage component.
          </p>
          
          <div className="mb-6">
            <label htmlFor="preset-select" className="block text-sm font-medium mb-2">
              Face Position Preset:
            </label>
            <select
              id="preset-select"
              value={selectedPreset}
              onChange={(e) => setSelectedPreset(e.target.value as any)}
              className="w-full max-w-xs rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-4 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              {presetOptions.map((preset) => (
                <option key={preset} value={preset}>
                  {preset.replace('-', ' ')}
                </option>
              ))}
            </select>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium mb-3">Preview</h3>
              <AdjustableProfileImage
                src="/olatunde-adedeji.png"
                alt="Test preset positioning"
                facePosition={selectedPreset}
              />
            </div>
            <div>
              <h3 className="font-medium mb-3">Component Code</h3>
              <div className="bg-slate-100 dark:bg-slate-800 rounded-xl p-4 text-sm font-mono">
                <div className="text-slate-600 dark:text-slate-400">&lt;AdjustableProfileImage</div>
                <div className="ml-2 text-slate-600 dark:text-slate-400">src="/olatunde-adedeji.png"</div>
                <div className="ml-2 text-slate-600 dark:text-slate-400">alt="..."</div>
                <div className="ml-2">
                  <span className="text-slate-600 dark:text-slate-400">facePosition="</span>
                  <span className="text-brand font-semibold">{selectedPreset}</span>
                  <span className="text-slate-600 dark:text-slate-400">"</span>
                </div>
                <div className="text-slate-600 dark:text-slate-400">/&gt;</div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Grid */}
        <section className="card p-6">
          <h2 className="text-xl font-semibold mb-4">Position Comparison</h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
            Compare different positioning options side by side.
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {presetOptions.map((preset) => (
              <div key={preset} className="space-y-3">
                <h3 className="font-medium text-center capitalize">
                  {preset.replace('-', ' ')}
                </h3>
                <AdjustableProfileImage
                  src="/olatunde-adedeji.png"
                  alt={`${preset} positioning`}
                  facePosition={preset}
                  className="h-48"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Responsive Testing */}
        <section className="card p-6">
          <h2 className="text-xl font-semibold mb-4">Responsive Testing</h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
            Test how the image looks at different screen sizes.
          </p>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-medium mb-3">Mobile (375px width)</h3>
              <div className="max-w-[375px] mx-auto border-2 border-slate-300 dark:border-slate-600 rounded-xl p-4">
                <HeroProfileImage
                  src="/olatunde-adedeji.png"
                  alt="Mobile view test"
                />
              </div>
            </div>
            
            <div>
              <h3 className="font-medium mb-3">Tablet (768px width)</h3>
              <div className="max-w-[768px] mx-auto border-2 border-slate-300 dark:border-slate-600 rounded-xl p-4">
                <div className="max-w-md mx-auto">
                  <HeroProfileImage
                    src="/olatunde-adedeji.png"
                    alt="Tablet view test"
                  />
                </div>
              </div>
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
              <h3 className="font-medium">1. Choose Your Preferred Position</h3>
              <p>Test different options above and note which one shows your face best.</p>
            </div>
            <div>
              <h3 className="font-medium">2. Update the Component</h3>
              <p>Copy the CSS value or preset name from your preferred option.</p>
            </div>
            <div>
              <h3 className="font-medium">3. Apply to Homepage</h3>
              <p>Update the HeroProfileImage component in <code>src/app/page.tsx</code> or modify the ProfileImage component in <code>src/components/ProfileImage.tsx</code>.</p>
            </div>
            <div>
              <h3 className="font-medium">4. Test Across Devices</h3>
              <p>Check the responsive testing section above and test on real devices.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
