"use client";

import { useState } from "react";

export function ContactForm({ services }: { services: string[] }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Build mailto link with form data
    const subject = encodeURIComponent(
      `Inquiry: ${formData.service || "General"} - ${formData.name}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nService Interest: ${formData.service}\n\nMessage:\n${formData.message}`
    );
    window.open(`mailto:guru25551@gmail.com?subject=${subject}&body=${body}`, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} id="contact-form">
      <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", marginBottom: "8px" }}>
        Send Us a Message
      </h3>
      <p style={{ fontFamily: "var(--font-tamil)", color: "var(--burgundy)", fontSize: "0.9rem", marginBottom: "24px" }}>
        எங்களுக்கு செய்தி அனுப்புங்கள்
      </p>

      <div className="form-group">
        <label htmlFor="contact-name" className="form-label">
          Full Name <span className="tamil" style={{ fontFamily: "var(--font-tamil)" }}>பெயர்</span>
        </label>
        <input
          type="text"
          id="contact-name"
          className="form-input"
          placeholder="Enter your full name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
        <div className="form-group">
          <label htmlFor="contact-phone" className="form-label">
            Phone <span className="tamil" style={{ fontFamily: "var(--font-tamil)" }}>தொலைபேசி</span>
          </label>
          <input
            type="tel"
            id="contact-phone"
            className="form-input"
            placeholder="+91 XXXXX XXXXX"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label htmlFor="contact-email" className="form-label">
            Email <span className="tamil" style={{ fontFamily: "var(--font-tamil)" }}>மின்னஞ்சல்</span>
          </label>
          <input
            type="email"
            id="contact-email"
            className="form-input"
            placeholder="your@email.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="contact-service" className="form-label">
          Service Interest <span className="tamil" style={{ fontFamily: "var(--font-tamil)" }}>சேவை ஆர்வம்</span>
        </label>
        <select
          id="contact-service"
          className="form-select"
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
        >
          <option value="">Select a service</option>
          {services.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="contact-message" className="form-label">
          Message <span className="tamil" style={{ fontFamily: "var(--font-tamil)" }}>செய்தி</span>
        </label>
        <textarea
          id="contact-message"
          className="form-textarea"
          placeholder="Tell us about your requirements..."
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary"
        style={{ width: "100%" }}
        id="contact-submit-btn"
      >
        {submitted ? "✓ Opening Email Client..." : "Send Message →"}
      </button>

      {submitted && (
        <p style={{ color: "var(--gold-primary)", textAlign: "center", marginTop: "12px", fontSize: "0.9rem" }}>
          Your email client should open shortly. You can also reach us directly at +91 9043425551.
        </p>
      )}
    </form>
  );
}
