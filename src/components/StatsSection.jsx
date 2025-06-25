import React from "react";

const companyLogos = [
  {
    alt: "Google",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
  },
  {
    alt: "Microsoft",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
  },
  {
    alt: "Amazon AWS",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  },

  {
    alt: "Slack",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg",
  },
  {
    alt: "GitHub",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    alt: "Docker",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
];

export default function StatsSection() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Companies Worldwide</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Join over 1 thousand users and 200 companies building with our platform
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-20">
          {companyLogos.map((logo) => (
            <img
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              className="h-12 w-auto grayscale hover:grayscale-0 transition"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
