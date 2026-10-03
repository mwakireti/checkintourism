import { Link } from "react-router-dom";
import "./NotFound.scss";

function NotFound() {
  return (
    <main className="not-found-page">
      {/* Page Header */}
      <section className="not-found-page__header">
        <div className="container">
          <div className="not-found-page__breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Page Not Found</span>
          </div>

          <div className="not-found-page__heading">
            <span className="not-found-page__eyebrow">
              PAGE NOT FOUND
            </span>

            <h1>Oops! This Page Couldn’t Be Found</h1>

            <p>
              The page you’re looking for may have been moved, renamed,
              or doesn’t exist.
            </p>
          </div>
        </div>
      </section>

      {/* Not Found Content */}
      <section className="not-found-page__content">
        <div className="container">
          <div className="not-found-page__inner">
            <span className="not-found-page__code">404</span>

            <h2>Let’s Get You Back on Track</h2>

            <p>
              Don’t worry, your journey doesn’t have to end here.
              Explore our website or discover one of our travel experiences.
            </p>

            <div className="not-found-page__actions">
              <Link to="/" className="button button--primary">
                Back to Home
              </Link>

              <Link to="/tours" className="button button--secondary">
                Explore Our Tours
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default NotFound;