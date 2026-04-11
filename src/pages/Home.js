function Home() {
  return (
    <section className="pageCard homePage">
      <div className="homeHero">
        <div className="homeText fadeUp">
          <p className="homeEyebrow">Stellar Nucleosynthesis</p>
          <h1>How Stars Create the Elements</h1>
          <p className="homeLead">
            Stellar nucleosynthesis is the process by which stars create new
            elements through nuclear reactions in their interiors. From the
            formation of helium to the creation of heavier elements, it helps
            explain where much of the matter in the universe comes from.
          </p>
        </div>

        <div className="homeImageWrap fadeUp delayOne">
          <img
            src={require("../assets/stellarNucleosynthesis.png")}
            alt="Illustration of stellar nucleosynthesis"
            className="homeImage"
          />
        </div>
      </div>

      <div className="homeGrid">
        <article className="homeInfoCard fadeUp delayTwo">
          <h2>What This Site Covers</h2>
          <p>
            This website explores the basics of stellar nucleosynthesis,
            including how stars evolve, how elements form, and how events such
            as supernovae help spread those elements into space.
          </p>
        </article>

        <article className="homeInfoCard fadeUp delayThree">
          <h2>Why It Matters</h2>
          <p>
            Understanding stellar nucleosynthesis helps connect astronomy,
            chemistry, and geology. It shows how the material found in planets,
            rocks, and even living things has a cosmic origin.
          </p>
        </article>
      </div>

      <div className="homeSummary fadeUp delayFour">
        <h2>Explore the Site</h2>
        <p>
          Use the tabs above to learn about the overview of stellar
          nucleosynthesis, the stages of stars, how elements form, the role of
          supernovae, and the scientific sources behind these ideas.
        </p>
      </div>
    </section>
  );
}

export default Home;