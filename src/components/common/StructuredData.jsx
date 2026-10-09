import { Fragment } from "react";

const SITE_URL = "https://checkintourism.com";
const SITE_NAME = "Check In Travel & Tours Ltd";

const structuredData = {
"@context": "https://schema.org",
"@graph": [
{
"@type": "TravelAgency",
"@id": `${SITE_URL}/#organization`,
name: SITE_NAME,
url: SITE_URL,
description:
"Check In Travel & Tours Ltd provides travel planning, flight bookings, hotel reservations, tour packages, visa assistance, car rentals and activity bookings.",
email: "[info@checkintourism.com](mailto:info@checkintourism.com)",
areaServed: [
{
"@type": "Country",
name: "Kenya",
},
{
"@type": "Country",
name: "Tanzania",
},
{
"@type": "Country",
name: "Uganda",
},
{
"@type": "Country",
name: "Rwanda",
},
{
"@type": "Country",
name: "United Arab Emirates",
},
],
contactPoint: {
"@type": "ContactPoint",
contactType: "sales",
email: "[sales@checkintourism.com](mailto:sales@checkintourism.com)",
},
},
{
"@type": "WebSite",
"@id": `${SITE_URL}/#website`,
url: SITE_URL,
name: SITE_NAME,
publisher: {
"@id": `${SITE_URL}/#organization`,
},
inLanguage: "en",
},
],
};

function StructuredData() {
return ( <script type="application/ld+json">
{JSON.stringify(structuredData)} </script>
);
}

export default StructuredData;
