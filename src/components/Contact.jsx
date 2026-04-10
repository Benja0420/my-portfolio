import { useState } from 'react';
import { Element } from 'react-scroll';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'El nombre debe tener al menos 2 caracteres';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Por favor ingresa un email válido';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'El asunto es requerido';
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = 'El asunto debe tener al menos 3 caracteres';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'El mensaje debe tener al menos 10 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus(null);

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Simulate success (you can replace this with actual API call)
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Element name="contact" className="bg-base">
      <section className="relative overflow-hidden px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-12 space-y-4">
            <div className="inline-flex items-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500/10 to-pink-400/10 px-4 py-2 text-sm font-semibold text-pink-400">
                <span className="h-2 w-2 rounded-full bg-pink-400"></span>
                Contacto
              </span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-5xl">
              <span className="block text-white">Ponte en</span>
              <span className="block bg-gradient-to-r from-pink-400 via-pink-300 to-pink-200 bg-clip-text text-transparent">
                contacto
              </span>
            </h2>
            <p className="max-w-2xl text-lg leading-8 text-gray-400">
              {"¿Tienes alguna pregunta o proyecto en mente? No dudes en escribirme."}
            </p>
          </div>

          {/* Form Container */}
          <div className="mx-auto max-w-2xl">
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 via-gray-900 to-gray-900 p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/20">
              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="mb-6 flex items-center gap-3 rounded-lg bg-green-500/10 px-4 py-3 text-green-400">
                  <svg className="h-5 w-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-sm font-medium">{"¡Mensaje enviado con éxito! Te responderé pronto."}</p>
                </div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="mb-6 flex items-center gap-3 rounded-lg bg-red-500/10 px-4 py-3 text-red-400">
                  <svg className="h-5 w-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <p className="text-sm font-medium">Hubo un error al enviar el mensaje. Por favor intenta de nuevo.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`peer w-full rounded-lg border bg-gray-800/50 px-4 pb-2 pt-6 text-white placeholder-transparent outline-none transition-all duration-200 focus:ring-2 ${
                      errors.name
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                        : 'border-gray-700 focus:border-pink-400 focus:ring-pink-400/20'
                    }`}
                    placeholder="Nombre"
                  />
                  <label
                    htmlFor="name"
                    className={`absolute left-4 top-2 text-xs transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs ${
                      errors.name ? 'text-red-400' : 'text-gray-400 peer-focus:text-pink-400'
                    }`}
                  >
                    Nombre
                  </label>
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-400">{errors.name}</p>
                  )}
                </div>

                {/* Email Field */}
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`peer w-full rounded-lg border bg-gray-800/50 px-4 pb-2 pt-6 text-white placeholder-transparent outline-none transition-all duration-200 focus:ring-2 ${
                      errors.email
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                        : 'border-gray-700 focus:border-pink-400 focus:ring-pink-400/20'
                    }`}
                    placeholder="Email"
                  />
                  <label
                    htmlFor="email"
                    className={`absolute left-4 top-2 text-xs transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs ${
                      errors.email ? 'text-red-400' : 'text-gray-400 peer-focus:text-pink-400'
                    }`}
                  >
                    Email
                  </label>
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-400">{errors.email}</p>
                  )}
                </div>

                {/* Subject Field */}
                <div className="relative">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`peer w-full rounded-lg border bg-gray-800/50 px-4 pb-2 pt-6 text-white placeholder-transparent outline-none transition-all duration-200 focus:ring-2 ${
                      errors.subject
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                        : 'border-gray-700 focus:border-pink-400 focus:ring-pink-400/20'
                    }`}
                    placeholder="Asunto"
                  />
                  <label
                    htmlFor="subject"
                    className={`absolute left-4 top-2 text-xs transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs ${
                      errors.subject ? 'text-red-400' : 'text-gray-400 peer-focus:text-pink-400'
                    }`}
                  >
                    Asunto
                  </label>
                  {errors.subject && (
                    <p className="mt-1 text-xs text-red-400">{errors.subject}</p>
                  )}
                </div>

                {/* Message Field */}
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`peer w-full resize-none rounded-lg border bg-gray-800/50 px-4 pb-2 pt-6 text-white placeholder-transparent outline-none transition-all duration-200 focus:ring-2 ${
                      errors.message
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                        : 'border-gray-700 focus:border-pink-400 focus:ring-pink-400/20'
                    }`}
                    placeholder="Mensaje"
                  />
                  <label
                    htmlFor="message"
                    className={`absolute left-4 top-2 text-xs transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs ${
                      errors.message ? 'text-red-400' : 'text-gray-400 peer-focus:text-pink-400'
                    }`}
                  >
                    Mensaje
                  </label>
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-400">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group/btn relative w-full overflow-hidden rounded-lg bg-gradient-to-r from-pink-500 to-pink-400 px-8 py-4 font-semibold text-white transition-all duration-300 hover:from-pink-600 hover:to-pink-500 hover:shadow-lg hover:shadow-pink-500/25 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  <span className={`flex items-center justify-center gap-2 transition-all duration-200 ${isSubmitting ? 'opacity-0' : 'opacity-100'}`}>
                    Enviar mensaje
                    <svg className="h-5 w-5 transition-transform duration-200 group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                  
                  {/* Loading Spinner */}
                  {isSubmitting && (
                    <span className="absolute inset-0 flex items-center justify-center">
                      <svg className="h-6 w-6 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                    </span>
                  )}
                </button>
              </form>

              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-pink-600 to-pink-400 opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>
            </div>
          </div>
        </div>

        {/* Decorative background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -bottom-40 right-0 -z-10 transform-gpu blur-3xl sm:-bottom-80">
            <div
              className="aspect-[1404,767] w-[87.75rem] bg-gradient-to-r from-pink-500 to-purple-600 opacity-10"
              style={{
                clipPath:
                  'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.5%, 92.5% 84.7%, 75.7% 64%, 55.3% 47.6%, 46.5% 49.7%, 45% 62.4%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
              }}
            ></div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Contact;
