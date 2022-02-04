import React, {Component} from 'react'

class App extends Component{
  state = {
    cadastro:[
      {
        nome: "Dan",
        cor: "azul"
      },
      {
        nome: "Fernando",
        cor: "vermelho"
      },
      {
        nome: "Douglas",
        cor: "dourado"
      }
    ]
  }
  render(){
    return(
      <div>
        <header>
          <nav>
            <ul>
              <li>Olá</li>
            </ul>
          </nav>
        </header>
        <main>

        </main>
        <footer>

        </footer>
      </div>
    )
  }
}

export default App