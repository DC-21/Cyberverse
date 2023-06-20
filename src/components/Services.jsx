import React from "react";

const About = () => {
  return (
    <div className="flex flex-wrap w-full h-screen px-8 py-6 bg-[#381495] gap-6">
      <h1 className="text-white text-4xl py-10 w-full text-center">
        Our Services
      </h1>
      <div className="w-full h-[450px] flex flex-row gap-4">
        <div className="w-1/3 h-full rounded border border-blue-50">
          <h1 className="text-center py-6 text-2xl text-white">
            Cyber Security Services
          </h1>
          <ul className="px-4 text-indigo-200 text-l">
            <li className="items-center flex gap-3 py-4">
              <svg
                viewBox="0 0 512 512"
                fill="currentColor"
                height="1em"
                width="1em"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeMiterlimit={10}
                  strokeWidth={32}
                  d="M64 256c0 106 86 192 192 192s192-86 192-192S362 64 256 64 64 150 64 256z"
                />
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={32}
                  d="M216 352l96-96-96-96"
                />
              </svg>
              <a>Security Awareness Training</a>
            </li>
            <li className="items-center flex gap-3 py-4">
            <svg
                viewBox="0 0 512 512"
                fill="currentColor"
                height="1em"
                width="1em"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeMiterlimit={10}
                  strokeWidth={32}
                  d="M64 256c0 106 86 192 192 192s192-86 192-192S362 64 256 64 64 150 64 256z"
                />
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={32}
                  d="M216 352l96-96-96-96"
                />
              </svg>
              <a>Security Incident Response</a>
            </li>
            <li className="items-center flex gap-3 py-4">
            <svg
                viewBox="0 0 512 512"
                fill="currentColor"
                height="1em"
                width="1em"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeMiterlimit={10}
                  strokeWidth={32}
                  d="M64 256c0 106 86 192 192 192s192-86 192-192S362 64 256 64 64 150 64 256z"
                />
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={32}
                  d="M216 352l96-96-96-96"
                />
              </svg>
              <a>Security Consulting and Risk Assessment</a>
            </li>
            <li className="items-center flex gap-3 py-4">
            <svg
                viewBox="0 0 512 512"
                fill="currentColor"
                height="1em"
                width="1em"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeMiterlimit={10}
                  strokeWidth={32}
                  d="M64 256c0 106 86 192 192 192s192-86 192-192S362 64 256 64 64 150 64 256z"
                />
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={32}
                  d="M216 352l96-96-96-96"
                />
              </svg>
              <a>Network Security and Firewall Management</a>
            </li>
            <li className="items-center flex gap-3 py-4">
            <svg
                viewBox="0 0 512 512"
                fill="currentColor"
                height="1em"
                width="1em"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeMiterlimit={10}
                  strokeWidth={32}
                  d="M64 256c0 106 86 192 192 192s192-86 192-192S362 64 256 64 64 150 64 256z"
                />
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={32}
                  d="M216 352l96-96-96-96"
                />
              </svg>
              <a>Website Penetration Testing</a>
            </li>
            <li className="items-center flex gap-3 py-4">
            <svg
                viewBox="0 0 512 512"
                fill="currentColor"
                height="1em"
                width="1em"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeMiterlimit={10}
                  strokeWidth={32}
                  d="M64 256c0 106 86 192 192 192s192-86 192-192S362 64 256 64 64 150 64 256z"
                />
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={32}
                  d="M216 352l96-96-96-96"
                />
              </svg>
              <a>Cloud Security</a>
            </li>
          </ul>
        </div>
        <div className="w-1/3 h-full rounded border border-blue-50">
           <h1 className="text-center py-6 text-2xl text-white">
            UI/UX Design
          </h1>
        </div>
        <div className="w-1/3 h-full rounded border border-blue-50"></div>
      </div>
    </div>
  );
};

export default About;