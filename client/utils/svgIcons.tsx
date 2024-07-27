import React from "react";
import { SvgProps } from "./interfaces";

export function AnimatedCircleIcon(props: SvgProps) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
      <radialGradient
        id="a9"
        cx=".66"
        fx=".66"
        cy=".3125"
        fy=".3125"
        gradientTransform="scale(1.5)"
      >
        <stop offset="0" stopColor="#FFFFFF"></stop>
        <stop offset=".3" stopColor="#FFFFFF" stopOpacity=".9"></stop>
        <stop offset=".6" stopColor="#FFFFFF" stopOpacity=".6"></stop>
        <stop offset=".8" stopColor="#FFFFFF" stopOpacity=".3"></stop>
        <stop offset="1" stopColor="#FFFFFF" stopOpacity="0"></stop>
      </radialGradient>
      <circle
        transformOrigin="center"
        fill="none"
        stroke="url(#a9)"
        strokeWidth="10"
        strokeLinecap="round"
        strokeDasharray="200 1000"
        strokeDashoffset="0"
        cx="100"
        cy="100"
        r="70"
      >
        <animateTransform
          type="rotate"
          attributeName="transform"
          calcMode="spline"
          dur="2s"
          values="360;0"
          keyTimes="0;1"
          keySplines="0 0 1 1"
          repeatCount="indefinite"
        ></animateTransform>
      </circle>
      <circle
        transformOrigin="center"
        fill="none"
        opacity=".2"
        stroke="#FFFFFF"
        strokeWidth="10"
        strokeLinecap="round"
        cx="100"
        cy="100"
        r="70"
      ></circle>
    </svg>
  );
}

export function GithubIcon(props: SvgProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export function ChromeIcon(props: SvgProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
  );
}

export function HomeIcon(props: SvgProps) {
  return (
    <svg
      {...props}
      fill="#808080"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#808080"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <title>ionicons-v5-i</title>
        <polygon points="416 174.74 416 48 336 48 336 106.45 256 32 0 272 64 272 64 480 208 480 208 320 304 320 304 480 448 480 448 272 512 272 416 174.74"></polygon>
      </g>
    </svg>
  );
}

export function HomeIconActive(props: SvgProps) {
  return (
    <svg
      {...props}
      fill="#ffffff"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#ffffff"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <title>ionicons-v5-i</title>
        <polygon points="416 174.74 416 48 336 48 336 106.45 256 32 0 272 64 272 64 480 208 480 208 320 304 320 304 480 448 480 448 272 512 272 416 174.74"></polygon>
      </g>
    </svg>
  );
}
export function AlertIcon(props: SvgProps) {
  return (
    <svg
      {...props}
      viewBox="-1 0 30 30"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      fill="#808080"
      stroke="#808080"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <title>alert</title> <desc>Created with Sketch Beta.</desc>
        <g
          id="Page-1"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="Icon-Set"
            transform="translate(-362.000000, -880.000000)"
            fill="#808080"
          >
            <path
              d="M365,904 L368,898 L368,890 C368,885.582 371.582,882 376,882 C380.418,882 384,885.582 384,890 L384,898 L387,904 L365,904 L365,904 Z M376,908 C374.695,908 373.597,907.163 373.184,906 L378.816,906 C378.403,907.163 377.305,908 376,908 L376,908 Z M386,898 L386,890 C386,884.478 381.522,880 376,880 C370.478,880 366,884.478 366,890 L366,898 L362,906 L371.101,906 C371.564,908.282 373.581,910 376,910 C378.419,910 380.436,908.282 380.899,906 L390,906 L386,898 L386,898 Z"
              id="alert"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  );
}

export function AlertIconActive(props: SvgProps) {
  return (
    <svg
      {...props}
      viewBox="-1 0 30 30"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      fill="#ffffff"
      stroke="#ffffff"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <title>alert</title> <desc>Created with Sketch Beta.</desc>
        <g
          id="Page-1"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="Icon-Set"
            transform="translate(-362.000000, -880.000000)"
            fill="#ffffff"
          >
            <path
              d="M365,904 L368,898 L368,890 C368,885.582 371.582,882 376,882 C380.418,882 384,885.582 384,890 L384,898 L387,904 L365,904 L365,904 Z M376,908 C374.695,908 373.597,907.163 373.184,906 L378.816,906 C378.403,907.163 377.305,908 376,908 L376,908 Z M386,898 L386,890 C386,884.478 381.522,880 376,880 C370.478,880 366,884.478 366,890 L366,898 L362,906 L371.101,906 C371.564,908.282 373.581,910 376,910 C378.419,910 380.436,908.282 380.899,906 L390,906 L386,898 L386,898 Z"
              id="alert"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  );
}

export function GroupsIcon(props: SvgProps) {
  return (
    <svg
      {...props}
      fill="#808080"
      viewBox="0 0 36.00 36.00"
      version="1.1"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#808080"
      strokeWidth="0.00036"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <title>group-line</title>{" "}
        <path
          className="clr-i-outline clr-i-outline-path-1"
          d="M17.9,17.3c2.7,0,4.8-2.2,4.8-4.9c0-2.7-2.2-4.8-4.9-4.8c-2.7,0-4.8,2.2-4.8,4.8C13,15.1,15.2,17.3,17.9,17.3z M17.8,9.6C17.9,9.6,17.9,9.6,17.8,9.6c1.6,0,2.9,1.3,2.9,2.9s-1.3,2.8-2.9,2.8c-1.6,0-2.8-1.3-2.8-2.8C15,10.9,16.3,9.6,17.8,9.6z"
        ></path>
        <path
          className="clr-i-outline clr-i-outline-path-2"
          d="M32.7,16.7c-1.9-1.7-4.4-2.6-7-2.5c-0.3,0-0.5,0-0.8,0c-0.2,0.8-0.5,1.5-0.9,2.1c0.6-0.1,1.1-0.1,1.7-0.1c1.9-0.1,3.8,0.5,5.3,1.6V25h2v-8L32.7,16.7z"
        ></path>
        <path
          className="clr-i-outline clr-i-outline-path-3"
          d="M23.4,7.8c0.5-1.2,1.9-1.8,3.2-1.3c1.2,0.5,1.8,1.9,1.3,3.2c-0.4,0.9-1.3,1.5-2.2,1.5c-0.2,0-0.5,0-0.7-0.1c0.1,0.5,0.1,1,0.1,1.4c0,0.2,0,0.4,0,0.6c0.2,0,0.4,0.1,0.6,0.1c2.5,0,4.5-2,4.5-4.4c0-2.5-2-4.5-4.4-4.5c-1.6,0-3,0.8-3.8,2.2C22.5,6.8,23,7.2,23.4,7.8z"
        ></path>
        <path
          className="clr-i-outline clr-i-outline-path-4"
          d="M12,16.4c-0.4-0.6-0.7-1.3-0.9-2.1c-0.3,0-0.5,0-0.8,0c-2.6-0.1-5.1,0.8-7,2.4L3,17v8h2v-7.2c1.6-1.1,3.4-1.7,5.3-1.6C10.9,16.2,11.5,16.3,12,16.4z"
        ></path>
        <path
          className="clr-i-outline clr-i-outline-path-5"
          d="M10.3,13.1c0.2,0,0.4,0,0.6-0.1c0-0.2,0-0.4,0-0.6c0-0.5,0-1,0.1-1.4c-0.2,0.1-0.5,0.1-0.7,0.1c-1.3,0-2.4-1.1-2.4-2.4c0-1.3,1.1-2.4,2.4-2.4c1,0,1.9,0.6,2.3,1.5c0.4-0.5,1-1,1.5-1.4c-1.3-2.1-4-2.8-6.1-1.5c-2.1,1.3-2.8,4-1.5,6.1C7.3,12.3,8.7,13.1,10.3,13.1z"
        ></path>
        <path
          className="clr-i-outline clr-i-outline-path-6"
          d="M26.1,22.7l-0.2-0.3c-2-2.2-4.8-3.5-7.8-3.4c-3-0.1-5.9,1.2-7.9,3.4L10,22.7v7.6c0,0.9,0.7,1.7,1.7,1.7c0,0,0,0,0,0h12.8c0.9,0,1.7-0.8,1.7-1.7c0,0,0,0,0,0V22.7z M24.1,30H12v-6.6c1.6-1.6,3.8-2.4,6.1-2.4c2.2-0.1,4.4,0.8,6,2.4V30z"
        ></path>{" "}
        <rect x="0" y="0" width="36" height="36" fillOpacity="0"></rect>{" "}
      </g>
    </svg>
  );
}

export function GroupsIconActive(props: SvgProps) {
  return (
    <svg
      {...props}
      fill="#ffffff"
      viewBox="0 0 36.00 36.00"
      version="1.1"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#ffffff"
      strokeWidth="0.00036"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <title>group-line</title>{" "}
        <path
          className="clr-i-outline clr-i-outline-path-1"
          d="M17.9,17.3c2.7,0,4.8-2.2,4.8-4.9c0-2.7-2.2-4.8-4.9-4.8c-2.7,0-4.8,2.2-4.8,4.8C13,15.1,15.2,17.3,17.9,17.3z M17.8,9.6C17.9,9.6,17.9,9.6,17.8,9.6c1.6,0,2.9,1.3,2.9,2.9s-1.3,2.8-2.9,2.8c-1.6,0-2.8-1.3-2.8-2.8C15,10.9,16.3,9.6,17.8,9.6z"
        ></path>
        <path
          className="clr-i-outline clr-i-outline-path-2"
          d="M32.7,16.7c-1.9-1.7-4.4-2.6-7-2.5c-0.3,0-0.5,0-0.8,0c-0.2,0.8-0.5,1.5-0.9,2.1c0.6-0.1,1.1-0.1,1.7-0.1c1.9-0.1,3.8,0.5,5.3,1.6V25h2v-8L32.7,16.7z"
        ></path>
        <path
          className="clr-i-outline clr-i-outline-path-3"
          d="M23.4,7.8c0.5-1.2,1.9-1.8,3.2-1.3c1.2,0.5,1.8,1.9,1.3,3.2c-0.4,0.9-1.3,1.5-2.2,1.5c-0.2,0-0.5,0-0.7-0.1c0.1,0.5,0.1,1,0.1,1.4c0,0.2,0,0.4,0,0.6c0.2,0,0.4,0.1,0.6,0.1c2.5,0,4.5-2,4.5-4.4c0-2.5-2-4.5-4.4-4.5c-1.6,0-3,0.8-3.8,2.2C22.5,6.8,23,7.2,23.4,7.8z"
        ></path>
        <path
          className="clr-i-outline clr-i-outline-path-4"
          d="M12,16.4c-0.4-0.6-0.7-1.3-0.9-2.1c-0.3,0-0.5,0-0.8,0c-2.6-0.1-5.1,0.8-7,2.4L3,17v8h2v-7.2c1.6-1.1,3.4-1.7,5.3-1.6C10.9,16.2,11.5,16.3,12,16.4z"
        ></path>
        <path
          className="clr-i-outline clr-i-outline-path-5"
          d="M10.3,13.1c0.2,0,0.4,0,0.6-0.1c0-0.2,0-0.4,0-0.6c0-0.5,0-1,0.1-1.4c-0.2,0.1-0.5,0.1-0.7,0.1c-1.3,0-2.4-1.1-2.4-2.4c0-1.3,1.1-2.4,2.4-2.4c1,0,1.9,0.6,2.3,1.5c0.4-0.5,1-1,1.5-1.4c-1.3-2.1-4-2.8-6.1-1.5c-2.1,1.3-2.8,4-1.5,6.1C7.3,12.3,8.7,13.1,10.3,13.1z"
        ></path>
        <path
          className="clr-i-outline clr-i-outline-path-6"
          d="M26.1,22.7l-0.2-0.3c-2-2.2-4.8-3.5-7.8-3.4c-3-0.1-5.9,1.2-7.9,3.4L10,22.7v7.6c0,0.9,0.7,1.7,1.7,1.7c0,0,0,0,0,0h12.8c0.9,0,1.7-0.8,1.7-1.7c0,0,0,0,0,0V22.7z M24.1,30H12v-6.6c1.6-1.6,3.8-2.4,6.1-2.4c2.2-0.1,4.4,0.8,6,2.4V30z"
        ></path>{" "}
        <rect x="0" y="0" width="36" height="36" fillOpacity="0"></rect>{" "}
      </g>
    </svg>
  );
}

export function ChatIcon(props: SvgProps) {
  return (
    <svg
      {...props}
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      fill="#808080"
      stroke="#808080"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          fill="#808080"
          d="M273.536 736H800a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H224a64 64 0 0 0-64 64v570.88L273.536 736zM296 800 147.968 918.4A32 32 0 0 1 96 893.44V256a128 128 0 0 1 128-128h576a128 128 0 0 1 128 128v416a128 128 0 0 1-128 128H296z"
        ></path>
        <path
          fill="#808080"
          d="M512 499.2a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4zm192 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4zm-384 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4z"
        ></path>
      </g>
    </svg>
  );
}
export function ChatIconActive(props: SvgProps) {
  return (
    <svg
      {...props}
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      fill="#ffffff"
      stroke="#ffffff"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          fill="#ffffff"
          d="M273.536 736H800a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H224a64 64 0 0 0-64 64v570.88L273.536 736zM296 800 147.968 918.4A32 32 0 0 1 96 893.44V256a128 128 0 0 1 128-128h576a128 128 0 0 1 128 128v416a128 128 0 0 1-128 128H296z"
        ></path>
        <path
          fill="#ffffff"
          d="M512 499.2a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4zm192 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4zm-384 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4z"
        ></path>
      </g>
    </svg>
  );
}

export function BookmarksIcon(props: SvgProps) {
  return (
    <svg
      {...props}
      fill="#808080"
      viewBox="0 0 256 256"
      id="Flat"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path d="M192,28H96A12.01343,12.01343,0,0,0,84,40V60H64A12.01343,12.01343,0,0,0,52,72V224a4.00021,4.00021,0,0,0,6.3252,3.25488L111.99268,188.916l53.68261,38.33886A3.99976,3.99976,0,0,0,172,224V176.91748l25.67529,18.3374A3.99976,3.99976,0,0,0,204,192V40A12.01343,12.01343,0,0,0,192,28ZM164,216.22754l-49.68262-35.48242a3.99976,3.99976,0,0,0-4.6499,0L60,216.22656V72a4.00427,4.00427,0,0,1,4-4h96a4.00427,4.00427,0,0,1,4,4Zm32-32-24-17.14038V72a12.01343,12.01343,0,0,0-12-12H92V40a4.00427,4.00427,0,0,1,4-4h96a4.00427,4.00427,0,0,1,4,4Z"></path>{" "}
      </g>
    </svg>
  );
}

export function BookmarksIconActive(props: SvgProps) {
  return (
    <svg
      {...props}
      fill="#ffffff"
      viewBox="0 0 256 256"
      id="Flat"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path d="M192,28H96A12.01343,12.01343,0,0,0,84,40V60H64A12.01343,12.01343,0,0,0,52,72V224a4.00021,4.00021,0,0,0,6.3252,3.25488L111.99268,188.916l53.68261,38.33886A3.99976,3.99976,0,0,0,172,224V176.91748l25.67529,18.3374A3.99976,3.99976,0,0,0,204,192V40A12.01343,12.01343,0,0,0,192,28ZM164,216.22754l-49.68262-35.48242a3.99976,3.99976,0,0,0-4.6499,0L60,216.22656V72a4.00427,4.00427,0,0,1,4-4h96a4.00427,4.00427,0,0,1,4,4Zm32-32-24-17.14038V72a12.01343,12.01343,0,0,0-12-12H92V40a4.00427,4.00427,0,0,1,4-4h96a4.00427,4.00427,0,0,1,4,4Z"></path>{" "}
      </g>
    </svg>
  );
}

export function SettingsIcon(props: SvgProps) {
  return (
    <svg
      {...props}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="3"
      stroke="#808080"
      fill="none"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path d="M45,14.67l-2.76,2a1,1,0,0,1-1,.11L37.65,15.3a1,1,0,0,1-.61-.76l-.66-3.77a1,1,0,0,0-1-.84H30.52a1,1,0,0,0-1,.77l-.93,3.72a1,1,0,0,1-.53.65l-3.3,1.66a1,1,0,0,1-1-.08l-3-2.13a1,1,0,0,0-1.31.12l-3.65,3.74a1,1,0,0,0-.13,1.26l1.87,2.88a1,1,0,0,1,.1.89L16.34,27a1,1,0,0,1-.68.63l-3.85,1.06a1,1,0,0,0-.74,1v4.74a1,1,0,0,0,.8,1l3.9.8a1,1,0,0,1,.72.57l1.42,3.15a1,1,0,0,1-.05.92l-2.13,3.63a1,1,0,0,0,.17,1.24L19.32,49a1,1,0,0,0,1.29.09L23.49,47a1,1,0,0,1,1-.1l3.74,1.67a1,1,0,0,1,.59.75l.66,3.79a1,1,0,0,0,1,.84h4.89a1,1,0,0,0,1-.86l.58-4a1,1,0,0,1,.58-.77l3.58-1.62a1,1,0,0,1,1,.09l3.14,2.12a1,1,0,0,0,1.3-.15L50,45.06a1,1,0,0,0,.09-1.27l-2.08-3a1,1,0,0,1-.09-1l1.48-3.43a1,1,0,0,1,.71-.59L53.77,35a1,1,0,0,0,.8-1V29.42a1,1,0,0,0-.8-1l-3.72-.78a1,1,0,0,1-.73-.62l-1.45-3.65a1,1,0,0,1,.11-.94l2.15-3.14A1,1,0,0,0,50,18l-3.71-3.25A1,1,0,0,0,45,14.67Z"></path>
        <circle cx="32.82" cy="31.94" r="9.94"></circle>
      </g>
    </svg>
  );
}

export function SettingsIconActive(props: SvgProps) {
  return (
    <svg
      {...props}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="3"
      stroke="#ffffff"
      fill="none"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path d="M45,14.67l-2.76,2a1,1,0,0,1-1,.11L37.65,15.3a1,1,0,0,1-.61-.76l-.66-3.77a1,1,0,0,0-1-.84H30.52a1,1,0,0,0-1,.77l-.93,3.72a1,1,0,0,1-.53.65l-3.3,1.66a1,1,0,0,1-1-.08l-3-2.13a1,1,0,0,0-1.31.12l-3.65,3.74a1,1,0,0,0-.13,1.26l1.87,2.88a1,1,0,0,1,.1.89L16.34,27a1,1,0,0,1-.68.63l-3.85,1.06a1,1,0,0,0-.74,1v4.74a1,1,0,0,0,.8,1l3.9.8a1,1,0,0,1,.72.57l1.42,3.15a1,1,0,0,1-.05.92l-2.13,3.63a1,1,0,0,0,.17,1.24L19.32,49a1,1,0,0,0,1.29.09L23.49,47a1,1,0,0,1,1-.1l3.74,1.67a1,1,0,0,1,.59.75l.66,3.79a1,1,0,0,0,1,.84h4.89a1,1,0,0,0,1-.86l.58-4a1,1,0,0,1,.58-.77l3.58-1.62a1,1,0,0,1,1,.09l3.14,2.12a1,1,0,0,0,1.3-.15L50,45.06a1,1,0,0,0,.09-1.27l-2.08-3a1,1,0,0,1-.09-1l1.48-3.43a1,1,0,0,1,.71-.59L53.77,35a1,1,0,0,0,.8-1V29.42a1,1,0,0,0-.8-1l-3.72-.78a1,1,0,0,1-.73-.62l-1.45-3.65a1,1,0,0,1,.11-.94l2.15-3.14A1,1,0,0,0,50,18l-3.71-3.25A1,1,0,0,0,45,14.67Z"></path>
        <circle cx="32.82" cy="31.94" r="9.94"></circle>
      </g>
    </svg>
  );
}

export function GuestProfileIcon(props: SvgProps) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#808080"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M12.12 12.78C12.05 12.77 11.96 12.77 11.88 12.78C10.12 12.72 8.71997 11.28 8.71997 9.50998C8.71997 7.69998 10.18 6.22998 12 6.22998C13.81 6.22998 15.28 7.69998 15.28 9.50998C15.27 11.28 13.88 12.72 12.12 12.78Z"
          stroke="#808080"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{" "}
        <path
          d="M18.74 19.3801C16.96 21.0101 14.6 22.0001 12 22.0001C9.40001 22.0001 7.04001 21.0101 5.26001 19.3801C5.36001 18.4401 5.96001 17.5201 7.03001 16.8001C9.77001 14.9801 14.25 14.9801 16.97 16.8001C18.04 17.5201 18.64 18.4401 18.74 19.3801Z"
          stroke="#808080"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{" "}
        <path
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          stroke="#808080"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{" "}
      </g>
    </svg>
  );
}

export function Heart(props: SvgProps) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#ebedf0"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
          stroke="#ebedf0"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{" "}
      </g>
    </svg>
  );
}

export function HeartFilled(props: SvgProps) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"
          fill="#e40c0c"
        ></path>{" "}
      </g>
    </svg>
  );
}

export function CommentIcon(props: SvgProps) {
  return (
    <svg
      {...props}
      viewBox="0 0 32 32"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      fill="#ebedf0"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <title>comment-2</title> <desc>Created with Sketch Beta.</desc>{" "}
        <defs> </defs>{" "}
        <g
          id="Page-1"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          {" "}
          <g
            id="Icon-Set"
            transform="translate(-152.000000, -255.000000)"
            fill="#ebedf0"
          >
            {" "}
            <path
              d="M168,281 C166.832,281 165.704,280.864 164.62,280.633 L159.912,283.463 L159.975,278.824 C156.366,276.654 154,273.066 154,269 C154,262.373 160.268,257 168,257 C175.732,257 182,262.373 182,269 C182,275.628 175.732,281 168,281 L168,281 Z M168,255 C159.164,255 152,261.269 152,269 C152,273.419 154.345,277.354 158,279.919 L158,287 L165.009,282.747 C165.979,282.907 166.977,283 168,283 C176.836,283 184,276.732 184,269 C184,261.269 176.836,255 168,255 L168,255 Z M175,266 L161,266 C160.448,266 160,266.448 160,267 C160,267.553 160.448,268 161,268 L175,268 C175.552,268 176,267.553 176,267 C176,266.448 175.552,266 175,266 L175,266 Z M173,272 L163,272 C162.448,272 162,272.447 162,273 C162,273.553 162.448,274 163,274 L173,274 C173.552,274 174,273.553 174,273 C174,272.447 173.552,272 173,272 L173,272 Z"
              id="comment-2"
            >
              {" "}
            </path>{" "}
          </g>{" "}
        </g>{" "}
      </g>
    </svg>
  );
}
export function ShareIcon(props: SvgProps) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1 18.5088C1 13.1679 4.90169 8.77098 9.99995 7.84598V5.51119C9.99995 3.63887 12.1534 2.58563 13.6313 3.73514L21.9742 10.224C23.1323 11.1248 23.1324 12.8752 21.9742 13.7761L13.6314 20.2649C12.1534 21.4144 10 20.3612 10 18.4888V16.5189C7.74106 16.9525 5.9625 18.1157 4.92778 19.6838C4.33222 20.5863 3.30568 20.7735 2.55965 20.5635C1.80473 20.3511 1.00011 19.6306 1 18.5088ZM12.4034 5.31385C12.2392 5.18613 11.9999 5.30315 11.9999 5.51119V9.41672C11.9999 9.55479 11.8873 9.66637 11.7493 9.67008C8.09094 9.76836 4.97774 12.0115 3.66558 15.1656C3.46812 15.6402 3.31145 16.1354 3.19984 16.6471C3.07554 17.217 3.00713 17.8072 3.00053 18.412C3.00018 18.4442 3 18.4765 3 18.5088C3.00001 18.6437 3.18418 18.6948 3.25846 18.5822C3.27467 18.5577 3.29101 18.5332 3.30747 18.5088C3.30748 18.5088 3.30746 18.5088 3.30747 18.5088C3.63446 18.0244 4.01059 17.5765 4.42994 17.168C4.71487 16.8905 5.01975 16.6313 5.34276 16.3912C7.05882 15.1158 9.28642 14.3823 11.7496 14.3357C11.8877 14.3331 12 14.4453 12 14.5834V18.4888C12 18.6969 12.2393 18.8139 12.4035 18.6862L20.7463 12.1973C20.875 12.0973 20.875 11.9028 20.7463 11.8027L12.4034 5.31385Z"
          fill="#ebedf0"
        ></path>{" "}
      </g>
    </svg>
  );
}
export function SaveIcon(props: SvgProps) {
  return (
    <svg
      {...props}
      fill="#ebedf0"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <g id="Bookmark">
          {" "}
          <path d="M17.6,21.945a1.483,1.483,0,0,1-1.01-.4l-4.251-3.9a.5.5,0,0,0-.68,0L7.409,21.545a1.5,1.5,0,0,1-2.516-1.1V4.57a2.5,2.5,0,0,1,2.5-2.5h9.214a2.5,2.5,0,0,1,2.5,2.5V20.442a1.481,1.481,0,0,1-.9,1.374A1.507,1.507,0,0,1,17.6,21.945ZM12,16.51a1.5,1.5,0,0,1,1.018.395l4.251,3.9a.5.5,0,0,0,.839-.368V4.57a1.5,1.5,0,0,0-1.5-1.5H7.393a1.5,1.5,0,0,0-1.5,1.5V20.442a.5.5,0,0,0,.839.368L10.983,16.9A1.5,1.5,0,0,1,12,16.51Z"></path>{" "}
        </g>{" "}
      </g>
    </svg>
  );
}

export function WriteIcon(props: SvgProps) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.186 2.09c.521.25 1.136.612 1.625 1.101.49.49.852 1.104 1.1 1.625.313.654.11 1.408-.401 1.92l-7.214 7.213c-.31.31-.688.541-1.105.675l-4.222 1.353a.75.75 0 0 1-.943-.944l1.353-4.221a2.75 2.75 0 0 1 .674-1.105l7.214-7.214c.512-.512 1.266-.714 1.92-.402zm.211 2.516a3.608 3.608 0 0 0-.828-.586l-6.994 6.994a1.002 1.002 0 0 0-.178.241L9.9 14.102l2.846-1.496c.09-.047.171-.107.242-.178l6.994-6.994a3.61 3.61 0 0 0-.586-.828zM4.999 5.5A.5.5 0 0 1 5.47 5l5.53.005a1 1 0 0 0 0-2L5.5 3A2.5 2.5 0 0 0 3 5.5v12.577c0 .76.082 1.185.319 1.627.224.419.558.754.977.978.442.236.866.318 1.627.318h12.154c.76 0 1.185-.082 1.627-.318.42-.224.754-.559.978-.978.236-.442.318-.866.318-1.627V13a1 1 0 1 0-2 0v5.077c0 .459-.021.571-.082.684a.364.364 0 0 1-.157.157c-.113.06-.225.082-.684.082H5.923c-.459 0-.57-.022-.684-.082a.363.363 0 0 1-.157-.157c-.06-.113-.082-.225-.082-.684V5.5z"
          fill="#ebedf0"
        ></path>
      </g>
    </svg>
  );
}
export function AddImageIcon(props: SvgProps) {
  return (
    <svg
      {...props}
      viewBox="0 0 32 32"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      fill="#ebedf0"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <title>image-picture</title> <desc>Created with Sketch Beta.</desc>{" "}
        <defs> </defs>{" "}
        <g
          id="Page-1"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          {" "}
          <g
            id="Icon-Set"
            transform="translate(-360.000000, -99.000000)"
            fill="#ebedf0"
          >
            {" "}
            <path
              d="M368,109 C366.896,109 366,108.104 366,107 C366,105.896 366.896,105 368,105 C369.104,105 370,105.896 370,107 C370,108.104 369.104,109 368,109 L368,109 Z M368,103 C365.791,103 364,104.791 364,107 C364,109.209 365.791,111 368,111 C370.209,111 372,109.209 372,107 C372,104.791 370.209,103 368,103 L368,103 Z M390,116.128 L384,110 L374.059,120.111 L370,116 L362,123.337 L362,103 C362,101.896 362.896,101 364,101 L388,101 C389.104,101 390,101.896 390,103 L390,116.128 L390,116.128 Z M390,127 C390,128.104 389.104,129 388,129 L382.832,129 L375.464,121.535 L384,112.999 L390,118.999 L390,127 L390,127 Z M364,129 C362.896,129 362,128.104 362,127 L362,126.061 L369.945,118.945 L380.001,129 L364,129 L364,129 Z M388,99 L364,99 C361.791,99 360,100.791 360,103 L360,127 C360,129.209 361.791,131 364,131 L388,131 C390.209,131 392,129.209 392,127 L392,103 C392,100.791 390.209,99 388,99 L388,99 Z"
              id="image-picture"
            >
              {" "}
            </path>{" "}
          </g>{" "}
        </g>{" "}
      </g>
    </svg>
  );
}
export function AddGifIcon(props: SvgProps) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M17.61 21.71H6.39C5.29996 21.71 4.25456 21.277 3.48379 20.5062C2.71302 19.7354 2.28 18.69 2.28 17.6V6.38C2.28 5.28996 2.71302 4.24457 3.48379 3.4738C4.25456 2.70302 5.29996 2.27 6.39 2.27H17.61C18.7 2.27 19.7454 2.70302 20.5162 3.4738C21.287 4.24457 21.72 5.28996 21.72 6.38V17.6C21.72 18.69 21.287 19.7354 20.5162 20.5062C19.7454 21.277 18.7 21.71 17.61 21.71ZM6.39 3.77C5.69778 3.77 5.03392 4.04499 4.54445 4.53446C4.05498 5.02393 3.78 5.68779 3.78 6.38V17.6C3.78 18.2922 4.05498 18.9561 4.54445 19.4456C5.03392 19.935 5.69778 20.21 6.39 20.21H17.61C18.3022 20.21 18.9661 19.935 19.4555 19.4456C19.945 18.9561 20.22 18.2922 20.22 17.6V6.38C20.22 5.68779 19.945 5.02393 19.4555 4.53446C18.9661 4.04499 18.3022 3.77 17.61 3.77H6.39Z"
          fill="#ebedf0"
        ></path>{" "}
        <path
          d="M7.86 14.9C7.09087 14.9 6.35325 14.5945 5.80939 14.0506C5.26553 13.5068 4.96 12.7691 4.96 12C4.96 11.2309 5.26553 10.4933 5.80939 9.9494C6.35325 9.40554 7.09087 9.10001 7.86 9.10001C8.05891 9.10001 8.24968 9.17902 8.39033 9.31968C8.53098 9.46033 8.61 9.65109 8.61 9.85001C8.61 10.0489 8.53098 10.2397 8.39033 10.3803C8.24968 10.521 8.05891 10.6 7.86 10.6C7.61706 10.6014 7.37866 10.6659 7.16823 10.7873C6.9578 10.9087 6.78259 11.0828 6.65981 11.2924C6.53703 11.5021 6.47091 11.74 6.46796 11.983C6.465 12.2259 6.52531 12.4654 6.64296 12.6779C6.76061 12.8905 6.93154 13.0688 7.13895 13.1953C7.34637 13.3218 7.58313 13.3921 7.82596 13.3994C8.06879 13.4066 8.30934 13.3506 8.52395 13.2367C8.73856 13.1229 8.91985 12.9551 9.05 12.75H8.59C8.39109 12.75 8.20032 12.671 8.05967 12.5303C7.91902 12.3897 7.84 12.1989 7.84 12C7.84 11.8011 7.91902 11.6103 8.05967 11.4697C8.20032 11.329 8.39109 11.25 8.59 11.25H10C10.1981 11.2526 10.3874 11.3324 10.5275 11.4725C10.6676 11.6126 10.7474 11.8019 10.75 12C10.7474 12.7666 10.4424 13.5012 9.90125 14.0442C9.36012 14.5872 8.62658 14.8947 7.86 14.9Z"
          fill="#ebedf0"
        ></path>{" "}
        <path
          d="M12.65 14.89C12.5511 14.8914 12.453 14.8729 12.3614 14.8357C12.2698 14.7984 12.1866 14.7433 12.1167 14.6733C12.0468 14.6034 11.9916 14.5202 11.9544 14.4286C11.9171 14.337 11.8987 14.2389 11.9 14.14V9.84001C11.9 9.6411 11.979 9.45033 12.1197 9.30968C12.2603 9.16903 12.4511 9.09001 12.65 9.09001C12.8489 9.09001 13.0397 9.16903 13.1803 9.30968C13.321 9.45033 13.4 9.6411 13.4 9.84001V14.14C13.4 14.3389 13.321 14.5297 13.1803 14.6703C13.0397 14.811 12.8489 14.89 12.65 14.89Z"
          fill="#ebedf0"
        ></path>{" "}
        <path
          d="M15.33 14.9C15.1319 14.8974 14.9426 14.8176 14.8025 14.6775C14.6624 14.5374 14.5826 14.3481 14.58 14.15V9.85001C14.58 9.65109 14.659 9.46033 14.7997 9.31968C14.9403 9.17902 15.1311 9.10001 15.33 9.10001C15.5289 9.10001 15.7197 9.17902 15.8603 9.31968C16.001 9.46033 16.08 9.65109 16.08 9.85001V14.15C16.08 14.2485 16.0606 14.346 16.0229 14.437C15.9852 14.528 15.93 14.6107 15.8603 14.6803C15.7907 14.75 15.708 14.8052 15.617 14.8429C15.526 14.8806 15.4285 14.9 15.33 14.9Z"
          fill="#ebedf0"
        ></path>{" "}
        <path
          d="M17.93 12.81H15.33C15.1311 12.81 14.9403 12.731 14.7997 12.5903C14.659 12.4497 14.58 12.2589 14.58 12.06C14.58 11.8611 14.659 11.6703 14.7997 11.5297C14.9403 11.389 15.1311 11.31 15.33 11.31H17.93C18.1289 11.31 18.3197 11.389 18.4603 11.5297C18.601 11.6703 18.68 11.8611 18.68 12.06C18.68 12.2589 18.601 12.4497 18.4603 12.5903C18.3197 12.731 18.1289 12.81 17.93 12.81Z"
          fill="#ebedf0"
        ></path>{" "}
        <path
          d="M17.93 10.6H15.33C15.1311 10.6 14.9403 10.521 14.7997 10.3803C14.659 10.2397 14.58 10.0489 14.58 9.85001C14.58 9.65109 14.659 9.46033 14.7997 9.31968C14.9403 9.17902 15.1311 9.10001 15.33 9.10001H17.93C18.1289 9.10001 18.3197 9.17902 18.4603 9.31968C18.601 9.46033 18.68 9.65109 18.68 9.85001C18.68 10.0489 18.601 10.2397 18.4603 10.3803C18.3197 10.521 18.1289 10.6 17.93 10.6Z"
          fill="#ebedf0"
        ></path>{" "}
      </g>
    </svg>
  );
}
export function AddEmojiIcon(props: SvgProps) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M9 14C9.18131 14.4723 9.47841 14.8915 9.864 15.219C11.0903 16.2483 12.8748 16.2613 14.116 15.25C14.5069 14.9283 14.8109 14.5136 15 14.044"
          stroke="#ebedf0"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{" "}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12C5 8.13401 8.13401 5 12 5C13.8565 5 15.637 5.7375 16.9497 7.05025C18.2625 8.36301 19 10.1435 19 12Z"
          stroke="#ebedf0"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{" "}
        <path
          d="M9 11V10"
          stroke="#ebedf0"
          strokeWidth="1.5"
          strokeLinecap="round"
        ></path>{" "}
        <path
          d="M15 11V10"
          stroke="#ebedf0"
          strokeWidth="1.5"
          strokeWinecap="round"
        ></path>{" "}
      </g>
    </svg>
  );
}
export function ArrowDownIcon(props: SvgProps) {
  return (
    <svg
      {...props}
      viewBox="0 -4.5 20 20"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      fill="#87898b"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <title>arrow_down [#87898b]</title> <desc>Created with Sketch.</desc>{" "}
        <defs> </defs>{" "}
        <g
          id="Page-1"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fill-rule="evenodd"
        >
          {" "}
          <g
            id="Dribbble-Light-Preview"
            transform="translate(-220.000000, -6684.000000)"
            fill="#87898b"
          >
            {" "}
            <g id="icons" transform="translate(56.000000, 160.000000)">
              {" "}
              <path
                d="M164.292308,6524.36583 L164.292308,6524.36583 C163.902564,6524.77071 163.902564,6525.42619 164.292308,6525.83004 L172.555873,6534.39267 C173.33636,6535.20244 174.602528,6535.20244 175.383014,6534.39267 L183.70754,6525.76791 C184.093286,6525.36716 184.098283,6524.71997 183.717533,6524.31405 C183.328789,6523.89985 182.68821,6523.89467 182.29347,6524.30266 L174.676479,6532.19636 C174.285736,6532.60124 173.653152,6532.60124 173.262409,6532.19636 L165.705379,6524.36583 C165.315635,6523.96094 164.683051,6523.96094 164.292308,6524.36583"
                id="arrow_down-[#87898b]"
              >
                {" "}
              </path>{" "}
            </g>{" "}
          </g>{" "}
        </g>{" "}
      </g>
    </svg>
  );
}
export function ArrowRightIcon(props: SvgProps) {
  return (
    <svg
      {...props}
      viewBox="-4.5 0 20 20"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      fill="#87898b"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <title>arrow_right [#336]</title> <desc>Created with Sketch.</desc>{" "}
        <defs> </defs>{" "}
        <g
          id="Page-1"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fill-rule="evenodd"
        >
          {" "}
          <g
            id="Dribbble-Light-Preview"
            transform="translate(-305.000000, -6679.000000)"
            fill="#87898b"
          >
            {" "}
            <g id="icons" transform="translate(56.000000, 160.000000)">
              {" "}
              <path
                d="M249.365851,6538.70769 L249.365851,6538.70769 C249.770764,6539.09744 250.426289,6539.09744 250.830166,6538.70769 L259.393407,6530.44413 C260.202198,6529.66364 260.202198,6528.39747 259.393407,6527.61699 L250.768031,6519.29246 C250.367261,6518.90671 249.720021,6518.90172 249.314072,6519.28247 L249.314072,6519.28247 C248.899839,6519.67121 248.894661,6520.31179 249.302681,6520.70653 L257.196934,6528.32352 C257.601847,6528.71426 257.601847,6529.34685 257.196934,6529.73759 L249.365851,6537.29462 C248.960938,6537.68437 248.960938,6538.31795 249.365851,6538.70769"
                id="arrow_right-[#336]"
              >
                {" "}
              </path>{" "}
            </g>{" "}
          </g>{" "}
        </g>{" "}
      </g>
    </svg>
  );
}
export function PlusIcon(props: SvgProps) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M4 12H20M12 4V20"
          stroke="#87898b"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{" "}
      </g>
    </svg>
  );
}
export function InviteIcon(props: SvgProps) {
  return (
    <svg
      {...props}
      fill="#87898b"
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 72 72"
      enable-background="new 0 0 72 72"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <g>
          {" "}
          <g>
            {" "}
            <path d="M68.5,54.569c0,3.828-3.104,6.932-6.932,6.932H10.432c-3.828,0-6.932-3.104-6.932-6.932V17.432 c0-3.828,3.104-6.932,6.932-6.932h51.137c3.828,0,6.932,3.104,6.932,6.932V54.569z M64.5,17.432c0-1.619-1.313-2.932-2.932-2.932 H10.432c-1.619,0-2.932,1.313-2.932,2.932v37.137c0,1.619,1.313,2.932,2.932,2.932h51.137c1.619,0,2.932-1.313,2.932-2.932V17.432 z"></path>{" "}
          </g>{" "}
          <g>
            {" "}
            <g>
              {" "}
              <path d="M35.159,41.932c-0.224,0-0.447-0.076-0.632-0.225l-16.765-13.65c-0.428-0.349-0.492-0.979-0.144-1.407 c0.348-0.426,0.979-0.493,1.407-0.144l16.14,13.14l15.748-12.54c0.434-0.345,1.063-0.272,1.405,0.159 c0.344,0.433,0.272,1.062-0.159,1.405L35.782,41.713C35.6,41.86,35.38,41.932,35.159,41.932z"></path>{" "}
            </g>{" "}
            <g>
              {" "}
              <path d="M20.659,46.182c-0.226,0-0.452-0.076-0.64-0.232c-0.424-0.354-0.481-0.984-0.127-1.408l0.438-0.523 c0.353-0.424,0.982-0.482,1.408-0.127c0.424,0.354,0.481,0.984,0.127,1.408l-0.438,0.523 C21.23,46.061,20.946,46.182,20.659,46.182z"></path>{" "}
            </g>{" "}
            <g>
              {" "}
              <path d="M23.213,43.122c-0.236,0-0.474-0.082-0.664-0.252c-0.413-0.367-0.45-0.998-0.084-1.412l5.625-6.336 c0.368-0.414,0.999-0.45,1.412-0.084c0.413,0.367,0.45,0.999,0.084,1.412l-5.625,6.336 C23.763,43.008,23.488,43.122,23.213,43.122z"></path>{" "}
            </g>{" "}
            <g>
              {" "}
              <path d="M48.217,44.977c-0.286,0-0.57-0.123-0.769-0.359l-6.016-7.195c-0.354-0.424-0.298-1.054,0.126-1.409 c0.427-0.354,1.056-0.297,1.409,0.126l6.016,7.195c0.354,0.424,0.298,1.055-0.126,1.41C48.67,44.901,48.442,44.977,48.217,44.977 z"></path>{" "}
            </g>{" "}
          </g>{" "}
        </g>{" "}
      </g>
    </svg>
  );
}

export function LeaveroupIconIcon(props: SvgProps) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      fill="#000000"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <title>ic_fluent_sign_out_24_filled</title>{" "}
        <desc>Created with Sketch.</desc>{" "}
        <g
          id="🔍-Product-Icons"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fill-rule="evenodd"
        >
          {" "}
          <g
            id="ic_fluent_sign_out_24_filled"
            fill="#d41111"
            fill-rule="nonzero"
          >
            {" "}
            <path
              d="M12,4.35416625 L12,4.99998545 L13.7452668,5 C14.1245178,5 14.4381068,5.28151791 14.488266,5.64711331 L14.4952658,5.74875738 L14.502,10 L13.002,10 L12.9965084,6.5 L12,6.49998545 L12.0005455,11.004946 L13.002,11.0039854 L13.003,11 L14.504,11 L14.503,11.0039854 L19.442,11.0039854 L17.7195786,9.28023872 C17.4533579,9.0139263 17.4292236,8.59725845 17.6471286,8.30368449 L17.7197613,8.21957857 C17.9860737,7.95335788 18.4027416,7.9292236 18.6963155,8.14712863 L18.7804214,8.21976128 L21.7770341,11.2174065 C22.043008,11.4834721 22.0673769,11.8996744 21.850009,12.19325 L21.7775464,12.2773711 L18.7809337,15.2808167 C18.4883742,15.5740433 18.0135008,15.5745841 17.7202742,15.2820246 C17.4537046,15.0160615 17.4290241,14.5994256 17.646544,14.3055662 L17.7190663,14.2213652 L19.432,12.5039854 L12.0005455,12.504946 L12,17.0009854 L13.0139075,17.0014475 L13.007,13.5 L14.508,13.5 L14.5151512,17.7502049 C14.5157801,18.130345 14.23351,18.4448141 13.8670368,18.4945857 L13.7651512,18.5014475 L12,18.5009854 L12,19.25 C12,19.7163948 11.5788385,20.0696886 11.1195525,19.9885685 L2.61955246,18.4872805 C2.26120966,18.4239892 2,18.1126012 2,17.748712 L2,5.75 C2,5.38269391 2.26601447,5.06943276 2.62846599,5.00991252 L11.128466,3.61407877 C11.5850805,3.53909548 12,3.89143598 12,4.35416625 Z M8.50214976,11.5 C7.94867773,11.5 7.5,11.9486777 7.5,12.5021498 C7.5,13.0556218 7.94867773,13.5042995 8.50214976,13.5042995 C9.05562179,13.5042995 9.50429953,13.0556218 9.50429953,12.5021498 C9.50429953,11.9486777 9.05562179,11.5 8.50214976,11.5 Z"
              id="🎨-Color"
            >
              {" "}
            </path>{" "}
          </g>{" "}
        </g>{" "}
      </g>
    </svg>
  );
}
export function EditGroupProfileIcon(props: SvgProps) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M15.4998 5.49994L18.3282 8.32837M3 20.9997L3.04745 20.6675C3.21536 19.4922 3.29932 18.9045 3.49029 18.3558C3.65975 17.8689 3.89124 17.4059 4.17906 16.9783C4.50341 16.4963 4.92319 16.0765 5.76274 15.237L17.4107 3.58896C18.1918 2.80791 19.4581 2.80791 20.2392 3.58896C21.0202 4.37001 21.0202 5.63634 20.2392 6.41739L8.37744 18.2791C7.61579 19.0408 7.23497 19.4216 6.8012 19.7244C6.41618 19.9932 6.00093 20.2159 5.56398 20.3879C5.07171 20.5817 4.54375 20.6882 3.48793 20.9012L3 20.9997Z"
          stroke="#ebedf0"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{" "}
      </g>
    </svg>
  );
}
export function GroupSettingsIcon(props: SvgProps) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke=""
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10.65 3L9.93163 3.53449L9.32754 5.54812L7.47651 4.55141L6.5906 4.68143L4.68141 6.59062L4.55139 7.47652L5.5481 9.32755L3.53449 9.93163L3 10.65V13.35L3.53449 14.0684L5.54811 14.6725L4.55142 16.5235L4.68144 17.4094L6.59063 19.3186L7.47653 19.4486L9.32754 18.4519L9.93163 20.4655L10.65 21H13.35L14.0684 20.4655L14.6725 18.4519L16.5235 19.4486L17.4094 19.3185L19.3186 17.4094L19.4486 16.5235L18.4519 14.6724L20.4655 14.0684L21 13.35V10.65L20.4655 9.93163L18.4519 9.32754L19.4486 7.47654L19.3186 6.59063L17.4094 4.68144L16.5235 4.55142L14.6725 5.54812L14.0684 3.53449L13.35 3H10.65ZM10.4692 6.96284L11.208 4.5H12.792L13.5308 6.96284L13.8753 7.0946C13.9654 7.12908 14.0543 7.16597 14.142 7.2052L14.4789 7.35598L16.7433 6.13668L17.8633 7.25671L16.644 9.52111L16.7948 9.85803C16.834 9.9457 16.8709 10.0346 16.9054 10.1247L17.0372 10.4692L19.5 11.208V12.792L17.0372 13.5308L16.9054 13.8753C16.8709 13.9654 16.834 14.0543 16.7948 14.1419L16.644 14.4789L17.8633 16.7433L16.7433 17.8633L14.4789 16.644L14.142 16.7948C14.0543 16.834 13.9654 16.8709 13.8753 16.9054L13.5308 17.0372L12.792 19.5H11.208L10.4692 17.0372L10.1247 16.9054C10.0346 16.8709 9.94569 16.834 9.85803 16.7948L9.52111 16.644L7.25671 17.8633L6.13668 16.7433L7.35597 14.4789L7.2052 14.142C7.16597 14.0543 7.12908 13.9654 7.0946 13.8753L6.96284 13.5308L4.5 12.792L4.5 11.208L6.96284 10.4692L7.0946 10.1247C7.12907 10.0346 7.16596 9.94571 7.20519 9.85805L7.35596 9.52113L6.13666 7.2567L7.25668 6.13667L9.5211 7.35598L9.85803 7.2052C9.9457 7.16597 10.0346 7.12908 10.1247 7.0946L10.4692 6.96284ZM14.25 12C14.25 13.2426 13.2426 14.25 12 14.25C10.7574 14.25 9.75 13.2426 9.75 12C9.75 10.7574 10.7574 9.75 12 9.75C13.2426 9.75 14.25 10.7574 14.25 12ZM15.75 12C15.75 14.0711 14.0711 15.75 12 15.75C9.92893 15.75 8.25 14.0711 8.25 12C8.25 9.92893 9.92893 8.25 12 8.25C14.0711 8.25 15.75 9.92893 15.75 12Z"
          fill="#ebedf0"
        ></path>{" "}
      </g>
    </svg>
  );
}
export function GroupAddEventIcon(props: SvgProps) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M17 11C14.2386 11 12 13.2386 12 16C12 18.7614 14.2386 21 17 21C19.7614 21 22 18.7614 22 16C22 13.2386 19.7614 11 17 11ZM17 11V9M2 9V15.8C2 16.9201 2 17.4802 2.21799 17.908C2.40973 18.2843 2.71569 18.5903 3.09202 18.782C3.51984 19 4.0799 19 5.2 19H13M2 9V8.2C2 7.0799 2 6.51984 2.21799 6.09202C2.40973 5.71569 2.71569 5.40973 3.09202 5.21799C3.51984 5 4.0799 5 5.2 5H13.8C14.9201 5 15.4802 5 15.908 5.21799C16.2843 5.40973 16.5903 5.71569 16.782 6.09202C17 6.51984 17 7.0799 17 8.2V9M2 9H17M5 3V5M14 3V5M15 16H17M17 16H19M17 16V14M17 16V18"
          stroke="#ebedf0"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{" "}
      </g>
    </svg>
  );
}
export function OnlineIcon(props: SvgProps) {
  return (
    <svg
      {...props}
      viewBox="0 0 36 36"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      class="iconify iconify--twemoji"
      preserveAspectRatio="xMidYMid meet"
      fill="#000000"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <circle fill="#78B159" cx="18" cy="18" r="18"></circle>
      </g>
    </svg>
  );
}
export function GroupMembersIcon(props: SvgProps) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#ffffff"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M1.5 6.5C1.5 3.46243 3.96243 1 7 1C10.0376 1 12.5 3.46243 12.5 6.5C12.5 9.53757 10.0376 12 7 12C3.96243 12 1.5 9.53757 1.5 6.5Z"
          fill="#ffffff"
        ></path>{" "}
        <path
          d="M14.4999 6.5C14.4999 8.00034 14.0593 9.39779 13.3005 10.57C14.2774 11.4585 15.5754 12 16.9999 12C20.0375 12 22.4999 9.53757 22.4999 6.5C22.4999 3.46243 20.0375 1 16.9999 1C15.5754 1 14.2774 1.54153 13.3005 2.42996C14.0593 3.60221 14.4999 4.99966 14.4999 6.5Z"
          fill="#ffffff"
        ></path>{" "}
        <path
          d="M0 18C0 15.7909 1.79086 14 4 14H10C12.2091 14 14 15.7909 14 18V22C14 22.5523 13.5523 23 13 23H1C0.447716 23 0 22.5523 0 22V18Z"
          fill="#ffffff"
        ></path>{" "}
        <path
          d="M16 18V23H23C23.5522 23 24 22.5523 24 22V18C24 15.7909 22.2091 14 20 14H14.4722C15.4222 15.0615 16 16.4633 16 18Z"
          fill="#ffffff"
        ></path>{" "}
      </g>
    </svg>
  );
}
export function GroupDefaultIcon(props: SvgProps) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#ffffff"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <circle
          cx="12"
          cy="9"
          r="1.5"
          stroke="#ffffff"
          strokeLinecap="round"
        ></circle>{" "}
        <path
          d="M15.701 8.25C15.8999 7.90547 16.2275 7.65408 16.6118 7.55111C16.996 7.44815 17.4055 7.50205 17.75 7.70096C18.0945 7.89987 18.3459 8.2275 18.4489 8.61177C18.5519 8.99604 18.498 9.40547 18.299 9.75C18.1001 10.0945 17.7725 10.3459 17.3882 10.4489C17.004 10.5519 16.5945 10.498 16.25 10.299C15.9055 10.1001 15.6541 9.7725 15.5511 9.38823C15.4481 9.00396 15.502 8.59453 15.701 8.25L15.701 8.25Z"
          stroke="#ffffff"
        ></path>{" "}
        <path
          d="M5.70096 8.25C5.89987 7.90547 6.2275 7.65408 6.61177 7.55111C6.99604 7.44815 7.40547 7.50205 7.75 7.70096C8.09453 7.89987 8.34592 8.2275 8.44889 8.61177C8.55185 8.99604 8.49795 9.40547 8.29904 9.75C8.10013 10.0945 7.7725 10.3459 7.38823 10.4489C7.00396 10.5519 6.59453 10.498 6.25 10.299C5.90547 10.1001 5.65408 9.7725 5.55111 9.38823C5.44815 9.00396 5.50205 8.59453 5.70096 8.25L5.70096 8.25Z"
          stroke="#ffffff"
        ></path>{" "}
        <path
          d="M20.3639 15.5122L20.8501 15.3957L20.3639 15.5122ZM14.1 13.1854L13.8093 12.7786L13.2769 13.1589L13.7838 13.5727L14.1 13.1854ZM15.3804 15.5097L14.8911 15.6125L15.3804 15.5097ZM19.4999 16H14.5V17H19.4999V16ZM19.8776 15.6288C19.9012 15.7271 19.8757 15.8068 19.8169 15.8717C19.7527 15.9424 19.6412 16 19.4999 16V17C20.2996 17 21.0709 16.3171 20.8501 15.3957L19.8776 15.6288ZM16.5 13C17.726 13 18.4895 13.4087 18.9822 13.9118C19.4884 14.4286 19.7475 15.0859 19.8776 15.6288L20.8501 15.3957C20.6963 14.7541 20.3754 13.9052 19.6966 13.2121C19.0043 12.5051 17.9778 12 16.5 12V13ZM14.3906 13.5922C14.8685 13.2508 15.54 13 16.5 13V12C15.3544 12 14.4745 12.3034 13.8093 12.7786L14.3906 13.5922ZM13.7838 13.5727C14.4368 14.1059 14.7483 14.9336 14.8911 15.6125L15.8697 15.4068C15.7084 14.6398 15.3299 13.5441 14.4162 12.7981L13.7838 13.5727ZM14.8911 15.6125C14.9127 15.7155 14.8843 15.801 14.8215 15.8694C14.7542 15.9427 14.641 16 14.5 16V17C15.3038 17 16.0615 16.3194 15.8697 15.4068L14.8911 15.6125Z"
          fill="#ffffff"
        ></path>{" "}
        <path
          d="M9.90001 13.1854L10.2162 13.5727L10.7231 13.1589L10.1907 12.7785L9.90001 13.1854ZM3.63614 15.5122L4.12237 15.6288L3.63614 15.5122ZM8.61961 15.5097L8.13031 15.4068H8.1303L8.61961 15.5097ZM7.50004 13C8.45997 13 9.13146 13.2508 9.60936 13.5922L10.1907 12.7785C9.5255 12.3033 8.64563 12 7.50004 12V13ZM4.12237 15.6288C4.25249 15.0859 4.51165 14.4286 5.01783 13.9118C5.51048 13.4087 6.27401 13 7.50004 13V12C6.02223 12 4.99575 12.5051 4.30339 13.2121C3.62456 13.9052 3.30369 14.7541 3.14991 15.3957L4.12237 15.6288ZM4.50005 16C4.3588 16 4.24729 15.9424 4.18312 15.8717C4.12432 15.8068 4.09879 15.7271 4.12237 15.6288L3.14991 15.3957C2.92906 16.3171 3.70041 17 4.50005 17V16ZM9.5 16H4.50005V17H9.5V16ZM9.5 16C9.35899 16 9.24574 15.9427 9.17843 15.8694C9.11567 15.801 9.08727 15.7155 9.10892 15.6125L8.1303 15.4068C7.93849 16.3194 8.69612 17 9.5 17V16ZM9.10892 15.6125C9.25163 14.9336 9.56317 14.1059 10.2162 13.5727L9.58379 12.7981C8.67006 13.5441 8.29153 14.6398 8.13031 15.4068L9.10892 15.6125Z"
          fill="#ffffff"
        ></path>{" "}
        <path
          d="M12 12.5C14.3642 12.5 15.1314 14.3251 15.3804 15.5097C15.494 16.0501 15.0523 16.5 14.5 16.5H9.5C8.94772 16.5 8.50601 16.0501 8.61961 15.5097C8.86859 14.3251 9.63581 12.5 12 12.5Z"
          stroke="#ffffff"
          strokeLinecap="round"
        ></path>{" "}
        <path
          d="M18.5 21.5H20C20.8284 21.5 21.5 20.8284 21.5 20V18.5"
          stroke="#ffffff"
          strokeLinecap="round"
        ></path>{" "}
        <path
          d="M18.5 2.5H20C20.8284 2.5 21.5 3.17157 21.5 4V5.5"
          stroke="#ffffff"
          strokeLinecap="round"
        ></path>{" "}
        <path
          d="M5.5 21.5H4C3.17157 21.5 2.5 20.8284 2.5 20V18.5"
          stroke="#ffffff"
          strokeLinecap="round"
        ></path>{" "}
        <path
          d="M5.5 2.5H4C3.17157 2.5 2.5 3.17157 2.5 4V5.5"
          stroke="#ffffff"
          strokeLinecap="round"
        ></path>{" "}
      </g>
    </svg>
  );
}

export function PlusCircleIcon(props: SvgProps) {
  return (
    <svg
      {...props}
      viewBox="0 0 32 32"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      fill="#000000"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <title>plus-circle</title> <desc>Created with Sketch Beta.</desc>{" "}
        <defs> </defs>{" "}
        <g
          id="Page-1"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fill-rule="evenodd"
        >
          {" "}
          <g
            id="Icon-Set-Filled"
            transform="translate(-466.000000, -1089.000000)"
            fill="#787878"
          >
            {" "}
            <path
              d="M488,1106 L483,1106 L483,1111 C483,1111.55 482.553,1112 482,1112 C481.447,1112 481,1111.55 481,1111 L481,1106 L476,1106 C475.447,1106 475,1105.55 475,1105 C475,1104.45 475.447,1104 476,1104 L481,1104 L481,1099 C481,1098.45 481.447,1098 482,1098 C482.553,1098 483,1098.45 483,1099 L483,1104 L488,1104 C488.553,1104 489,1104.45 489,1105 C489,1105.55 488.553,1106 488,1106 L488,1106 Z M482,1089 C473.163,1089 466,1096.16 466,1105 C466,1113.84 473.163,1121 482,1121 C490.837,1121 498,1113.84 498,1105 C498,1096.16 490.837,1089 482,1089 L482,1089 Z"
              id="plus-circle"
            >
              {" "}
            </path>{" "}
          </g>{" "}
        </g>{" "}
      </g>
    </svg>
  );
}
export function DefaultProfileBackground(props: SvgProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="973"
      height="973"
      viewBox="0 0 800 800"
    >
      <rect fill="#000022" width="800" height="800" />
      <g fill="none" stroke-opacity="0.66">
        <g stroke="#026" stroke-width="17">
          <line x1="-8" y1="-8" x2="808" y2="808" />
          <line x1="-8" y1="792" x2="808" y2="1608" />
          <line x1="-8" y1="-808" x2="808" y2="8" />
        </g>
        <g stroke="#002163" stroke-width="16">
          <line x1="-8" y1="767" x2="808" y2="1583" />
          <line x1="-8" y1="17" x2="808" y2="833" />
          <line x1="-8" y1="-33" x2="808" y2="783" />
          <line x1="-8" y1="-783" x2="808" y2="33" />
        </g>
        <g stroke="#002060" stroke-width="15">
          <line x1="-8" y1="742" x2="808" y2="1558" />
          <line x1="-8" y1="42" x2="808" y2="858" />
          <line x1="-8" y1="-58" x2="808" y2="758" />
          <line x1="-8" y1="-758" x2="808" y2="58" />
        </g>
        <g stroke="#001f5c" stroke-width="14">
          <line x1="-8" y1="67" x2="808" y2="883" />
          <line x1="-8" y1="717" x2="808" y2="1533" />
          <line x1="-8" y1="-733" x2="808" y2="83" />
          <line x1="-8" y1="-83" x2="808" y2="733" />
        </g>
        <g stroke="#001e59" stroke-width="13">
          <line x1="-8" y1="92" x2="808" y2="908" />
          <line x1="-8" y1="692" x2="808" y2="1508" />
          <line x1="-8" y1="-108" x2="808" y2="708" />
          <line x1="-8" y1="-708" x2="808" y2="108" />
        </g>
        <g stroke="#001d56" stroke-width="12">
          <line x1="-8" y1="667" x2="808" y2="1483" />
          <line x1="-8" y1="117" x2="808" y2="933" />
          <line x1="-8" y1="-133" x2="808" y2="683" />
          <line x1="-8" y1="-683" x2="808" y2="133" />
        </g>
        <g stroke="#001c53" stroke-width="11">
          <line x1="-8" y1="642" x2="808" y2="1458" />
          <line x1="-8" y1="142" x2="808" y2="958" />
          <line x1="-8" y1="-158" x2="808" y2="658" />
          <line x1="-8" y1="-658" x2="808" y2="158" />
        </g>
        <g stroke="#001b4f" stroke-width="10">
          <line x1="-8" y1="167" x2="808" y2="983" />
          <line x1="-8" y1="617" x2="808" y2="1433" />
          <line x1="-8" y1="-633" x2="808" y2="183" />
          <line x1="-8" y1="-183" x2="808" y2="633" />
        </g>
        <g stroke="#001a4c" stroke-width="9">
          <line x1="-8" y1="592" x2="808" y2="1408" />
          <line x1="-8" y1="192" x2="808" y2="1008" />
          <line x1="-8" y1="-608" x2="808" y2="208" />
          <line x1="-8" y1="-208" x2="808" y2="608" />
        </g>
        <g stroke="#001949" stroke-width="8">
          <line x1="-8" y1="567" x2="808" y2="1383" />
          <line x1="-8" y1="217" x2="808" y2="1033" />
          <line x1="-8" y1="-233" x2="808" y2="583" />
          <line x1="-8" y1="-583" x2="808" y2="233" />
        </g>
        <g stroke="#001846" stroke-width="7">
          <line x1="-8" y1="242" x2="808" y2="1058" />
          <line x1="-8" y1="542" x2="808" y2="1358" />
          <line x1="-8" y1="-558" x2="808" y2="258" />
          <line x1="-8" y1="-258" x2="808" y2="558" />
        </g>
        <g stroke="#001743" stroke-width="6">
          <line x1="-8" y1="267" x2="808" y2="1083" />
          <line x1="-8" y1="517" x2="808" y2="1333" />
          <line x1="-8" y1="-533" x2="808" y2="283" />
          <line x1="-8" y1="-283" x2="808" y2="533" />
        </g>
        <g stroke="#00163f" stroke-width="5">
          <line x1="-8" y1="292" x2="808" y2="1108" />
          <line x1="-8" y1="492" x2="808" y2="1308" />
          <line x1="-8" y1="-308" x2="808" y2="508" />
          <line x1="-8" y1="-508" x2="808" y2="308" />
        </g>
        <g stroke="#00153c" stroke-width="4">
          <line x1="-8" y1="467" x2="808" y2="1283" />
          <line x1="-8" y1="317" x2="808" y2="1133" />
          <line x1="-8" y1="-333" x2="808" y2="483" />
          <line x1="-8" y1="-483" x2="808" y2="333" />
        </g>
        <g stroke="#001439" stroke-width="3">
          <line x1="-8" y1="342" x2="808" y2="1158" />
          <line x1="-8" y1="442" x2="808" y2="1258" />
          <line x1="-8" y1="-458" x2="808" y2="358" />
          <line x1="-8" y1="-358" x2="808" y2="458" />
        </g>
        <g stroke="#001336" stroke-width="2">
          <line x1="-8" y1="367" x2="808" y2="1183" />
          <line x1="-8" y1="417" x2="808" y2="1233" />
          <line x1="-8" y1="-433" x2="808" y2="383" />
          <line x1="-8" y1="-383" x2="808" y2="433" />
        </g>
        <g stroke="#013" stroke-width="1">
          <line x1="-8" y1="392" x2="808" y2="1208" />
          <line x1="-8" y1="-408" x2="808" y2="408" />
        </g>
      </g>
    </svg>
 
  );
}


export function PadlockIcon(props: SvgProps) {
  return (
  <svg {...props}
  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8.1819 10.7027H6.00008C5.44781 10.7027 5.0001 11.1485 5.00009 11.7008C5.00005 13.3483 5 16.6772 5.00011 18.9189C5.00023 21.4317 8.88618 22 12 22C15.1139 22 19 21.4317 19 18.9189C19 16.6773 19 13.3483 19 11.7008C19 11.1485 18.5523 10.7027 18 10.7027H15.8182M8.1819 10.7027C8.1819 10.7027 8.18193 8.13514 8.1819 6.59459C8.18186 4.74571 9.70887 3 12 3C14.2912 3 15.8182 4.74571 15.8182 6.59459C15.8182 8.13514 15.8182 10.7027 15.8182 10.7027M8.1819 10.7027H15.8182" stroke="#ebedf0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M13 16.6181V18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18V16.6181C10.6931 16.3434 10.5 15.9442 10.5 15.5C10.5 14.6716 11.1716 14 12 14C12.8284 14 13.5 14.6716 13.5 15.5C13.5 15.9442 13.3069 16.3434 13 16.6181Z" fill="#ebedf0"></path> </g></svg>
  );
}
export function PoduimLogoIcon(props: SvgProps) {
  return (
 <svg
    {...props}
    fill="#000000"
    viewBox="0 0 24 24"
    id="podium"
    data-name="Flat Color"
    xmlns="http://www.w3.org/2000/svg"
    className="icon flat-color"
    stroke="#000000"
    strokeWidth="0.00024"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
      <path
        id="secondary"
        d="M12.93,6.81a1,1,0,0,1-.47-.12L12,6.45l-.46.24a1,1,0,0,1-1.45-1.05l.09-.52L9.8,4.76a1,1,0,0,1,.56-1.7L10.87,3l.23-.47a1,1,0,0,1,1.8,0l.23.47.51.08a1,1,0,0,1,.56,1.7l-.38.36.09.52a1,1,0,0,1-.39,1A1.09,1.09,0,0,1,12.93,6.81Z"
        style={{ fill: '#ff0000' }}
      />
      <path
        id="primary"
        d="M8,16v5a1,1,0,0,1-1,1H3a1,1,0,0,1-1-1V16a1,1,0,0,1,1-1H7A1,1,0,0,1,8,16Zm6-7H10a1,1,0,0,0-1,1V21a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V10A1,1,0,0,0,14,9Zm7,4H17a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V14A1,1,0,0,0,21,13Z"
        style={{ fill: '#000000' }}
      />
    </g>
  </svg>  );
}

export function OptionsIcon(props: SvgProps) {
  return (
 <svg {...props} fill="#ebedf0" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M28.106 19.944h-0.85c-0.069-0.019-0.131-0.050-0.2-0.063-1.788-0.275-3.2-1.762-3.319-3.506-0.137-1.95 0.975-3.6 2.787-4.137 0.238-0.069 0.488-0.119 0.731-0.181h0.85c0.056 0.019 0.106 0.050 0.169 0.056 1.65 0.269 2.906 1.456 3.262 3.081 0.025 0.125 0.063 0.25 0.094 0.375v0.85c-0.019 0.056-0.050 0.113-0.056 0.169-0.262 1.625-1.419 2.863-3.025 3.238-0.156 0.038-0.3 0.081-0.444 0.119zM4.081 12.056l0.85 0c0.069 0.019 0.131 0.050 0.2 0.056 1.8 0.281 3.206 1.775 3.319 3.537 0.125 1.944-1 3.588-2.819 4.119-0.231 0.069-0.469 0.119-0.7 0.175h-0.85c-0.056-0.019-0.106-0.050-0.162-0.063-1.625-0.3-2.688-1.244-3.194-2.819-0.069-0.206-0.106-0.425-0.162-0.637v-0.85c0.019-0.056 0.050-0.113 0.056-0.169 0.269-1.631 1.419-2.863 3.025-3.238 0.15-0.037 0.294-0.075 0.437-0.113zM15.669 12.056h0.85c0.069 0.019 0.131 0.050 0.2 0.063 1.794 0.281 3.238 1.831 3.313 3.581 0.087 1.969-1.1 3.637-2.931 4.106-0.194 0.050-0.387 0.094-0.581 0.137h-0.85c-0.069-0.019-0.131-0.050-0.2-0.063-1.794-0.275-3.238-1.831-3.319-3.581-0.094-1.969 1.1-3.637 2.931-4.106 0.2-0.050 0.394-0.094 0.588-0.137z"></path> </g></svg>);
}


export const DeleteIcon = (props: SvgProps) => (
  <svg
  {...props}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="#ff0000"
  >
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      {" "}
      <path
        d="M10 11V17"
        stroke="#fe1010"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>{" "}
      <path
        d="M14 11V17"
        stroke="#fe1010"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>{" "}
      <path
        d="M4 7H20"
        stroke="#fe1010"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>{" "}
      <path
        d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z"
        stroke="#fe1010"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>{" "}
      <path
        d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
        stroke="#fe1010"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>{" "}
    </g>
  </svg>
);



export const PinIcon = (props: SvgProps)  => (
  <svg 
  {...props}
  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      {" "}
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17.1218 1.87023C15.7573 0.505682 13.4779 0.76575 12.4558 2.40261L9.61062 6.95916C9.61033 6.95965 9.60913 6.96167 9.6038 6.96549C9.59728 6.97016 9.58336 6.97822 9.56001 6.9848C9.50899 6.99916 9.44234 6.99805 9.38281 6.97599C8.41173 6.61599 6.74483 6.22052 5.01389 6.87251C4.08132 7.22378 3.61596 8.03222 3.56525 8.85243C3.51687 9.63502 3.83293 10.4395 4.41425 11.0208L7.94975 14.5563L1.26973 21.2363C0.879206 21.6269 0.879206 22.26 1.26973 22.6506C1.66025 23.0411 2.29342 23.0411 2.68394 22.6506L9.36397 15.9705L12.8995 19.5061C13.4808 20.0874 14.2853 20.4035 15.0679 20.3551C15.8881 20.3044 16.6966 19.839 17.0478 18.9065C17.6998 17.1755 17.3043 15.5086 16.9444 14.5375C16.9223 14.478 16.9212 14.4114 16.9355 14.3603C16.9421 14.337 16.9502 14.3231 16.9549 14.3165C16.9587 14.3112 16.9606 14.31 16.9611 14.3098L21.5177 11.4645C23.1546 10.4424 23.4147 8.16307 22.0501 6.79853L17.1218 1.87023ZM14.1523 3.46191C14.493 2.91629 15.2528 2.8296 15.7076 3.28445L20.6359 8.21274C21.0907 8.66759 21.0041 9.42737 20.4584 9.76806L15.9019 12.6133C14.9572 13.2032 14.7469 14.3637 15.0691 15.2327C15.3549 16.0037 15.5829 17.1217 15.1762 18.2015C15.1484 18.2752 15.1175 18.3018 15.0985 18.3149C15.0743 18.3316 15.0266 18.3538 14.9445 18.3589C14.767 18.3699 14.5135 18.2916 14.3137 18.0919L5.82846 9.6066C5.62872 9.40686 5.55046 9.15333 5.56144 8.97583C5.56651 8.8937 5.58877 8.84605 5.60548 8.82181C5.61855 8.80285 5.64516 8.7719 5.71886 8.74414C6.79869 8.33741 7.91661 8.56545 8.68762 8.85128C9.55668 9.17345 10.7171 8.96318 11.3071 8.01845L14.1523 3.46191Z"
        fill="#ebedf0"
      ></path>{" "}
    </g>
  </svg>
);

export const NotInterestedIcon = (props: SvgProps) => (
  <svg 
    {...props}
  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      {" "}
      <path
        d="M9 17C9.85038 16.3697 10.8846 16 12 16C13.1154 16 14.1496 16.3697 15 17"
        stroke="#ebedf0"
        stroke-width="1.5"
        stroke-linecap="round"
      ></path>{" "}
      <ellipse cx="15" cy="10.5" rx="1" ry="1.5" fill="#ebedf0"></ellipse>{" "}
      <ellipse cx="9" cy="10.5" rx="1" ry="1.5" fill="#ebedf0"></ellipse>{" "}
      <path
        d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
        stroke="#ebedf0"
        stroke-width="1.5"
        stroke-linecap="round"
      ></path>{" "}
    </g>
  </svg>
);

export const FollowIcon = (props: SvgProps) => (
  <svg 
  {...props}
  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      {" "}
      <path
        d="M12 15.5H7.5C6.10444 15.5 5.40665 15.5 4.83886 15.6722C3.56045 16.06 2.56004 17.0605 2.17224 18.3389C2 18.9067 2 19.6044 2 21M19 21V15M16 18H22M14.5 7.5C14.5 9.98528 12.4853 12 10 12C7.51472 12 5.5 9.98528 5.5 7.5C5.5 5.01472 7.51472 3 10 3C12.4853 3 14.5 5.01472 14.5 7.5Z"
        stroke="#ebedf0"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>{" "}
    </g>
  </svg>
);


export const BlockIcon = (props: SvgProps) => (
  <svg {...props}fill="#ebedf0" viewBox="0 0 18 18" id="not-interested-16px" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="Path_63" data-name="Path 63" d="M-14,0a8.009,8.009,0,0,0-8,8,8.009,8.009,0,0,0,8,8A8.009,8.009,0,0,0-6,8,8.009,8.009,0,0,0-14,0Zm7,8a6.963,6.963,0,0,1-1.716,4.577l-9.861-9.861A6.963,6.963,0,0,1-14,1,7.008,7.008,0,0,1-7,8ZM-21,8a6.963,6.963,0,0,1,1.716-4.577l9.861,9.861A6.963,6.963,0,0,1-14,15,7.008,7.008,0,0,1-21,8Z" transform="translate(22)"></path> </g></svg>
);

export const AnalyticsIcon = (props: SvgProps) => (
  <svg
    {...props}
    viewBox="-3 0 32 32"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    fill="#ebedf0"
  >
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      {" "}
      <title>stats</title> <desc>Created with Sketch Beta.</desc> <defs> </defs>{" "}
      <g
        id="Page-1"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        {" "}
        <g
          id="Icon-Set-Filled"
          transform="translate(-314.000000, -673.000000)"
          fill="#ebedf0"
        >
          {" "}
          <path
            d="M328,673 L326,673 C324.896,673 324,673.896 324,675 L324,703 C324,704.104 324.896,705 326,705 L328,705 C329.104,705 330,704.104 330,703 L330,675 C330,673.896 329.104,673 328,673 L328,673 Z M338,689 L336,689 C334.896,689 334,689.896 334,691 L334,703 C334,704.104 334.896,705 336,705 L338,705 C339.104,705 340,704.104 340,703 L340,691 C340,689.896 339.104,689 338,689 L338,689 Z M318,682 L316,682 C314.896,682 314,682.896 314,684 L314,703 C314,704.104 314.896,705 316,705 L318,705 C319.104,705 320,704.104 320,703 L320,684 C320,682.896 319.104,682 318,682 L318,682 Z"
            id="stats"
          >
            {" "}
          </path>{" "}
        </g>{" "}
      </g>{" "}
    </g>
  </svg>
);