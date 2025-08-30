import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react"; // optional icon lib

const faqs = [
  {
    question: "What is a Zerodha account?",
    answer:
      "A Zerodha account is a combined demat and trading account that allows investors to buy, sell, and hold securities digitally.",
  },
  {
    question: "What documents are required to open a demat account?",
    answer: "You need PAN card, Aadhaar card, bank proof, and signature.",
  },
  {
    question: "Is Zerodha account opening free?",
    answer: "Zerodha charges a nominal fee for account opening.",
  },
  {
    question: "Are there any maintenance charges for a demat account?",
    answer: "Yes, there is an annual maintenance charge.",
  },
  {
    question: "Can I open a demat account without a bank account?",
    answer: "No, linking a bank account is mandatory.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-screen-xl mx-auto mt-30 mb-10 px-5 lg:px-20">
      <h2 className="text-[2rem] text-[#424242] font-semibold mb-5">FAQs</h2>
      {faqs.map((faq, index) => (
        
        <div
          key={index}
          className=" cursor-pointer group"
          onClick={() => toggle(index)}
        >
            <div className="w-full h-[1px] bg-gray-300 relative mt-1 mb-2">
    <div className="absolute top-0 left-0 h-[5px] bg-[#387ed1] w-20 group-hover:w-40 transition-all duration-500"></div>
              </div> 
          <div
            className={`flex justify-between items-center py-4 transition-colors duration-300 ${
              activeIndex === index ? "text-black" : "text-gray-700"
            }`}
          >  
            <div className="relative pl-4">
              {activeIndex === index && (
                <span className="absolute top-0 left-0 w-1 h-full bg-blue-500"></span>
              )}
              <p className="font-medium text-[1.1rem]">{faq.question}</p>
            </div>
            {activeIndex === index ? (
              <ChevronUp size={20} />
            ) : (
              <ChevronDown size={20} />
            )}
          </div>
          {activeIndex === index && (
            <div className="pl-6 pb-4 text-gray-600">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
}
