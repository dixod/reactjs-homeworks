import { useContext, type FormEvent } from 'react';
import { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { LanguageContext } from '../context/LanguageContext';
import { auth } from '../firebase';
import { setUser } from '../store/authSlice';
import { useAppDispatch } from '../store/hooks';

export default function LoginPage() {
  const languageContext = useContext(LanguageContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  if (!languageContext) {
    return null;
  }

  const { t } = languageContext;

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');

    if (!auth) {
      setError(t('login.firebaseMissing'));
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      dispatch(setUser({ email: userCredential.user.email, uid: userCredential.user.uid }));
      navigate('/');
    } catch (authError) {
      setError(authError instanceof Error ? authError.message : t('login.loginFailed'));
    }
  };

  const handleRegister = async () => {
    setError('');

    if (!auth) {
      setError(t('login.firebaseMissing'));
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      dispatch(setUser({ email: userCredential.user.email, uid: userCredential.user.uid }));
      navigate('/');
    } catch (authError) {
      setError(authError instanceof Error ? authError.message : t('login.registerFailed'));
    }
  };

  return (
    <main className="login">
      <h1 className="login-title">{t('login.title')}</h1>
      <form className="login-form" onSubmit={handleLogin}>
        <label className="login-field">
          <span>{t('login.email')}</span>
          <input
            type="email"
            name="email"
            placeholder={t('login.emailPlaceholder')}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </label>

        <label className="login-field">
          <span>{t('login.password')}</span>
          <input
            type="password"
            name="password"
            placeholder={t('login.passwordPlaceholder')}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </label>

        <div className="login-actions">
          <button className="primary-btn" type="submit">
            {t('login.submit')}
          </button>

          <button className="secondary-btn" type="button" onClick={handleRegister}>
            {t('login.register')}
          </button>
        </div>

        {error ? <p className="login-error">{error}</p> : null}
      </form>
    </main>
  );
}
