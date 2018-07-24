import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { withPrefix } from "gatsby-link";
import Nav from "../components/Nav";
import "../assets/styles/index.scss";
import ogImage from "../og_image.jpg";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="sports:direct"
      meta={[
        { name: "description", content: "sports:direct is" },
        { name: "keywords", content: "sample, something" },
        { name: "og:url", content: "gosportsdirect.com" },
        { name: "og:site_name", content: "design:success" },
        { name: "og:type", content: "website" },
        { name: "og:title", content: "sports:direct" },
        { name: "og:description", content: "sports:direct is" },
        { name: "og:image", content: ogImage },
        { name: "og:locale", content: "en_US" }
      ]}
    />
    <Nav />
    <div>{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
