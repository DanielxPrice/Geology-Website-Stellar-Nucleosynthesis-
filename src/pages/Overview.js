import overviewImage from "../assets/overview.png";

function Overview() {
  return (
    <section className="pageCard overviewPage">
      <div className="overviewGlow overviewGlowOne"></div>
      <div className="overviewGlow overviewGlowTwo"></div>

      <div className="overviewHero fadeUp">
        <p className="overviewEyebrow">Overview</p>
        <h1>What Is Stellar Nucleosynthesis?</h1>
        <p className="overviewLead">
          Stellar nucleosynthesis is the process by which stars create new chemical 
          elements through nuclear reactions in their interiors. This is important for 
          understanding Earth because many of the elements found in rocks, minerals, 
          and the planet itself were originally formed in stars before becoming part 
          of the material that made the solar system.
        </p>
      </div>

      <figure className="overviewFigure fadeUp delayOne">
        <img src={overviewImage} alt="Overview of burning stages" className="overviewImage" />
        <figcaption>
          Figure 2: A basic overview of the burning stages. Image from NASA Cosmicopia: https://cosmicopia.gsfc.nasa.gov/nucleo.html
        </figcaption>
      </figure>

      <div className="quoteBlock fadeUp delayOne">
        <p className="quoteText">
          “virtually all chemical elements (except hydrogen) can be synthesized
          inside stars”
        </p>
        <p className="quoteSource">
          — Diego Vescovi, <em>Fundamentals of Stellar Evolution and Nucleosynthesis</em>
        </p>
        <p className="quoteExplanation">
          This highlights the main importance of stellar nucleosynthesis. Stars
          are responsible for producing most of the elements found throughout
          the universe, while hydrogen is the main exception.
        </p>
      </div>

      <div className="overviewGrid">
        <article className="overviewCard fadeUp delayTwo">
          <h2>Why It Matters</h2>
          <p>
            Stellar nucleosynthesis helps explain where much of the universe’s
            matter comes from. By studying how stars form and transform
            elements, astronomers can better understand the chemical history of
            galaxies, planets, and the material that eventually made life
            possible.
          </p>
        </article>

        <article className="overviewCard fadeUp delayThree">
          <h2>How a Star Begins</h2>
          <p>
            Stars begin as clouds of gas made mostly of hydrogen and helium.
            Gravity pulls the gas inward, raising temperature and density until
            nuclear fusion begins. Once fusion starts, the star can generate
            energy and begin changing lighter elements into heavier ones.
          </p>
        </article>
      </div>

      <div className="quoteBlock fadeUp delayThree">
        <p className="quoteText">
          “Gravity is the driving force behind stellar evolution”
        </p>
        <p className="quoteSource">
          — Diego Vescovi, <em>Fundamentals of Stellar Evolution and Nucleosynthesis</em>
        </p>
        <p className="quoteExplanation">
          Gravity causes gas clouds to collapse, increases pressure and
          temperature in stellar interiors, and makes nuclear fusion possible.
          It drives the changes stars go through over time.
        </p>
      </div>

      <div className="overviewGrid">
        <article className="overviewCard fadeUp delayFour">
          <h2>How Elements Form</h2>
          <p>
            During most of a star’s life, hydrogen is fused into helium. Later,
            depending on the star’s mass, it may create heavier elements such as
            carbon and oxygen. In very massive stars, fusion can continue
            through later stages until an iron core forms.
          </p>
        </article>

        <article className="overviewCard fadeUp delayFour">
          <h2>Why Mass Changes the Outcome</h2>
          <p>
            A star’s mass plays a major role in determining how it evolves.
            Lower-mass stars usually live longer and end as white dwarfs after
            producing lighter heavy elements. Massive stars evolve faster and
            can end in supernova explosions, spreading newly formed material
            into space.
          </p>
        </article>
      </div>

      <div className="overviewGrid">
        <article className="overviewCard overviewCardFull fadeUp delayFour">
          <h2>Importance to Earth</h2>
          <p>
            Stellar nucleosynthesis is important to Earth because many of the
            elements found in rocks, minerals, and the planet’s interior were
            formed in stars. After being released into space, these elements
            became part of the material that formed the solar system and Earth.
            This helps geologists because the study of Earth’s materials is also,
            in part, the study of matter that has a cosmic origin.
          </p>
        </article>
      </div>

      <div className="overviewSummary fadeUp delayFour">
        <h2>The Big Picture</h2>
        <p>
          In simple terms, stellar nucleosynthesis shows how stars act like
          cosmic factories. It connects gravity, fusion, stellar evolution, and
          the origin of the elements into one larger story about how the
          universe changes over time.
        </p>
      </div>

      <p className="sourceNote fadeUp delayFour">
        Quotations on this page are taken from Diego Vescovi’s
        <em> Fundamentals of Stellar Evolution and Nucleosynthesis</em>.
      </p>
    </section>
  );
}

export default Overview;