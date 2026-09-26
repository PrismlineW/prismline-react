import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-compact-wrap">
          <div className="footer-brand-side">
            <Link to="/" className="nav-brand">
              <div className="brand-emblem-wrap">
                <img src="/assets/images/logo-emblem.svg" alt="PrismLine Logo" className="brand-emblem-icon" />
              </div>
              <div className="brand-title-wrap">
                <span>PRIS<span className="brand-m">M</span>LINE</span>
              </div>
            </Link>
            <p className="footer-compact-desc">
              Web development engineered bold, secured by default at honest cost.
            </p>
            <div className="footer-compact-contact">
              <a href="tel:9952934596">📞 +91 99529 34596</a>
              <span className="footer-sep">&bull;</span>
              <a href="https://wa.me/919952934596" target="_blank" rel="noopener noreferrer">WhatsApp Dispatch</a>
              <span className="footer-sep">&bull;</span>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=Prismline@gmail.com" target="_blank" rel="noopener noreferrer">Prismline@gmail.com</a>
            </div>
          </div>

          <div className="footer-links-side">
            <ul className="footer-compact-nav">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Vision in Action</Link></li>
              <li><Link to="/guarantee">Guarantee</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-compact-bottom">
          <span>&copy; 2026 PrismLine Technologies. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
}
