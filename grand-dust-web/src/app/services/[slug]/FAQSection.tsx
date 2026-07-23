"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";

interface FAQ {
  q: string;
  a: string;
  aTamil: string;
}

export function FAQSection({
  faqs,
  serviceTitle,
}: {
  faqs: FAQ[];
  serviceTitle: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="faq-section" id="faq-section">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <p className="section-label">
              Frequently Asked Questions | அடிக்கடி கேட்கப்படும் கேள்விகள்
            </p>
            <h2 className="section-title" style={{ fontFamily: "var(--font-heading)" }}>
              Questions about {serviceTitle}
            </h2>
            <div className="gold-divider gold-divider-center" />
          </div>
        </ScrollReveal>

        <div className="faq-list">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i + 1 > 5 ? 5 : ((i + 1) as 1|2|3|4|5)}>
              <div className={`faq-item ${openIndex === i ? "open" : ""}`}>
                <button
                  className="faq-question"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  aria-expanded={openIndex === i}
                  id={`faq-question-${i}`}
                >
                  <span>{faq.q}</span>
                  <span className="faq-question-icon">+</span>
                </button>
                <div className="faq-answer">
                  <div className="faq-answer-inner">
                    <p>{faq.a}</p>
                    <span className="tamil" style={{ fontFamily: "var(--font-tamil)" }}>
                      {faq.aTamil}
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
