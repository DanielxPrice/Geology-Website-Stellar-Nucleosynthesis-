function ElementFormation() {
  return (
    <section className="pageCard overviewPage">
      <div className="overviewGlow overviewGlowOne"></div>
      <div className="overviewGlow overviewGlowTwo"></div>

      <div className="overviewHero fadeUp">
        <p className="overviewEyebrow">Element Formation</p>
        <h1>How Stars Build the Elements</h1>
        <p className="overviewLead">
          Element formation in stars happens through nuclear reactions that turn
          lighter nuclei into heavier ones. Over time, stars create many of the
          elements found throughout the universe, beginning with hydrogen fusion
          and continuing into more advanced stages depending on the star’s mass.
        </p>
      </div>

      <div className="quoteBlock fadeUp delayOne">
        <p className="quoteText">
          “virtually all chemical elements (except hydrogen) can be synthesized
          inside stars”
        </p>
        <p className="quoteSource">
          — Diego Vescovi, <em>Fundamentals of Stellar Evolution and Nucleosynthesis</em>
        </p>
        <p className="quoteExplanation">
          This quote means stars are the main source of most elements in the
          universe. Hydrogen is the major exception, since it mostly formed in
          the Big Bang, but many of the other elements were produced later by
          stars.
        </p>
      </div>

      <div className="overviewGrid">
        <article className="overviewCard fadeUp delayTwo">
          <h2>Hydrogen to Helium</h2>
          <p>
            In the earliest and longest phase of a star’s life, hydrogen is fused
            into helium in the core. In lower-mass stars this mainly happens
            through the proton-proton chain, while in more massive stars it is
            dominated by the CNO cycle. This stage powers the star during the
            main sequence.
          </p>
        </article>

        <article className="overviewCard fadeUp delayThree">
          <h2>Heavier Elements in Later Stages</h2>
          <p>
            After core hydrogen is used up, stars can move on to new fusion
            stages. Helium burning produces carbon and oxygen, and the most
            massive stars can continue with carbon, neon, oxygen, and silicon
            burning. These later stages build progressively heavier elements in
            the stellar interior.
          </p>
        </article>
      </div>

      <div className="quoteBlock fadeUp delayThree">
        <p className="quoteText">
          “Helium burning produces carbon and oxygen in the core”
        </p>
        <p className="quoteSource">
          — Diego Vescovi, <em>Fundamentals of Stellar Evolution and Nucleosynthesis</em>
        </p>
        <p className="quoteExplanation">
          This explains one of the most important later fusion stages in a star’s
          life. After hydrogen burning, helium can fuse into heavier elements,
          especially carbon and oxygen, which are major building blocks for later
          chemistry in the universe.
        </p>
      </div>

      <div className="overviewExamples fadeUp delayFour">
        <h2>Examples of Element Formation</h2>
        <p className="examplesLead">
          Here are simple examples of how stars build elements, starting with the
          lightest ones and moving toward iron:
        </p>

        <div className="examplesGrid">
          <div className="exampleItem">
            <span className="exampleNumber">1</span>
            <div>
              <h3>Hydrogen → Helium</h3>
              <p>
                This is the main reaction in ordinary stars. During the main
                sequence, stars fuse hydrogen into helium and release the energy
                that makes them shine.
              </p>
            </div>
          </div>

          <div className="exampleItem">
            <span className="exampleNumber">2</span>
            <div>
              <h3>Helium → Carbon</h3>
              <p>
                When hydrogen in the core runs low, helium fusion can begin.
                Through the triple-alpha process, helium nuclei combine to form
                carbon.
              </p>
            </div>
          </div>

          <div className="exampleItem">
            <span className="exampleNumber">3</span>
            <div>
              <h3>Carbon → Oxygen</h3>
              <p>
                Helium burning can also produce oxygen. This is why carbon and
                oxygen become major products inside evolved stars.
              </p>
            </div>
          </div>

          <div className="exampleItem">
            <span className="exampleNumber">4</span>
            <div>
              <h3>Advanced Burning in Massive Stars</h3>
              <p>
                In very massive stars, fusion continues through carbon, neon,
                oxygen, and silicon burning. Each stage requires hotter and
                denser conditions than the one before it.
              </p>
            </div>
          </div>

          <div className="exampleItem">
            <span className="exampleNumber">5</span>
            <div>
              <h3>Up to the Iron Peak</h3>
                <p>
                  These advanced burning stages build elements up to the iron peak,
                  where ordinary fusion no longer continues in the same productive
                  way. Iron-56 is the end of the nuclear fusion assembly line.
                </p>
            </div>
          </div>
        </div>
      </div>
      

      <div className="exampleItem beyondIronItem fadeUp delayFour">
        <div>
          <h3>Beyond the Iron Peak</h3>
          <p>
            Elements heavier than the iron peak are mainly formed through neutron-capture
            processes. In the s-process, nuclei capture neutrons more slowly and build
            heavier elements step by step. In the r-process, nuclei capture neutrons
            rapidly during extreme conditions, producing some of the heaviest elements.
            The abundance patterns in nature provide evidence that both processes occur.
          </p>
        </div>
      </div>

      <div className="overviewExamples fadeUp delayFour">
        <h2>Visual Summary of Burning Stages</h2>
        <p className="examplesLead">
          This diagram shows how stars move from simpler burning stages to more
          advanced ones as temperature increases. In the most massive stars, the
          layers can progress from hydrogen burning all the way to silicon burning,
          producing elements near the iron peak.
        </p>

        <div className="diagramWrap">
          <img
            src={require("../assets/burningStages.png")}
            alt="Diagram showing hydrogen, helium, carbon, neon, oxygen, and silicon burning stages in stars"
            className="diagramImage"
          />
        </div>
      </div>
      

      <div className="quoteBlock fadeUp delayFour">
        <p className="quoteText">
          “This is followed by the rapid capture of neutrons on these seed
          nuclei, producing the heaviest nuclei.”
        </p>
        <p className="quoteSource">
          — F.-K. Thielemann et al., <em>Neutron Star Mergers and Nucleosynthesis of Heavy Elements</em>
        </p>
        <p className="quoteExplanation">
          This quote describes how some elements heavier than iron are formed.
          Instead of normal fusion, very heavy nuclei can be created when atomic
          nuclei rapidly capture neutrons during extreme events like neutron star
          mergers.
        </p>
      </div>

      <div className="overviewSummary fadeUp delayFour">
        <h2>The Big Picture</h2>
        <p>
          Element formation is the story of how stars and extreme stellar events
          change simple matter into the rich variety of elements found in the
          universe. From hydrogen becoming helium to the creation of heavy nuclei,
          this process connects stellar life cycles to the chemical evolution of
          galaxies.
        </p>
      </div>
    </section>
  );
}

export default ElementFormation;