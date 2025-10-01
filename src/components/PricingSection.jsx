"use client";

import React from "react";

const plans = [
  {
    name: "Starter",
    price: "₹10,000",
    features: [
      "Basic Graphic Design",
      "Social Media Posts (5 per month)",
      "1 Marketing Campaign",
      "Email Support",
    ],
  },
  {
    name: "Growth",
    price: "₹25,000",
    features: [
      "All Starter Features",
      "Website / Landing Page Design",
      "5 Marketing Campaigns",
      "Video Reels / Shorts",
      "Priority Support",
    ],
  },
  {
    name: "Premium",
    price: "₹50,000",
    features: [
      "All Growth Features",
      "Full Digital Marketing",
      "Custom Video Production",
      "SEO Optimization",
      "Dedicated Account Manager",
    ],
  },
];

export default function PricingSection() {
  return (
    <section className="w-full bg-gray-900 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Our <span className="text-blue-500">Pricing Plans</span>
        </h2>
        <p className="text-gray-300 mb-12">
          Choose the plan that fits your business goals. Scale your digital
          presence with us.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
              <p className="text-3xl font-bold mb-4">{plan.price}</p>
              <ul className="text-gray-400 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="mb-2">
                    • {feature}
                  </li>
                ))}
              </ul>
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-medium">
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
