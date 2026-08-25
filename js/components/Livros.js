
function Livros() {
  const estiloSecao = {
    padding: "10px 30px 30px 30px",
    textAlign: "center"
  };

  const estiloLista = {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    gap: "30px",
    flexWrap: "wrap"
  };

  const estiloImagem = {
    width: "clamp(120px, 40vw, 180px)",
    boxShadow: "2px 2px 6px rgba(0,0,0,0.3)"
  };

  return (
    <section id="livros" style={estiloSecao}>
      <h2>Livros</h2>
      <div className="livros-lista" style={estiloLista}>
        <img
          style={estiloImagem}
          src="../../img/livro1.jpg"
          alt="Learning Web Design"
        />
        <img
          style={estiloImagem}
          src="../../img/livro2.jpg"
          alt="Construindo sites com CSS e (X)HTML"
        />
        <img
          style={estiloImagem}
          src="../../img/livro3.jpg"
          alt="JavaScript - Guia do Programador"
        />
      </div>
    </section>
  );
}
