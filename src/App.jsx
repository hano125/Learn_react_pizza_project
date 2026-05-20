import React from 'react'
import Pizza from './Componsnt/PizzaComponent'

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Fast React Pizza Co.</h1>
      </header>

      <main className="menu">
        <h2>Our Menu</h2>
        <p>Authentic Italian pizzas made with fresh ingredients.</p>

        <section>
          <Pizza />
        </section>
      </main>

      <footer className="footer">
        <p>Open daily — 11:00 AM to 11:00 PM</p>
      </footer>
    </div>
  )
}

export default App