import { useRouteError } from "react-router";

const ErrorPage = () => {
    const err = useRouteError();
    
    return (
        <div>
            <h1>Opps!! Something is wrong</h1>
            <h2>{err.status}: {err.statusText}</h2>
        </div>
    )
}

export default ErrorPage;