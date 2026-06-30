import { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    setError('');

    if (!auth) {
      setError('Firebase config is missing.');
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (authError) {
      setError(authError.message);
    }
  };

  const handleRegister = async () => {
    setError('');

    if (!auth) {
      setError('Firebase config is missing.');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (authError) {
      setError(authError.message);
    }
  };

  return (
    <div className="page">
      <main className="login">
        <h1 className="login-title">Login</h1>
        <form className="login-form" onSubmit={handleLogin}>
          <label className="login-field">
            <span>Email</span>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </label>

          <label className="login-field">
            <span>Password</span>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </label>

          <button className="primary-btn" type="submit">
            Log in
          </button>

          <button className="login-switch" type="button" onClick={handleRegister}>
            Register
          </button>

          {error ? <p className="login-error">{error}</p> : null}
        </form>
      </main>
    </div>
  );
}
