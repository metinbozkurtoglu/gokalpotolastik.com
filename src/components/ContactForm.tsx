import { useState } from 'preact/hooks';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const openWhatsApp = () => {
    const whatsappMsg = encodeURIComponent(
      `Merhaba, ben ${formData.name}.\nTelefon: ${formData.phone}\n${formData.message ? `Mesaj: ${formData.message}` : ''}`
    );
    window.open(`https://wa.me/905340307759?text=${whatsappMsg}`, '_blank');
  };

  const handleSubmit = async (e: Event) => {
    e.preventDefault();

    // Validation
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      setErrorMessage('Lütfen geçerli bir isim girin.');
      setStatus('error');
      return;
    }

    const phoneRegex = /^(\+90|0)?[0-9]{10}$/;
    const cleanPhone = formData.phone.replace(/\s/g, '');
    if (!phoneRegex.test(cleanPhone)) {
      setErrorMessage('Lütfen geçerli bir telefon numarası girin (05XX XXX XX XX).');
      setStatus('error');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus('success');
        setFormData({ name: '', phone: '', message: '' });
      } else if (result.fallback) {
        // API failed, fallback to WhatsApp
        openWhatsApp();
        setStatus('success');
        setFormData({ name: '', phone: '', message: '' });
      } else {
        setErrorMessage(result.error || 'Bir hata oluştu.');
        setStatus('error');
      }
    } catch {
      // Network error - fallback to WhatsApp
      openWhatsApp();
      setStatus('success');
      setFormData({ name: '', phone: '', message: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit} class="space-y-4">
      <div>
        <label htmlFor="contact-name" class="block text-sm font-medium text-gray-700 mb-2">
          Adınız Soyadınız *
        </label>
        <input
          id="contact-name"
          type="text"
          required
          disabled={status === 'loading'}
          value={formData.name}
          onInput={(e) => setFormData({ ...formData, name: (e.target as HTMLInputElement).value })}
          class="w-full bg-white border border-gray-300 rounded-lg px-4 py-3.5 text-gray-900 placeholder-gray-400 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-[15px] disabled:bg-gray-100 disabled:cursor-not-allowed"
          placeholder="Adınızı girin"
          style="min-height: 48px;"
        />
      </div>

      <div>
        <label htmlFor="contact-phone" class="block text-sm font-medium text-gray-700 mb-2">
          Telefon Numaranız *
        </label>
        <input
          id="contact-phone"
          type="tel"
          required
          disabled={status === 'loading'}
          value={formData.phone}
          onInput={(e) => setFormData({ ...formData, phone: (e.target as HTMLInputElement).value })}
          class="w-full bg-white border border-gray-300 rounded-lg px-4 py-3.5 text-gray-900 placeholder-gray-400 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-[15px] disabled:bg-gray-100 disabled:cursor-not-allowed"
          placeholder="05XX XXX XX XX"
          style="min-height: 48px;"
        />
      </div>

      <div>
        <label htmlFor="contact-message" class="block text-sm font-medium text-gray-700 mb-2">
          Mesajınız
        </label>
        <textarea
          id="contact-message"
          rows={4}
          disabled={status === 'loading'}
          value={formData.message}
          onInput={(e) => setFormData({ ...formData, message: (e.target as HTMLTextAreaElement).value })}
          class="w-full bg-white border border-gray-300 rounded-lg px-4 py-3.5 text-gray-900 placeholder-gray-400 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none text-[15px] disabled:bg-gray-100 disabled:cursor-not-allowed"
          placeholder="Hizmet veya ürünle ilgili sorularınızı yazın..."
        />
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        class="btn-primary w-full disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? (
          <>
            <svg class="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Gönderiliyor...
          </>
        ) : (
          <>
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
            Gönder
          </>
        )}
      </button>

      {status === 'success' && (
        <div class="flex items-center gap-2 text-green-700 text-sm bg-green-50 border border-green-200 rounded-lg px-4 py-3">
          <svg class="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          Mesajınız iletildi. En kısa sürede sizinle iletişime geçeceğiz.
        </div>
      )}

      {status === 'error' && (
        <div class="flex items-center gap-2 text-red-700 text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-3">
          <svg class="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          {errorMessage || 'Lütfen adınızı ve telefon numaranızı girin.'}
        </div>
      )}
    </form>
  );
}
