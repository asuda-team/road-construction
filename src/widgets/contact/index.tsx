'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useTranslations } from 'next-intl';
import { useContact } from '@/entities/contact/hooks';
import { Controller } from 'react-hook-form';

export const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const t = useTranslations();
  const { control, onSubmit, isPending, message } = useContact();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    gsap.from(container.children, {
      opacity: 0,
      y: 20,
      duration: 0.5,
      stagger: 0.1,
      ease: 'power2.out'
    });
  }, []);

  return (
    <section className='relative py-20'>
      <div ref={containerRef} className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-darkBlue mb-12">{t('contact.label')}</h1>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-darkBlue/5 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-darkBlue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-darkBlue mb-1">{t('contact.phone')}</h3>
                  <p className="text-blueGray/70"><a href={'tel:+99312123456'}>+993 (12) 123456</a></p>
                  <p className="text-blueGray/70"><a href={'tel:+99312234567'}>+993 (12) 234567</a></p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-darkBlue/5 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-darkBlue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-darkBlue mb-1">{t('contact.email')}</h3>
                  <p className="text-blueGray/70"><a href={'mailto:info@yoltaslama.gov.tm'}>info@yoltaslama.gov.tm</a></p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-darkBlue/5 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-darkBlue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-darkBlue mb-1">{t('contact.adress')}</h3>
                  <p className="text-blueGray/70">Aşgabat ş., Arçabil şaýoly, 156-njy jaý</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            ref={formRef}
            className="bg-white rounded-2xl p-8 border border-darkBlue/5"
            onSubmit={onSubmit}
          >
            <div className="space-y-6">
              <div>
                <Controller
                  control={control}
                  name={'email'}
                  render={({ field }) => (
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-darkBlue/10 focus:border-darkBlue/30 focus:outline-none transition-colors"
                      placeholder={t('contact.mail')}
                      {...field}
                    />
                  )}
                />
              </div>
              <div>
                <Controller
                  control={control}
                  name={'title'}
                  render={({ field }) => (
                    <input
                      type="text"
                      id="title"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-darkBlue/10 focus:border-darkBlue/30 focus:outline-none transition-colors"
                      placeholder={t('contact.subject')}
                      {...field}
                    />
                  )}
                />
              </div>

              <div>
                <Controller
                  control={control}
                  name={'description'}
                  render={({ field }) => (
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-darkBlue/10 focus:border-darkBlue/30 focus:outline-none transition-colors resize-none"
                      placeholder={t('contact.message')}
                      required
                      {...field}
                    />
                  )}
                />

              </div>

              <button
                type="submit"
                disabled={isPending}
                className="w-full bg-darkBlue text-white py-3 rounded-xl hover:bg-darkBlue/90 transition-colors duration-300 font-medium"
              >{isPending ? t('contact.sending') : t('contact.send')}</button>
            </div>
            <div className={`mt-6 p-3 ${message === 'contact.failed' ? "bg-red-100" : "bg-green-100"} rounded-xl ${message.length > 0 ? 'opacity-100' : 'opacity-0'}`}>
              <h2 className={`text-base font-medium ${message === 'contact.failed' ? 'text-red-700' : "text-green-700"}`}>{message.length > 0 ? t(`${message}`) : ''}</h2>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
