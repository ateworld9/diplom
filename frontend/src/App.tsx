import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { CssBaseline } from '@mui/material';

import { store } from './store/index.ts';
import { router } from './router.tsx';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
    return (
        <>
            <CssBaseline />
            <Provider store={store}>
                <RouterProvider router={router} />
            </Provider>
        </>
    );
}

export default App;
