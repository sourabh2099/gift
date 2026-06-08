import { useEffect, useRef } from "react";
import pujo_laughing from "./assets/images/color_traditional_img_laughing.jpeg";
import botir_Bill from "./assets/images/lavender_botir_bill.jpeg";
import weird_chobi from "./assets/images/weird_image.jpeg";
import capybara_curious from "./assets/images/capybara_curious.jpeg";
import saree_image from "./assets/images/saaree_image.jpeg";
import saree_image_1 from "./assets/images/color_traditional_img.jpeg";
import us_botirBill from "./assets/images/us_botirbill.jpeg";
import us_saraswati_pujo from "./assets/images/us_saraswati_pujo.jpeg";
import us_cv_obhijaan from "./assets/images/us_cv_obhijaan.jpeg";
import us_dhuurandhaar from "./assets/images/us_dhuurandhaar.jpeg";
import us_chicken_e_chul from "./assets/images/us_chicken_e_chul.jpeg";
import us_thirty_first_night from "./assets/images/us_31st_night.jpeg";
import "./BirthdayPage.css";
import { useState } from "react";

const UNLOCK_DATE = new Date("2026-06-09T00:00:00");

// ── Helpers ────────────────────────────────────────────
function getTimeLeft() {
  const diff = UNLOCK_DATE - new Date();
  if (diff <= 0) return null; // unlocked
  return {
    days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours:   Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}




const FILM_IMAGES = [
  {
    col: [
      { src: pujo_laughing, flex: 0.5 },
      { src: saree_image, flex: 0.5 }
    ]
  },
  {
    col: [
      { src: botir_Bill, flex: 1 },
    ],
  },
  {
    col: [
      { src: weird_chobi, flex: 0.5},
      { src: saree_image_1, flex: 0.5 }
    ],
  },
];

const GALLERY = [
  { src: us_botirBill, label: "The beginning", cls: "gc1" },
  { src: us_thirty_first_night, label: "31st Night Baby !!", cls: "gc2" },
  { src: us_saraswati_pujo, label: "Saraswati Pujooo !!", cls: "gc3" },
  { src: us_cv_obhijaan, label: "The CV obhijaan", cls: "gc4" },
  { src: us_dhuurandhaar, label: "Dhurandhaar Day", cls: "gc5" },
  { src: us_chicken_e_chul, label: "Migration O Chiken e Chul", cls: "gc6" }
];

const TIMELINE = [
  { chapter: "Day-0", title: "20 November 2025", desc: "We know !!" },
  { chapter: "31st Night Phuckha Getaway", title: "Phucka Was Naiceee baby. Taina ??", desc: "We Know !!" },
  { chapter: "Saraswati Puja", title: "OMG Her in a blue Saree !!!", desc: "Ami pagol hoye gechilam :), Etotai pagol hoye gechilam Local train er ticket kete ac train e uthe bosechilam :)" },
  { chapter: "Today", title: "Madam er Bithday.", desc: "More to Go Love. As discussed !" },
];

export function BirthdayPageContent({
  name = "Adreetaaa",
  message = "I love you more than a BANGAL loves his ilish. ",
  signature = "Sourabh, always",
  timeline = TIMELINE,
  gallery = GALLERY,
}) {
  const timelineRef = useRef(null);

  useEffect(() => {
    const items = timelineRef.current?.querySelectorAll(".t-item");

    if (items.length === 0) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bp-root">
      {/* ── Hero ── */}
      <section className="bp-hero">
        <div className="bp-film-bg">
          {FILM_IMAGES.map((col, ci) => (
            <div className="bp-film-col" key={ci}>
              {col.sprockets && (
                <div className="bp-sprocket bp-sprocket--left">
                  {Array.from({ length: 7 }).map((_, i) => <div className="bp-hole" key={i} />)}
                </div>
              )}
              {col.col.map((frame, fi) => (
                <div className="bp-film-frame" key={fi} style={{ flex: frame.flex }}>
                  <img src={frame.src} alt="" />
                </div>
              ))}
              {col.sprockets && (
                <div className="bp-sprocket bp-sprocket--right">
                  {Array.from({ length: 7 }).map((_, i) => <div className="bp-hole" key={i} />)}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="bp-overlay" />
        <div className="bp-hero-content">
          <h5 className="bp-main-title">
            Happy<br /><em>Birthday,</em><br />{name} !
          </h5>
        </div>
        <div className="bp-scroll-hint">
          <div className="bp-scroll-line" />
        </div>
      </section>

      {/* ── Message ── */}
      <section className="bp-message-section">
        <div className="bp-message-inner">
          <span className="bp-quote-mark">"</span>
          <p className="bp-message-text">{message}</p>
          <span className="bp-message-sig">— {signature}</span>
        </div>
      </section>

      {/* ── Gallery ── */}
      <div className="bp-section">
        <div className="bp-section-label">Thank you for being with me ! </div>
        <div className="bp-gallery-grid">
          {gallery.map((img, i) => (
            <div className={`bp-gcard ${img.cls}`} key={i}>
              <img src={img.src} alt={img.label} />
              <div className="bp-gcard-label">{img.label}</div>
            </div>
          ))}
        </div>

        {/* ── Timeline ── */}
        <div className="bp-section-label">I tried to put in a timeline.PS i know many are skipped :)</div>
        <div className="bp-timeline" ref={timelineRef}>
          {timeline.map((item, i) => (
            <div className="t-item" key={i} style={{ animationDelay: `${i * 0.2}s` }}>
              <div className="t-date">{item.chapter}</div>
              <div className="t-line" />
              <div className="t-content">
                <div className="t-title">{item.title}</div>
                <div className="t-desc">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Footer ── */}
      <footer className="bp-footer">
        <span className="bp-footer-title">Happy Birthday</span>
        <span className="bp-footer-heart">♥</span>
        <p className="bp-footer-sub">Made with love, just for you</p>
        <p className="bp-footer-sub"> I am sorry if its Lame. I love you :)</p>
      </footer>
    </div>
  );
}

function CountdownScreen({ name = "", timeLeft }) {
  const pad = (n) => String(n).padStart(2, "0");
  return (
    <div className="cd-root">
      {/* blurred film strip background */}
      <div className="cd-film-bg">
        {FILM_IMAGES.map((col, ci) => (
          <div className="bp-film-col" key={ci}>
            {col.col.map((frame, fi) => (
              <div className="bp-film-frame" key={fi} style={{ flex: frame.flex }}>
                <img src={frame.src} alt="" />
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="cd-overlay" />

      <div className="cd-content">
        <span className="cd-eyebrow">Hi !</span>

        <h1 className="cd-title">
          <em>Your Majesty</em> {name}
        </h1>

        <p className="cd-teaser">
         Something is still cooking here.
        </p>

        {/* Timer */}
        <div className="cd-timer">
          <div className="cd-unit">
            <span className="cd-num">{pad(timeLeft.days)}</span>
            <span className="cd-label">Days</span>
          </div>
          <span className="cd-sep">:</span>
          <div className="cd-unit">
            <span className="cd-num">{pad(timeLeft.hours)}</span>
            <span className="cd-label">Hours</span>
          </div>
          <span className="cd-sep">:</span>
          <div className="cd-unit">
            <span className="cd-num">{pad(timeLeft.minutes)}</span>
            <span className="cd-label">Minutes</span>
          </div>
          <span className="cd-sep">:</span>
          <div className="cd-unit">
            <span className="cd-num cd-num--seconds">{pad(timeLeft.seconds)}</span>
            <span className="cd-label">Seconds</span>
          </div>
        </div>

        <div className="cd-lock">
          <div className="cd-lock-icon">♥</div>
          <p className="cd-lock-text">Come back at midnight</p>
        </div>
      </div>
    </div>
  );
}

export default function BirthdayPage(props) {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    if (!timeLeft) return; // already unlocked, no timer needed
    const id = setInterval(() => {
      const t = getTimeLeft();
      setTimeLeft(t);
      if (!t) clearInterval(id); // hits midnight — auto-reveal
    }, 1000);
    return () => clearInterval(id);
  }, []);

  // ── Conditional render ──────────────────────────────
  if (timeLeft) {
    return <CountdownScreen name={props.name} timeLeft={timeLeft} />;
  }

  return <BirthdayPageContent />;
}
