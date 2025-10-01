import React from "react";
import { CheckCircle } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Understanding Your Needs",
    desc: "We start with a detailed discussion to understand your business goals, challenges, and vision."
  },
  {
    step: "02",
    title: "Strategy & Planning",
    desc: "Our team designs a tailored digital strategy to align with your objectives and target audience."
  },
  {
    step: "03",
    title: "Execution & Creativity",
    desc: "We implement strategies through innovative design, marketing campaigns, and cutting-edge tools."
  },
  {
    step: "04",
    title: "Monitoring & Growth",
    desc: "We track performance, optimize campaigns, and ensure consistent growth for your business."
  },
];

export default function ProcessSection() {
  return (
    <section className="w-full bg-gradient-to-b from-gray-900 to-black text-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          Our <span className="text-blue-500">Process</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <div className="text-blue-500 text-3xl font-extrabold mb-4">{item.step}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
              <div className="mt-4 flex justify-center">
                <CheckCircle className="text-green-400 w-6 h-6" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
