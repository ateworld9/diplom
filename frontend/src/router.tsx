import { Navigate, createBrowserRouter } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { RegistrationPage } from './pages/RegistrationPage';
import ErrorPage from './pages/ErrorPage';
import { Layout } from './components/Layout';
import { DashboardPage } from './pages/DashboardPage';
import { useSelector } from 'react-redux';
import { RootState } from './store';

const ProtectedRoute = ({ children }) => {
    const isAuth = useSelector((state: RootState) => state.auth.isAuth);

    if (!isAuth) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

export const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginPage />,
    },
    {
        path: '/login',
        element: <LoginPage />,
    },
    {
        path: '/registration',
        element: <RegistrationPage />,
    },
    {
        path: '/dashboard',
        element: (
            <ProtectedRoute>
                <Layout>
                    <DashboardPage />
                </Layout>
            </ProtectedRoute>
        ),
    },
    {
        path: '*',
        element: <ErrorPage />,
    },
]);
