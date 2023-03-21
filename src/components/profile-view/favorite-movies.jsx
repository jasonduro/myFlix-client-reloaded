import React from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { MovieCard } from "../movie-card/movie-card";

export function FavoriteMovies({ favoriteMovieCards }) {
	return (
		<>
			<Row>
				<Col>
					<h3>Favorite Movies List</h3>
				</Col>
			</Row>
			<Row>
				{favoriteMovieCards.map}
				<Col>
					{favoriteMovieCards.length > 0 ? (
						<Col xs={12} style={{ border: "1px solid black" }}>
							{favoriteMovieCards}
						</Col>
					) : (
						<div>You have no favorite movies yet.</div>
					)}
				</Col>
			</Row>
		</>
	);
}
