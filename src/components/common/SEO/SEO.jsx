import { useEffect } from "react";

const SITE_NAME = "Check In Travel & Tours Ltd";
const SITE_URL = "https://checkintourism.com";

function SEO({
  title,
  description,
  path = "/",
  image = "/images/og-image.jpg",
  noIndex = false,
  noCanonical = false,
}) {
  useEffect(() => {
    const fullTitle = title
      ? `${title} | ${SITE_NAME}`
      : SITE_NAME;

    const canonicalUrl = `${SITE_URL}${path}`;

    document.title = fullTitle;

    // Description
    let descriptionTag = document.querySelector(
      'meta[name="description"]'
    );

    if (!descriptionTag) {
      descriptionTag = document.createElement("meta");
      descriptionTag.setAttribute("name", "description");
      document.head.appendChild(descriptionTag);
    }

    descriptionTag.setAttribute(
      "content",
      description || ""
    );

    // Robots
    let robotsTag = document.querySelector(
      'meta[name="robots"]'
    );

    if (!robotsTag) {
      robotsTag = document.createElement("meta");
      robotsTag.setAttribute("name", "robots");
      document.head.appendChild(robotsTag);
    }

    robotsTag.setAttribute(
      "content",
      noIndex ? "noindex, nofollow" : "index, follow"
    );

    // Canonical
    let canonicalTag = document.querySelector(
      'link[rel="canonical"]'
    );

    if (noCanonical) {
      if (canonicalTag) {
        canonicalTag.remove();
      }
    } else {
      if (!canonicalTag) {
        canonicalTag = document.createElement("link");
        canonicalTag.setAttribute("rel", "canonical");
        document.head.appendChild(canonicalTag);
      }

      canonicalTag.setAttribute(
        "href",
        canonicalUrl
      );
    }

    // Open Graph title
    setMetaProperty(
      "og:title",
      fullTitle
    );

    // Open Graph description
    setMetaProperty(
      "og:description",
      description || ""
    );

    // Open Graph URL
    if (noCanonical) {
      const ogUrlTag = document.querySelector(
        'meta[property="og:url"]'
      );

      if (ogUrlTag) {
        ogUrlTag.remove();
      }
    } else {
      setMetaProperty("og:url", canonicalUrl);
    }

    // Open Graph image
    setMetaProperty(
      "og:image",
      `${SITE_URL}${image}`
    );

    // Twitter title
    setMetaName(
      "twitter:title",
      fullTitle
    );

    // Twitter description
    setMetaName(
      "twitter:description",
      description || ""
    );

    // Twitter image
    setMetaName(
      "twitter:image",
      `${SITE_URL}${image}`
    );
  }, [
    title,
    description,
    path,
    image,
    noIndex,
    noCanonical
  ]);

  return null;
}

function setMetaProperty(property, content) {
  let tag = document.querySelector(
    `meta[property="${property}"]`
  );

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("property", property);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
}

function setMetaName(name, content) {
  let tag = document.querySelector(
    `meta[name="${name}"]`
  );

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
}

export default SEO;