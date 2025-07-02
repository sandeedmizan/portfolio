import React, { useState, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import emailjs from '@emailjs/browser'; 
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Portfolio />
      <About />
      <OtherServices />
      <Footer />
    </div>
  );
}

function sendEmail(e) {
  e.preventDefault();

  emailjs.sendForm('hello_advc', 'contactform_advportfolio', e.target, '3L7Y-_YhrLu6Z2zRp')
    .then((result) => {
      console.log(result.text);
      alert('Your message was sent successfully! Ill be getting back to you asap! 🙌🏼');
    }, (error) => {
      console.log(error.text);
      alert('Failed to send the message. Please try again later.');
    });
}

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [buttonText, setButtonText] = useState('Work With Me.');
  const [isFading, setIsFading] = useState(false);

  const togglePopup = () => {
    setIsFading(true);
    
    setTimeout(() => {
      if (isOpen) {
        setButtonText('Work With Me.');
        const popup = document.querySelector('.popup');
        popup.classList.remove('open');
        popup.classList.add('close');
        setTimeout(() => {
          setIsOpen(false);
        }, 800);
      } else {
        setIsOpen(true);
        setButtonText('Done Here.');
      }

      setTimeout(() => {
        setIsFading(false);
      }, 300);
    }, 300);
  };

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <h1 className="logo-text">
            <a href='/'><TypingEffect /></a>
          </h1>
        </div>
        <div className="navbar2">
        <button type="button" className={`cta ${isFading ? 'hidden' : ''}`} onClick={togglePopup}>
            {buttonText}
          </button>
          {isOpen && (
            <div className={`popup open`}>
              <div className="contact-form">
                <div class="title">Let's work together to bring your imagination into reality.</div>
                <div class="subtitle">Send me a message and I'll get back to you asap!</div>
                
                <form id="contact-form" onSubmit={sendEmail}>
                <div class="input-content">
                  <div class="input-container ic1">
                    <input id="fullname" name="user_name" class="input" type="text" placeholder=" " />
                    <label for="fullname" class="placeholder">Full Name</label>
                  </div>

                  <div class="input-container ic1">
                    <input id="email" name="user_email" class="input" type="email" placeholder=" " />
                    <label for="email" class="placeholder">Email Address</label>
                  </div>

                  <div class="input-container ic2">
                    <input id="company" name="user_company" class="input" type="text" placeholder=" " />
                    <label for="company" class="placeholder">Company/Organization</label>
                  </div>

                  <div class="input-container ic2">
                    <select id="location" name="user_location" class="input">
                      <option value="" disabled selected>Select Your Location</option>
                      <option value="Bangladesh">Bangladesh</option>
                      <option value="Australia">Australia</option>
                      <option value="Malaysia">Malaysia</option>
                      <option value="USA">USA</option>
                      <option value="Canada">Canada</option>
                      <option value="Other">Other</option>
                    </select>
                    <label for="location" class="placeholder">Location</label>
                  </div>

                  <div class="input-container ic3">
                    <textarea id="project" name="message" class="input" placeholder=" "></textarea>
                    <label for="project" class="placeholder">About The Project</label>
                  </div>
            
                  <button type="submit" class="submit">Submit</button>
                </div>
                </form>
              </div>
              
              <div className="social-links">
                <a href="https://wa.me/+61466347645" className="socials">WhatsApp</a>
                <a href="mailto:sandeedmizan@gmail.com" className="socials">Email</a>
              </div>

            </div>
          )}
        </div>
      </nav>
    </header>
  );
}


function TypingEffect() {
  return (
    <Typewriter
      words={['Frontend Dev.', 'Portfolio.']}
      loop={true}
      cursor
      cursorStyle='_'
      typeSpeed={100}
      deleteSpeed={50}
      delaySpeed={3000}
    />
  );
}

function HeroSection() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setTimeout(() => {
        setScrolled(window.scrollY > 0);
      }, 0); // Delay of 200ms
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>I don't do Yawn-Worthy. <img
              src={scrolled ? "/imgs/devil_Emojis.svg" : "/imgs/sleepy_Emojis.svg"}
              className={`emoji ${scrolled ? 'rotate' : ''}`}
              alt="Emoji"
            /></h1>
          <h2>Tired of websites that look like they were built in 1999? I help build websites that are fresh, functional, and ready to take on the digital world. Let's ditch the outdated and embrace the aesthetic!</h2>
          <button onClick={() => window.open('https://wa.me/+61466347645', '_blank')} type="button" className="cta">What say we discuss further? 🤙🏽</button>
        </div>
        <div className="hero-img">
          <img src="/imgs/Hero_DesignAdventcom.webp" className="hero-image" alt="Your Imagination, Our Creation" />
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="previous-projects">
        <h1 className="pp-title">Previous Projects.</h1>
        <h2 className="pp-subtitle">Here's some projects i've completed recently.</h2>
        <div className="pp-cardholder">
          <div className="pp-card1" data-status="">
            <div className="pp-card-data">
              <img src="/imgs/Previous-Projects.svg" className="pp-icon" alt="Previous Projects" />
              <h2 className="pp-cd-title">Spade Digital.</h2>
              <p className="pp-cd-description">We brought Spade Digital’s vision to life! This sleek, informative website lets their impressive work do the talking. With a clean layout and bold visuals, it highlights their expertise in strategy, branding, and marketing—no fluff, just results.</p>
            </div>
            <a class="pp-card-link" href="https://spadedigital.com/" target="_blank" rel="noreferrer">Visit Site. &gt;</a>
          </div>
          <div className="pp-card2" data-status="Updating">
            <div className="pp-card-data">
              <img src="/imgs/Previous-Projects.svg" className="pp-icon" alt="Previous Projects" />
              <h2 className="pp-cd-title">Okkhor.</h2>
              <p className="pp-cd-description">Learning English just got easier, thanks to us! We built Okkhor's user-friendly platform packed with features like quizzes, translation tools, and difficulty levels. This visually-appealing site helps you track progress and become an English whiz.</p>
            </div>
            <a class="pp-card-link" href="https://learn.okkhor.app" target="_blank" rel="noreferrer">Visit Site. &gt;</a>
          </div>
          <div className="pp-card3" data-status="">
            <div className="pp-card-data">
              <img src="/imgs/Previous-Projects.svg" className="pp-icon" alt="Previous Projects" />
              <h2 className="pp-cd-title">The Daily Blurb.</h2>
              <p className="pp-cd-description">Stay informed with The Daily Blurb! We've crafted this bite-sized news platform to bring you the latest stories in a clean, engaging format. Now, you can catch up on current events and fresh content with ease, all on a user-friendly, visually appealing site tailored for quick, reliable news access.</p>
            </div>
            <a class="pp-card-link" href="https://blurbbd.com" target="_blank" rel="noreferrer">Visit Site. &gt;</a>
          </div>
        </div>
      </div>

      <div className="upcoming-projects">
        <h1 className="up-title">Upcoming Projects.</h1>
        <h2 className="up-subtitle">Here's some projects i'm currently working on.</h2>
        <div className="up-cardholder">
          <div className="up-card1" data-status="Building">
            <div className="up-card-data">
              <img src="/imgs/Upcoming-Projects.svg" className="up-icon" alt="Upcoming Projects" />
              <h2 className="up-cd-title">TechnoMagic.</h2>
            </div>
            <a class="up-card-link" href="https://technomagic.spadedigital.com" target="_blank" rel="noreferrer">Visit Site. &gt;</a>
          </div>
          <div className="up-card2" data-status="Completed">
            <div className="up-card-data">
              <img src="/imgs/Upcoming-Projects.svg" className="up-icon" alt="Upcoming Projects" />
              <h2 className="up-cd-title">Next Wave.</h2>
            </div>
            <a class="up-card-link" href="https://nextwave.blurbbd.com" target="_blank" rel="noreferrer">Visit Site. &gt;</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about">
      <div className="about-content">
        <h1 className="about-title">Why work with me?</h1>
        <h2 className="about-subtitle">As a frontend developer, I turn ideas into beautiful, responsive websites that stand out and perform. With a strong eye for design and clean code, I help individuals and businesses build a powerful digital presence that works flawlessly on any device.</h2>
        <div className="us">
          <h3 className="about-us">What Makes Me Different?</h3>
          <div className="about-cards">
            <div className="about-card1">
              <img src="/imgs/Quality-Affordability.svg" className="about-card-icon" alt="Quality & Affordability" />
              <h2 className="about-card-title">Pixel-Perfect Craft.</h2>
              <p className="about-card-description">I care about code quality as much as design. You get responsive, visually stunning websites—without bloated prices or shortcuts.</p>
            </div>
            <div className="about-card2">
              <img src="/imgs/User-Experience.svg" className="about-card-icon" alt="User Experience" />
              <h2 className="about-card-title">Built for Real People.</h2>
              <p className="about-card-description">I focus on smooth, user-friendly experiences that feel natural. Whether it's mobile, tablet, or desktop—your users will enjoy every interaction.</p>
            </div>
            <div className="about-card3">
              <img src="/imgs/Brand-Amplified.svg" className="about-card-icon" alt="Brand Amplified" />
              <h2 className="about-card-title">Your Vision, My Code.</h2>
              <p className="about-card-description">Every project starts with listening. I’ll understand your goals and translate your vision into a website that feels uniquely yours—and delivers results.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function OtherServices() {
  return (
    <section className="others">
      <div className="others-header">
        <h1 className="others-header-title">What I Bring to the Table.</h1>
        <h2 className="others-header-subtitle">I'm a frontend developer who bridges design and code. Whether it's custom-built in React or crafted in no-code tools like WordPress and Shopify, I create websites that are fast, clean, and user-focused.</h2>
      </div>
      <div className="others-cta">
        <div className="others-card1">
          <h2 className="others-title">The Foundation.</h2>
          <h3 className="others-subtitle">I write clean, semantic HTML, style it beautifully with CSS, and bring it to life with JavaScript. Every site I build is responsive and performance-optimized.</h3>
        </div>
        <div className="others-card2">
          <h2 className="others-title">Modern Web Development.</h2>
          <h3 className="others-subtitle">I use React to build fast, dynamic UIs. Whether it's a simple landing page or a more complex app, I build reusable components and maintain clean state logic.</h3>
        </div>
        <div className="others-card3">
          <h2 className="others-title">Flexible and Fast Solutions.</h2>
          <h3 className="others-subtitle">I work comfortably with WordPress (including Elementor Pro) and Shopify for quick, scalable web builds — perfect for clients needing fast deployment and ease of use.</h3>
        </div>
        <div className="others-card4">
          <h2 className="others-title">Design-Dev Integration.</h2>
          <h3 className="others-subtitle">I use Figma for UI/UX design, VS Code for development, and Git for version control. I bridge design and development smoothly and communicate clearly with both designers and stakeholders.</h3>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <section className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <button onClick={() => window.open('https://wa.me/+61466347645', '_blank')} type="button" className="footer-cta">Let's Chat. 💬</button>
        </div>
        <div className="footer-copyrights">
          <div className="footer-socials">
            <a href="mailto:sandeedmizan@gmail.com" target="_blank" rel="noreferrer">
              <img src="/imgs/Email_Socials.svg" className="footer-icon" alt="Email" />
            </a>
            <a href="https://www.facebook.com/sandeed.mizan" target="_blank" rel="noreferrer">
              <img src="/imgs/Facebook_Socials.svg" className="footer-icon" alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/sandeedmizan" target="_blank" rel="noreferrer">
              <img src="/imgs/Instagram_Socials.svg" className="footer-icon" alt="Instagram" />
            </a>
            <a href="https://www.linkedin.com/in/sandeedmizan" target="_blank" rel="noreferrer">
              <img src="/imgs/LinkedIn_Socials.svg" className="footer-icon" alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
