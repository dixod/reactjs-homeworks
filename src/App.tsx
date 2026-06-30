import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthListener from './components/AuthListener';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';
import CompanyPage from './pages/CompanyPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import MenuPage from './pages/MenuPage';
import OrderPage from './pages/OrderPage';

export default function App() {
  return (
    <BrowserRouter>
      <AuthListener />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/company" element={<CompanyPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/order"
            element={
              <ProtectedRoute>
                <OrderPage />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
