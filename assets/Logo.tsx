import type { SVGProps } from "react";

export const Logo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    className="animate__animated animated flip animate__infinite logo_main"
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    enableBackground="new 0 0 69 79.9"
    viewBox="0 0 69 79.9"
    {...props}
  >
    <path
      className="st0"
      d="m-43.1 203.7-5.1 2.5-11.4 34.4 5.5-4 11-32.9zM-54 236.6l-5.5 4h20.3l-2.9-4H-54z"
    />
    <path
      className="st2"
      d="m-36.3 231.4-4.8 1.9-1.1 3.3 2.9 4 3-9.2zM-36.9 203.7l-9.1 24 5-1.7 4.2-10.7v-11.6z"
    />
    <path className="st2" d="M-36.9 215.3v-11.6l15.5 44.2-5.5-4-10-28.6z" />
    <path
      className="st2"
      d="M-42.2 247.9h20.8l-5.5-4H-46l3.8 4zM29.9.1l-9.3 4.5L0 66.7l10-7.2L29.9.1z"
    />
    <path className="st1" d="M10 59.5 0 66.7h36.7l-5.3-7.2H10z" />
    <path
      className="st2"
      d="m42 50.1-8.6 3.5-2 5.9 5.3 7.2L42 50.1zM41 0 24.5 43.4l9-3.1L41 21V0z"
    />
    <linearGradient
      id="a"
      x1={54.995}
      x2={54.995}
      y1={453.29}
      y2={373.391}
      gradientTransform="matrix(1 0 0 -1 0 453.309)"
      gradientUnits="userSpaceOnUse"
    >
      <stop
        offset={0}
        style={{
          stopColor: "#1565c0",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#1565c0",
        }}
      />
    </linearGradient>
    <path
      className="st2"
      d="M41 21V0l28 79.9-9.9-7.2L41 21z"
      style={{
        fill: "url(#a)",
      }}
    />
    <path className="st1" d="M31.4 79.9H69l-9.9-7.2H24.5l6.9 7.2z" />
  </svg>
);
