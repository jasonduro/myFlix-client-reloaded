// Purpose: To display a single movie's details to the user. This component is a child of the main-view component. It is rendered when the user clicks on a movie card. It displays the movie's title, director, and image. It also has a button that allows the user to return to the main view.

import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import "./movie-view.scss";

export const MovieView = ({ movies, onBackClick }) => {
	const [user, setUser] = useState("");
	const [token, setToken] = useState("");
	const { movieId } = useParams();
	const movie = movies.find((m) => m._id === movieId);

	const addOnClick = (event) => {
		event.preventDefault();

		fetch(
			`https://myflix-app-jl.herokuapp.com/users/${user.Username}/movies/${movie._id}`,
			{
				method: "PUT",
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		)
			.then((response) => response.json())
			.then((data) => {
				alert("Movie added to favorites!");
				setUser({ user, FavoriteMovies: data.FavoriteMovies });
			})
			.catch((e) => {
				console.log(e);
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
				},
			}
		)
			.then((response) => response.json())
			.then((data) => {
				alert("Movie removed from favorites!");
				setUser({ ...user, FavoriteMovies: data.FavoriteMovies });
			})
			.catch((e) => {
				console.log(e);
				alert("Error removing movie from favorites");
			});
	};

	return (
		<div>
			<div>
				<img src={movie.ImagePath} alt='movie poster image' />
			</div>
			<div>
				<span>Title: </span>
				<p>{movie.Title}</p>
			</div>
			<div>
				<span>Description: </span>
				<p>{movie.Description}</p>
			</div>
			<div>
				<span>Director: </span>
				<p>{movie.Director.Name}</p>
			</div>
			<div>
				<span>Genre: </span>
				<p>{movie.Genre.Name}</p>
			</div>
			<Link to={`/`}>
				<button
					onClick={onBackClick}
					className='back-button'
					style={{ cursor: "pointer" }}
				>
					Back
				</button>
			</Link>
		</div>
	);
};
