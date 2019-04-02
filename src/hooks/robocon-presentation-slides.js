import { useStaticQuery, graphql } from "gatsby";

export const useRoboConPresentationSlidesURL = () => {
  const { file } = useStaticQuery(
    graphql`
      query RoboConPresentationSlides {
        file(relativePath: { eq: "RoboCon-Presentation_2019-01-17.pdf" }) {
          publicURL
        }
      }
    `
  );
  return file.publicURL;
};
