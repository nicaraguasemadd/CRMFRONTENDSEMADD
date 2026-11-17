import {
    createContext,
    useContext,
    useState,
    useEffect
} from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {

    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);

    // Recuperar sesión al cargar la aplicación
    useEffect(() => {
        try {
            const storedToken = localStorage.getItem('token');
            const storedUser = localStorage.getItem('user');

            if (storedToken && storedUser) {
                setToken(storedToken);
                setUser(JSON.parse(storedUser));
            }
        } catch (error) {
            console.error('Error recuperando sesión:', error);
            localStorage.removeItem('token');
            localStorage.removeItem('user');
        } finally {
            setLoading(false);
        }
    }, []);

    // Iniciar sesión
    const login = async (email, password) => {

        const response = await fetch(
            'http://192.168.1.13:3000/api/login',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password
                })
            }
        );

        const data = await response.json();

        if (!response.ok) {
            throw new Error(
                data.message || 'Error al iniciar sesión'
            );
        }

        if (!data.token || !data.user) {
            throw new Error('La API no devolvió el token o el usuario');
        }

        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));

        setToken(data.token);
        setUser(data.user);

        return data;
    };

    // Cerrar sesión
    const logout = () => {

        localStorage.removeItem('token');
        localStorage.removeItem('user');

        setToken(null);
        setUser(null);
    };

    const value = {
        user,
        token,
        loading,
        isAuthenticated: Boolean(token && user),
        login,
        logout
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

// Hook personalizado
export function useAuth() {

    const context = useContext(AuthContext);

    if (!context) {
        throw new Error(
            'useAuth debe utilizarse dentro de AuthProvider'
        );
    }

    return context;
}
