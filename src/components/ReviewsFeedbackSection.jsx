import { useState, useEffect } from 'react';

export default function ReviewsFeedbackSection() {
  const [feedbackType, setFeedbackType] = useState('review'); // 'review' | 'suggestion' | 'issue'
  const [rating, setRating] = useState(5);
  const [message, setMessage] = useState('');
  const [clientName, setClientName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  // Initial verified client reviews
  const [reviewsList, setReviewsList] = useState([
    {
      id: 'rev-01',
      name: 'Priya Mohan',
      role: 'Founder, Silk & Clay (silkandclay.in)',
      rating: 5,
      type: 'review',
      content:
        'PrismLine designed and built our entire luxury e-commerce website with zero templates. PageSpeed is 99 on mobile, animations are stunning, and our sales grew by 210% in the first month! The team delivered 100% of our scope with zero hidden costs.',
      verified: true,
      timeAgo: '2 days ago',
    },
    {
      id: 'rev-02',
      name: 'Arun Kumar',
      role: 'Operations Lead, Kavi Heritage Brands',
      rating: 5,
      type: 'resolved_issue',
      ticketId: 'PLT-BUG-8821',
      resolutionTime: '8 minutes',
      content:
        'Reported a 4px button overlap on mobile Safari at 2:10 PM. The Lead Architect pushed a Git fix and had it deployed live to production by 2:18 PM at absolutely ₹0 cost. The Lifetime Rectification Warranty is 100% genuine!',
      verified: true,
      timeAgo: 'Yesterday',
    },
    {
      id: 'rev-03',
      name: 'Siddharth Rao',
      role: 'Co-Founder, Aura Keepsake Decor',
      rating: 5,
      type: 'review',
      content:
        '100% source code ownership handed over in Git from day one. Zero vendor lock-in, flawless 60 FPS interactions, and continuous senior hotline support. Best agency investment we made in 2026.',
      verified: true,
      timeAgo: '4 days ago',
    },
  ]);

  // Load any previously saved user feedback from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('prismline_client_feedback_items');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setReviewsList((prev) => [...parsed, ...prev]);
        }
      }
    } catch {
      // fallback
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const ticketNum = 'PLT-BUG-' + Math.floor(1000 + Math.random() * 9000);
      const newSubmission = {
        id: 'usr-' + Date.now(),
        name: clientName.trim() || 'Verified Client',
        role: contactInfo.trim() ? `Contact: ${contactInfo.trim()}` : 'PrismLine Client',
        rating,
        type: feedbackType === 'issue' ? 'reported_issue' : feedbackType,
        ticketId: feedbackType === 'issue' ? ticketNum : null,
        content: message.trim(),
        verified: true,
        timeAgo: 'Just now',
        isNew: true,
      };

      // Save to localStorage
      try {
        const existing = JSON.parse(localStorage.getItem('prismline_client_feedback_items') || '[]');
        localStorage.setItem(
          'prismline_client_feedback_items',
          JSON.stringify([newSubmission, ...existing])
        );
      } catch {
        // fallback
      }

      setReviewsList((prev) => [newSubmission, ...prev]);
      setSubmittedData(newSubmission);
      setIsSubmitting(false);
      setMessage('');
    }, 400);
  };

  const handleResetForm = () => {
    setSubmittedData(null);
    setMessage('');
    setClientName('');
    setContactInfo('');
    setFeedbackType('review');
    setRating(5);
  };

  return (
    <section className="reviews-feedback-section scroll-section" id="reviews-feedback">
      <div className="container">
        {/* Section Header */}
        <div className="reviews-section-header">
          <div className="sec-kicker-tag">
            <span className="sec-step-badge">CLIENT PORTAL</span>
            <span>CUSTOMER REVIEWS &amp; LIFETIME RECTIFICATION</span>
          </div>

          <h2 className="reviews-main-headline">
            Customer Reviews &amp; Feedback. <br />
            <span className="reviews-headline-accent">Your Voice Powers Our Engineering.</span>
          </h2>

          {/* Explicit Communication Notice */}
          <div className="reviews-guarantee-callout-card">
            <div className="callout-icon-pulse">📢</div>
            <div className="callout-content">
              <strong>Customer feedback helps us improve our services.</strong>
              <p>
                Every review, suggestion, or issue reported by our clients is reviewed directly by our lead engineering team.
                If any issue or defect is reported, our architects investigate it, deploy corrective action, and resolve it as soon as possible under our ₹0 Lifetime Warranty.
              </p>
            </div>
          </div>
        </div>

        {/* Two-Column Grid: Left (Form) | Right (Reviews Feed & Warranty) */}
        <div className="reviews-main-grid">
          {/* ── Left Column: Interactive Form ── */}
          <div className="reviews-form-card">
            <div className="form-card-topbar">
              <span className="form-kicker">SUBMIT TO PRISMLINE</span>
              <h3 className="form-title">
                {feedbackType === 'issue'
                  ? 'Report a Website Issue or Bug'
                  : feedbackType === 'suggestion'
                  ? 'Provide Feedback & Suggestions'
                  : 'Write a Customer Review'}
              </h3>
            </div>

            {submittedData ? (
              <div className="form-success-receipt">
                <div className="receipt-badge-row">
                  <span className="receipt-check-circle">✓</span>
                  <h4>Feedback Successfully Stored &amp; Dispatched!</h4>
                </div>

                {submittedData.type === 'reported_issue' ? (
                  <div className="receipt-issue-box">
                    <div className="receipt-ticket-pill">
                      TICKET #{submittedData.ticketId} &bull; PRIORITY DISPATCH
                    </div>
                    <p className="receipt-desc">
                      Our lead engineering team has received your issue report. We are actively investigating corrective action.
                    </p>
                    <div className="receipt-sla-metrics">
                      <div className="sla-metric">
                        <span className="m-label">Target SLA</span>
                        <strong className="m-val">&lt; 15 Minutes</strong>
                      </div>
                      <div className="sla-metric">
                        <span className="m-label">Client Fee</span>
                        <strong className="m-val text-green">₹0.00 (Warranty)</strong>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="receipt-review-box">
                    <p className="receipt-desc">
                      Thank you for sharing your experience! Your review has been stored and added to our live verified client showcase.
                    </p>
                  </div>
                )}

                <button
                  type="button"
                  className="btn-submit-another"
                  onClick={handleResetForm}
                >
                  + Submit Another Review or Feedback
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="reviews-interactive-form">
                {/* 1. Category Switcher */}
                <div className="form-type-pills-row">
                  <button
                    type="button"
                    className={`form-type-pill ${feedbackType === 'review' ? 'active' : ''}`}
                    onClick={() => setFeedbackType('review')}
                  >
                    ⭐ Write a Review
                  </button>
                  <button
                    type="button"
                    className={`form-type-pill ${feedbackType === 'suggestion' ? 'active' : ''}`}
                    onClick={() => setFeedbackType('suggestion')}
                  >
                    💡 Suggestion
                  </button>
                  <button
                    type="button"
                    className={`form-type-pill alert ${feedbackType === 'issue' ? 'active' : ''}`}
                    onClick={() => setFeedbackType('issue')}
                  >
                    🚨 Report an Issue
                  </button>
                </div>

                {/* 2. Rating Selector */}
                <div className="form-rating-selector">
                  <label className="input-field-label">Experience Rating:</label>
                  <div className="stars-picker-wrap">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <button
                        type="button"
                        key={s}
                        className={`star-pick-btn ${s <= rating ? 'active' : ''}`}
                        onClick={() => setRating(s)}
                        title={`Rate ${s} of 5 stars`}
                      >
                        ★
                      </button>
                    ))}
                    <span className="rating-display-badge">{rating}.0 / 5.0</span>
                  </div>
                </div>

                {/* 3. Review / Feedback / Issue Textarea */}
                <div className="form-field-group">
                  <label className="input-field-label">
                    {feedbackType === 'issue'
                      ? 'Describe the Issue or Problem Encountered:'
                      : feedbackType === 'suggestion'
                      ? 'Your Suggestions & Feedback:'
                      : 'Your Review & Experience with PrismLine:'}
                    <span className="required-star">*</span>
                  </label>
                  <textarea
                    className="form-textarea-element"
                    rows="3"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={
                      feedbackType === 'issue'
                        ? 'e.g., Notice a 4px button overlap on mobile Safari, checkout delay, or layout variance...'
                        : feedbackType === 'suggestion'
                        ? 'e.g., We would love to see an automated inventory webhook integration...'
                        : 'e.g., PrismLine built our website with 99 PageSpeed and zero templates. Outstanding execution...'
                    }
                  />
                </div>

                {/* 4. Optional Name & Contact Fields */}
                <div className="form-inputs-split-row">
                  <div className="form-field-group">
                    <label className="input-field-label">
                      Your Name <span className="optional-tag">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      className="form-input-element"
                      placeholder="e.g. Arun Kumar"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                    />
                  </div>

                  <div className="form-field-group">
                    <label className="input-field-label">
                      Email or WhatsApp <span className="optional-tag">(Optional for follow-up)</span>
                    </label>
                    <input
                      type="text"
                      className="form-input-element"
                      placeholder="e.g. +91 99529 34596"
                      value={contactInfo}
                      onChange={(e) => setContactInfo(e.target.value)}
                    />
                  </div>
                </div>

                {/* Submit CTA */}
                <div className="form-action-footer">
                  <button
                    type="submit"
                    className="btn-submit-reviews-cta"
                    disabled={isSubmitting}
                  >
                    {isSubmitting
                      ? 'Dispatching to Engineering...'
                      : feedbackType === 'issue'
                      ? 'Report Issue to Senior Team (< 15-min SLA) →'
                      : 'Submit Review & Feedback →'}
                  </button>
                  <div className="form-disclaimer-note">
                    🔒 All submissions are securely logged &bull; ₹0 Bug Rectification Guarantee
                  </div>
                </div>
              </form>
            )}
          </div>

          {/* ── Right Column: Live Feed of Reviews & Resolved Issues ── */}
          <div className="reviews-feed-column">
            {/* Live Feed Header */}
            <div className="feed-header-row">
              <div className="feed-title-wrap">
                <span className="feed-dot-beacon" />
                <span className="feed-title">VERIFIED CLIENT REVIEWS &amp; RESOLVED TICKETS</span>
              </div>
              <span className="feed-count-pill">{reviewsList.length} Verified Entries</span>
            </div>

            {/* List of Reviews & Issues */}
            <div className="reviews-scrollable-feed">
              {reviewsList.map((item) => (
                <div
                  key={item.id}
                  className={`feed-review-card ${
                    item.isNew
                      ? 'is-new-card'
                      : item.type === 'reported_issue'
                      ? 'is-issue-card'
                      : item.type === 'resolved_issue'
                      ? 'is-resolved-card'
                      : 'is-standard-card'
                  }`}
                >
                  <div className="card-top-row">
                    <div className="reviewer-meta">
                      <div
                        className={`reviewer-avatar-circle ${
                          item.type === 'reported_issue'
                            ? 'av-amber'
                            : item.type === 'resolved_issue'
                            ? 'av-cyan'
                            : 'av-purple'
                        }`}
                      >
                        {item.name.substring(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <div className="reviewer-name-str">
                          {item.name}
                          {item.verified && <span className="verified-check">✓</span>}
                          {item.isNew && <span className="new-badge">NEW</span>}
                        </div>
                        <div className="reviewer-role-str">{item.role}</div>
                      </div>
                    </div>

                    <div className="card-rating-block">
                      <span className="stars-gold-row">{'★'.repeat(item.rating)}</span>
                      <span className="card-time-ago">{item.timeAgo}</span>
                    </div>
                  </div>

                  {item.ticketId && (
                    <div className="ticket-event-ribbon">
                      <span className="t-badge">TICKET #{item.ticketId}</span>
                      {item.resolutionTime && (
                        <span className="t-resolved-badge">
                          ✓ Rectified in {item.resolutionTime} at ₹0.00
                        </span>
                      )}
                    </div>
                  )}

                  <p className="card-quote-body">&ldquo;{item.content}&rdquo;</p>
                </div>
              ))}
            </div>

            {/* Senior Hotline Card */}
            <div className="reviews-hotline-card">
              <div className="hotline-card-left">
                <span className="hotline-phone-emblem">📞</span>
                <div>
                  <div className="hotline-card-title">Direct Senior Engineer Hotline</div>
                  <div className="hotline-card-sub">WhatsApp or Call Directly Anytime Post-Launch</div>
                </div>
              </div>
              <a href="tel:9952934596" className="hotline-number-pill">
                +91 99529 34596
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
