import { useState } from 'react'
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <header>
        <h1>Demo App</h1>
        <p>Built with Vite + React</p>
      </header>

      <main>
        <section className="card">
          <h2>Counter</h2>
          <p>Click the button to increment the count.</p>
          <button onClick={() => setCount(count + 1)}>Count: {count}</button>
          <button className="secondary" onClick={() => setCount(0)}>Reset</button>
        </section>

        <section className="card">
          <h2>About</h2>
          <p>This is a simple demo page scaffolded with Vite and React. Edit <code>src/App.jsx</code> to get started.</p>
        </section>
      </main>
    </div>
  )
}
