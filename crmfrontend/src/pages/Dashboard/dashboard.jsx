import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';
import "../../styles/dashboar.css"

export default function Dashboard() {

    const { user, logout } = useAuth();
    const [menuOpen, setMenuOpen] = useState(false);

    const stats = [
        {
            title: 'Total clientes',
            value: '1,284',
            change: '+12.8%',
            icon: 'bi-people',
            color: 'purple'
        },
        {
            title: 'Ventas del mes',
            value: '$24,580',
            change: '+8.2%',
            icon: 'bi-currency-dollar',
            color: 'green'
        },
        {
            title: 'Oportunidades',
            value: '186',
            change: '+5.4%',
            icon: 'bi-briefcase',
            color: 'orange'
        },
        {
            title: 'Tareas pendientes',
            value: '24',
            change: '-2.5%',
            icon: 'bi-clipboard-check',
            color: 'blue'
        }
    ];

    const activities = [
        {
            name: 'María González',
            action: 'Nuevo cliente registrado',
            time: 'Hace 10 minutos',
            icon: 'bi-person-plus',
            color: 'purple'
        },
        {
            name: 'Carlos Rodríguez',
            action: 'Actualizó una oportunidad',
            time: 'Hace 35 minutos',
            icon: 'bi-briefcase',
            color: 'blue'
        },
        {
            name: 'Ana Martínez',
            action: 'Nueva venta registrada',
            time: 'Hace 1 hora',
            icon: 'bi-cart-check',
            color: 'green'
        },
        {
            name: 'José López',
            action: 'Completó una tarea',
            time: 'Hace 2 horas',
            icon: 'bi-check-circle',
            color: 'orange'
        }
    ];

    const transactions = [
        {
            customer: 'Distribuidora Central',
            email: 'central@empresa.com',
            date: '16 Nov 2026',
            amount: '$1,250.00',
            status: 'Completado'
        },
        {
            customer: 'Comercial del Norte',
            email: 'norte@empresa.com',
            date: '15 Nov 2026',
            amount: '$850.00',
            status: 'Pendiente'
        },
        {
            customer: 'Servicios Integrales',
            email: 'servicios@empresa.com',
            date: '14 Nov 2026',
            amount: '$2,100.00',
            status: 'Completado'
        },
        {
            customer: 'Tecnología Global',
            email: 'global@empresa.com',
            date: '13 Nov 2026',
            amount: '$560.00',
            status: 'Cancelado'
        }
    ];

    const closeMenu = () => setMenuOpen(false);

    return (
        <div className="crm-layout">

            {/* SIDEBAR */}
            <aside className={`crm-sidebar ${menuOpen ? 'sidebar-open' : ''}`}>

                <div className="crm-logo">
                    <div className="crm-logo-icon">
                        <i className="bi bi-grid-1x2-fill"></i>
                    </div>
                    <span>CRM<span>PRO</span></span>
                </div>

                <div className="sidebar-label">MENÚ PRINCIPAL</div>

                <nav className="sidebar-nav">

                    <NavLink to="/dashboard" className={({ isActive }) =>
                        isActive ? 'sidebar-link active' : 'sidebar-link'
                    } onClick={closeMenu}>
                        <i className="bi bi-grid"></i>
                        <span>Dashboard</span>
                    </NavLink>

                    <NavLink to="/usuarios" className={({ isActive }) =>
                        isActive ? 'sidebar-link active' : 'sidebar-link'
                    } onClick={closeMenu}>
                        <i className="bi bi-people"></i>
                        <span>Usuarios</span>
                    </NavLink>

                    <NavLink to="/clientes" className="sidebar-link" onClick={closeMenu}>
                        <i className="bi bi-person-vcard"></i>
                        <span>Clientes</span>
                    </NavLink>

                    <NavLink to="/ventas" className="sidebar-link" onClick={closeMenu}>
                        <i className="bi bi-cart3"></i>
                        <span>Ventas</span>
                    </NavLink>

                    <NavLink to="/oportunidades" className="sidebar-link" onClick={closeMenu}>
                        <i className="bi bi-briefcase"></i>
                        <span>Oportunidades</span>
                    </NavLink>

                    <NavLink to="/tareas" className="sidebar-link" onClick={closeMenu}>
                        <i className="bi bi-check2-square"></i>
                        <span>Tareas</span>
                    </NavLink>

                </nav>

                <div className="sidebar-label sidebar-label-bottom">
                    CONFIGURACIÓN
                </div>

                <nav className="sidebar-nav">

                    <NavLink to="/configuracion" className="sidebar-link" onClick={closeMenu}>
                        <i className="bi bi-gear"></i>
                        <span>Configuración</span>
                    </NavLink>

                </nav>

                <div className="sidebar-bottom">

                    <div className="sidebar-help">
                        <i className="bi bi-headset"></i>
                        <strong>¿Necesitas ayuda?</strong>
                        <p>Estamos aquí para ayudarte.</p>
                    </div>

                    <button className="sidebar-logout" onClick={logout}>
                        <i className="bi bi-box-arrow-left"></i>
                        Cerrar sesión
                    </button>

                </div>

            </aside>

            {menuOpen && (
                <div className="sidebar-overlay" onClick={closeMenu}></div>
            )}

            {/* CONTENIDO */}
            <main className="crm-main">

                {/* HEADER */}
                <header className="crm-header">

                    <div className="header-left">

                        <button
                            className="menu-toggle"
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label="Abrir menú"
                        >
                            <i className="bi bi-list"></i>
                        </button>

                        <div>
                            <span className="header-subtitle">PANEL DE CONTROL</span>
                            <h2>Dashboard</h2>
                        </div>

                    </div>

                    <div className="header-right">

                        <button className="header-icon" aria-label="Notificaciones">
                            <i className="bi bi-bell"></i>
                            <span className="notification-dot"></span>
                        </button>

                        <div className="header-divider"></div>

                        <div className="user-profile">
                            <div className="user-avatar">
                                {(user?.name || user?.email || 'U')
                                    .charAt(0).toUpperCase()}
                            </div>

                            <div className="user-info">
                                <strong>{user?.name || 'Usuario'}</strong>
                                <span>{user?.role || 'Administrador'}</span>
                            </div>

                            <i className="bi bi-chevron-down"></i>
                        </div>

                    </div>

                </header>

                {/* BODY */}
                <div className="crm-content">

                    {/* BIENVENIDA */}
                    <section className="welcome-section">
                        <div>
                            <h1>¡Hola, {user?.name || 'bienvenido'}! 👋</h1>
                            <p>Aquí tienes el resumen de tu negocio.</p>
                        </div>

                        <button className="date-button">
                            <i className="bi bi-calendar3"></i>
                            Noviembre 2026
                        </button>
                    </section>

                    {/* ESTADÍSTICAS */}
                    <section className="stats-grid">

                        {stats.map((stat, index) => (
                            <article className="stat-card" key={index}>

                                <div className={`stat-icon ${stat.color}`}>
                                    <i className={`bi ${stat.icon}`}></i>
                                </div>

                                <div className="stat-information">
                                    <span>{stat.title}</span>
                                    <h3>{stat.value}</h3>
                                </div>

                                <div className="stat-footer">
                                    <span className="stat-change">
                                        {stat.change}
                                    </span>
                                    <span>vs. mes anterior</span>
                                </div>

                            </article>
                        ))}

                    </section>

                    {/* GRÁFICO Y ACTIVIDAD */}
                    <section className="dashboard-grid">

                        <article className="dashboard-card sales-card">

                            <div className="card-heading">
                                <div>
                                    <h3>Resumen de ventas</h3>
                                    <p>Rendimiento de los últimos 7 meses</p>
                                </div>

                                <select defaultValue="2026">
                                    <option value="2026">2026</option>
                                    <option value="2025">2025</option>
                                </select>
                            </div>

                            <div className="sales-summary">
                                <h2>$24,580.00</h2>
                                <span><i className="bi bi-arrow-up-right"></i> 8.2%</span>
                            </div>

                            <div className="chart-container">

                                <div className="chart-y-axis">
                                    <span>$30k</span>
                                    <span>$20k</span>
                                    <span>$10k</span>
                                    <span>$0</span>
                                </div>

                                <div className="chart-area">

                                    <div className="chart-grid-lines">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>

                                    <div className="chart-bars">
                                        {[
                                            { month: 'May', height: 45 },
                                            { month: 'Jun', height: 65 },
                                            { month: 'Jul', height: 50 },
                                            { month: 'Ago', height: 80 },
                                            { month: 'Sep', height: 60 },
                                            { month: 'Oct', height: 90 },
                                            { month: 'Nov', height: 75 }
                                        ].map((item) => (
                                            <div className="chart-column" key={item.month}>
                                                <div
                                                    className="chart-bar"
                                                    style={{ height: `${item.height}%` }}
                                                ></div>
                                                <span>{item.month}</span>
                                            </div>
                                        ))}
                                    </div>

                                </div>

                            </div>

                        </article>

                        {/* ACTIVIDAD */}
                        <article className="dashboard-card activity-card">

                            <div className="card-heading">
                                <div>
                                    <h3>Actividad reciente</h3>
                                    <p>Últimos movimientos</p>
                                </div>

                                <button className="more-button">
                                    <i className="bi bi-three-dots"></i>
                                </button>
                            </div>

                            <div className="activity-list">

                                {activities.map((activity, index) => (
                                    <div className="activity-item" key={index}>

                                        <div className={`activity-icon ${activity.color}`}>
                                            <i className={`bi ${activity.icon}`}></i>
                                        </div>

                                        <div className="activity-info">
                                            <strong>{activity.name}</strong>
                                            <span>{activity.action}</span>
                                            <small>{activity.time}</small>
                                        </div>

                                    </div>
                                ))}

                            </div>

                            <button className="view-all-button">
                                Ver toda la actividad
                                <i className="bi bi-arrow-right"></i>
                            </button>

                        </article>

                    </section>

                    {/* TABLA */}
                    <section className="dashboard-card transactions-card">

                        <div className="card-heading">
                            <div>
                                <h3>Transacciones recientes</h3>
                                <p>Últimos registros de ventas</p>
                            </div>

                            <NavLink to="/ventas" className="view-all-button">
                                Ver todas
                                <i className="bi bi-arrow-right"></i>
                            </NavLink>
                        </div>

                        <div className="table-responsive">

                            <table className="crm-table">

                                <thead>
                                    <tr>
                                        <th>CLIENTE</th>
                                        <th>FECHA</th>
                                        <th>IMPORTE</th>
                                        <th>ESTADO</th>
                                    </tr>
                                </thead>

                                <tbody>

                                    {transactions.map((transaction, index) => (
                                        <tr key={index}>

                                            <td>
                                                <div className="transaction-customer">
                                                    <strong>{transaction.customer}</strong>
                                                    <span>{transaction.email}</span>
                                                </div>
                                            </td>

                                            <td>{transaction.date}</td>

                                            <td className="transaction-amount">
                                                {transaction.amount}
                                            </td>

                                            <td>
                                                <span className={`status-badge ${
                                                    transaction.status === 'Completado'
                                                        ? 'status-success'
                                                        : transaction.status === 'Pendiente'
                                                            ? 'status-pending'
                                                            : 'status-cancelled'
                                                }`}>
                                                    {transaction.status}
                                                </span>
                                            </td>

                                        </tr>
                                    ))}

                                </tbody>

                            </table>

                        </div>

                    </section>

                    <footer className="crm-footer">
                        <span>© 2026 CRM PRO. Todos los derechos reservados.</span>
                        <span>Desarrollado para una gestión inteligente.</span>
                    </footer>

                </div>

            </main>

        </div>
    );
}
