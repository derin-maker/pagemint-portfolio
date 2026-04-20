import React from "react";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-left" data-aos="fade-right">
        <h1>
          CRAFTING THE <span> MODERN WEB</span>
        </h1>
        <p>
          Clean, modern websites that dont break the bank.
          We build fast, beautiful websites for small businesses across Nigeria
          — at a price that makes sense.
        </p>
        <div className="hero-btns">
          <a href="#contact" className="cta-btn">
            Let's Work Together
          </a>
          <a href="#work" className="ghost-btn">
            See My Work
          </a>
        </div>
      </div>
      <div className="hero-right" data-aos="fade-left">
        <div className="code-window">
          <div className="code-titlebar">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
            <span className="code-filename">index.html</span>
          </div>
          <div className="code-body">
            <div className="code-line">
              <span className="ln">1</span>
              <span className="tag">&lt;section</span>
              <span className="attr"> class</span>
              <span className="eq">=</span>
              <span className="str">"hero"</span>
              <span className="tag">&gt;</span>
            </div>
            <div className="code-line indent">
              <span className="ln">2</span>
              <span className="tag">&lt;h1&gt;</span>
              <span className="text">Your Business,</span>
              <span className="tag">&lt;/h1&gt;</span>
            </div>
            <div className="code-line indent">
              <span className="ln">3</span>
              <span className="tag">&lt;h1&gt;</span>
              <span className="text">Online.</span>
              <span className="tag">&lt;/h1&gt;</span>
            </div>
            <div className="code-line indent">
              <span className="ln">4</span>
              <span className="tag">&lt;button&gt;</span>
              <span className="text">Get Started</span>
              <span className="tag">&lt;/button&gt;</span>
            </div>
            <div className="code-line">
              <span className="ln">5</span>
              <span className="tag">&lt;/section&gt;</span>
            </div>
            <div className="code-line empty">
              <span className="ln">6</span>
            </div>
            <div className="code-line">
              <span className="ln">7</span>
              <span className="selector">.hero</span>
              <span className="plain"> &#123;</span>
            </div>
            <div className="code-line indent">
              <span className="ln">8</span>
              <span className="prop">display</span>
              <span className="plain">: </span>
              <span className="val">flex</span>
              <span className="plain">;</span>
            </div>
            <div className="code-line indent">
              <span className="ln">9</span>
              <span className="prop">background</span>
              <span className="plain">: </span>
              <span className="val">#0F0F0F</span>
              <span className="plain">;</span>
            </div>
            <div className="code-line indent">
              <span className="ln">10</span>
              <span className="prop">color</span>
              <span className="plain">: </span>
              <span className="val">#F5C518</span>
              <span className="plain">;</span>
            </div>
            <div className="code-line">
              <span className="ln">11</span>
              <span className="plain">&#125;</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
