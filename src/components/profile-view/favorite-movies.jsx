import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { MovieCard } from "../movie-card/movie-card";

export const FavoriteMovies = () => {
	const user = JSON.parse(localStorage.getItem("user"));
	const token = localStorage.getItem("token");
	const favoriteMovies = user.FavoriteMovies || [];
	const movies = useSelector((state) => state.movies.list);

	function removeOnClick(movie, event) {
		event.preventDefault();
		fetch(
			`https://myflix-app-jl.herokuapp.com/users/${user.Username}/movies/${movie._id}`,
			{
				method: "DELETE",
				headers: {
					Authorization: `Bearer ${token}`,
					"Content-Type": "application/json",
				},
			}
		)
			.then((response) => response.json())
			.then((data) => {
				setFavoriteMoviesState(
					favoriteMoviesState.filter((m) => m._id !== movie._id)
				);
				localStorage.setItem("user", JSON.stringify(data));
				alert("Movie removed from favorites!");
			})
			.catch((error) => {
				console.log("error", error);
				alert("Error removing movie from favorites");
			});
	}

	return (
		<>
			<Row>
				<Col>
					{favoriteMovies.length > 0 ? (
						<Col xs={12}>
							{favoriteMovies.map((movie) => (
								<Col
									className='mb-4'
									key={movie._id}
									xs={12}
									sm={6}
									md={4}
									lg={3}
								>
									<MovieCard movies={movie} />
									<Button variant='danger' onClick={() => removeOnClick(movie)}>
										Remove from Favorite
									</Button>
								</Col>
							))}
						</Col>
					) : (
						<div>You have no favorite movies yet.</div>
					)}
				</Col>
			</Row>
		</>
	);
};
