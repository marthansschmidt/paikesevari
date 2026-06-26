import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import ClickSpark from "./ClickSpark";
import CircularText from "./CircularText";
import StaggeredMenu from "./StaggeredMenu";
import Ferrofluid from "./Ferrofluid";
import CurvedLoop from "./CurvedLoop";
import heroImage from "./assets/hero-terrace.png";
import logoImage from "./assets/paikesevari_logo_transparent.png";
import pilt3Image from "./assets/pilt3.png";
import mhxLogo from "./assets/mhx_logo.png";
import "./style.css";

const products = [
  {
    name: "Rannavari Classic",
    description: "Kerge, värvikas ja lihtsalt kaasavõetav vari rannapäevadeks.",
    price: "49 €",
    imageClass: "beach",
  },
  {
    name: "Terrassivari Premium",
    description: "Elegantne ja stabiilne lahendus terrassile või kohvikualale.",
    price: "189 €",
    imageClass: "terrace",
  },
  {
    name: "Kokkupandav Matkavari",
    description: "Kompaktne vari matkale, piknikule ja väikesele rõdule.",
    price: "69 €",
    imageClass: "travel",
  },
  {
    name: "Suur Aia Päikesevari",
    description: "Lai varjuala, vastupidav raam ja mugav käsivända avamine.",
    price: "249 €",
    imageClass: "garden",
  },
];

const benefits = [
  {
    icon: "UV",
    title: "UV-kaitse",
    text: "Tihedad kangad aitavad hoida suvepäeva pehmemana ja turvalisemana.",
  },
  {
    icon: "✦",
    title: "Tugev konstruktsioon",
    text: "Valikus on metall- ja alumiiniumraamidega mudelid igapäevaseks kasutuseks.",
  },
  {
    icon: "✓",
    title: "Lihtne paigaldus",
    text: "Selged kinnitused ja praktilised mehhanismid teevad kasutamise kiireks.",
  },
  {
    icon: "24",
    title: "Kiire tarne",
    text: "Populaarsed mudelid jõuavad sinuni kiiresti üle Eesti.",
  },
];

const menuItems = [
  { label: "Avaleht", ariaLabel: "Mine avalehele", link: "#avaleht" },
  { label: "Tooted", ariaLabel: "Mine värviblokini", link: "#varviblokk" },
  { label: "Kontakt", ariaLabel: "Mine rannasektsioonini", link: "#rand" },
];

function Header({ isScrolled }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (event, targetId) => {
    const targetElement = document.querySelector(targetId);

    if (!targetElement) {
      return;
    }

    event.preventDefault();
    targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsMenuOpen(false);
  };

  return (
    <header className={`site-header ${isScrolled ? "is-scrolled" : ""}`}>
      <nav className="navbar" aria-label="Peamine navigeerimine">
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="main-menu"
          onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
        >
          <span></span>
          <span></span>
          <span></span>
          <span className="sr-only">Ava menüü</span>
        </button>
        <ul className={`nav-links ${isMenuOpen ? "is-open" : ""}`} id="main-menu">
          {[
            ["Avaleht", "#avaleht"],
            ["Tooted", "#tooted"],
            ["Kontakt", "#kontakt"],
          ].map(([label, href]) => (
            <li key={href}>
              <a href={href} onClick={(event) => handleNavClick(event, href)}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

function Hero({ scrollProgress }) {
  return (
    <section className="hero cinematic-hero section-reveal" id="avaleht">
      <a className="hero-logo" href="#avaleht" aria-label="PäikeseVari avaleht">
        <CircularText text="SUNRISE*FM*" spinDuration={30} onHover="goBonkers">
          <img src={logoImage} alt="" />
        </CircularText>
      </a>
      <div
        className="hero-image-layer"
        style={{
          backgroundImage: `url(${heroImage})`,
          transform: `scale(${1.04 + scrollProgress * 0.05}) translateY(${scrollProgress * 28}px)`,
        }}
      ></div>
      <div
        className="hero-depth-layer"
        style={{
          transform: `translateY(${scrollProgress * -34}px)`,
        }}
      ></div>
      <div className="hero-grain"></div>
      <div
        className="hero-content"
        style={{
          transform: `translateY(${scrollProgress * -18}px)`,
          opacity: Math.max(0.35, 1 - scrollProgress * 0.65),
        }}
      >
        <p className="eyebrow">Premium päikesevarjud</p>
        <h1>Naudi suve varjus</h1>
        <p className="hero-text">
          Stiilsed terrassi-, aia- ja rannavarjud rahulikku suvepäeva. Hele kangas, pehme vari ja
          läbimõeldud vorm igasse väliruumi.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#tooted">
            Vaata tooteid
          </a>
          <a className="btn btn-ghost" href="#kontakt">
            Küsi pakkumist
          </a>
        </div>
      </div>

      <div className="hero-scroll-cue" aria-hidden="true">
        <span></span>
        <small>Keri</small>
      </div>
    </section>
  );
}

function ImageSection({ image, label, title, text, align = "left", id }) {
  return (
    <section className={`visual-section visual-section-${align} section-reveal`} id={id}>
      <div className="visual-section-image" style={{ backgroundImage: `url(${image})` }}></div>
      <div className="visual-section-shade"></div>
      <div className="visual-section-content">
        <p className="eyebrow">{label}</p>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </section>
  );
}

function ColorIntro() {
  return (
    <section className="color-intro section-reveal" id="varviblokk" aria-label="PäikeseVari värviblokk">
      <CurvedLoop
        marqueeText="Naudi suve varjus ✦ Naudi suve varjus ✦ Naudi suve varjus ✦"
        speed={0.5}
        curveAmount={0}
        direction="left"
        interactive={true}
        className="curved-text"
      />
    </section>
  );
}

function Products({ onProductInquiry }) {
  return (
    <section className="products section-reveal" id="tooted">
      <div className="section-heading">
        <p className="eyebrow">Meie valik</p>
        <h2>Päikesevarjud igaks suvehetkeks</h2>
        <p>Vali kerge rannavari, tugev terrassivari või suur aia päikesevari kogu perele.</p>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <article className="product-card" key={product.name}>
            <div className={`product-image ${product.imageClass}`}></div>
            <div className="product-body">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <strong>{product.price}</strong>
              <button className="btn btn-secondary" type="button" onClick={() => onProductInquiry(product.name)}>
                Lisa päringusse
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section className="benefits section-reveal" id="eelised">
      <div className="section-heading">
        <p className="eyebrow">Miks valida meid</p>
        <h2>Mugav varjualune algab heast varjust</h2>
      </div>

      <div className="benefit-grid">
        {benefits.map((benefit) => (
          <article className="benefit-card" key={benefit.title}>
            <span className="benefit-icon">{benefit.icon}</span>
            <h3>{benefit.title}</h3>
            <p>{benefit.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Campaign() {
  return (
    <section className="campaign section-reveal" aria-labelledby="campaign-title">
      <div>
        <p className="eyebrow">Kampaania</p>
        <h2 id="campaign-title">Suvepakkumine -15% kõikidelt päikesevarjudelt</h2>
      </div>
      <a className="btn btn-light" href="#kontakt">
        Küsi pakkumist
      </a>
    </section>
  );
}

function Contact({ message, onMessageChange }) {
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormStatus("Päring saadetud!");
    onMessageChange("");
    event.currentTarget.reset();

    window.setTimeout(() => {
      setFormStatus("");
    }, 4200);
  };

  return (
    <section className="contact section-reveal" id="kontakt">
      <div className="contact-copy">
        <p className="eyebrow">Kontakt</p>
        <h2>Saada päring ja leiame sobiva varju</h2>
        <p>
          Kirjuta, kuhu päikesevarju vajad ning millist suurust või stiili eelistad. Vastame
          esimesel võimalusel.
        </p>
        <div className="contact-details">
          <p>
            <strong>Telefon:</strong> +372 5555 1234
          </p>
          <p>
            <strong>E-post:</strong> info@paikesevari.ee
          </p>
          <p>
            <strong>Asukoht:</strong> Tallinn, Eesti
          </p>
        </div>
      </div>

      <form className="contact-form" id="inquiry-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Nimi</label>
        <input id="name" name="name" type="text" placeholder="Sinu nimi" required />

        <label htmlFor="email">E-post</label>
        <input id="email" name="email" type="email" placeholder="sina@example.com" required />

        <label htmlFor="message">Sõnum</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          placeholder="Kirjelda, millist päikesevarju otsid"
          value={message}
          onChange={(event) => onMessageChange(event.target.value)}
          required
        ></textarea>

        <button className="btn btn-primary" type="submit">
          Saada päring
        </button>
        <p className="form-message" role="status" aria-live="polite">
          {formStatus}
        </p>
      </form>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-ferrofluid-wrapper">
        <Ferrofluid
          colors={["#d5bdaf", "#e3d5ca", "#d6ccc2"]}
          speed={0.3}
          scale={1.4}
          turbulence={0.8}
          fluidity={0.15}
          rimWidth={0.18}
          sharpness={2.8}
          shimmer={1.2}
          glow={1.8}
          flowDirection="up"
          opacity={0.6}
          mouseInteraction={true}
          mouseStrength={0.8}
          mouseRadius={0.25}
          mixBlendMode="screen"
        />
      </div>
      <div className="footer-content">
        <span className="footer-text">Powered by</span>
        <a href="https://mhxstudio.eu" className="footer-logo-link" target="_blank" rel="noopener noreferrer" aria-label="MHX Studio">
          <img src={mhxLogo} alt="MHX" className="footer-logo" />
        </a>
      </div>
    </footer>
  );
}

function App() {
  const [heroScrollProgress, setHeroScrollProgress] = useState(0);

  useEffect(() => {
    const revealElements = document.querySelectorAll(".section-reveal");

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.16,
      }
    );

    revealElements.forEach((element) => revealObserver.observe(element));

    return () => {
      revealObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const updateHeroProgress = () => {
      const nextProgress = Math.min(window.scrollY / Math.max(window.innerHeight, 1), 1);
      setHeroScrollProgress(nextProgress);
    };

    updateHeroProgress();
    window.addEventListener("scroll", updateHeroProgress, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateHeroProgress);
    };
  }, []);

  return (
    <ClickSpark sparkColor="#8b6f47" sparkSize={12} sparkRadius={24} sparkCount={9} duration={520} extraScale={1.15}>
      <StaggeredMenu
        position="right"
        isFixed
        items={menuItems}
        displaySocials={false}
        displayItemNumbering
        menuButtonColor="#2d2825"
        openMenuButtonColor="#2d2825"
        changeMenuColorOnOpen
        colors={["#EDEDE9", "#D6CCC2", "#E3D5CA", "#D5BDAF"]}
        accentColor="#9f7f70"
      />
      <main>
        <Hero scrollProgress={heroScrollProgress} />
        <ColorIntro />
        <ImageSection
          image={pilt3Image}
          label="Rannapäevaks"
          title="Kerge varjuala mere ääres"
          text="Päikesevari, mis hoiab päeva õhulise ja mugava ka siis, kui päike on kõige kõrgemal."
          align="left"
          id="rand"
        />
      </main>
      <Footer />
    </ClickSpark>
  );
}

createRoot(document.querySelector("#root")).render(<App />);
