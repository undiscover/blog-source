import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

import "../css/albums.css"

const Albums = () => (
	<ul className="albums">
		<StaticQuery
			query={graphql`
				query {
					allStrapiAlbum {
						edges {
							node {
								strapiId
								name
								slug
								author
								created_at
								background_color
							}
						}
					}
				}
			`}
			render={data =>
				data.allStrapiAlbum.edges.map((data) => {
					let album = data.node
					let style = {backgroundColor: album.background_color}
					return (
						<li className="album" key={album.strapiId}>
							<Link to={`/${album.slug}`}>
								{album.author} <span className="hyphen" style={style}></span> {album.name}
							</Link>
						</li>
					)
				})
			}
		/>
	</ul>
)

export default Albums