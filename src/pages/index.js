import Helmet from "react-helmet";
import React from "react";
import Img from "gatsby-image";

import { graphql } from "gatsby";

import "../styles/index.scss";
import { useRobotLabWorkshopSlidesURL } from "../hooks/robotlab-workshop-slides";
import {useRoboConPresentationSlidesURL} from "../hooks/robocon-presentation-slides";
import {MdArchive, MdLink, MdPictureAsPdf} from "react-icons/md";

const IndexPage = ({ location, data }) => {
  const { file, site } = data;
  return (
    <>
      <Helmet title={site.siteMetadata.title} />
      <div className="jumbotron jumbotron-fluid bg-primary text-white d-flex flex-row justify-content-center align-content-center">
        <Img className="px-4" fixed={file.childImageSharp.fixed}
        title="robots-from-jupyter.github.io"/>
        <h1 className="d-none d-md-flex display-4 px-4 flex-column justify-content-center" style={{ maxWidth: '50%'}}>robots-from-jupyter.github.io</h1>
      </div>
      <div
        className="d-flex flex-column align-items-center justify-content-center"
      >
        <div className="text-primary px-4">
          <h2 className="text-primary mb-4">Deliverables</h2>
        <h3>
          <span className="badge badge-primary mr-4">16.1.2019</span>
          <a href={useRobotLabWorkshopSlidesURL()}>Workshop <MdPictureAsPdf /></a>
        </h3>
          <div className="list-group list-group-flush">
          <a
            href="https://github.com/robots-from-jupyter/robotlab/releases
"
          className="list-group-item list-group-item-action text-primary">
            RobotLab installer <MdLink />
          </a>

            <a href="https://github.com/robots-from-jupyter/robotkernel/archive/master.zip" className="list-group-item list-group-item-action text-primary">
              RobotKernel notebooks <MdArchive />
            </a>
        </div>
        <h3>
          <span className="badge badge-primary mr-4">17.1.2019</span>
          <a href={useRoboConPresentationSlidesURL()}>
            Presentation <MdPictureAsPdf />
          </a>
        </h3>
        </div>
      </div>
    </>
  );
};

export default IndexPage;

export const query = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        title
      }
    }
    file(relativePath: { eq: "logo.png" }) {
      publicURL
      childImageSharp {
        fixed(width: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
