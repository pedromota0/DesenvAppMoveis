import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "0",
      valorAnterior: null,
      operador: null,
      aguardandoNovoValor: false,
    };
  }

  clicarNumero = (numero) => {
    const { display, aguardandoNovoValor } = this.state;

    if (aguardandoNovoValor) {
      this.setState({ display: String(numero), aguardandoNovoValor: false });
    } else {
      this.setState({
        display: display === "0" ? String(numero) : display + numero,
      });
    }
  };

  clicarOperador = (operador) => {
    const { display, valorAnterior } = this.state;
    const valorAtual = parseFloat(display);

    if (valorAnterior === null) {
      this.setState({
        valorAnterior: valorAtual,
        operador,
        aguardandoNovoValor: true,
      });
    } else {
      const resultado = this.calcular(valorAnterior, valorAtual, this.state.operador);
      this.setState({
        display: String(resultado),
        valorAnterior: resultado,
        operador,
        aguardandoNovoValor: true,
      });
    }
  };

  calcular = (a, b, operador) => {
    switch (operador) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        return b === 0 ? "Erro" : a / b;
      default:
        return b;
    }
  };

  clicarIgual = () => {
    const { display, valorAnterior, operador } = this.state;

    if (operador === null || valorAnterior === null) return;

    const valorAtual = parseFloat(display);
    const resultado = this.calcular(valorAnterior, valorAtual, operador);

    this.setState({
      display: String(resultado),
      valorAnterior: null,
      operador: null,
      aguardandoNovoValor: true,
    });
  };

  clicarLimpar = () => {
    this.setState({
      display: "0",
      valorAnterior: null,
      operador: null,
      aguardandoNovoValor: false,
    });
  };

  render() {
    const botoes = [
      ["7", "8", "9", "*"],
      ["4", "5", "6", "/"],
      ["1", "2", "3", "-"],
      ["C", "0", "=", "+"],
    ];

    return (
      <div style={styles.container}>
        <div style={styles.calculadora}>
          <div style={styles.display}>{this.state.display}</div>
          <div style={styles.grade}>
            {botoes.flat().map((botao) => (
              <button
                key={botao}
                style={{ ...styles.botao, ...getCorBotao(botao) }}
                onClick={() => {
                  if (botao === "C") this.clicarLimpar();
                  else if (botao === "=") this.clicarIgual();
                  else if (["+", "-", "*", "/"].includes(botao))
                    this.clicarOperador(botao);
                  else this.clicarNumero(botao);
                }}
              >
                {botao}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

function getCorBotao(botao) {
  if (botao === "C") return { background: "#e74c3c", color: "#fff" };
  if (botao === "=") return { background: "#2ecc71", color: "#fff" };
  if (["+", "-", "*", "/"].includes(botao))
    return { background: "#f39c12", color: "#fff" };
  return { background: "#34495e", color: "#fff" };
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    background: "#6c5ce7",
  },
  calculadora: {
    width: 280,
    background: "#2d2d3a",
    padding: 12,
    borderRadius: 12,
    boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
  },
  display: {
    background: "#1c1c26",
    color: "#fff",
    fontSize: 32,
    textAlign: "right",
    padding: "16px 12px",
    marginBottom: 10,
    borderRadius: 6,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  grade: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 6,
  },
  botao: {
    padding: "18px 0",
    fontSize: 20,
    border: "none",
    borderRadius: 6,
    cursor: "pointer",
  },
};

export default App;
