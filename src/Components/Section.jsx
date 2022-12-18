export function Section() {
  return (
    <section id="hero" className="sectionn">
      <div className="containerr" data-aos="fade-up">
        <h1>Build Better Websites With Bikin</h1>
        <h2>
          We are team of talented designers making websites with Bootstrap
        </h2>
        <a href="#about" className="btn-get-started scrollto">
          Get Started
        </a>
        <img
          src="src/assets/img/hero-img.png"
          className="img-fluid hero-img"
          alt=""
          data-aos="zoom-in"
          data-aos-delay="150"
        />
      </div>
    </section>
  );
}
