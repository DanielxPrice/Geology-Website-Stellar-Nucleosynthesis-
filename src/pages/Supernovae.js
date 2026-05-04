import supernovaeImage from "../assets/supernovae.png";

function Supernovae() {
  return (
    <section className="pageCard overviewPage">
      <div className="overviewGlow overviewGlowOne"></div>
      <div className="overviewGlow overviewGlowTwo"></div>

      <div className="overviewHero fadeUp">
        <p className="overviewEyebrow">Supernovae</p>
        <h1>Supernovae and Their Role in the Universe</h1>
        <p className="overviewLead">
          Supernovae are among the most powerful events in stellar evolution.
          They release enormous amounts of energy, scatter matter into space,
          and play a major role in cosmic chemical enrichment. They are also one
          of the clearest ways astronomers can study what elements were made
          inside stars before the explosion.
        </p>
      </div>

      <figure className="overviewFigure fadeUp delayOne">
        <img
          className="figureImage"
          src={supernovaeImage}
          alt="Hubble Captures Supernova in NGC 2525"
        />
        <figcaption className="figureCaption">
          Figure 5:Hubble Captures Supernova in NGC 2525. Source: ESA/Hubble.
        </figcaption>
      </figure>

      <div className="quoteBlock fadeUp delayOne">
        <p className="quoteText">
          “Although supernovae are thought to be the dominant sources of heavy
          elements in the universe”
        </p>
        <p className="quoteSource">
          — Claes Fransson and Roger A. Chevalier,
          <em> Late Emission from Supernovae: A Window on Stellar Nucleosynthesis</em>
        </p>
        <p className="quoteExplanation">
          This emphasizes how important supernovae are to chemical enrichment.
          When a star explodes, material that was created during earlier burning
          stages can be thrown back into space, where it later becomes part of
          new stars, planets, and interstellar clouds.
        </p>
      </div>

      <div className="overviewExamples fadeUp delayTwo">
        <h2>What Makes Supernovae Important</h2>
        <p className="examplesLead">
          Supernovae are important not only because they mark the end of a
          star’s life, but also because they reveal what happened inside the
          star and help distribute newly formed elements into the universe.
        </p>

        <div className="examplesGrid">
          <div className="exampleItem">
            <span className="exampleNumber">1</span>
            <div>
              <h3>Extreme Energy Release</h3>
              <p>
                A supernova releases a huge amount of energy in a short period
                of time, making it one of the brightest stellar events in the
                sky.
              </p>
            </div>
          </div>

          <div className="exampleItem">
            <span className="exampleNumber">2</span>
            <div>
              <h3>Element Ejection</h3>
              <p>
                Supernovae throw stellar material outward into space. This helps
                enrich the interstellar medium with elements such as oxygen,
                magnesium, silicon, sulfur, and calcium.
              </p>
            </div>
          </div>

          <div className="exampleItem">
            <span className="exampleNumber">3</span>
            <div>
              <h3>Evidence for Nucleosynthesis</h3>
              <p>
                By studying supernova spectra, astronomers can identify elements
                in the ejecta and learn about the internal structure of the star
                before it exploded.
              </p>
            </div>
          </div>

          <div className="exampleItem">
            <span className="exampleNumber">4</span>
            <div>
              <h3>Radioactive Decay</h3>
              <p>
                The light from a supernova at later times is strongly affected
                by radioactive decay, especially from nickel and cobalt
                isotopes, which continue powering the emission after the initial
                blast.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="overviewGrid">
        <article className="overviewCard fadeUp delayThree">
          <h2>Core-Collapse Supernovae</h2>
          <p>
            Massive stars can continue fusion through carbon, neon, oxygen, and
            silicon burning until an iron core forms. Because iron does not
            provide energy through normal fusion in the same way, the core can
            no longer support the star indefinitely. This can lead to collapse
            and a supernova explosion.
          </p>
        </article>

        <article className="overviewCard fadeUp delayThree">
          <h2>Supernovae as Scientific Evidence</h2>
          <p>
            One of the most valuable things about supernovae is that they let
            astronomers study stellar nucleosynthesis more directly. As the
            ejecta expand and become more transparent, the inner regions can be
            studied through their spectra, giving clues about both structure and
            composition.
          </p>
        </article>
      </div>

      <div className="comparisonSection fadeUp delayFour">
        <h2>Two Major Supernova Paths</h2>
        <div className="comparisonGrid">
          <div className="comparisonCard">
            <h3>Core-Collapse</h3>
            <p>
              Happens in massive stars after advanced burning stages create an
              iron core. The core collapses, the outer layers are expelled, and
              the remnant may become a neutron star or black hole.
            </p>
          </div>

          <div className="comparisonCard">
            <h3>Type Ia</h3>
            <p>
              Involves a white dwarf rather than a massive star. The explosion
              comes from runaway thermonuclear burning, not from the collapse of
              an iron core.
            </p>
          </div>
        </div>
      </div>

      <div className="quoteBlock fadeUp delayFour">
        <p className="quoteText">
          “the late spectrum is thus a good diagnostic of the nucleosynthetic
          structure of the supernova”
        </p>
        <p className="quoteSource">
          — Claes Fransson and Roger A. Chevalier,
          <em> Late Emission from Supernovae: A Window on Stellar Nucleosynthesis</em>
        </p>
        <p className="quoteExplanation">
          Late-time light from a supernova contains information about the
          elements in the ejecta. By examining those spectral features,
          astronomers can reconstruct what kinds of burning took place and what
          material was produced.
        </p>
      </div>

      <div className="overviewGrid">
        <article className="overviewCard fadeUp delayFour">
          <h2>Not the Whole Story for Every Heavy Element</h2>
          <p>
            Supernovae are major sources of many heavy elements, especially
            alpha-elements from massive stars. At the same time, the heaviest
            r-process nuclei are often linked to rarer events such as neutron
            star mergers, so supernovae are a major part of the story rather
            than the entire story.
          </p>
        </article>

        <article className="overviewCard fadeUp delayFour">
          <h2>What Remains Afterward</h2>
          <p>
            A supernova does not simply erase the star. Depending on the star’s
            original mass and final core conditions, the remnant may become a
            neutron star or a black hole, continuing the stellar life cycle in a
            different form.
          </p>
        </article>
      </div>

      <div className="overviewSummary fadeUp delayFour">
        <h2>The Big Picture</h2>
        <p>
          Supernovae connect stellar death with cosmic recycling. They release
          energy, eject chemically enriched material into space, and provide a
          direct window into nucleosynthesis. Because of that, they are central
          to understanding both stellar evolution and the chemical history of
          the universe.
        </p>
      </div>

      <p className="sourceNote fadeUp delayFour">
        This page is based mainly on
        <em> Late Emission from Supernovae: A Window on Stellar Nucleosynthesis </em>
        and the stellar evolution sources used throughout the site.
      </p>
    </section>
  );
}

export default Supernovae;