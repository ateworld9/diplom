import { Navigate, createBrowserRouter } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { RegistrationPage } from './pages/RegistrationPage';
import ErrorPage from './pages/ErrorPage';
import { Layout } from './components/Layout';
import { DashboardPage } from './pages/DashboardPage';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import { BalanceSheetPage } from './pages/BalanceSheetPage';
import { CashflowPage } from './pages/CashflowPage';

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
        path: '/apple-dashboard',
        element: (
            <ProtectedRoute>
                <Layout>
                    <DashboardPage />
                </Layout>
            </ProtectedRoute>
        ),
    },
    {
        path: '/apple-balance-sheet',
        element: (
            <ProtectedRoute>
                <Layout>
                    <BalanceSheetPage />
                </Layout>
            </ProtectedRoute>
        ),
    },
    {
        path: '/apple-cashflow',
        element: (
            <ProtectedRoute>
                <Layout>
                    <CashflowPage />
                </Layout>
            </ProtectedRoute>
        ),
    },
    {
        path: '*',
        element: <ErrorPage />,
    },
]);
