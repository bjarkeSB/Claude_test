import { useState } from 'react'
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)
  const [apiResponse, setApiResponse] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function callApi() {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/hello')
      const data = await res.json()
      setApiResponse(data)
    } catch (err) {
      setError('Failed to reach the backend.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container">
      <header>
        <h1>Demo App</h1>
        <p>Built with Vite + React + Express</p>
      </header>

      <main>
        <section className="card">
          <h2>Counter</h2>
          <p>Click the button to increment the count.</p>
          <button onClick={() => setCount(count + 1)}>Count: {count}</button>
          <button className="secondary" onClick={() => setCount(0)}>Reset</button>
        </section>

        <section className="card">
          <h2>API Test</h2>
          <p>Call the <code>GET /api/hello</code> endpoint.</p>
          <button onClick={callApi} disabled={loading}>
            {loading ? 'Loading...' : 'Call API'}
          </button>
          {error && <p className="error">{error}</p>}
          {apiResponse && (
            <pre>{JSON.stringify(apiResponse, null, 2)}</pre>
          )}
        </section>
      </main>
    </div>
  )
}
