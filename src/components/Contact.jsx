import React, { useState } from "react";
import { useScrollReveal } from "../hooks/useAnimations";
import "./Contact.css";

export default function Contact({ data, setHovered }) {
  const { ref: leftRef, visible: leftVisible } = useScrollReveal();
  const { ref: rightRef, visible: rightVisible } = useScrollReveal();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3500);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const contactLinks = [
    { icon: "📧", label: "Email me at", value: data.email, href: `mailto:${data.email}`, cls: "ci-mail" },
    { icon: "💼", label: "Connect on", value: "LinkedIn Profile", href: data.linkedin, cls: "ci-li" },
    { icon: "🐙", label: "Find me on", value: "GitHub", href: data.github, cls: "ci-gh" },
  //   { icon: "📄", label: "My Resume", value: "Resume", href: data.resume, cls: "ci-mb" },
  // ];
  ];
  return (
    <section id="contact" className="contact-section">
      <div className="section-inner">
        <div className="section-label">Let's Connect</div>
        <h2 className="section-title">
          Open to opportunities &amp;<br />conversations.
        </h2>

        <div className="contact-grid">
          {/* Left */}
          <div
            ref={leftRef}
            className={`contact-left reveal ${leftVisible ? "visible" : ""}`}
          >
            <p className="contact-intro">
              I'm actively looking for Business Analyst roles where I can bring my
              research background and analytical skills to help teams make smarter,
              data-backed decisions. Let's talk.
            </p>
            <div className="contact-links">
              {contactLinks.map((lk, i) => (
                <a
                  key={i}
                  href={lk.href}
                  className="contact-link"
                  target={lk.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                >
                  <div className={`contact-link-icon ${lk.cls}`}>{lk.icon}</div>
                  <div>
                    <div className="contact-link-label">{lk.label}</div>
                    <div className="contact-link-val">{lk.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <form
            ref={rightRef}
            className={`contact-form reveal reveal-d2 ${rightVisible ? "visible" : ""}`}
            onSubmit={handleSubmit}
          >
            <div className="form-row">
              <div className="form-group">
                <label>Your Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Smith"
                  required
                />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@company.com"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label>Subject</label>
              <input
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Role at Your Company"
              />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about the opportunity or just say hello..."
                rows={5}
                required
              />
            </div>
            <button
              type="submit"
              className={`form-submit ${sent ? "sent" : ""}`}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              {sent ? "✓ Message Sent!" : "Send Message ✦"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}