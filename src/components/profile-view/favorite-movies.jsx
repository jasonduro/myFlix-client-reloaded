import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

export function FavoriteMovies({ favoriteMovieCards }) {
	return (
		<>
			<Row>
				<Col xs={6}>
					<h3>Favorite Movies List</h3>
				</Col>
			</Row>
			<Row>
				{favoriteMovieCards.map}
				<Col xs={12}>
					{favoriteMovieCards.length > 0 ? (
						<Col xs={12} md={6} lg={3}>
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
