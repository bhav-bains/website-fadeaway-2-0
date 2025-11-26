import React, { useState } from 'react';
import { Button } from './Button';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    goals: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/contact-form`;
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      const data = await response.json();
      setStatus('success');
      setMessage(data.message || 'Thank you! We will be in touch shortly.');
      setFormData({ name: '', email: '', website: '', goals: '' });

      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 5000);
    } catch (error) {
      setStatus('error');
      setMessage(
        error instanceof Error ? error.message : 'Something went wrong. Please try again.'
      );
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="input-primary text-sm py-2.5"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="input-primary text-sm py-2.5"
          required
        />
      </div>
      <input
        type="text"
        name="website"
        placeholder="Your Website (optional)"
        value={formData.website}
        onChange={handleChange}
        className="input-primary text-sm py-2.5"
      />
      <textarea
        name="goals"
        placeholder="Tell us about your goals..."
        value={formData.goals}
        onChange={handleChange}
        className="input-primary text-sm py-2.5 min-h-24 resize-none"
        required
      ></textarea>

      {message && (
        <div
          className={`p-3 rounded-lg text-sm ${
            status === 'success'
              ? 'bg-emerald-500/20 text-emerald-200'
              : 'bg-red-500/20 text-red-200'
          }`}
        >
          {message}
        </div>
      )}

      <Button
        variant="primary"
        size="lg"
        className="w-full"
        disabled={status === 'loading'}
        type="submit"
      >
        {status === 'loading' ? 'Submitting...' : "Let's Connect"}
      </Button>
    </form>
  );
};
