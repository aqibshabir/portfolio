import React from 'react';

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500 dark:text-white">
      <small className="mb-1 text-xs block">
        &copy; {new Date().getFullYear()} Aqib Shabir. All rights reserved
      </small>
      <p className="text-xs mb-1 font-thin">
        Made with: React, Nextjs, Typescript, Tailwind CSS, Framer Motion, React Email &amp; Resend.
      </p>
      <p className="text-xs font-thin">Deployed on Vercel.</p>
    </footer>
  );
}
