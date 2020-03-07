module.exports = {
	siteMetadata: {
		title: `Undiscover`,
		description: `My favourite albums`,
		author: `@chielorenz`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: "gatsby-source-strapi",
			options: {
				apiURL: process.env.API_URL || "http://localhost:1337",
				contentTypes: [
					// List of the Content Types you want to be able to request from Gatsby.
					"album",
				],
				queryLimit: 1000,
			},
		},
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [
					`lato: 300,300i,400,400i,700,700i`,
				],
				display: 'swap'
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/logo.svg`, // This path is relative to the root of the site.
			},
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
}
