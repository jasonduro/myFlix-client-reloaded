import React from "react";
import { Container } from "react-bootstrap";

export function FavoriteMovies({ favoriteMovieCards }) {
	return (
		<>
			<h3>Favorite Movies List</h3>
			{favoriteMovieCards.length > 0 ? (
				<Container>{favoriteMovieCards}</Container>
			) : (
				<div>You have no favorite movies yet.</div>
			)}
		</>
	);
}
