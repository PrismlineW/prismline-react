import { Link } from 'react-router-dom';

export default function GuaranteeSection() {
  return (
    <section className="section-wrapper scroll-section reveal-on-scroll reveal-guarantee" id="guarantee">
      <div className="container">
        <div className="guarantee-box-human">
          <div>
            <h2 style={{ fontSize: '2.3rem', marginBottom: '1rem' }}>The Anytime Rectification Guarantee&trade;</h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-body)' }}>
              We don't charge hourly maintenance fees to fix what should have been built right in the first place. If an issue, bug, or security flaw is ever identified in your platform:
            </p>
            <ul className="guarantee-list">
              <li><span className="guarantee-check">&#10003;</span><div><strong>We rectify it at any time:</strong> Post-launch warranty with zero unexpected bills or hourly add-ons.</div></li>
              <li><span className="guarantee-check">&#10003;</span><div><strong>100% Genuine Code Quality:</strong> Clean, audited, documented code that you own entirely.</div></li>
              <li><span className="guarantee-check">&#10003;</span><div><strong>Direct Senior Access:</strong> Reach out directly to senior engineers via phone at <strong>+91 99529 34596</strong>.</div></li>
            </ul>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn-hero-primary">Start Under Warranty →</Link>
              <a href="tel:9952934596" className="btn-hero-phone">📞 Call 9952934596</a>
            </div>
          </div>

          <div className="guarantee-panel-side">
            <div className="guarantee-photo-wrap" style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)', padding: '1.8rem 1.4rem', borderTopLeftRadius: '14px', borderTopRightRadius: '14px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.08, backgroundImage: 'radial-gradient(#D50000 1px, transparent 1px)', backgroundSize: '16px 16px', pointerEvents: 'none' }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem', position: 'relative', zIndex: 1 }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(213,0,0,0.15)', border: '1px solid rgba(213,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem' }}>
                  🛡️
                </div>
                <div>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.72rem', color: '#94A3B8', letterSpacing: '0.08em', textTransform: 'uppercase' }}>OFFICIAL SLA CERTIFICATE</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#FFFFFF', letterSpacing: '0.02em' }}>PLT-WARRANTY-2026-ACTIVE</div>
                </div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '8px', padding: '0.85rem 1rem', border: '1px solid rgba(255,255,255,0.08)', position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                  <span style={{ fontSize: '0.8rem', color: '#CBD5E1', fontWeight: 600 }}>Coverage Period</span>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.8rem', color: '#34D399', fontWeight: 700 }}>LIFETIME</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                  <span style={{ fontSize: '0.8rem', color: '#CBD5E1', fontWeight: 600 }}>Critical SLA Response</span>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.8rem', color: '#38BDF8', fontWeight: 700 }}>&lt; 15 Minutes</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.8rem', color: '#CBD5E1', fontWeight: 600 }}>Remediation Fee</span>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.8rem', color: '#10B981', fontWeight: 800 }}>$0.00 (Guaranteed)</span>
                </div>
              </div>
            </div>
            <div className="guarantee-content-body">
              <div className="guarantee-stat-lg text-gradient">$0.00</div>
              <div style={{ fontWeight: 700, fontSize: '1.2rem', color: 'var(--text-heading)', marginBottom: '0.4rem' }}>Client Remediation Cost</div>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-body)', marginBottom: '1.2rem' }}>Any defect or bug in our delivered scope is investigated and rectified at zero extra charge.</p>
              <a href="tel:9952934596" style={{ display: 'block', fontFamily: "'Poppins', sans-serif", fontSize: '0.85rem', color: 'var(--brand-crimson)', background: '#FFFFFF', border: '1px solid var(--border-subtle)', padding: '0.75rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 700, textAlign: 'center' }}>
                SUPPORT HOTLINE: +91 99529 34596
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
