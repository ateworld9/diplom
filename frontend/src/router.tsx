import { createBrowserRouter } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { RegistrationPage } from './pages/RegistrationPage';
import ErrorPage from './pages/ErrorPage';
import { Layout } from './components/Layout';
import { DashboardPage } from './pages/DashboardPage';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <div>Hello world!</div>,
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
            <Layout>
                <DashboardPage />
            </Layout>
        ),
    },
    {
        path: '*',
        element: <ErrorPage />,
    },
]);
