import React from 'react';
import AuthForm from './components/AuthForm';
import BrandPanel from './components/BrandPanel';

export default function SignUpLoginPage() {
  return (
    <div className="min-h-screen bg-background flex">
      {/* Left brand panel — hidden on mobile */}
      <div className="hidden lg:flex lg:w-[52%] xl:w-[55%] flex-col relative overflow-hidden">
        <BrandPanel />
      </div>

      {/* Right form panel */}
      <div className="flex-1 flex flex-col items-center justify-center px-5 sm:px-8 py-10 min-h-screen overflow-y-auto">
        <AuthForm />
      </div>
    </div>
  );
}