import { useState } from 'react';
import SectionContainer from '../layout/SectionContainer.jsx';
import SocialLinks from '../ui/SocialLinks.jsx';
import cn from '../../utils/cn.js';

const FIELDS = [
  { name: 'name', label: 'Nombre', type: 'text', autoComplete: 'name' },
  { name: 'email', label: 'Email', type: 'email', autoComplete: 'email' },
  { name: 'subject', label: 'Asunto', type: 'text', autoComplete: 'off' },
  { name: 'message', label: 'Mensaje', type: 'textarea', rows: 5 },
];

export default function Contact() {
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

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus(null);

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SectionContainer
      id="contact"
      eyebrow="Contacto"
      title="Ponte en"
      highlight="contacto"
      description="¿Tienes alguna pregunta o proyecto en mente? No dudes en escribirme."
      decoration="bottom-right"
    >
      <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
        {/* Canales directos */}
        <div className="min-w-0 space-y-6 lg:col-span-2">
          <p className="text-fluid-lead text-gray-300">
            También puedes encontrarme en mis redes o revisar mi currículum:
          </p>
          <SocialLinks variant="secondary" stackOnMobile />
        </div>

        {/* Formulario */}
        <div className="min-w-0 lg:col-span-3">
          <div className="group relative isolate overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 via-gray-900 to-gray-900 p-5 ring-1 ring-white/5 transition-shadow duration-300 hover:shadow-2xl hover:shadow-pink-500/20 sm:p-8">
            {submitStatus === 'success' && (
              <div
                role="status"
                className="mb-6 flex items-center gap-3 rounded-lg bg-green-500/10 px-4 py-3 text-green-400"
              >
                <svg className="h-5 w-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-sm font-medium">¡Mensaje enviado con éxito! Te responderé pronto.</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div
                role="alert"
                className="mb-6 flex items-center gap-3 rounded-lg bg-red-500/10 px-4 py-3 text-red-400"
              >
                <svg className="h-5 w-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <p className="text-sm font-medium">Hubo un error al enviar el mensaje. Por favor intenta de nuevo.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              {FIELDS.map((field) => {
                const hasError = Boolean(errors[field.name]);
                const errorId = `${field.name}-error`;
                const fieldClassName = cn(
                  'peer w-full rounded-lg border bg-gray-800/50 px-4 pb-2 pt-6 text-base text-white placeholder-transparent outline-none transition-all duration-200 focus:ring-2',
                  field.type === 'textarea' ? 'resize-none' : 'min-h-14',
                  hasError
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                    : 'border-gray-700 focus:border-pink-400 focus:ring-pink-400/20',
                );
                const sharedProps = {
                  id: field.name,
                  name: field.name,
                  value: formData[field.name],
                  onChange: handleChange,
                  placeholder: field.label,
                  className: fieldClassName,
                  'aria-invalid': hasError,
                  'aria-describedby': hasError ? errorId : undefined,
                };

                return (
                  <div key={field.name} className="relative">
                    {field.type === 'textarea' ? (
                      <textarea rows={field.rows} {...sharedProps} />
                    ) : (
                      <input type={field.type} autoComplete={field.autoComplete} {...sharedProps} />
                    )}
                    <label
                      htmlFor={field.name}
                      className={cn(
                        'pointer-events-none absolute left-4 top-2 text-xs transition-all duration-200 peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs',
                        hasError ? 'text-red-400' : 'text-white peer-focus:text-pink-400',
                      )}
                    >
                      {field.label}
                    </label>
                    {hasError && (
                      <p id={errorId} className="mt-1 text-xs text-red-400">
                        {errors[field.name]}
                      </p>
                    )}
                  </div>
                );
              })}

              <button
                type="submit"
                disabled={isSubmitting}
                className="group/btn relative min-h-12 w-full overflow-hidden rounded-lg bg-gradient-to-r from-pink-500 to-pink-400 px-8 py-4 font-semibold text-white transition-all duration-300 hover:from-pink-600 hover:to-pink-500 hover:shadow-lg hover:shadow-pink-500/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2 focus-visible:ring-offset-base disabled:cursor-not-allowed disabled:opacity-70"
              >
                <span
                  className={cn(
                    'flex items-center justify-center gap-2 transition-all duration-200',
                    isSubmitting ? 'opacity-0' : 'opacity-100',
                  )}
                >
                  Enviar mensaje
                  <svg
                    className="h-5 w-5 transition-transform duration-200 group-hover/btn:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>

                {isSubmitting && (
                  <span className="absolute inset-0 flex items-center justify-center">
                    <svg className="h-6 w-6 animate-spin" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    <span className="sr-only">Enviando mensaje...</span>
                  </span>
                )}
              </button>
            </form>

            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 bg-gradient-to-r from-pink-600 to-pink-400 opacity-0 transition-opacity duration-300 group-hover:opacity-10"
            />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
