import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTwitter, FaDiscord } from 'react-icons/fa';
import axios from 'axios';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await axios.post('http://localhost:3000/api/contact',data, {
            headers: { 'Content-Type': 'application/json' },
      });

      if (response.status===200) {
        setSubmitStatus('success');
        reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animation variants for container and children
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
    tap: { scale: 0.95 },
  };

  const messageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  };

  return (
    <motion.section
      id="contact"
      className="py-16 px-4 md:px-8 text-white"
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl font-bold mb-4 text-center font-mono text-teal-400"
          variants={childVariants}
        >
          Get in Touch
        </motion.h2>
        <motion.p
          className="text-center mb-8 text-gray-300"
          variants={childVariants}
        >
          Feel free to reach out for collaborations, questions, or just to say hi!
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
        >
          {/* Contact Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <motion.div variants={childVariants}>
              <label htmlFor="name" className="block mb-1 font-medium">Name</label>
              <input
                id="name"
                type="text"
                className="w-full p-2 border rounded-md bg-gray-800 border-gray-700 text-white"
                {...register('name', { required: 'Name is required' })}
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </motion.div>

            <motion.div variants={childVariants}>
              <label htmlFor="email" className="block mb-1 font-medium">Email</label>
              <input
                id="email"
                type="email"
                className="w-full p-2 border rounded-md bg-gray-800 border-gray-700 text-white"
                {...register('email', {
                  required: 'Email is required',
                  pattern: { 
                    value: /^\S+@\S+$/i, 
                    message: 'Invalid email' },
                })}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </motion.div>

            <motion.div variants={childVariants}>
              <label htmlFor="message" className="block mb-1 font-medium">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full p-2 border rounded-md bg-gray-800 border-gray-700 text-white"
                {...register('message', { required: 'Message is required' })}
              />
              {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
            </motion.div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-teal-500 cursor-pointer text-white py-2 rounded-md hover:bg-teal-600 transition disabled:opacity-50"
              variants={buttonVariants}
              whileHover={!isSubmitting ? 'hover' : ''}
              whileTap={!isSubmitting ? 'tap' : ''}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>

            {submitStatus === 'success' && (
              <motion.p
                className="text-green-500 mt-2"
                initial="hidden"
                animate="visible"
                variants={messageVariants}
              >
                Message sent successfully!
              </motion.p>
            )}
            {submitStatus === 'error' && (
              <motion.p
                className="text-red-500 mt-2"
                initial="hidden"
                animate="visible"
                variants={messageVariants}
              >
                Failed to send message. Please try again.
              </motion.p>
            )}
          </form>

          {/* Contact Info / Socials */}
          <motion.div className="space-y-4" variants={childVariants}>
            <h3 className="text-xl font-semibold font-mono text-teal-400">Contact Information</h3>
            <p className="text-gray-300">
              Email: <a href="mailto:adarshnagar247@gmail.com" className="text-teal-400 hover:underline">adarshnagar247@gmail.com</a>
            </p>

            <h3 className="text-xl font-semibold mt-6 font-mono text-teal-400">Connect with Me</h3>
            <div className="flex space-x-4">
              <a href="https://github.com/Adarsh-ops" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-teal-400 transition">
                {<FaGithub size={24}/>}
              </a>
              <a href="https://linkedin.com/in/adarsh-nagar-37a562316" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-teal-400 transition">
                {<FaLinkedin size={24}/>}
              </a>
              <a href="https://x.com/AdarshN10490396" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-teal-400 transition">
                {<FaTwitter size={24}/>}
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}