export default function ProcessSection() {
  const phases = [
    {
      num: '01', color: undefined,
      title: 'Discovery & Cost-Effective Scoping',
      desc: 'We clarify your business goals, target audience, and required functionality up-front. We outline a transparent fixed budget with zero hidden fees and map the foundation needed for bulletproof security.',
      specs: ['Clear scope definition with fixed-price transparent quotation', 'User journey & responsive UI wireframe planning', 'Secure foundation blueprint with strict security guidelines'],
    },
    {
      num: '02', color: undefined,
      title: 'Modern Web Design & Secure Development',
      desc: 'Our engineers build clean, fast, and responsive web pages and backend APIs. Security controls, encrypted connections, and safe data handling are baked in from day one.',
      specs: ['Cross-device mobile-optimized UI implementation', 'Built-in defense against malicious form inputs and data tampering', 'Clean modular source code with 100% intellectual property ownership'],
    },
    {
      num: '03', color: undefined,
      title: 'Pre-Launch QA, Speed & Security Checks',
      desc: 'We thoroughly test every form, mobile layout, and API endpoint. We verify that PageSpeed scores hit 95+ and ensure your customer data flows through an encrypted pipeline.',
      specs: ['Mobile responsiveness & browser cross-compatibility audit', 'Core Web Vitals performance optimization (95+ score)', 'SSL encryption, safe session handling, and security validation'],
    },
    {
      num: '04', color: '#059669',
      title: 'Zero-Downtime Launch & Anytime Rectification SLA',
      desc: 'We deploy your website to your preferred hosting provider. Post-launch, you are protected by our Anytime Rectification Guarantee: any defect or bug is fixed immediately at zero client charge.',
      specs: ['100% code handover & hosting deployment support', 'Direct telephone line to senior engineers: +91 99529 34596', 'Continuous bug rectification guarantee at zero extra cost'],
    },
  ];

  return (
    <section className="section-wrapper bg-subtle scroll-section reveal-on-scroll reveal-process" id="process">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">How PrismLine Builds Your Secure Website at Lower Cost.</h2>
          <p>We don't inflate project costs or rely on bloated templates. Every website and web application follows a disciplined 4-stage engineering lifecycle designed for speed, affordability, and built-in security.</p>
        </div>
        <div className="process-timeline-wrap">
          {phases.map(({ num, color, title, desc, specs }, i) => (
            <div className={`process-phase-card phase-${i + 1}`} key={num}>
              <div style={{ marginBottom: '0.8rem' }}>
                <span className="phase-number" style={color ? { color } : undefined}>{num}</span>
              </div>
              <h3 className="card-title" style={{ fontSize: '1.55rem' }}>{title}</h3>
              <p className="card-text" style={{ fontSize: '0.98rem', maxWidth: '760px', marginBottom: '1rem' }}>{desc}</p>
              <ul className="card-specs" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', display: 'grid', gap: '0.6rem', marginBottom: 0 }}>
                {specs.map(s => <li key={s}>{s}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
