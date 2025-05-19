import React, { useState } from 'react';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your form submission logic, e.g., send data to backend
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      message: '',
    });
  };

  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How can I place an order?",
      answer:
        "You can place an order by contacting us via:\nPhone: (+63) 962 672 0743\nEmail: admin@ics-enterprises.com\nWebsite: [Insert website, if applicable]\nDirect messaging on our social media pages.",
    },
    {
      question: "Is there a minimum order quantity?",
      answer:
        "Yes, we specialize in bulk orders. We do have a minimum order quantity (MOQ) for free delivery. The MOQ will vary based on the delivery location and the total number of orders placed. Contact us for more details.",
    },
    {
      question: "Do you offer delivery services?",
      answer:
        "Yes, we provide delivery for bulk orders. Delivery fees and schedules depend on your location.",
    },
    {
      question: "Do you offer discounts for bulk purchases?",
      answer:
        "Yes! We provide competitive pricing and discounts for large orders. Contact us to discuss pricing options.",
    },
    {
      question: "Are your cleaning products safe for food processing areas?",
      answer:
        "Yes, we have food-safe cleaning and disinfecting solutions. Let us know your specific needs so we can recommend the right products.",
    },
  ];
  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const inputStyle = "w-full p-2 border rounded bg-white text-black";

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-6 max-w-xl mx-auto">
      <div className='text-2xl text-center pt-8'>
        <h1>Send us a message</h1>
        <h2>We'd love to hear from you</h2>
      </div>
      {['name', 'email'].map((field) => (
        <div key={field}>
          <label htmlFor={field} className="block font-semibold mb-1 capitalize">
            {field}:
          </label>
          <input
            type={field === 'email' ? 'email' : 'text'}
            id={field}
            name={field}
            value={formData[field]}
            onChange={handleChange}
            className={inputStyle}
          />
        </div>
      ))}

      <div className="md:flex gap-4">
        <div className="md:w-1/2">
          <label htmlFor="company" className="block font-semibold mb-1">Company:</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className={inputStyle}
          />
        </div>
        <div className="md:w-1/2 mt-4 md:mt-0">
          <label htmlFor="phone" className="block font-semibold mb-1">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={inputStyle}
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block font-semibold mb-1">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className={inputStyle}
          rows={4}
        />
      </div>

      <button
        type="submit"
        className="w-full py-2 rounded bg-yellow-500 text-white hover:bg-yellow-600 transition"
      >
        Submit
      </button>
      <div className="w-full text-center pt-8">
        <hr className="border-t-2 border-gray-300 w-full mb-4" />
        <h1 className="text-2xl text-white font-semibold">Frequently Asked Questions</h1>
      </div>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b pb-2">
            <button
              onClick={() => toggleFaq(index)}
              className="flex justify-between items-center w-full  text-left text-lg font-semibold text-white"
            >
              {faq.question}
              <span>{openIndex === index ? "▲" : "▼"}</span>
            </button>
            {openIndex === index && (
              <p className="mt-2 text-white whitespace-pre-line">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </form>
  );
};

export default Contacts;
