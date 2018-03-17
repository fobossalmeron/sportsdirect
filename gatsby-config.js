exports.modifyWebpackConfig = ({config, stage}) => {
	if ([
		'develop',
		'develop-html',
		'build-html',
		'build-javascript'
	].includes(stage)) {
		// Remove svg from url-loader config
		config.loader(`url-loader`, {
			test: /\.(jpg|jpeg|png|gif|mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
			loader: `url`,
			query: {
				limit: 10000,
				name: `static/[name].[hash:8].[ext]`,
			},
		})
		config.loader('svg-react-loader', {
			test: /\.svg$/,
			loader: 'svg-react-loader',
		});
	}

	return config;
}

module.exports = {
  siteMetadata: {
    title: 'sports:direct',
  },
  plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: `gatsby-plugin-postcss-sass`,
			options: {
				precision: 8, // SASS default: 5
			},
		},
		{
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/favicon.png",
        injectHTML: true,
        icons: {
        android: true,
        appleIcon: true,
        appleStartup: true,
        coast: false,
        favicons: true,
        firefox: true,
        twitter: false,
        yandex: false,
        windows: false
        }
      }
    },
	]
};