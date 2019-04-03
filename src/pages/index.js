import Helmet from "react-helmet";
import React from "react";
import Img from "gatsby-image";

import {graphql} from "gatsby";

import "../styles/index.scss";
import {useRobotLabWorkshopSlidesURL} from "../hooks/robotlab-workshop-slides";
import {useRoboConPresentationSlidesURL} from "../hooks/robocon-presentation-slides";
import {MdFileDownload} from "react-icons/md";
import YouTube from "react-youtube";

const IndexPage = ({ location, data }) => {
  const { file, site } = data;
  return (
    <>
      <Helmet title={site.siteMetadata.title} />
      <div className="jumbotron jumbotron-fluid bg-primary text-white d-flex flex-row justify-content-center align-content-center">
        <Img
          className=""
          fixed={file.childImageSharp.fixed}
          title="robots-from-jupyter.github.io"
        />
        <h1
          className="d-none d-md-flex display-4 px-4 flex-column justify-content-center"
          style={{ maxWidth: "50%" }}
        >
          robots-from-jupyter.github.io
        </h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="media mx-auto">
            <MdFileDownload
              className="d-none d-md-block text-primary mr-3"
              style={{ height: 200, width: 200 }}
            />
            <div className="media-body">
              <div className="list-group list-group-flush">
                <a
                  className="list-group-item list-group-item-action text-primary"
                  href="https://github.com/robots-from-jupyter/robotlab/releases"
                  title="RobotLab release downloads"
                >
                  RobotLab release downloads
                </a>
                <a
                  className="list-group-item list-group-item-action text-primary"
                  href="https://github.com/robots-from-jupyter/robotkernel/tree/master/docs/notebooks"
                  title="RobotKenel example notebooks"
                >
                  RobotKernel example notebooks
                </a>
                <a
                  className="list-group-item list-group-item-action text-primary"
                  href="https://robots-from-jupyter.github.io/robotkernel/"
                  title="RobotKernel documentation"
                >
                  RobotKernel documentation
                </a>
                <a
                  className="list-group-item list-group-item-action text-primary"
                  href={useRobotLabWorkshopSlidesURL()}
                  title="RoboCon 2019 Workshop Slides"
                >
                  RoboCon 2019 Workshop Slides
                </a>
                <a
                  className="list-group-item list-group-item-action text-primary"
                  href={useRoboConPresentationSlidesURL()}
                  title="RoboCon 2019 Presentation Slides"
                >
                  RoboCon 2019 Presentation Slides
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-none d-md-block container-fluid bg-primary mt-4 py-4">
        <div className="row" style={{ overflow: "hidden" }}>
          <div className="mx-auto" style={{ width: 640 }}>
              <YouTube videoId="uYGh9_c3b7s" />
          </div>
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
