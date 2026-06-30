import { useState, type FormEvent } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { useAppDispatch } from '../store/hooks';
import { setUser } from '../store/authSlice';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');

    if (!auth) {
      setError('Firebase config is missing.');
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      dispatch(setUser({ email: userCredential.user.email, uid: userCredential.user.uid }));
      navigate('/');
    } catch (authError) {
      setError(authError instanceof Error ? authError.message : 'Failed to log in.');
    }
  };

  const handleRegister = async () => {
    setError('');

    if (!auth) {
      setError('Firebase config is missing.');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      dispatch(setUser({ email: userCredential.user.email, uid: userCredential.user.uid }));
      navigate('/');
    } catch (authError) {
      setError(authError instanceof Error ? authError.message : 'Failed to register.');
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
