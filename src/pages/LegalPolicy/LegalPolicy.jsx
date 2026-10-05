import { Link } from "react-router-dom";
import "./LegalPolicy.scss";
import SEO from "../../components/common/SEO/SEO";


function LegalPolicy() {
  return (
    <>
      <SEO
  title="Privacy Policy"
  description="Read the Privacy Policy for Check In Travel & Tours Ltd and learn how personal information is collected, used and protected."
  path="/legal-policy"
/>
    <section className="legal-policy-page">

      {/* PAGE HEADER */}
      <header className="legal-policy-page__header">
        <div className="container">
          <div className="legal-policy-page__header-content">

            <div className="legal-policy-page__breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>Legal Policy</span>
            </div>

            <span className="legal-policy-page__eyebrow">
              LEGAL POLICY
            </span>

            <h1 className="legal-policy-page__title">
              Privacy Policy
            </h1>

            <p className="legal-policy-page__subtitle">
              Please read this policy to understand how we collect,
              use and protect the information you provide to us.
            </p>

          </div>
        </div>
      </header>

      {/* POLICY CONTENT */}
      <main className="legal-policy-page__content">
        <div className="container">

          <article className="legal-policy-page__article">

            <p>
              Check In Travel &amp; Tours LTD (the “We”, “Us” or
              “Our”) is committed to protecting your privacy and
              helping you understand how we use the information that
              you provide to us.
            </p>

            <p>
              This Privacy Policy sets out how we obtain and use
              the <strong>Personal Information</strong> which you
              provide us. Personal Information may include your
              name, address, telephone number, email address, date
              of birth, and other data which may directly or
              indirectly identify you.
            </p>

            <p>
              As the legal environment, technology, and operations
              change, it may become necessary for us to make changes
              to this Privacy Policy. Any such changes will be
              posted on the Website.
            </p>


            {/* HOW WE GATHER INFORMATION */}
            <section className="legal-policy-page__section">
              <h2>How We Gather Information</h2>

              <p>
                We may gather Personal Information through the
                Website in several different ways:
              </p>

              <ul>
                <li>
                  Through our Website sign-up or registration process;
                </li>

                <li>
                  Through your orders of products and/or services;
                </li>

                <li>
                  Through providing support to our registered account
                  holders, customers and potential customers;
                </li>

                <li>
                  Through your payment to third-party payment
                  processors which we use.
                </li>
              </ul>
            </section>


            {/* OTHER INFORMATION */}
            <section className="legal-policy-page__section">
              <h2>Other Information</h2>

              <p>
                We also gather other information (“Other Information”),
                which cannot identify you unless it is used in
                conjunction with actual Personal Information.
              </p>

              <p>
                For example, we may collect your computer’s Internet
                Protocol address (i.e. IP address), browser type,
                browser version, the pages of our Website that you
                visit, the time and date of your visit, the time spent
                on those pages, unique device identifiers and other
                diagnostic data.
              </p>

              <p>
                We may receive and store certain information whenever
                you visit the Website. We may use your IP address to
                help diagnose problems with our server and to
                administer the Website, and to help identify you.
              </p>

              <p>
                Your IP address may also be used to gather broad
                demographic information, and for other purposes.
                Such Other Information cannot generally be used by us
                to identify you, and as such is not considered
                Personal Information.
              </p>

              <p>
                We reserve the right to perform statistical analyses
                of user behavior and characteristics in order to
                measure interest in and use of the various areas of
                the Website and to inform advertisers of such
                information as well as the number of users who have
                been exposed to or clicked on their advertising
                banners.
              </p>
            </section>


            {/* USE OF PERSONAL INFORMATION */}
            <section className="legal-policy-page__section">
              <h2>Use of Personal Information</h2>

              <p>
                We may use the collected Personal Information for
                various purposes including:
              </p>

              <ul>
                <li>
                  To provide and maintain our Website and to provide
                  you with our goods and/or services.
                </li>

                <li>
                  To notify you about changes to our services.
                </li>

                <li>
                  To allow you to participate in interactive features
                  of our services when you choose to do so.
                </li>

                <li>
                  To provide customer support.
                </li>

                <li>
                  To gather analysis or valuable information so that
                  we can improve our services.
                </li>

                <li>
                  To monitor the usage of our Website and to track
                  our customer’s ordering of products or services.
                </li>

                <li>
                  To detect, prevent and address technical issues.
                </li>

                <li>
                  To provide you with news, special offers and
                  general information about other goods, services
                  and events which we offer that are similar to those
                  that you have already purchased or enquired about,
                  unless you have opted not to receive such
                  information.
                </li>
              </ul>
            </section>


            {/* SERVICE PROVIDERS */}
            <section className="legal-policy-page__section">
              <h2>Service Providers</h2>

              <p>
                We may employ third-party companies and individuals
                to facilitate our Website and business (“Service
                Providers”), to provide services on our behalf, to
                perform services or to assist us in analyzing how
                our Website is used.
              </p>

              <p>
                We also may employ agents to fulfill functions on
                our behalf, such as providing marketing assistance,
                analyzing data, preparing and maintaining site
                content, processing payments and providing customer
                service.
              </p>

              <p>
                These agents have access to user and customer
                information as required to help them perform their
                functions on our behalf, but they are not allowed to
                use that information for any other purpose.
              </p>
            </section>


            {/* ANALYTICS */}
            <section className="legal-policy-page__section">
              <h2>Analytics</h2>

              <p>
                We may use third-party Service Providers to monitor
                and analyze the use of our Website, such as Google
                Analytics.
              </p>

              <p>
                Google Analytics is a web analytics service offered
                by Google that tracks and reports website traffic.
                Google uses the data collected to track and monitor
                the use of the Website. This data may be shared with
                other Google services.
              </p>

              <p>
                You can opt out of having your activity on the
                Website made available to Google Analytics by
                installing the Google Analytics opt-out browser
                add-on.
              </p>
            </section>


            {/* ADVERTISING */}
            <section className="legal-policy-page__section">
              <h2>Advertising</h2>

              <p>
                We may use third-party Service Providers to show
                advertisements to you to help support and maintain
                our Service.
              </p>

              <p>
                Google, as a third-party vendor, may use cookies to
                serve ads on our Website. Google’s use of the
                DoubleClick cookie enables it and its partners to
                serve ads to our users based on their visit to our
                Website or other websites on the Internet.
              </p>
            </section>


            {/* BEHAVIORAL REMARKETING */}
            <section className="legal-policy-page__section">
              <h2>Behavioral Remarketing</h2>

              <p>
                We may use remarketing services to advertise on
                third-party websites to you after you have visited
                our Service.
              </p>

              <p>
                We and our third-party vendors may use cookies to
                inform, optimize and serve ads based on your past
                visits to our Service.
              </p>

              <p>
                Google AdWords remarketing service is provided by
                Google Inc. You may opt out of Google Analytics for
                Display Advertising and customize the Google Display
                Network ads through Google’s advertising settings.
              </p>
            </section>


            {/* FACEBOOK */}
            <section className="legal-policy-page__section">
              <h2>Facebook</h2>

              <p>
                We may use Facebook’s remarketing service which is
                provided by Facebook Inc.
              </p>

              <ul>
                <li>
                  You can learn more about interest-based advertising
                  from Facebook through Facebook's advertising help
                  resources.
                </li>

                <li>
                  You may also follow Facebook's instructions for
                  opting out of interest-based advertising.
                </li>
              </ul>

              <p>
                Facebook adheres to the Self-Regulatory Principles
                for Online Behavioral Advertising established by the
                Digital Advertising Alliance.
              </p>
            </section>


            {/* AGE OF MAJORITY */}
            <section className="legal-policy-page__section">
              <h2>Users Must Be Age of Majority</h2>

              <p>
                Persons under the age of majority in their
                jurisdiction must ask their parents or legal
                guardians for permission before sending any
                information about themselves to us, or via the
                Website or Website payment processors.
              </p>
            </section>


            {/* MARKETING */}
            <section className="legal-policy-page__section">
              <h2>Use of Personal Information for Marketing</h2>

              <p>
                We may use your Personal Information to contact you
                with newsletters, marketing or promotional materials
                and other information that may be of interest to you.
              </p>

              <p>
                You may opt out of receiving any, or all, of these
                communications from us by following the unsubscribe
                link or instructions provided in any email we send.
              </p>

              <p>
                If you do not wish to receive notification of special
                offers or news and updates to our Website, please
                contact us.
              </p>
            </section>


            {/* COOKIES */}
            <section className="legal-policy-page__section">
              <h2>Our Use of Cookies and Web Beacons</h2>

              <p>
                You should be aware that non-personal information and
                data may be automatically collected through the
                standard operation of our Website’s internet servers
                or through the use of “cookies”.
              </p>

              <p>
                We use cookies and similar tracking technologies to
                track activity on our Website and hold certain
                information.
              </p>

              <p>
                Cookies are files with a small amount of data which
                may include an anonymous unique identifier. Cookies
                are sent to your browser from a website and stored
                on your device.
              </p>

              <p>
                Tracking technologies also used are beacons, tags and
                scripts to collect and track information and to
                improve and analyze our Service.
              </p>

              <p>
                You can instruct your browser to refuse all cookies
                or to indicate when a cookie is being sent. However,
                if you do not accept cookies, you may not be able to
                use some portions of our Service.
              </p>
            </section>


            {/* COOKIE TYPES */}
            <section className="legal-policy-page__section">
              <h2>Examples of Cookies We May Use</h2>

              <ul>
                <li>
                  <strong>Session Cookies.</strong> We use Session
                  Cookies to operate our Website.
                </li>

                <li>
                  <strong>Preference Cookies.</strong> We use
                  Preference Cookies to remember your preferences
                  and various settings.
                </li>

                <li>
                  <strong>Security Cookies.</strong> We use Security
                  Cookies for security purposes.
                </li>

                <li>
                  <strong>Advertising Cookies.</strong> Advertising
                  Cookies are used to serve you with advertisements
                  that may be relevant to you and your interests.
                </li>
              </ul>
            </section>


            {/* LOG FILES */}
            <section className="legal-policy-page__section">
              <h2>Log Files</h2>

              <p>
                As with most other websites, we collect and use the
                data contained in log files.
              </p>

              <p>
                The information in the log files may include your IP
                address, your ISP, the browser you used to visit our
                Website, the time you visited our Website and which
                pages you visited throughout our Website.
              </p>
            </section>


            {/* TRANSFER */}
            <section className="legal-policy-page__section">
              <h2>Transfer of Customer Information</h2>

              <p>
                Customer information is a valuable business asset.
                If for any reason we transfer or divest ourselves of
                our business assets, customer information may be
                transferred as one of these business assets.
              </p>

              <p>
                We will provide notice before your Personal
                Information is transferred and becomes subject to a
                different privacy policy.
              </p>
            </section>


            {/* REQUIRED DISCLOSURE */}
            <section className="legal-policy-page__section">
              <h2>Release of Information When Required</h2>

              <p>
                Under certain circumstances, we may be required to
                disclose your Personal Data if required to do so by
                law or in response to valid requests by public
                authorities, such as a court or government agency.
              </p>

              <p>
                We may also release such information if we feel it
                is necessary to protect our rights or the rights of
                our customers, affiliates, partners or any other
                party, and for purposes of protection from fraud and
                credit risk.
              </p>

              <p>
                We may disclose your Personal Information in the good
                faith belief that such action is necessary:
              </p>

              <ul>
                <li>To comply with a legal obligation.</li>
                <li>To protect and defend our rights or property.</li>
                <li>
                  To prevent or investigate possible wrongdoing in
                  connection with our service.
                </li>
                <li>
                  To protect the personal safety of users of our
                  service or the public.
                </li>
                <li>To protect against legal liability.</li>
              </ul>
            </section>


            {/* EXTERNAL LINKS */}
            <section className="legal-policy-page__section">
              <h2>External Links</h2>

              <p>
                The Website may contain links or references to other
                websites to which this Privacy Policy does not apply.
              </p>

              <p>
                These sites are not owned or controlled by us and we
                are not responsible for the collection, use and
                disclosure of personal information or the privacy
                practices of other organizations or other websites
                to which our site may refer visitors or provide
                links.
              </p>

              <p>
                When submitting Personal Information on such other
                websites, we encourage you to read the privacy policy
                of those sites.
              </p>
            </section>


            {/* CHILDREN */}
            <section className="legal-policy-page__section">
              <h2>Children’s Privacy</h2>

              <p>
                Our Website does not address anyone under the age of
                18 (“Children”). We do not knowingly collect
                personally identifiable information from anyone under
                the age of 18.
              </p>

              <p>
                If you are a parent or guardian and you are aware that
                your child has provided us with Personal Information,
                please contact us.
              </p>

              <p>
                If we become aware that we have collected Personal
                Information from children without verification of
                parental consent, we take steps to remove that
                information from our servers.
              </p>
            </section>


            {/* CONSENT */}
            <section className="legal-policy-page__section">
              <h2>Consent</h2>

              <p>
                Consent to the collection, use and disclosure of
                Personal Information may be given in various ways.
                Consent can be expressed, for example orally,
                electronically or on a form you may submit, or
                implied in certain circumstances.
              </p>

              <p>
                Generally, by providing us with Personal Information,
                we will assume that you consent to our collection,
                use and disclosure of such information for the
                purposes identified or described in this Privacy
                Policy, if applicable, or as otherwise described at
                the time of collection.
              </p>

              <p>
                You may withdraw your consent to our collection, use
                and disclosure of your Personal Information at any
                time, subject to contractual and legal restrictions
                and reasonable notice.
              </p>

              <p>
                Please note that if you withdraw your consent to
                certain uses of your Personal Information, we may no
                longer be able to provide certain of our services.
              </p>

              <p>
                We do not collect, use or disclose your Personal
                Information other than as described in this Privacy
                Policy without your consent, unless permitted or
                required by law.
              </p>
            </section>


            {/* RETENTION */}
            <section className="legal-policy-page__section">
              <h2>Retention of Data</h2>

              <p>
                We will retain your Personal Information (also
                referred to as “Personal Data”) only for as long as
                is necessary for the purposes set out in this Privacy
                Policy.
              </p>

              <p>
                We will retain and use your Personal Data to the
                extent necessary to comply with our legal obligations,
                resolve disputes and enforce our legal agreements and
                policies.
              </p>

              <p>
                We may also retain Other Information for internal
                analysis purposes. Other Information is generally
                retained for a shorter period of time, except when
                this data is used to strengthen the security or to
                improve the functionality of our Service, or when we
                are legally obligated to retain it for longer periods.
              </p>
            </section>


            {/* CHANGES */}
            <section className="legal-policy-page__section">
              <h2>Changes to This Privacy Policy</h2>

              <p>
                We may update our Privacy Policy from time to time.
                We will notify you of any changes by posting the new
                Privacy Policy on this page.
              </p>

              <p>
                Where appropriate, we may also notify you via email
                and/or a prominent notice on our service prior to the
                change becoming effective.
              </p>

              <p>
                You are advised to review this Privacy Policy
                periodically for any changes. Changes to this Privacy
                Policy are effective when they are posted on this
                page.
              </p>
            </section>

          </article>

        </div>
      </main>

      </section>
      </>
  );
}

export default LegalPolicy;