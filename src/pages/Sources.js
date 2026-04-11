function Sources() {
  return (
    <section className="pageCard sourcesPage">
      <div className="sourcesIntro">
        <p className="sourcesEyebrow">References</p>
        <h1>Sources</h1>
        <p className="sourcesText">
          This page lists the main source used for the information presented on
          this website about stellar nucleosynthesis and stellar evolution.
        </p>
      </div>

      <div className="sourcesList">
        <article className="sourceItem">
          <h2>Fundamentals of Stellar Evolution and Nucleosynthesis</h2>
          <p className="sourceAuthors">Diego Vescovi</p>
          <p className="sourceDetails">
            EPJ Web of Conferences, 297, 01014, 2024.
          </p>
          <a
            className="sourceLink"
            href="https://www.epj-conferences.org/articles/epjconf/pdf/2024/07/epjconf_isna2023_01014.pdf"
            target="_blank"
            rel="noreferrer"
          >
            View PDF Source
          </a>
        </article>

        <article className="sourceItem">
          <h2>Neutron Star Mergers and Nucleosynthesis of Heavy Elements</h2>
          <p className="sourceAuthors">F.-K. Thielemann, M. Eichler, I.V. Panov, and B. Wehmeyer</p>
          <p className="sourceDetails">
            arXiv preprint, 2017.
          </p>
          <a
            className="sourceLink"
            href="https://arxiv.org/pdf/1710.02142"
            target="_blank"
            rel="noreferrer"
          >
            View PDF Source
          </a>
        </article>

        <article className="sourceItem">
          <h2>Late Stages of Massive Star Evolution and Nucleosynthesis</h2>
          <p className="sourceAuthors">Ken'ichi Nomoto and Masa-aki Hashimoto</p>
          <p className="sourceDetails">
            BNL--38508, DE87 001367. Lecture at International School of Nuclear Physics, 10th Course "The Early Universe and Its Evolution", Erice, April 2-14, 1986.
          </p>
          <a
            className="sourceLink"
            href="https://www.osti.gov/servlets/purl/5140712-GNEf1w/"
            target="_blank"
            rel="noreferrer"
          >
            View Source
          </a>
        </article>

        <article className="sourceItem">
          <h2>Late Emission from Supernovae: A Window on Stellar Nucleosynthesis</h2>
          <p className="sourceAuthors">Claes Fransson and Roger A. Chevalier</p>
          <p className="sourceDetails">
            The Astrophysical Journal, 343, 323, 1989.
          </p>
          <a
            className="sourceLink"
            href="https://adsabs.harvard.edu/pdf/1989ApJ...343..323F"
            target="_blank"
            rel="noreferrer"
          >
            View PDF Source
          </a>
        </article>

        <article className="sourceItem">
          <h2>How to Build a Habitable Planet: The Story of Earth from the Big Bang to Humankind</h2>
          <p className="sourceAuthors">Charles H. Langmuir and Wally Broecker</p>
          <p className="sourceDetails">
            Revised and expanded edition. Princeton University Press, 2012. ISBN: 978-0-691-14006-3.
          </p>
        </article>
      </div>
    </section>
  );
}

export default Sources;