function Home() {
  return (
    <section className="pageCard">
      <h1 style={{ textAlign: 'center' }}>Home of Stellar Nucleosynthesis</h1>
      <img 
        src={require('../assets/stellarNucleosynthesis.png')} 
        alt="Stellar Nucleosynthesis"
        style={{ width: '100%', height: 'auto', maxWidth: '100%' }}
      />
      <p>
        Whats up! This is the home page for my project on stellar nucleosynthesis. Here, you can find information about the process of element formation in stars, as well as related projects, a gallery of images, and contact information. Feel free to explore and learn more about this fascinating topic!
      </p>
    </section>
  );
}

export default Home;