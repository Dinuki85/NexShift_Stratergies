import { useState } from 'react';
import axios from 'axios';

type ContactFormProps = {
  onClose: () => void;
};

export default function ContactForm({ onClose }: ContactFormProps) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await axios.post('http://localhost:8080/api/contact', formData, {
        headers: { 'Content-Type': 'application/json' },
      });

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <button
          type="submit"
          disabled={status === 'sending'}
          className="bg-blue-800 text-white px-4 py-2 rounded w-full hover:bg-blue-700 transition"
        >
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      {status === 'success' && (
        <p className="text-green-600 font-semibold text-center mt-2">
          ✅ Message sent successfully!
        </p>
      )}
      {status === 'error' && (
        <p className="text-red-600 font-semibold text-center mt-2">
          ❌ Failed to send message. Try again later.
        </p>
      )}

      <button
        onClick={onClose}
        className="mt-6 text-red-600 hover:underline block mx-auto"
      >
        Close
      </button>
    </div>
  );
}
