import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function SEO({ 
  title = "Electrified Engineering Ltd | Sustainable Power & Facilities Management",
  description = "Leading provider of sustainable power solutions and facilities management services across Nigeria and Sub-Saharan Africa. Solar installation, backup power, and comprehensive FM services.",
  keywords = "solar power Nigeria, facilities management, renewable energy, backup power systems, generator maintenance, sustainable energy solutions",
  image = "/logo.png",
  type = "website"
}) {
  const location = useLocation();
  const url = `https://electrifiedengineering.com${location.pathname}`;

  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords);

    // Open Graph tags
    updateMetaTag("og:title", title, "property");
    updateMetaTag("og:description", description, "property");
    updateMetaTag("og:image", image, "property");
    updateMetaTag("og:url", url, "property");
    updateMetaTag("og:type", type, "property");

    // Twitter Card tags
    updateMetaTag("twitter:card", "summary_large_image", "name");
    updateMetaTag("twitter:title", title, "name");
    updateMetaTag("twitter:description", description, "name");
    updateMetaTag("twitter:image", image, "name");
  }, [title, description, keywords, image, url, type]);

  const updateMetaTag = (name, content, attribute = "name") => {
    let element = document.querySelector(`meta[${attribute}="${name}"]`);
    if (!element) {
      element = document.createElement("meta");
      element.setAttribute(attribute, name);
      document.head.appendChild(element);
    }
    element.setAttribute("content", content);
  };

  return null;
}

