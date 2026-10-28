import { Mail, MapPin, MessageCircle } from 'lucide-react';
import PageHero from '../components/common/PageHero.jsx';
import ContactForm from '../components/forms/ContactForm.jsx';
import useDocumentMeta from '../hooks/useDocumentMeta.js';

export default function Contact() {
  useDocumentMeta('Contact us', 'Contact Energetics World in Bellandur, Bengaluru to discuss solar systems, energy efficiency studies and plant maintenance.');
  return (
    <>
      <PageHero
        eyebrow="CONTACT ENERGETICS"
        title={<>Let’s talk about<br />your energy needs.</>}
        description="Have a project in mind or a question about solar? Get in touch with our team."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Contact' }]}
      />
      <section className="section">
        <div className="container contact-layout">
          <div className="contact-info">
            <p className="eyebrow">WE’RE HERE TO HELP</p>
            <h2>Start with a conversation.</h2>
            <p>Tell us a little about your site or what you’re looking for. You can also contact us directly using the details below.</p>
            <a className="contact-detail" href="https://wa.me/919964311000" target="_blank" rel="noreferrer">
              <span><MessageCircle size={19} aria-hidden="true" /></span>
              <span><small>HELP LINE / TECHNICAL SUPPORT</small><strong>WhatsApp: +91 99643 11000</strong></span>
            </a>
            <div className="contact-email">
              <a className="contact-detail" href="mailto:support@energeticsworld.com">
                <span><Mail size={19} aria-hidden="true" /></span>
                <span><small>EMAIL</small><strong>support@energeticsworld.com</strong></span>
              </a>
              <a
                className="contact-email__gmail"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=support%40energeticsworld.com"
                target="_blank"
                rel="noreferrer"
              >
                Open compose email in Gmail
              </a>
            </div>
            <a
              className="contact-detail"
              href="https://maps.google.com/?q=48%2F48%2F1%2C+Bellandur%2C+Bangalore+560103"
              target="_blank"
              rel="noreferrer"
            >
              <span><MapPin size={19} aria-hidden="true" /></span>
              <span><small>ADDRESS</small><strong>Energetics Eco Technologies LLP<br />#48/48/1, Bellandur,<br />Bangalore 560103, India</strong></span>
            </a>
            <p className="cin-note">CIN: AAQ-9463</p>
          </div>
          <div className="contact-form-card">
            <p className="eyebrow">SEND AN ENQUIRY</p>
            <h2>How can we help?</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
