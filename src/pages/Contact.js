function Contact() {
  return (
    <section className="pageCard contactPage">
      <div className="contactIntro">
        <p className="contactEyebrow">Contact</p>
        <h1>Let&apos;s Connect</h1>
        <p className="contactText">
          If you want to reach out about school, projects, or anything else, here
          is the best way to contact me.
        </p>
      </div>

      <div className="contactGrid">
        <div className="contactBox">
          <h2>Daniel Price</h2>
          <p className="contactLabel">Email</p>
          <a
            className="contactLink"
            href="mailto:danielprice1642@csu.fullerton.edu"
          >
            danielprice1642@csu.fullerton.edu
          </a>
        </div>

        <div className="contactBox">
          <h2>LinkedIn</h2>
          <p className="contactLabel">Profile</p>
          <a
            className="contactLink"
            href="https://www.linkedin.com/in/danielprice123/"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/danielprice123
          </a>
        </div>

        <div className="contactBox">
          <h2>GitHub</h2>
          <p className="contactLabel">Profile</p>
          <a
            className="contactLink"
            href="https://github.com/DanielxPrice"
            target="_blank"
            rel="noreferrer"
          >
            github.com/DanielxPrice
          </a>
        </div>

        
      </div>
    </section>
  );
}

export default Contact;