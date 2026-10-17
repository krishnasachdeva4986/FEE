import './App.css'

function App() {
  function handleSubmit(event) {
    event.preventDefault()
    alert('You clicked the Login button!')
  }

  return (
    <main className="login-page">
      <section className="login-card">
        <h1>Login</h1>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" required />

          <label htmlFor="password">Password</label>
          <input id="password" type="password" required />

          <button className="submit-button" type="submit">
            Login
          </button>
        </form>
      </section>
    </main>
  )
}

export default App  
