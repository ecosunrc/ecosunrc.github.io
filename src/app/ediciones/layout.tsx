import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='min-h-screen w-full bg-gradient-to-b from-base2/50 to-base2/100'>
      {children}
    </div>
  );
}