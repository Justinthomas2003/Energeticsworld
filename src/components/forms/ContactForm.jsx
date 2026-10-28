import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '../../data/products.js';
import FormField from './FormField.jsx';

const emptyValues = { name: '', email: '', phone: '', subject: '', message: '' };

function getInitialValues(searchParams) {
  const productId = searchParams.get('product');
  const selectedProduct = products.find((product) => product.id === productId);
  return { ...emptyValues, subject: selectedProduct ? `Enquiry about ${selectedProduct.name}` : '' };
}

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = 'Enter your name.';
  if (!values.email.trim()) errors.email = 'Enter your email address.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = 'Enter a valid email address.';
  if (!values.phone.trim()) errors.phone = 'Enter a phone number.';
  else if (!/^(?:\+91|91)?[6-9]\d{9}$/.test(values.phone.trim().replace(/[\s()-]/g, ''))) {
    errors.phone = 'Enter a valid Indian phone number, including the +91 country code if needed.';
  }
  if (!values.subject.trim()) errors.subject = 'Enter a subject.';
  if (!values.message.trim()) errors.message = 'Enter a message.';
  return errors;
}

export default function ContactForm({ endpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT }) {
  const [searchParams] = useSearchParams();
  const [values, setValues] = useState(() => getInitialValues(searchParams));
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateValue = (event) => {
    const { name, value } = event.target;

    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
    setStatus('idle');
    setStatusMessage('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    setStatus('idle');
    setStatusMessage('');
    if (Object.keys(nextErrors).length) return;

    const configuredEndpoint = endpoint?.trim();
    if (!configuredEndpoint) {
      setStatus('not-configured');
      setStatusMessage('This enquiry form is not connected yet. Your message has not been sent. Please WhatsApp +91 99643 11000 or email support@energeticsworld.com.');
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch(configuredEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error(`Enquiry service returned HTTP ${response.status}.`);
      setStatus('success');
      setStatusMessage('Your enquiry has been sent. Thank you for contacting Energetics World.');
      setValues(emptyValues);
    } catch (error) {
      console.error('Enquiry submission failed:', error);
      setStatus('error');
      setStatusMessage('We could not send your enquiry. Please try again or contact us by phone or email.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-grid">
        <FormField id="name" label="Your name" autoComplete="name" required value={values.name} onChange={updateValue} error={errors.name} />
        <FormField id="email" label="Email address" type="email" autoComplete="email" required value={values.email} onChange={updateValue} error={errors.email} />
        <FormField id="phone" label="Phone number" type="tel" autoComplete="tel" inputMode="tel" required value={values.phone} onChange={updateValue} error={errors.phone} hint="Indian phone number, with or without +91." />
        <FormField id="subject" label="Subject" required value={values.subject} onChange={updateValue} error={errors.subject} />
      </div>
      <FormField id="message" label="How can we help?" as="textarea" rows="5" required value={values.message} onChange={updateValue} error={errors.message} />
      <button className="button button--primary form-submit" type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Sending…' : 'Send enquiry'}
      </button>
      {statusMessage && (
        <p className={`form-status form-status--${status}`} role={status === 'error' || status === 'not-configured' ? 'alert' : 'status'}>
          {statusMessage}
        </p>
      )}
      {status === 'idle' && <p className="form-note">Your details are used only to respond to your enquiry. This form will clearly confirm if a submission service is not configured.</p>}
    </form>
  );
}
