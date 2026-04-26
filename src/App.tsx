import {
  BarChart3,
  Brush,
  CheckCircle2,
  ChevronsUp,
  ChevronRight,
  Clock3,
  Globe,
  MessageCircle,
  Scissors,
  ShieldCheck,
  Sparkles,
  Star,
  Store,
  UtensilsCrossed,
} from 'lucide-react';
import {useEffect, useState} from 'react';

const featureCards = [
  {
    title: 'Bookings & Calendar',
    text: 'Accept bookings 24/7, reduce no-shows, and keep your schedule always clear.',
    icon: Clock3,
  },
  {
    title: 'Customer CRM',
    text: 'Track customer history, preferences, and reminders in one simple dashboard.',
    icon: MessageCircle,
  },
  {
    title: 'Business Insights',
    text: 'See revenue trends, top services, and growth opportunities at a glance.',
    icon: BarChart3,
  },
];

const industries = [
  {
    name: 'Restaurants',
    detail: 'Table booking, pre-order management, and customer engagement.',
    icon: UtensilsCrossed,
  },
  {
    name: 'Takeaways',
    detail: 'Fast order flow, delivery status tracking, and repeat-order promos.',
    icon: Store,
  },
  {
    name: 'Beauty Parlors',
    detail: 'Stylist scheduling, service catalogs, and personalized offers.',
    icon: Scissors,
  },
];

const pricing = [
  {
    name: 'Starter',
    price: '£29',
    points: ['1 location', 'Online bookings', 'Basic reports', 'Email support'],
  },
  {
    name: 'Growth',
    price: '£79',
    points: ['Up to 3 locations', 'Advanced CRM', 'Marketing campaigns', 'Priority support'],
    featured: true,
  },
  {
    name: 'Scale',
    price: '£149',
    points: ['Unlimited locations', 'Automation rules', 'Custom integrations', 'Dedicated manager'],
  },
];

const processSteps = [
  {
    title: 'Share your business details',
    text: 'Tell us your services, opening hours, pricing model, and target audience in a simple onboarding form.',
  },
  {
    title: 'We prepare your digital setup',
    text: 'Your booking flow, service pages, lead forms, and offer sections are arranged into a structured layout.',
  },
  {
    title: 'Review in development',
    text: 'You review all visuals and text in a staging/development environment before anything is published.',
  },
  {
    title: 'Go live with confidence',
    text: 'Once approved, the final polished version is launched with clear tracking and future update options.',
  },
];

const faqItems = [
  {
    q: 'Can we update content later?',
    a: 'Yes. The structure is designed to support easy edits for text, images, offers, and sections as your business grows.',
  },
  {
    q: 'Do I need technical knowledge?',
    a: 'No. This is built for non-technical owners. The layout and language are intentionally simple and business-friendly.',
  },
  {
    q: 'Can this work for multi-location businesses?',
    a: 'Yes. The same content framework can be expanded for multiple branches, teams, and service categories.',
  },
  {
    q: 'Will this be mobile-friendly later?',
    a: 'Yes. Mobile optimization can be finalized in the next iteration while keeping this desktop-first direction intact.',
  },
];

const formSteps = ['Business Details', 'Sponsorship Status', 'Compliance History', 'Final Review'];

export default function App() {
  const [activeLanding, setActiveLanding] = useState<'landing1' | 'landing2' | 'landing3' | 'landing4'>('landing1');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [currentFormStep, setCurrentFormStep] = useState(1);
  const [formData, setFormData] = useState({
    companyName: '',
    registeredCompanyNumber: '',
    tradingName: '',
    contactName: '',
    jobTitle: '',
    email: '',
    mobile: '',
    website: '',
    address: '',
    industry: '',
    sponsorLicence: 'yes',
    sponsorType: 'worker',
    licenceStatus: 'new',
    planningToApply: 'yes',
    priorLicence: 'yes',
    homeOfficeActivity: '',
    note: '',
  });

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 420);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, {passive: true});
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  const updateFormField = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({...prev, [field]: value}));
  };

  const stepFormSection = (
    <section id="step-form" className="step-form section-space">
      <div className="container">
        <div className="section-title">
          <h2>Step-wise registration form</h2>
          <p>Complete one section at a time. This follows the sponsorship flow shown in your reference.</p>
        </div>

        <div className="stepper-head">
          {formSteps.map((item, index) => {
            const stepNumber = index + 1;
            return (
              <div
                key={item}
                className={`step-chip ${stepNumber === currentFormStep ? 'active' : ''} ${stepNumber < currentFormStep ? 'done' : ''}`}
              >
                <span>{stepNumber}</span>
                {item}
              </div>
            );
          })}
        </div>

        <div className="step-panel">
          {currentFormStep === 1 ? (
            <div className="form-grid two">
              <label>
                Business / Company Name
                <input value={formData.companyName} onChange={(e) => updateFormField('companyName', e.target.value)} />
              </label>
              <label>
                Registered Company Number
                <input
                  value={formData.registeredCompanyNumber}
                  onChange={(e) => updateFormField('registeredCompanyNumber', e.target.value)}
                />
              </label>
              <label>
                Trading Name
                <input value={formData.tradingName} onChange={(e) => updateFormField('tradingName', e.target.value)} />
              </label>
              <label>
                Primary Contact Name
                <input value={formData.contactName} onChange={(e) => updateFormField('contactName', e.target.value)} />
              </label>
              <label>
                Job Title / Position
                <input value={formData.jobTitle} onChange={(e) => updateFormField('jobTitle', e.target.value)} />
              </label>
              <label>
                Business Email Address
                <input value={formData.email} onChange={(e) => updateFormField('email', e.target.value)} />
              </label>
              <label>
                Mobile / Contact Number
                <input value={formData.mobile} onChange={(e) => updateFormField('mobile', e.target.value)} />
              </label>
              <label>
                Business Website
                <input value={formData.website} onChange={(e) => updateFormField('website', e.target.value)} />
              </label>
              <label className="full">
                Registered Address
                <textarea value={formData.address} onChange={(e) => updateFormField('address', e.target.value)} rows={3} />
              </label>
              <label className="full">
                Industry / Sector
                <input value={formData.industry} onChange={(e) => updateFormField('industry', e.target.value)} />
              </label>
            </div>
          ) : null}

          {currentFormStep === 2 ? (
            <div className="form-grid">
              <fieldset>
                <legend>Do you currently hold a sponsor licence?</legend>
                <div className="radio-row">
                  <label><input type="radio" checked={formData.sponsorLicence === 'yes'} onChange={() => updateFormField('sponsorLicence', 'yes')} /> Yes</label>
                  <label><input type="radio" checked={formData.sponsorLicence === 'no'} onChange={() => updateFormField('sponsorLicence', 'no')} /> No</label>
                  <label><input type="radio" checked={formData.sponsorLicence === 'application'} onChange={() => updateFormField('sponsorLicence', 'application')} /> Application in progress</label>
                </div>
              </fieldset>
              <fieldset>
                <legend>If yes, what type of licence do you hold?</legend>
                <div className="radio-row">
                  <label><input type="radio" checked={formData.sponsorType === 'worker'} onChange={() => updateFormField('sponsorType', 'worker')} /> Worker</label>
                  <label><input type="radio" checked={formData.sponsorType === 'temporary'} onChange={() => updateFormField('sponsorType', 'temporary')} /> Temporary Worker</label>
                  <label><input type="radio" checked={formData.sponsorType === 'both'} onChange={() => updateFormField('sponsorType', 'both')} /> Both</label>
                </div>
              </fieldset>
              <fieldset>
                <legend>Is this a new or existing sponsor licence?</legend>
                <div className="radio-row">
                  <label><input type="radio" checked={formData.licenceStatus === 'new'} onChange={() => updateFormField('licenceStatus', 'new')} /> New</label>
                  <label><input type="radio" checked={formData.licenceStatus === 'existing'} onChange={() => updateFormField('licenceStatus', 'existing')} /> Existing</label>
                </div>
              </fieldset>
            </div>
          ) : null}

          {currentFormStep === 3 ? (
            <div className="form-grid">
              <fieldset>
                <legend>If no licence, are you planning to apply?</legend>
                <div className="radio-row">
                  <label><input type="radio" checked={formData.planningToApply === 'yes'} onChange={() => updateFormField('planningToApply', 'yes')} /> Yes</label>
                  <label><input type="radio" checked={formData.planningToApply === 'no'} onChange={() => updateFormField('planningToApply', 'no')} /> No</label>
                  <label><input type="radio" checked={formData.planningToApply === 'notSure'} onChange={() => updateFormField('planningToApply', 'notSure')} /> Not sure</label>
                </div>
              </fieldset>
              <fieldset>
                <legend>Have you previously held a sponsor licence?</legend>
                <div className="radio-row">
                  <label><input type="radio" checked={formData.priorLicence === 'yes'} onChange={() => updateFormField('priorLicence', 'yes')} /> Yes</label>
                  <label><input type="radio" checked={formData.priorLicence === 'no'} onChange={() => updateFormField('priorLicence', 'no')} /> No</label>
                </div>
              </fieldset>
              <label>
                Have you had any Home Office compliance activity (audit/visit/review)?
                <textarea
                  value={formData.homeOfficeActivity}
                  onChange={(e) => updateFormField('homeOfficeActivity', e.target.value)}
                  rows={4}
                  placeholder="Please provide brief details"
                />
              </label>
            </div>
          ) : null}

          {currentFormStep === 4 ? (
            <div className="form-grid">
              <div className="review-box">
                <h3>Review before submit</h3>
                <p>Business: {formData.companyName || 'Not provided'}</p>
                <p>Contact: {formData.contactName || 'Not provided'}</p>
                <p>Email: {formData.email || 'Not provided'}</p>
                <p>Sponsor licence: {formData.sponsorLicence}</p>
                <p>Licence type: {formData.sponsorType}</p>
              </div>
              <label>
                Additional notes
                <textarea value={formData.note} onChange={(e) => updateFormField('note', e.target.value)} rows={4} />
              </label>
            </div>
          ) : null}

          <div className="step-actions">
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => setCurrentFormStep((prev) => Math.max(1, prev - 1))}
              disabled={currentFormStep === 1}
            >
              Back
            </button>

            {currentFormStep < 4 ? (
              <button type="button" className="btn" onClick={() => setCurrentFormStep((prev) => Math.min(4, prev + 1))}>
                Next Step
              </button>
            ) : (
              <button type="button" className="btn">Submit Registration</button>
            )}
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="container topbar-inner">
          <div className="logo">GrowLocal</div>
          <nav className="menu">
            <a href="#home">Home</a>
            <a href="#features">Features</a>
            <a href="#industries">Industries</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="topbar-actions">
            <div className="landing-switch">
              <button
                type="button"
                className={activeLanding === 'landing1' ? 'switch-btn active' : 'switch-btn'}
                onClick={() => setActiveLanding('landing1')}
              >
                Landing 1
              </button>
              <button
                type="button"
                className={activeLanding === 'landing2' ? 'switch-btn active' : 'switch-btn'}
                onClick={() => setActiveLanding('landing2')}
              >
                Landing 2
              </button>
              <button
                type="button"
                className={activeLanding === 'landing3' ? 'switch-btn active' : 'switch-btn'}
                onClick={() => setActiveLanding('landing3')}
              >
                Landing 3
              </button>
              <button
                type="button"
                className={activeLanding === 'landing4' ? 'switch-btn active' : 'switch-btn'}
                onClick={() => setActiveLanding('landing4')}
              >
                Landing 4
              </button>
            </div>
            <button className="btn btn-small">Book Demo</button>
          </div>
        </div>
      </header>

      {activeLanding === 'landing1' ? (
        <main>
          <section id="home" className="hero section-space">
            <div className="container hero-grid">
              <div>
                <p className="pill">
                  <ShieldCheck size={16} />
                  Trusted by local businesses
                </p>
                <h1>
                  A modern website and business platform for
                  <span> restaurants, takeaways, and beauty salons.</span>
                </h1>
                <p className="hero-copy">
                  A complete first version with strong presentation, clean structure, and clear value messaging. Built
                  to make your brand feel trustworthy from first glance.
                </p>
                <div className="hero-actions">
                  <button className="btn">Start Free Trial</button>
                  <button className="btn btn-ghost">
                    Explore Features <ChevronRight size={18} />
                  </button>
                </div>
                <div className="hero-stats">
                  <div>
                    <strong>5,000+</strong>
                    <span>owners onboarded</span>
                  </div>
                  <div>
                    <strong>38%</strong>
                    <span>average repeat growth</span>
                  </div>
                  <div>
                    <strong>4.9/5</strong>
                    <span>customer satisfaction</span>
                  </div>
                </div>
              </div>

              <aside className="hero-visual">
                <img src="https://picsum.photos/seed/dashboard/820/720" alt="Business dashboard placeholder" />
                <div className="floating-card">
                  <Sparkles size={18} />
                  <div>
                    <p>Today bookings</p>
                    <strong>+24 appointments</strong>
                  </div>
                </div>
              </aside>
            </div>
          </section>

          <section className="trust-band">
            <div className="container trust-grid">
              <div className="trust-card">
                <Star size={18} />
                <p>Rated excellent by small businesses</p>
              </div>
              <div className="trust-card">
                <Globe size={18} />
                <p>Made for local brands worldwide</p>
              </div>
              <div className="trust-card">
                <Brush size={18} />
                <p>Design-led experience for non-technical users</p>
              </div>
            </div>
          </section>

          <section id="features" className="features section-space">
            <div className="container">
              <div className="section-title">
                <h2>Feature-rich, but easy to understand</h2>
                <p>Each section is visually distinct so users quickly grasp what your product does and why it matters.</p>
              </div>
              <div className="feature-grid">
                {featureCards.map((item) => {
                  const Icon = item.icon;
                  return (
                    <article key={item.title} className="feature-card">
                      <div className="feature-icon">
                        <Icon size={24} />
                      </div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                      <a href="#contact">
                        Learn more <ChevronRight size={16} />
                      </a>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>

          <section id="industries" className="industries section-space">
            <div className="container">
              <div className="section-title">
                <h2>Built for your industry</h2>
                <p>Use-case blocks with dedicated visuals help users immediately see relevance to their business type.</p>
              </div>
              <div className="industry-grid">
                {industries.map((industry, index) => {
                  const Icon = industry.icon;
                  return (
                    <article key={industry.name} className="industry-card">
                      <img
                        src={`https://picsum.photos/seed/industry-${index + 1}/600/420`}
                        alt={`${industry.name} placeholder visual`}
                      />
                      <div className="industry-body">
                        <h3>
                          <Icon size={20} /> {industry.name}
                        </h3>
                        <p>{industry.detail}</p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>

          <section id="pricing" className="pricing section-space">
            <div className="container">
              <div className="section-title">
                <h2>Simple pricing for every stage</h2>
                <p>Clear packages with highlighted value points so decision-makers can compare in seconds.</p>
              </div>
              <div className="pricing-grid">
                {pricing.map((plan) => (
                  <article key={plan.name} className={`price-card ${plan.featured ? 'featured' : ''}`}>
                    {plan.featured ? <span className="badge">Most Popular</span> : null}
                    <h3>{plan.name}</h3>
                    <p className="price">
                      {plan.price}
                      <span>/month</span>
                    </p>
                    <ul>
                      {plan.points.map((point) => (
                        <li key={point}>
                          <CheckCircle2 size={16} /> {point}
                        </li>
                      ))}
                    </ul>
                    <button className="btn btn-block">{plan.featured ? 'Choose Growth' : `Select ${plan.name}`}</button>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="testimonials section-space">
            <div className="container">
              <div className="section-title">
                <h2>What owners are saying</h2>
              </div>
              <div className="testimonial-grid">
                <blockquote>
                  "My salon finally looks premium online. Customers understand our services instantly."
                  <cite>- Aisha, Beauty Studio Owner</cite>
                </blockquote>
                <blockquote>
                  "Our takeaway orders are more consistent now. The design alone increased trust."
                  <cite>- Daniel, Takeaway Founder</cite>
                </blockquote>
                <blockquote>
                  "Clear layout, strong visuals, and great value communication. Exactly what we needed."
                  <cite>- Priya, Restaurant Manager</cite>
                </blockquote>
              </div>
            </div>
          </section>

          <section className="process section-space">
            <div className="container">
              <div className="section-title">
                <h2>How the project moves forward</h2>
                <p>Clear milestones so you always know what happens next and what is needed from your side.</p>
              </div>
              <div className="process-grid">
                {processSteps.map((step, index) => (
                  <article key={step.title} className="process-card">
                    <span className="process-index">0{index + 1}</span>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="faq section-space">
            <div className="container">
              <div className="section-title">
                <h2>Frequently asked questions</h2>
              </div>
              <div className="faq-grid">
                {faqItems.map((item) => (
                  <article key={item.q} className="faq-card">
                    <h3>{item.q}</h3>
                    <p>{item.a}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
          {stepFormSection}

          <section id="contact" className="cta section-space">
            <div className="container cta-box">
              <div>
                <h2>Ready for development review?</h2>
                <p>
                  This static first version is ready to review in your development environment. We can refine content,
                  visuals, and interactions before going live.
                </p>
              </div>
              <button className="btn">Request Staging Review</button>
            </div>
          </section>
        </main>
      ) : activeLanding === 'landing2' ? (
        <main className="landing-olive">
          <section id="home" className="hero section-space">
            <div className="container hero-grid">
              <div>
                <p className="pill">
                  <ShieldCheck size={16} />
                  Trusted by local businesses
                </p>
                <h1>
                  A modern website and business platform for
                  <span> restaurants, takeaways, and beauty salons.</span>
                </h1>
                <p className="hero-copy">
                  A complete first version with strong presentation, clean structure, and clear value messaging. Built
                  to make your brand feel trustworthy from first glance.
                </p>
                <div className="hero-actions">
                  <button className="btn">Start Free Trial</button>
                  <button className="btn btn-ghost">
                    Explore Features <ChevronRight size={18} />
                  </button>
                </div>
                <div className="hero-stats">
                  <div>
                    <strong>5,000+</strong>
                    <span>owners onboarded</span>
                  </div>
                  <div>
                    <strong>38%</strong>
                    <span>average repeat growth</span>
                  </div>
                  <div>
                    <strong>4.9/5</strong>
                    <span>customer satisfaction</span>
                  </div>
                </div>
              </div>

              <aside className="hero-visual">
                <img src="https://picsum.photos/seed/dashboard/820/720" alt="Business dashboard placeholder" />
                <div className="floating-card">
                  <Sparkles size={18} />
                  <div>
                    <p>Today bookings</p>
                    <strong>+24 appointments</strong>
                  </div>
                </div>
              </aside>
            </div>
          </section>

          <section className="trust-band">
            <div className="container trust-grid">
              <div className="trust-card">
                <Star size={18} />
                <p>Rated excellent by small businesses</p>
              </div>
              <div className="trust-card">
                <Globe size={18} />
                <p>Made for local brands worldwide</p>
              </div>
              <div className="trust-card">
                <Brush size={18} />
                <p>Design-led experience for non-technical users</p>
              </div>
            </div>
          </section>

          <section id="features" className="features section-space">
            <div className="container">
              <div className="section-title">
                <h2>Feature-rich, but easy to understand</h2>
                <p>Each section is visually distinct so users quickly grasp what your product does and why it matters.</p>
              </div>
              <div className="feature-grid">
                {featureCards.map((item) => {
                  const Icon = item.icon;
                  return (
                    <article key={item.title} className="feature-card">
                      <div className="feature-icon">
                        <Icon size={24} />
                      </div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                      <a href="#contact">
                        Learn more <ChevronRight size={16} />
                      </a>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>

          <section id="industries" className="industries section-space">
            <div className="container">
              <div className="section-title">
                <h2>Built for your industry</h2>
                <p>Use-case blocks with dedicated visuals help users immediately see relevance to their business type.</p>
              </div>
              <div className="industry-grid">
                {industries.map((industry, index) => {
                  const Icon = industry.icon;
                  return (
                    <article key={industry.name} className="industry-card">
                      <img
                        src={`https://picsum.photos/seed/industry-${index + 1}/600/420`}
                        alt={`${industry.name} placeholder visual`}
                      />
                      <div className="industry-body">
                        <h3>
                          <Icon size={20} /> {industry.name}
                        </h3>
                        <p>{industry.detail}</p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>

          <section id="pricing" className="pricing section-space">
            <div className="container">
              <div className="section-title">
                <h2>Simple pricing for every stage</h2>
                <p>Clear packages with highlighted value points so decision-makers can compare in seconds.</p>
              </div>
              <div className="pricing-grid">
                {pricing.map((plan) => (
                  <article key={plan.name} className={`price-card ${plan.featured ? 'featured' : ''}`}>
                    {plan.featured ? <span className="badge">Most Popular</span> : null}
                    <h3>{plan.name}</h3>
                    <p className="price">
                      {plan.price}
                      <span>/month</span>
                    </p>
                    <ul>
                      {plan.points.map((point) => (
                        <li key={point}>
                          <CheckCircle2 size={16} /> {point}
                        </li>
                      ))}
                    </ul>
                    <button className="btn btn-block">{plan.featured ? 'Choose Growth' : `Select ${plan.name}`}</button>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="testimonials section-space">
            <div className="container">
              <div className="section-title">
                <h2>What owners are saying</h2>
              </div>
              <div className="testimonial-grid">
                <blockquote>
                  "My salon finally looks premium online. Customers understand our services instantly."
                  <cite>- Aisha, Beauty Studio Owner</cite>
                </blockquote>
                <blockquote>
                  "Our takeaway orders are more consistent now. The design alone increased trust."
                  <cite>- Daniel, Takeaway Founder</cite>
                </blockquote>
                <blockquote>
                  "Clear layout, strong visuals, and great value communication. Exactly what we needed."
                  <cite>- Priya, Restaurant Manager</cite>
                </blockquote>
              </div>
            </div>
          </section>

          <section className="process section-space">
            <div className="container">
              <div className="section-title">
                <h2>How the project moves forward</h2>
                <p>Clear milestones so you always know what happens next and what is needed from your side.</p>
              </div>
              <div className="process-grid">
                {processSteps.map((step, index) => (
                  <article key={step.title} className="process-card">
                    <span className="process-index">0{index + 1}</span>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="faq section-space">
            <div className="container">
              <div className="section-title">
                <h2>Frequently asked questions</h2>
              </div>
              <div className="faq-grid">
                {faqItems.map((item) => (
                  <article key={item.q} className="faq-card">
                    <h3>{item.q}</h3>
                    <p>{item.a}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
          {stepFormSection}

          <section id="contact" className="cta section-space">
            <div className="container cta-box">
              <div>
                <h2>Ready for development review?</h2>
                <p>
                  This static first version is ready to review in your development environment. We can refine content,
                  visuals, and interactions before going live.
                </p>
              </div>
              <button className="btn">Request Staging Review</button>
            </div>
          </section>
        </main>
      ) : activeLanding === 'landing3' ? (
        <main className="landing-maroon">
          <section id="home" className="hero section-space">
            <div className="container hero-grid">
              <div>
                <p className="pill">
                  <ShieldCheck size={16} />
                  Trusted by local businesses
                </p>
                <h1>
                  A modern website and business platform for
                  <span> restaurants, takeaways, and beauty salons.</span>
                </h1>
                <p className="hero-copy">
                  A complete first version with strong presentation, clean structure, and clear value messaging. Built
                  to make your brand feel trustworthy from first glance.
                </p>
                <div className="hero-actions">
                  <button className="btn">Start Free Trial</button>
                  <button className="btn btn-ghost">
                    Explore Features <ChevronRight size={18} />
                  </button>
                </div>
                <div className="hero-stats">
                  <div>
                    <strong>5,000+</strong>
                    <span>owners onboarded</span>
                  </div>
                  <div>
                    <strong>38%</strong>
                    <span>average repeat growth</span>
                  </div>
                  <div>
                    <strong>4.9/5</strong>
                    <span>customer satisfaction</span>
                  </div>
                </div>
              </div>

              <aside className="hero-visual">
                <img src="https://picsum.photos/seed/dashboard/820/720" alt="Business dashboard placeholder" />
                <div className="floating-card">
                  <Sparkles size={18} />
                  <div>
                    <p>Today bookings</p>
                    <strong>+24 appointments</strong>
                  </div>
                </div>
              </aside>
            </div>
          </section>

          <section className="trust-band">
            <div className="container trust-grid">
              <div className="trust-card">
                <Star size={18} />
                <p>Rated excellent by small businesses</p>
              </div>
              <div className="trust-card">
                <Globe size={18} />
                <p>Made for local brands worldwide</p>
              </div>
              <div className="trust-card">
                <Brush size={18} />
                <p>Design-led experience for non-technical users</p>
              </div>
            </div>
          </section>

          <section id="features" className="features section-space">
            <div className="container">
              <div className="section-title">
                <h2>Feature-rich, but easy to understand</h2>
                <p>Each section is visually distinct so users quickly grasp what your product does and why it matters.</p>
              </div>
              <div className="feature-grid">
                {featureCards.map((item) => {
                  const Icon = item.icon;
                  return (
                    <article key={item.title} className="feature-card">
                      <div className="feature-icon">
                        <Icon size={24} />
                      </div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                      <a href="#contact">
                        Learn more <ChevronRight size={16} />
                      </a>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>

          <section id="industries" className="industries section-space">
            <div className="container">
              <div className="section-title">
                <h2>Built for your industry</h2>
                <p>Use-case blocks with dedicated visuals help users immediately see relevance to their business type.</p>
              </div>
              <div className="industry-grid">
                {industries.map((industry, index) => {
                  const Icon = industry.icon;
                  return (
                    <article key={industry.name} className="industry-card">
                      <img
                        src={`https://picsum.photos/seed/industry-${index + 1}/600/420`}
                        alt={`${industry.name} placeholder visual`}
                      />
                      <div className="industry-body">
                        <h3>
                          <Icon size={20} /> {industry.name}
                        </h3>
                        <p>{industry.detail}</p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>

          <section id="pricing" className="pricing section-space">
            <div className="container">
              <div className="section-title">
                <h2>Simple pricing for every stage</h2>
                <p>Clear packages with highlighted value points so decision-makers can compare in seconds.</p>
              </div>
              <div className="pricing-grid">
                {pricing.map((plan) => (
                  <article key={plan.name} className={`price-card ${plan.featured ? 'featured' : ''}`}>
                    {plan.featured ? <span className="badge">Most Popular</span> : null}
                    <h3>{plan.name}</h3>
                    <p className="price">
                      {plan.price}
                      <span>/month</span>
                    </p>
                    <ul>
                      {plan.points.map((point) => (
                        <li key={point}>
                          <CheckCircle2 size={16} /> {point}
                        </li>
                      ))}
                    </ul>
                    <button className="btn btn-block">{plan.featured ? 'Choose Growth' : `Select ${plan.name}`}</button>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="testimonials section-space">
            <div className="container">
              <div className="section-title">
                <h2>What owners are saying</h2>
              </div>
              <div className="testimonial-grid">
                <blockquote>
                  "My salon finally looks premium online. Customers understand our services instantly."
                  <cite>- Aisha, Beauty Studio Owner</cite>
                </blockquote>
                <blockquote>
                  "Our takeaway orders are more consistent now. The design alone increased trust."
                  <cite>- Daniel, Takeaway Founder</cite>
                </blockquote>
                <blockquote>
                  "Clear layout, strong visuals, and great value communication. Exactly what we needed."
                  <cite>- Priya, Restaurant Manager</cite>
                </blockquote>
              </div>
            </div>
          </section>

          <section className="process section-space">
            <div className="container">
              <div className="section-title">
                <h2>How the project moves forward</h2>
                <p>Clear milestones so you always know what happens next and what is needed from your side.</p>
              </div>
              <div className="process-grid">
                {processSteps.map((step, index) => (
                  <article key={step.title} className="process-card">
                    <span className="process-index">0{index + 1}</span>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="faq section-space">
            <div className="container">
              <div className="section-title">
                <h2>Frequently asked questions</h2>
              </div>
              <div className="faq-grid">
                {faqItems.map((item) => (
                  <article key={item.q} className="faq-card">
                    <h3>{item.q}</h3>
                    <p>{item.a}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
          {stepFormSection}

          <section id="contact" className="cta section-space">
            <div className="container cta-box">
              <div>
                <h2>Ready for development review?</h2>
                <p>
                  This static first version is ready to review in your development environment. We can refine content,
                  visuals, and interactions before going live.
                </p>
              </div>
              <button className="btn">Request Staging Review</button>
            </div>
          </section>
        </main>
      ) : (
        <main className="landing-gold">
          <section id="home" className="hero section-space">
            <div className="container hero-grid">
              <div>
                <p className="pill">
                  <ShieldCheck size={16} />
                  Trusted by local businesses
                </p>
                <h1>
                  A modern website and business platform for
                  <span> restaurants, takeaways, and beauty salons.</span>
                </h1>
                <p className="hero-copy">
                  A complete first version with strong presentation, clean structure, and clear value messaging. Built
                  to make your brand feel trustworthy from first glance.
                </p>
                <div className="hero-actions">
                  <button className="btn">Start Free Trial</button>
                  <button className="btn btn-ghost">
                    Explore Features <ChevronRight size={18} />
                  </button>
                </div>
                <div className="hero-stats">
                  <div>
                    <strong>5,000+</strong>
                    <span>owners onboarded</span>
                  </div>
                  <div>
                    <strong>38%</strong>
                    <span>average repeat growth</span>
                  </div>
                  <div>
                    <strong>4.9/5</strong>
                    <span>customer satisfaction</span>
                  </div>
                </div>
              </div>

              <aside className="hero-visual">
                <img src="https://picsum.photos/seed/dashboard/820/720" alt="Business dashboard placeholder" />
                <div className="floating-card">
                  <Sparkles size={18} />
                  <div>
                    <p>Today bookings</p>
                    <strong>+24 appointments</strong>
                  </div>
                </div>
              </aside>
            </div>
          </section>

          <section className="trust-band">
            <div className="container trust-grid">
              <div className="trust-card">
                <Star size={18} />
                <p>Rated excellent by small businesses</p>
              </div>
              <div className="trust-card">
                <Globe size={18} />
                <p>Made for local brands worldwide</p>
              </div>
              <div className="trust-card">
                <Brush size={18} />
                <p>Design-led experience for non-technical users</p>
              </div>
            </div>
          </section>

          <section id="features" className="features section-space">
            <div className="container">
              <div className="section-title">
                <h2>Feature-rich, but easy to understand</h2>
                <p>Each section is visually distinct so users quickly grasp what your product does and why it matters.</p>
              </div>
              <div className="feature-grid">
                {featureCards.map((item) => {
                  const Icon = item.icon;
                  return (
                    <article key={item.title} className="feature-card">
                      <div className="feature-icon">
                        <Icon size={24} />
                      </div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                      <a href="#contact">
                        Learn more <ChevronRight size={16} />
                      </a>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>

          <section id="industries" className="industries section-space">
            <div className="container">
              <div className="section-title">
                <h2>Built for your industry</h2>
                <p>Use-case blocks with dedicated visuals help users immediately see relevance to their business type.</p>
              </div>
              <div className="industry-grid">
                {industries.map((industry, index) => {
                  const Icon = industry.icon;
                  return (
                    <article key={industry.name} className="industry-card">
                      <img
                        src={`https://picsum.photos/seed/industry-${index + 1}/600/420`}
                        alt={`${industry.name} placeholder visual`}
                      />
                      <div className="industry-body">
                        <h3>
                          <Icon size={20} /> {industry.name}
                        </h3>
                        <p>{industry.detail}</p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>

          <section id="pricing" className="pricing section-space">
            <div className="container">
              <div className="section-title">
                <h2>Simple pricing for every stage</h2>
                <p>Clear packages with highlighted value points so decision-makers can compare in seconds.</p>
              </div>
              <div className="pricing-grid">
                {pricing.map((plan) => (
                  <article key={plan.name} className={`price-card ${plan.featured ? 'featured' : ''}`}>
                    {plan.featured ? <span className="badge">Most Popular</span> : null}
                    <h3>{plan.name}</h3>
                    <p className="price">
                      {plan.price}
                      <span>/month</span>
                    </p>
                    <ul>
                      {plan.points.map((point) => (
                        <li key={point}>
                          <CheckCircle2 size={16} /> {point}
                        </li>
                      ))}
                    </ul>
                    <button className="btn btn-block">{plan.featured ? 'Choose Growth' : `Select ${plan.name}`}</button>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="testimonials section-space">
            <div className="container">
              <div className="section-title">
                <h2>What owners are saying</h2>
              </div>
              <div className="testimonial-grid">
                <blockquote>
                  "My salon finally looks premium online. Customers understand our services instantly."
                  <cite>- Aisha, Beauty Studio Owner</cite>
                </blockquote>
                <blockquote>
                  "Our takeaway orders are more consistent now. The design alone increased trust."
                  <cite>- Daniel, Takeaway Founder</cite>
                </blockquote>
                <blockquote>
                  "Clear layout, strong visuals, and great value communication. Exactly what we needed."
                  <cite>- Priya, Restaurant Manager</cite>
                </blockquote>
              </div>
            </div>
          </section>

          <section className="process section-space">
            <div className="container">
              <div className="section-title">
                <h2>How the project moves forward</h2>
                <p>Clear milestones so you always know what happens next and what is needed from your side.</p>
              </div>
              <div className="process-grid">
                {processSteps.map((step, index) => (
                  <article key={step.title} className="process-card">
                    <span className="process-index">0{index + 1}</span>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="faq section-space">
            <div className="container">
              <div className="section-title">
                <h2>Frequently asked questions</h2>
              </div>
              <div className="faq-grid">
                {faqItems.map((item) => (
                  <article key={item.q} className="faq-card">
                    <h3>{item.q}</h3>
                    <p>{item.a}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
          {stepFormSection}

          <section id="contact" className="cta section-space">
            <div className="container cta-box">
              <div>
                <h2>Ready for development review?</h2>
                <p>
                  This static first version is ready to review in your development environment. We can refine content,
                  visuals, and interactions before going live.
                </p>
              </div>
              <button className="btn">Request Staging Review</button>
            </div>
          </section>
        </main>
      )}

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <h4>GrowLocal</h4>
            <p>Design-forward website foundation for local business growth.</p>
          </div>
          <div>
            <h5>Pages</h5>
            <ul>
              <li>Home</li>
              <li>Features</li>
              <li>Industries</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div>
            <h5>Support</h5>
            <ul>
              <li>Help Center</li>
              <li>Contact</li>
              <li>Privacy</li>
              <li>Terms</li>
            </ul>
          </div>
        </div>
      </footer>

      {showBackToTop ? (
        <button type="button" className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
          <ChevronsUp size={18} />
          Top
        </button>
      ) : null}
    </div>
  );
}
