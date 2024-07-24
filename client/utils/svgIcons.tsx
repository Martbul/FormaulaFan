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
      viewBox="-1.28 -1.28 18.56 18.56"
      xmlns="http://www.w3.org/2000/svg"
      fill="#808080"
      className="bi bi-bookmarks"
      stroke="#808080"
      strokeWidth="0.00016"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5V4zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1H4z"></path>{" "}
        <path d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1z"></path>{" "}
      </g>
    </svg>
  );
}

export function BookmarksIconActive(props: SvgProps) {
  return (
    <svg
      {...props}
      viewBox="-1.28 -1.28 18.56 18.56"
      xmlns="http://www.w3.org/2000/svg"
      fill="#ffffff"
      className="bi bi-bookmarks"
      stroke="#ffffff"
      strokeWidth="0.00016"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5V4zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1H4z"></path>{" "}
        <path d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1z"></path>{" "}
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
      viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      fill="#ebedf0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
      viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
