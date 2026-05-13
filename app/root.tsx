import {
    isRouteErrorResponse,
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "react-router";
import type { LinksFunction } from "react-router";
import stylesheet from "./app.css?url";

export const links: LinksFunction = () => [
    { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
    {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
    },
    { rel: "stylesheet", href: stylesheet },
];

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="fr" data-theme="sita">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta
                    name="description"
                    content="Salon International du Textile Africain - La vitrine de la mode et du textile africain"
                />
                <meta
                    name="keywords"
                    content="textile africain, mode africaine, SITA, salon textile, pagne, Faso Dan Fani, mode éthique"
                />
                <Meta />
                <Links />
            </head>
            <body>
                {children}
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}

export default function App() {
    return <Outlet />;
}

export function ErrorBoundary({ error }: { error: unknown }) {
    let message = "Oops!";
    let details = "Une erreur inattendue est survenue.";
    let stack: string | undefined;

    if (isRouteErrorResponse(error)) {
        message = error.status === 404 ? "404" : "Erreur";
        details =
            error.status === 404
                ? "La page demandée est introuvable."
                : error.statusText || details;
    } else if (import.meta.env.DEV && error instanceof Error) {
        details = error.message;
        stack = error.stack;
    }

    return (
        <main className="min-h-screen flex items-center justify-center bg-base-100">
            <div className="text-center p-8">
                <h1 className="text-6xl font-bold text-primary mb-4">{message}</h1>
                <p className="text-xl text-base-content/70 mb-8">{details}</p>
                {stack && (
                    <pre className="text-left bg-base-200 p-4 rounded-lg overflow-x-auto text-sm">
                        <code>{stack}</code>
                    </pre>
                )}
                <a href="/" className="btn btn-primary mt-4">
                    Retour à l'accueil
                </a>
            </div>
        </main>
    );
}
