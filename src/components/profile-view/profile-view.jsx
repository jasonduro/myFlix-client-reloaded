import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Card, Container, Row } from "react-bootstrap";
import { MovieCard } from "../movie-card/movie-card";

export const ProfileView = ({ movies, user, token }) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");
	const [birthday, setBirthday] = useState("");
	const [favoriteMovies, setFavoriteMovies] = useState([]);

	useEffect(() => {
		fetch(`https://myflix-app-jl.herokuapp.com/users/${user.Username}`, {
			method: "GET",
			headers: { Authorization: `Bearer ${token}` },
		})
			.then((response) => response.json())
			.then((data) => {
				setUsername(data.Username);
				setEmail(data.Email);
				setBirthday(data.Birthday);
				setFavoriteMovies(data.FavoriteMovies);
			})
			.catch((e) => {
				console.log(e);
				alert("Error");
			});
	}, [token]);

	const favoriteMovieCards = movies
		.filter((movie) => favoriteMovies.includes(movie._id))
		.map((movie) => <MovieCard key={movie._id} movie={movie} />);

	return (
		<>
			<h1>MyFlix Profile</h1>
			<div>
				<span>Name: </span>
				<p>{user.Username}</p>
			</div>
			<div>
				<span>Email: </span>
				<p>{user.Email}</p>
			</div>
			<div>
				<span>Birthday: </span>
				<p>{user.Birthday}</p>
			</div>
			<Row>
				<h3>Favorite Movies List</h3>
				{favoriteMovieCards.length > 0 ? (
					<Container>{favoriteMovieCards}</Container>
				) : (
					<div>You have no favorite movies yet.</div>
				)}
			</Row>
		</>
	);
};
