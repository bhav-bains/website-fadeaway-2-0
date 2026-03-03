import React from 'react';
import { Button } from './Button';

export const ContactForm: React.FC = () => {
  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      action="/?success=true"
      className="space-y-3"
    >
      <input type="hidden" name="form-name" value="contact" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="input-primary text-sm py-2.5"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="input-primary text-sm py-2.5"
          required
        />
      </div>
      <input
        type="text"
        name="website"
        placeholder="Your Website (optional)"
        className="input-primary text-sm py-2.5"
      />
      <textarea
        name="goals"
        placeholder="Tell us about your goals..."
        className="input-primary text-sm py-2.5 min-h-24 resize-none"
        required
      ></textarea>

      <Button
        variant="primary"
        size="lg"
        className="w-full"
        type="submit"
      >
        Let's Connect
      </Button>
    </form>
  );
};
