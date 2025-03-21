
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./common/SectionWrapper";
import AnimatedText from "./common/AnimatedText";
import { toast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // In a real project, you would connect this to a backend service
    // For now, we'll just simulate a submission with a timeout
    setTimeout(() => {
      setLoading(false);
      
      // Show success toast
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      // Reset form
      setForm({
        name: "",
        email: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <>
      <AnimatedText delay={0.2}>
        <h2 className="section-heading">Contact</h2>
      </AnimatedText>
      <AnimatedText delay={0.4} className="mt-3 text-gray-600 text-center max-w-3xl mx-auto">
        <p>
          Feel free to reach out to me for any questions or opportunities.
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
      </AnimatedText>

      <div className="mt-16 flex flex-col-reverse gap-10 overflow-hidden lg:flex-row">
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -50 },
            show: { opacity: 1, x: 0 }
          }}
          className="flex-1 glassmorphism p-8 rounded-2xl"
        >
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-6"
          >
            <label className="flex flex-col">
              <span className="text-gray-700 font-medium mb-2">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                required
                className="px-4 py-3 rounded-lg bg-white border border-gray-300 placeholder:text-gray-400 text-gray-700 focus:border-primary focus:outline-none"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-gray-700 font-medium mb-2">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email address?"
                required
                className="px-4 py-3 rounded-lg bg-white border border-gray-300 placeholder:text-gray-400 text-gray-700 focus:border-primary focus:outline-none"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-gray-700 font-medium mb-2">Your Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What would you like to say?"
                required
                className="px-4 py-3 rounded-lg bg-white border border-gray-300 placeholder:text-gray-400 text-gray-700 focus:border-primary focus:outline-none resize-none"
              />
            </label>

            <button
              type="submit"
              className="btn-primary mt-3 flex items-center justify-center"
              disabled={loading}
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  <span>Sending...</span>
                </div>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, x: 50 },
            show: { opacity: 1, x: 0 }
          }}
          className="flex-1 lg:h-auto md:h-[550px] h-[350px]"
        >
          <div className="w-full h-full flex justify-center items-center">
            <div className="w-full h-full rounded-2xl overflow-hidden">
              {/* We'll use an embedded map here */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30591910525!2d-74.25986682425866!3d40.697149422113014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sca!4v1649856241789!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: "16px" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(ContactSection, "contact");
