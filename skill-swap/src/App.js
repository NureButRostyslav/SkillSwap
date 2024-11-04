import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <button>Log In</button>
          <button>Sign Up</button>
          <button>Get App</button>
        </nav>
      </header>
      <main>
        <div className="signup-form">
          <h1>Sign Up Page</h1>
          <form>
            <label>
              Enter Your Name:
              <input type="text" name="name" />
            </label>
            <label>
              Enter Your Surname:
              <input type="text" name="surname" />
            </label>
            <label>
              Enter Your Email (Login):
              <input type="email" name="email" />
            </label>
            <label>
              Enter Your Password:
              <input type="password" name="password" />
            </label>
            <button type="submit">Sign Up!</button>
          </form>
          <div className="social-login">
            <p>Or continue with:</p>
            <button>Google</button>
            <button>Facebook</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
