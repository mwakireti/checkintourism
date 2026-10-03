import { Link } from "react-router-dom";
import "./CookiePolicy.scss";

function CookiePolicy() {
  return (
    <main className="cookie-page">

      {/* Page Header */}
      <section className="cookie-page__header">
        <div className="container">

          <div className="cookie-page__breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Cookie Policy</span>
          </div>

          <div className="cookie-page__heading">
            <span className="cookie-page__eyebrow">
              COOKIE POLICY
            </span>

            <h1>Cookie Policy</h1>

            <p>
              Learn how Check In Travel &amp; Tours LTD uses cookies and
              similar tracking technologies on our website.
            </p>
          </div>

        </div>
      </section>

      {/* Cookie Content */}
      <section className="cookie-page__content">
        <div className="container">

          <article className="cookie-page__article">

            <h2>Our Use of Cookies and Web Beacons</h2>

            <p>
              You should be aware that non-personal information and data may
              be automatically collected through the standard operation of our
              Website’s internet servers or through the use of “cookies”. We
              use cookies and similar tracking technologies to track the
              activity on our Website and hold certain information.
            </p>

            <p>
              Cookies are files with a small amount of data which may include
              an anonymous unique identifier. Cookies are sent to your browser
              from a website and stored on your device.
            </p>

            <p>
              Tracking technologies also used are beacons, tags, and scripts
              to collect and track information and to improve and analyze our
              Service.
            </p>

            <p>
              You can instruct your browser to refuse all cookies or to
              indicate when a cookie is being sent. However, if you do not
              accept cookies, you may not be able to use some portions of our
              Service.
            </p>

            <h2>Examples of Cookies We May Use</h2>

            <ul>
              <li>
                <strong>Session Cookies.</strong> We use Session Cookies to
                operate our Website.
              </li>

              <li>
                <strong>Preference Cookies.</strong> We use Preference Cookies
                to remember your preferences and various settings.
              </li>

              <li>
                <strong>Security Cookies.</strong> We use Security Cookies for
                security purposes.
              </li>

              <li>
                <strong>Advertising Cookies.</strong> Advertising Cookies are
                used to serve you with advertisements that may be relevant to
                you and your interests.
              </li>
            </ul>

          </article>

        </div>
      </section>

    </main>
  );
}

export default CookiePolicy;
