
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext.jsx';
import '../../styles/Login.css';

function Login() {

    const { login, isAuthenticated, loading } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    if (loading) {
        return (
            <div className="login-loading">
                <div className="login-spinner"></div>
                <p>Verificando sesión...</p>
            </div>
        );
    }

    if (isAuthenticated) {
        return <Navigate to="/dashboard" replace />;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setError('');
            setSubmitting(true);

            await login(email.trim(), password);

            navigate('/dashboard', { replace: true });

        } catch (error) {
            setError(error.message || 'Error al iniciar sesión');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <main className="login-page">

            <section className="login-wrapper">

                {/* Panel izquierdo */}
                <div className="login-banner">

                    <div className="brand">
                        <div className="brand-icon">
                            <i className="bi bi-grid-1x2-fill"></i>
                        </div>
                        <span>CRM<span className="brand-highlight">PRO</span></span>
                    </div>

                    <div className="banner-content">

                        <span className="banner-tag">
                            PLATAFORMA DE GESTIÓN
                        </span>

                        <h1>
                            Gestiona tu negocio.
                            <span> Impulsa tus resultados.</span>
                        </h1>

                        <p>
                            Centraliza tus clientes, administra tus
                            operaciones y lleva tu negocio al siguiente nivel.
                        </p>

                        <div className="banner-features">
                            <div>
                                <i className="bi bi-check-circle-fill"></i>
                                Gestión de clientes
                            </div>

                            <div>
                                <i className="bi bi-check-circle-fill"></i>
                                Control de operaciones
                            </div>

                            <div>
                                <i className="bi bi-check-circle-fill"></i>
                                Información en tiempo real
                            </div>
                        </div>

                    </div>

                    <div className="banner-footer">
                        <span>© 2026 CRM PRO</span>
                        <span>Gestión inteligente de negocios</span>
                    </div>

                </div>

                {/* Panel derecho */}
                <div className="login-form-section">

                    <div className="login-form-container">

                        <div className="mobile-brand">
                            <div className="brand-icon">
                                <i className="bi bi-grid-1x2-fill"></i>
                            </div>
                            <span>CRM<span className="brand-highlight">PRO</span></span>
                        </div>

                        <div className="form-heading">
                            <span className="welcome-label">
                                BIENVENIDO DE NUEVO
                            </span>

                            <h2>Iniciar sesión</h2>

                            <p>
                                Ingresa tus credenciales para acceder
                                a tu cuenta.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit}>

                            {error && (
                                <div className="error-message">
                                    <i className="bi bi-exclamation-circle-fill"></i>
                                    <span>{error}</span>
                                </div>
                            )}

                            {/* Correo */}
                            <div className="form-group">

                                <label htmlFor="email">
                                    Correo electrónico
                                </label>

                                <div className="input-container">
                                    <i className="bi bi-envelope"></i>

                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="nombre@empresa.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        autoComplete="username"
                                        required
                                    />
                                </div>

                            </div>

                            {/* Contraseña */}
                            <div className="form-group">

                                <div className="password-label">
                                    <label htmlFor="password">
                                        Contraseña
                                    </label>
                                </div>

                                <div className="input-container">
                                    <i className="bi bi-lock"></i>

                                    <input
                                        id="password"
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder="Ingresa tu contraseña"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        autoComplete="current-password"
                                        required
                                    />

                                    <button
                                        type="button"
                                        className="toggle-password"
                                        onClick={() => setShowPassword(!showPassword)}
                                        aria-label={
                                            showPassword
                                                ? 'Ocultar contraseña'
                                                : 'Mostrar contraseña'
                                        }
                                    >
                                        <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
                                    </button>

                                </div>

                            </div>

                            {/* Botón */}
                            <button
                                type="submit"
                                className="login-button"
                                disabled={submitting}
                            >
                                {submitting ? (
                                    <>
                                        <span className="button-spinner"></span>
                                        Verificando...
                                    </>
                                ) : (
                                    <>
                                        Iniciar sesión
                                        <i className="bi bi-arrow-right"></i>
                                    </>
                                )}
                            </button>

                        </form>

                        <div className="login-security">
                            <i className="bi bi-shield-lock-fill"></i>
                            <span>Acceso seguro a tu plataforma</span>
                        </div>

                    </div>

                </div>

            </section>

        </main>
    );
}

export default Login;
