import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

import SEO from "../components/seo"
import "../css/albums.css"

function formatDate(date) {
	return (new Date(date)).toLocaleString('it-IT', { year: 'numeric', month: 'long', day: 'numeric' })
}

function getEmoji(length) {
	let emoji = []
	for (let i = 0; i < Math.floor(length / 10); i++) {
		emoji.push(<span style={{ fontSize: "8px" }} role="img" aria-label="headphone icon" key={i}>🎧 </span>)
	}
	return emoji
}


const Albums = () => (
	<ul className="albums">
		<SEO title="Albums"/>
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
								length
								background_color
								created_at
							}
						}
					}
				}
			`}
			render={data =>
				data.allStrapiAlbum.edges.map((data) => {
					let album = data.node
					let style = { backgroundColor: album.background_color }
					return (
						<li className="album" key={album.strapiId}>
							<Link to={`/${album.slug}`}>
								{album.author} <span className="hyphen" style={style}></span> {album.name}
								<span className="album-info">
									postato il {formatDate(album.created_at)} | ascolto di {album.length} minuti {getEmoji(album.length)}
								</span>
							</Link>
						</li>
					)
				})
			}
		/>
	</ul>
)

export default Albums