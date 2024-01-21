import React from "react";

interface SectionHeadingProps {
  children: string;
}

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="sm:mb-16 mb-20 text-3xl font-medium capitalize text-center">
      {children}
    </h2>
  );
}
