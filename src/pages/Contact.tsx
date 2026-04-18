import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageCircle } from 'lucide-react'

const faqs = [
  {
    q: 'What areas of London do you cover?',
    a: 'We primarily operate across East London and surrounding areas including Stratford, Leytonstone, Walthamstow, East Ham, Ilford, Forest Gate, and Manor Park. For larger projects, we may consider other London locations — please contact us to discuss.',
  },
  {
    q: 'How long does a typical project take?',
    a: 'Timelines vary depending on project scope. A single-room renovation might take 4-6 weeks, while a full new build can take 8-12 months. During your consultation, we\'ll provide a detailed timeline specific to your project.',
  },
  {
    q: 'Do you provide free quotes?',
    a: 'Yes, we offer free, no-obligation consultations and quotes. After an initial site visit to understand your requirements, we provide a detailed, itemised quote with no hidden costs.',
  },
  {
    q: 'Are you insured and certified?',
    a: "Absolutely. We carry full public liability insurance and employer's liability insurance. We're also registered with TrustMark and members of the Federation of Master Builders (FMB). All our work complies with current Building Regulations.",
  },
  {
    q: 'Do you handle planning permission?',
    a: 'Yes, we can manage the entire planning permission process on your behalf, including preparing and submitting applications, liaising with local authorities, and addressing any queries that arise.',
  },
]

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('submitting')
    setTimeout(() => setFormState('success'), 1500)
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-36 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h1 className="font-heading text-3xl md:text-5xl font-semibold text-white mb-4 leading-tight">
            Get In Touch
          </h1>
          <p className="text-grey-300 text-lg max-w-xl mx-auto leading-relaxed">
            Ready to start your project? Have questions about our services? We'd love to hear from you. Reach out and we'll respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Form & Contact Info */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              {formState === 'success' ? (
                <div className="text-center py-16">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="font-heading text-2xl font-semibold text-navy mb-2">Thank You!</h3>
                  <p className="text-grey-600">Your message has been sent. We'll be in touch within 24 hours.</p>
                </div>
              ) : (
                <>
                  <h3 className="font-heading text-2xl font-semibold text-navy mb-2">Send Us a Message</h3>
                  <p className="text-grey-500 text-sm mb-6">Fill in the form below and we'll get back to you within 24 hours.</p>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-1.5">
                          Full Name <span className="text-amber-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Your full name"
                          className="w-full px-4 py-3.5 border border-grey-300 rounded text-base focus:border-amber-500 focus:ring-2 focus:ring-amber-500/15 outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-1.5">
                          Phone Number <span className="text-amber-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+44 7XXX XXXXXX"
                          className="w-full px-4 py-3.5 border border-grey-300 rounded text-base focus:border-amber-500 focus:ring-2 focus:ring-amber-500/15 outline-none transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-1.5">
                        Email Address <span className="text-amber-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="your@email.com"
                        className="w-full px-4 py-3.5 border border-grey-300 rounded text-base focus:border-amber-500 focus:ring-2 focus:ring-amber-500/15 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-1.5">
                        Service Interested In
                      </label>
                      <select className="w-full px-4 py-3.5 border border-grey-300 rounded text-base focus:border-amber-500 focus:ring-2 focus:ring-amber-500/15 outline-none transition-all bg-white">
                        <option>Please select...</option>
                        <option>Residential Construction</option>
                        <option>Renovation & Remodeling</option>
                        <option>Interior Finishing</option>
                        <option>Turnkey Projects</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-1.5">
                        Tell Us About Your Project
                      </label>
                      <textarea
                        rows={5}
                        placeholder="Briefly describe your project, timeline, and any specific requirements..."
                        className="w-full px-4 py-3.5 border border-grey-300 rounded text-base focus:border-amber-500 focus:ring-2 focus:ring-amber-500/15 outline-none transition-all resize-y"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-1.5">
                        How Did You Hear About Us?
                      </label>
                      <select className="w-full px-4 py-3.5 border border-grey-300 rounded text-base focus:border-amber-500 focus:ring-2 focus:ring-amber-500/15 outline-none transition-all bg-white">
                        <option>Please select...</option>
                        <option>Google Search</option>
                        <option>Social Media</option>
                        <option>Referral</option>
                        <option>Previous Client</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <button
                      type="submit"
                      disabled={formState === 'submitting'}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 disabled:bg-amber-300 text-white font-heading text-sm font-medium uppercase tracking-wider px-8 py-4 rounded transition-all duration-200 hover:-translate-y-0.5"
                    >
                      {formState === 'submitting' ? (
                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <Send className="w-4 h-4" />
                      )}
                      {formState === 'submitting' ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                </>
              )}
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h4 className="font-heading text-xl font-semibold text-navy mb-6">Contact Information</h4>
              <ul className="space-y-5 mb-8">
                <li className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-sm font-medium text-charcoal block">Phone</span>
                    <a href="tel:+447775375757" className="text-grey-600 text-sm hover:text-amber-500 transition-colors">
                      +44 7775 375757
                    </a>
                    <span className="text-grey-400 text-xs block mt-0.5">Available Mon-Sat, 8am-6pm</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-sm font-medium text-charcoal block">Email</span>
                    <a href="mailto:labheshjapanchal@gmail.com" className="text-grey-600 text-sm hover:text-amber-500 transition-colors">
                      labheshjapanchal@gmail.com
                    </a>
                    <span className="text-grey-400 text-xs block mt-0.5">We reply within 24 hours</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-sm font-medium text-charcoal block">Office Address</span>
                    <span className="text-grey-600 text-sm">173 Shakespeare Crescent,<br />London, E12 6NA</span>
                    <span className="text-grey-400 text-xs block mt-0.5">By appointment only</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-sm font-medium text-charcoal block">Business Hours</span>
                    <span className="text-grey-600 text-sm">Mon – Fri: 8:00 AM – 6:00 PM</span>
                    <span className="text-grey-600 text-sm block">Saturday: 9:00 AM – 4:00 PM</span>
                    <span className="text-grey-600 text-sm block">Sunday: Closed</span>
                  </div>
                </li>
              </ul>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/447775375757"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-green-600 hover:bg-green-700 text-white font-heading text-sm font-medium px-6 py-4 rounded transition-all duration-200 hover:-translate-y-0.5 mb-6"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>

              {/* Social */}
              <div>
                <span className="text-sm font-medium text-charcoal block mb-3">Follow Us</span>
                <div className="flex gap-4">
                  {['Facebook', 'Instagram', 'LinkedIn'].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="w-10 h-10 rounded-full bg-grey-100 flex items-center justify-center text-amber-500 hover:bg-amber-500 hover:text-white transition-all duration-200"
                    >
                      <span className="text-xs font-heading font-bold">{social[0]}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.43134!2d0.045!3d51.543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDMyJzM0LjgiTiAwwrAwMic0Mi4wIkU!5e0!3m2!1sen!2suk!4v1"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="A2Z BuildCare Location"
          className="grayscale-[30%]"
        />
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-grey-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-10">
            <span className="text-xs font-heading font-medium uppercase tracking-[2px] text-amber-500 mb-4 block">
              Common Questions
            </span>
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-navy">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded shadow-sm overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left"
                >
                  <span className="font-heading text-base font-semibold text-navy pr-4">
                    {faq.q}
                  </span>
                  <span className={`text-amber-500 text-xl font-light transition-transform duration-200 shrink-0 ${openFaq === index ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-60' : 'max-h-0'}`}
                >
                  <p className="px-6 pb-4 text-grey-600 text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-navy py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-white mb-2">
            Prefer to Call?
          </h2>
          <p className="text-grey-300 mb-6">Our team is ready to answer your questions. Give us a call during business hours.</p>
          <a
            href="tel:+447775375757"
            className="text-amber-500 hover:text-amber-400 font-heading text-2xl md:text-3xl font-semibold block mb-6"
          >
            +44 7775 375757
          </a>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-navy font-heading text-sm font-medium uppercase tracking-wider px-8 py-3 rounded transition-all duration-200"
          >
            Or Send a Message
          </a>
        </div>
      </section>
    </>
  )
}
