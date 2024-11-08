import React from 'react';

export const Star = ({ filled }) => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill={filled ? "gold" : "lightgray"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 .587l3.668 7.568 8.332 1.207-6.004 5.848 1.417 8.267L12 18.896l-7.413 3.895 1.417-8.267-6.004-5.848 8.332-1.207z" />
    </svg>
  );
  
  export const HalfStar = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="halfStarGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="50%" style={{ stopColor: "gold", stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: "lightgray", stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <path
        d="M12 .587l3.668 7.568 8.332 1.207-6.004 5.848 1.417 8.267L12 18.896l-7.413 3.895 1.417-8.267-6.004-5.848 8.332-1.207z"
        fill="url(#halfStarGradient)"
      />
    </svg>
  );