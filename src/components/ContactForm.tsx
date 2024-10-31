// ContactForm.tsx
import React, { useState } from 'react';
import { Mail } from 'lucide-react';

const GENERIC_ERROR_MESSAGE = "The message couldn't be sent. Please try again and if the error persists send an email to: angeljose9629@gmail.com";

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<{type: string; message: string}>();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);

    try {
      const response = await fetch(process.env.REACT_APP_FORMSPREE_URL, {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus({ type: "success", message: "Message sent!" });
        form.reset();
      } else {
        setStatus({ type: "error", message: GENERIC_ERROR_MESSAGE });
      }
    } catch (error) {
      setStatus({ type: "error", message: GENERIC_ERROR_MESSAGE });
      console.error("Form submission error:", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">
        <span className="border-b-4 border-blue-400 pb-2">Get in Touch</span>
      </h2>
      <p className="text-xl text-gray-300 mb-8">
        Interested in working together? Let's connect!
      </p>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
        <label className="block">
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="mt-1 p-2 block w-full rounded-md bg-gray-800 text-white border border-gray-600"
          />
        </label>
        <label className="block">
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="mt-1 p-2 block w-full rounded-md bg-gray-800 text-white border border-gray-600"
          />
        </label>
        <label className="block">
          <textarea
            name="message"
            placeholder="Message"
            required
            rows={4}
            className="mt-1 p-2 block w-full rounded-md bg-gray-800 text-white border border-gray-600"
          ></textarea>
        </label>
        <button
          type="submit"
          className="inline-flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
        >
          <Mail size={20} />
          Send
        </button>
        {status && status.type === "success" && <p className="mt-2 text-sm text-green-500">{status.message}</p>}
        {status && status.type === "error" && <p className="mt-2 text-sm text-red-500">{status.message}</p>}
      </form>
    </div>
    
  );
};

export default ContactForm;
