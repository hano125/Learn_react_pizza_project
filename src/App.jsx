import React from 'react'
import Pizza from './Components/PizzaComponent'
import Menu from './Components/Menu'
import Footer from './Components/Footer'
import Header from './Components/header'

function App() {
  return (
    <div className="container">
    <Header />
      <main className="menu">
        <Menu />
        <section>
          <Pizza />
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App