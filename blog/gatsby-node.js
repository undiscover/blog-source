/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = async ({ graphql, actions }) => {  
	const { createPage } = actions
	const result = await graphql(
	  `
		{
		  albums: allStrapiAlbum {
			edges {
			  node {
				strapiId
				slug
			  }
			}
		  }
		}
	  `
	)

	if (result.errors) {
	  throw result.errors
	}

	// Create albums pages.
	const albums = result.data.albums.edges
	albums.forEach((album, index) => {
		createPage({
			path: `/${album.node.slug}`,
			component: require.resolve("./src/components/album.js"),
			context: {
				id: album.node.strapiId,
			},
		})
	})
}