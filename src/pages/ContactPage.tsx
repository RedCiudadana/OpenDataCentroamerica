import { useState, FormEvent } from 'react';
import { supabase } from '../lib/supabase';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

export function ContactPage() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    nombreCompleto: '',
    correoElectronico: '',
    asunto: '',
    mensaje: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const { error } = await supabase.from('contacts').insert([
        {
          nombre_completo: formData.nombreCompleto,
          correo_electronico: formData.correoElectronico,
          asunto: formData.asunto,
          mensaje: formData.mensaje,
        },
      ]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({
        nombreCompleto: '',
        correoElectronico: '',
        asunto: '',
        mensaje: '',
      });
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Error al enviar el formulario');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {t.contact.title}
            </h1>
            <p className="text-xl text-gray-700 mb-2">
              {t.contact.subtitle}
            </p>
            <p className="text-gray-600">
              {t.contact.subtitle}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-green-900 font-semibold">
                    {t.contact.success}
                  </h3>
                  <p className="text-green-700 text-sm">
                    {t.contact.success}
                  </p>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-red-900 font-semibold">
                    {t.contact.error}
                  </h3>
                  <p className="text-red-700 text-sm">
                    {errorMessage || t.contact.error}
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="nombreCompleto"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  {t.contact.name}
                </label>
                <input
                  type="text"
                  id="nombreCompleto"
                  name="nombreCompleto"
                  value={formData.nombreCompleto}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder={t.contact.namePlaceholder}
                />
              </div>

              <div>
                <label
                  htmlFor="correoElectronico"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  {t.contact.email}
                </label>
                <input
                  type="email"
                  id="correoElectronico"
                  name="correoElectronico"
                  value={formData.correoElectronico}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder={t.contact.emailPlaceholder}
                />
              </div>

              <div>
                <label
                  htmlFor="asunto"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  {t.contact.subject}
                </label>
                <input
                  type="text"
                  id="asunto"
                  name="asunto"
                  value={formData.asunto}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder={t.contact.subjectPlaceholder}
                />
              </div>

              <div>
                <label
                  htmlFor="mensaje"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  {t.contact.message}
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                  placeholder={t.contact.messagePlaceholder}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gray-700 text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    {t.contact.sending}
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    {t.contact.submit}
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="text-center">
            <p className="text-gray-700 font-medium mb-4">
              Síguenos a través de nuestras redes sociales
            </p>
            <div className="flex justify-center items-center gap-4">
              <a
                href="https://x.com/redxguate"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition-colors"
                aria-label="X"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/Redciudadanagt"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition-colors"
                aria-label="Facebook"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 3.667h-3.533v7.98H9.101z" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@redxguate"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition-colors"
                aria-label="TikTok"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/channel/UCQwc62j7beStZYFzwPxBEQg"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition-colors"
                aria-label="YouTube"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/redxguate/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition-colors"
                aria-label="Instagram"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
  );
}
