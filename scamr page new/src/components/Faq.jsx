import React, { useState } from "react";

const faqs = [
  {
    question: "What is SCAMR?",
    answer:
      "SCAMR is an AI-powered platform that helps Solana users detect scam tokens, rug pulls, and suspicious developer activities to make safer crypto investments.",
  },
  {
    question: "How does SCAMR identify potential scams?",
    answer:
      "SCAMR.xyz uses advanced AI algorithms to analyze on-chain data, token patterns, and wallet behavior to flag risky or fraudulent activity.",
  },
  {
    question: "Is SCAMR free to use?",
    answer:
      "Yes, basic features are free for all users. Premium features with advanced analytics may require a subscription.",
  },
  {
    question: "Do I need to connect my wallet?",
    answer:
      "Connecting your wallet is optional. It allows you to interact with the community and report suspicious tokens but browsing analytics is possible without it.",
  },
  {
    question: "How accurate are SCAMR scam alerts?",
    answer:
      "SCAMR uses AI-based analysis to provide highly reliable alerts, though users should always perform their own research before making investment decisions.",
  },
  {
    question: "Is my data safe on SCAMR?",
    answer:
      "Yes, SCAMR ensures wallet and personal data security using encrypted connections and does not store sensitive information without consent.",
  },
  {
    question: "Where can I get help or learn more?",
    answer:
      "Users can visit SCAMR official website, join their social media channels, or access educational resources on scam prevention and blockchain safety.",
  },
  {
    question: "How can I contact SCAMR for support?",
    answer:
      "You can contact SCAMR via their official contact page, or join their Telegram and X communities for support. For specific issues, emailing their support team provides a direct response.",
  },
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" p-8 md:p-12 ">
      <div className="text-white py-10 px-6 ">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Here you will find answers to the most common questions about SCAMR
            and how it helps you stay safe in crypto.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-700 pb-4 cursor-pointer"
            >
              <h3
                className="text-lg font-semibold mb-2 flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className="text-cyan-400 text-xl">
                  {openIndex === index ? "-" : "+"}
                </span>
              </h3>
              {openIndex === index && (
                <p className="text-gray-400 text-sm">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
