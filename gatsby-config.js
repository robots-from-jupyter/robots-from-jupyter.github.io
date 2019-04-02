module.exports = {
  siteMetadata: {
    title: 'Robots From Jupyter',
  },
  pathPrefix: '/public/',
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/static`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Robots From Jupyter',
        short_name: 'RobotLab',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#f46524',
        display: 'standalone',
        icon: './src/static/icon.png',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
  ],
};
