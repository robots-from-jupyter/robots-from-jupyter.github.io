import { useStaticQuery, graphql } from "gatsby";

export const useRobotLabWorkshopSlidesURL = () => {
  const { file } = useStaticQuery(
    graphql`
      query RobotLabWorkshopSlides {
        file(relativePath: { eq: "RobotLab-Workshop_2019-01-16.pdf" }) {
          publicURL
        }
      }
    `
  );
  return file.publicURL;
};
