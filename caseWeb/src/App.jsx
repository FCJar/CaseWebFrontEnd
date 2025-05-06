import"./App.css"

function App() {
  function returnbutton(){
    alert("Botão apertado com sucesso")
  }

  return (
    <div className="div-teste">
      oi
      <input></input>

      <div className="div=button">
        <button 
        className="button-teste"
          onClick = {() => alert("Botão apertado com sucesso")}
          >
            Botão teste
        </button>
      </div>
    </div>
  )
}

export default App
