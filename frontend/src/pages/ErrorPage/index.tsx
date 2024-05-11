import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
    const error: any = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <h1>Упс!</h1>
            <p>Мы извиняемся, произошла непредвиденная ошибка.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}
