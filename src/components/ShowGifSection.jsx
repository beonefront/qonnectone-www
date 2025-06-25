import React, { useState } from "react";

const options = [
  {
    icon: <i className="fas fa-robot text-primary text-xl"></i>,
    bg: "bg-primary/10",
    title: "Debug and write tests with Postbot",
    desc: "AI-powered assistance for creating test cases, identifying edge cases, and generating test scripts automatically.",
    overlayTitle: "Debugging with Postbot",
    overlayDesc: "AI-powered API testing and debugging workflow",
  },
  {
    icon: <i className="fas fa-bolt text-purple-500 text-xl"></i>,
    bg: "bg-purple-500/10",
    title: "Automate API workflows",
    desc: "Create seamless CI/CD pipelines with automated testing, version control, and deployment workflows.",
    overlayTitle: "Workflow Automation",
    overlayDesc: "Automated API testing and deployment pipeline",
  },
  {
    icon: <i className="fas fa-chart-line text-green-500 text-xl"></i>,
    bg: "bg-green-500/10",
    title: "Monitor performance in real-time",
    desc: "Track API health, response times, and error rates with live dashboards and alerts.",
    overlayTitle: "Performance Monitoring",
    overlayDesc: "Real-time API analytics and health monitoring",
  },
  {
    icon: <i className="fas fa-users text-blue-500 text-xl"></i>,
    bg: "bg-blue-500/10",
    title: "Collaborate across teams",
    desc: "Share API documentation, test results, and performance metrics with your entire team.",
    overlayTitle: "Team Collaboration",
    overlayDesc: "Shared API documentation and testing results",
  },
];

export default function ShowGifSection() {
  const [selected, setSelected] = useState(0);

  return (
    <section className="py-16 bg-primary md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center w-full mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">
            Fewer errors mean <span className="text-primary">higher-quality APIs</span>
          </h1>
          <p className="text-xl text-gray-600">
            Move fast to build quality APIs—without breaking anything—by managing every phase of the API workflow, together, on a single platform.
          </p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* GIF Display Area */}
          <div className="gif-container fade-in relative">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-[500px] flex items-center justify-center relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <i className="fas fa-code text-7xl text-gray-300 mb-4"></i>
                  <p className="text-gray-500 font-medium">API Visualization</p>
                  <p className="text-gray-400 mt-1">Select an option to preview</p>
                </div>
              </div>
              {/* Overlay */}
              <div className="gif-overlay absolute bottom-8 left-1/2 -translate-x-1/2 bg-gray-900/80 rounded-xl px-8 py-6 text-white w-[90%] max-w-lg shadow-lg">
                <h3 className="text-xl font-semibold">{options[selected].overlayTitle}</h3>
                <p className="mt-2 text-gray-200">{options[selected].overlayDesc}</p>
              </div>
            </div>
          </div>

          {/* Options Control Area */}
          <div>
            <div className="space-y-4">
              {options.map((opt, idx) => (
                <div
                  key={idx}
                  className={`option-card bg-white rounded-xl p-6 border border-gray-200 cursor-pointer transition ${
                    selected === idx ? "active-option ring-2 ring-primary border-primary" : ""
                  }`}
                  onClick={() => setSelected(idx)}
                >
                  <div className="flex items-start">
                    <div className={`${opt.bg} p-3 rounded-lg mr-4`}>{opt.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-dark">{opt.title}</h3>
                      <p className="text-gray-600 mt-2">{opt.desc}</p>
                    </div>
                    <div className="ml-4">
                      <i
                        className={`fas fa-chevron-right ${
                          selected === idx ? "text-primary" : "text-gray-400"
                        }`}
                      ></i>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
