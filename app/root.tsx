import {useCatch, Link, Links,LiveReload,Meta,Outlet,Scripts,ScrollRestoration} from "remix";

export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}

// Here is the blueprint of our document
// It looks like our typical HTML but with a few extra tags
// I will discuss in another blog post those Components coming from the remix package
function Document({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

// Layout is a wrapper component that provides a consistent layout for all pages.
function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <main>
      <header>
        <ul>
          <li>
            <Link to="/pokemons">Pokemons</Link><br></br>
          </li>
          <li>
            <Link to="/posts">Posts</Link><br></br>
          </li>
          <li>
            <Link to="/pain">Pain</Link>
          </li>
        </ul>
      </header>

      {children}
    </main>
  );
}

export function CatchBoundary() {
  let caught = useCatch();

  let message;
  switch (caught.status) {
    case 404:
      message = <p>This is a custom error message for 404 pages</p>
      break;
    // You can customize the behavior for other status codes
    default:
      throw new Error(caught.data || caught.statusText);
  }

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <Layout>
        <h1>
          {caught.status}: {caught.statusText}
        </h1>
        {message}
      </Layout>
    </Document>
  );
}
