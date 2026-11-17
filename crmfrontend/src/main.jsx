import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from './Context/AuthContext';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import App from './App';

ReactDOM.createRoot(
    document.getElementById('root')
).render(
  <StrictMode>
        <BrowserRouter>
            <AuthProvider>
                <App />
            </AuthProvider>
        </BrowserRouter>
    </StrictMode>
);