import React from 'react';

interface SkeletonBlockProps {
  className?: string;
  height?: string;
  width?: string;
  rounded?: string;
}

export default function SkeletonBlock({
  className = '',
  height = 'h-4',
  width = 'w-full',
  rounded = 'rounded-lg',
}: SkeletonBlockProps) {
  return (
    <div
      className={`skeleton-wave ${height} ${width} ${rounded} ${className}`}
      role="presentation"
      aria-hidden="true"
    />
  );
}