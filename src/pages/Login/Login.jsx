import React, { useState } from 'react';
import './Login.css';
import logo from '../../assets/logo.png';
import netflix_spinner from '../../assets/netflix_spinner.gif';
import { login, signup } from '../../firebase';

const Login = () => {
  const [signState, setSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const user_auth = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (signState === "Sign In") {
        await login(email, password);
      } else {
        // ✅ Signup with displayName
        await signup(name, email, password);
      }
    } catch (err) {
      setError(err.message);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      {loading ? (
        <div className='login-spinner'>
          <img src={netflix_spinner} alt="Loading..." />
        </div>
      ) : (
        <div className='login'>
          <img src={logo} className='login-logo' alt="Netflix Logo" />
          <div className="login-form">
            <h1>{signState}</h1>
            {error && <p className="error-message">{error}</p>}
            <form>
              {signState === "Sign Up" && (
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              )}
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit" onClick={user_auth}>
                {signState}
              </button>
              <div className="form-help">
                <div className="remember">
                  <input type="checkbox" id="remember" />
                  <label htmlFor="remember">Remember Me</label>
                </div>
                <p>Need Help?</p>
              </div>
            </form>

            <div className="form-switch">
              {signState === "Sign In" ? (
                <p>
                  New to Netflix?{" "}
                  <span onClick={() => setSignState("Sign Up")}>Sign Up Now</span>
                </p>
              ) : (
                <p>
                  Already have an account?{" "}
                  <span onClick={() => setSignState("Sign In")}>Sign In Now</span>
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
