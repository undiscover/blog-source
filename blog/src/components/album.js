import React from "react"  
import { graphql } from "gatsby"
import { Remarkable } from 'remarkable';

import Layout from "./layout"
import SEO from "../components/seo"

import "../css/album.css"

export const query = graphql`
	query AlbumQuery($id: Int!) {
		strapiAlbum(strapiId: { eq: $id }) {
			strapiId
			name
			author
			label
			release_year
			background_color
			player
			description
			cover {
				publicURL
			}
		}
	}
`

const Album = ({ data }) => {  
	const album = data.strapiAlbum
	var md = new Remarkable()
	
	return (
		<Layout>
			<SEO title={[album.name, album.author].join(' | ')}/>
			<div className="hero" style={{ backgroundColor: album.background_color}}>
				<div className="hero-content">
					<div className="band-details">
						<span className="band-detials-section">
							<span className="band-name">{album.author}</span>
						</span>
						<span className="band-detials-section">
							<span className="album-name">{album.name}</span>
						</span>
						<span className="band-detials-section">
							<span className="album-label">{album.label} - {album.release_year}</span>
						</span>
					</div>
					{/* heigth and with are 475px due to hero max-width of hero */}
					<img className="hero-cover" src={album.cover.publicURL} alt="album cover" height="475px" width="475px"/>
				</div>
			</div>
			<section className="article">
				<section className="player" dangerouslySetInnerHTML={{__html: album.player}} />
				<section className="description" dangerouslySetInnerHTML={{__html: md.render(album.description)}} />
			</section>
		</Layout>
	)
}

export default Album