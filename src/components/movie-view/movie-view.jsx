// Purpose: To display a single movie's details to the user. This component is a child of the main-view component. It is rendered when the user clicks on a movie card. It displays the movie's title, director, and image. It also has a button that allows the user to return to the main view.

import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Button, Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import "./movie-view.scss";
import { useSelector } from "react-redux";

export const MovieView = ({ onBackClick }) => {
	const { movieId } = useParams();
	const movies = useSelector((state) => state.movies.list);
	const user = JSON.parse(localStorage.getItem("user"));
	const token = localStorage.getItem("token");
	const movie = movies.find((m) => m._id === movieId);
	const [favoriteMovies, setFavoriteMovies] = useState(
		user.FavoriteMovies ? user.FavoriteMovies : []
	);

	const addOnClick = (event) => {
		event.preventDefault();

		fetch(
			`https://myflix-app-jl.herokuapp.com/users/${user.Username}/movies/${movie._id}`,
			{
				method: "POST",
				headers: {
					Authorization: `Bearer ${token}`,
					"Content-Type": "application/json",
				},
			}
		)
		
			.then((response) => response.json())
			.then((data) => {
				setFavoriteMovies(data.FavoriteMovies);
				localStorage.setItem("user", JSON.stringify(data));
				alert("Movie added to favorites!");
			})
			.catch((error) => {
				console.log("error", error);
				alert("Error adding movie to favorites");
			});
	};

	const removeOnClick = (event) => {
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
				setFavoriteMovies(favoriteMovies.filter((m) => m !== movie._id));
				localStorage.setItem("user", JSON.stringify(data));
				alert("Movie removed from favorites!");
			})
			.catch((error) => {
				console.log("error", error);
				alert("Error removing movie from favorites");
			});
	};

	return (
		<Container>
			<Row>
				<Col sm={6}>
					<img src={movie.ImagePath} alt='movie poster image' />
				</Col>
				<Col sm={6}>
					<span>Title: </span>
					<p>{movie.Title}</p>
					<span>Description: </span>
					<p>{movie.Description}</p>
					<span>Director: </span>
					<p>{movie.Director.Name}</p>
					<span>Genre: </span>
					<p>{movie.Genre.Name}</p>
					<Link to={`/`}>
						<button
							onClick={onBackClick}
							className='back-button'
							style={{ cursor: "pointer" }}
						>
							Back
						</button>
					</Link>
					<Button variant='success' onClick={addOnClick}>
						Add to Favorites
					</Button>
					<Button variant='danger' onClick={removeOnClick}>
						Remove from Favorites
					</Button>
				</Col>
			</Row>
		</Container>
	);
};
