function StellarStages() {
  return (
    <section className="pageCard overviewPage">
      <div className="overviewGlow overviewGlowOne"></div>
      <div className="overviewGlow overviewGlowTwo"></div>

      <div className="overviewHero fadeUp">
        <p className="overviewEyebrow">Stellar Stages</p>
        <h1>The Life Cycle of a Star</h1>
        <p className="overviewLead">
          Stars do not stay the same forever. They change over millions or even
          billions of years as gravity, pressure, and nuclear fusion interact
          inside them. Although all stars begin as collapsing clouds of gas, their
          later stages depend mainly on mass. Low-mass stars follow one path,
          while massive stars go through hotter and more violent stages before
          they die.
        </p>
      </div>

      <div className="quoteBlock fadeUp delayOne">
        <p className="quoteText">
          “Gravity is the driving force behind stellar evolution”
        </p>
        <p className="quoteSource">
          — Diego Vescovi, <em>Fundamentals of Stellar Evolution and Nucleosynthesis</em>
        </p>
        <p className="quoteExplanation">
          This means stars evolve because gravity keeps pulling matter inward.
          That compression raises temperature and density until new stages of
          nuclear burning can begin.
        </p>
      </div>

      <div className="overviewExamples fadeUp delayTwo">
        <h2>Main Stages</h2>
        <p className="examplesLead">
          The general sequence below is a simplified version of stellar evolution.
          The exact path changes depending on the star’s mass.
        </p>

        <div className="examplesGrid">
          <div className="exampleItem">
            <span className="exampleNumber">1</span>
            <div>
              <h3>Birth in a Gas Cloud</h3>
              <p>
                A star begins when a cold cloud of gas and dust collapses under
                gravity. As it contracts, the core becomes hotter and denser.
              </p>
            </div>
          </div>

          <div className="exampleItem">
            <span className="exampleNumber">2</span>
            <div>
              <h3>Main Sequence</h3>
              <p>
                When the core gets hot enough, hydrogen fusion starts. This is
                the longest stage of a star’s life, where hydrogen is turned into
                helium and the star remains in overall balance.
              </p>
            </div>
          </div>

          <div className="exampleItem">
            <span className="exampleNumber">3</span>
            <div>
              <h3>Subgiant and Red Giant Stages</h3>
              <p>
                After core hydrogen is used up, the core contracts and hydrogen
                burning continues in a shell around it. The outer layers expand
                and cool, so the star moves into giant stages.
              </p>
            </div>
          </div>

          <div className="exampleItem">
            <span className="exampleNumber">4</span>
            <div>
              <h3>Helium Burning</h3>
              <p>
                If conditions become hot enough, helium ignites in the core.
                During this stage, helium fusion produces carbon and oxygen.
              </p>
            </div>
          </div>

          <div className="exampleItem">
            <span className="exampleNumber">5</span>
            <div>
              <h3>Late Burning Stages</h3>
              <p>
                In massive stars, fusion can continue beyond helium. Carbon,
                neon, oxygen, and silicon burning may occur in sequence, building
                an onion-like layered structure in the interior.
              </p>
            </div>
          </div>

          <div className="exampleItem">
            <span className="exampleNumber">6</span>
            <div>
              <h3>Final Fate</h3>
              <p>
                Lower-mass stars end as white dwarfs after shedding outer layers.
                Massive stars can form iron cores, collapse, and explode as
                supernovae, leaving behind neutron stars or black holes.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="overviewGrid">
        <article className="overviewCard fadeUp delayThree">
          <h2>Low- and Intermediate-Mass Stars</h2>
          <p>
            In stars up to about 8 solar masses, the carbon-oxygen core becomes
            degenerate after helium burning. These stars move onto the asymptotic
            giant branch, experience shell burning and mass loss, and eventually
            become white dwarfs after shedding their outer layers.
          </p>
        </article>

        <article className="overviewCard fadeUp delayThree">
          <h2>Massive Stars</h2>
          <p>
            Stars above about 8 solar masses can reach temperatures high enough
            to ignite carbon and then heavier fuels. According to your sources,
            these stages can continue through neon, oxygen, and silicon burning
            until an iron core forms, which leads to collapse and a supernova.
          </p>
        </article>
      </div>

      <div className="quoteBlock fadeUp delayFour">
        <p className="quoteText">
          “Starting from hydrogen burning, helium, carbon, oxygen, neon, and
          silicon burn successively”
        </p>
        <p className="quoteSource">
          — Ken’ichi Nomoto and Masa-aki Hashimoto, <em>Late Stages of Massive Star Evolution and Nucleosynthesis</em>
        </p>
        <p className="quoteExplanation">
          This quote describes the staged burning sequence in massive stars. Each
          new fuel requires a hotter core than the last, so only the more massive
          stars can reach the later stages.
        </p>
      </div>

      <div className="overviewGrid">
        <article className="overviewCard fadeUp delayFour">
          <h2>Why Mass Matters</h2>
          <p>
            A key point in understanding stellar stages is that a star’s initial 
            mass is the main factor that controls its evolution. It influences how 
            hot and bright the star becomes, how long it lives, and whether it ends 
            more quietly as a white dwarf or more violently through collapse and explosion.
          </p>
        </article>

        <article className="overviewCard fadeUp delayFour">
          <h2>A More Complex Reality</h2>
          <p>
            It is also important to recognize that stellar evolution is not a single
            simple path for every star. Differences in the core, such as whether it is
            non-degenerate, semi-degenerate, or strongly degenerate, can change how
            later burning starts and what the star ends up becoming.
          </p>
        </article>
      </div>

      <div className="overviewSummary fadeUp delayFour">
        <h2>The Big Picture</h2>
        <p>
          Stellar stages are the sequence of changes a star goes through as it
          uses up one fuel after another. The overall pattern is birth, main
          sequence life, giant phases, and a final remnant, but the details depend
          mostly on mass. That is why some stars end as white dwarfs while others
          go supernova and leave behind neutron stars or black holes.
        </p>
      </div>

      <p className="sourceNote fadeUp delayFour">
        This page is based mainly on Diego Vescovi’s
        <em> Fundamentals of Stellar Evolution and Nucleosynthesis</em> and
        Ken’ichi Nomoto and Masa-aki Hashimoto’s
        <em> Late Stages of Massive Star Evolution and Nucleosynthesis</em>.
      </p>
    </section>
  );
}

export default StellarStages;