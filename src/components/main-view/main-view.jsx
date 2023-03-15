// This is the main view of the app, which will be rendered by the main component (index.jsx). It will display a list of movies. When a user clicks on a movie, the app will display information about that movie, and a button that will return the user to the main view. This component will be a "smart" component because it will maintain state, in this case the list of movies and the selected movie.

import React from "react";
import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const MainView = () => {
	const [movies, setMovies] = useState([]);
	const [selectedMovie, setSelectedMovie] = useState(null);
	const [user, setUser] = useState(null);
	const [token, setToken] = useState(null);

	useEffect(() => {
		if (!token) return;
		fetch("https://myflix-app-jl.herokuapp.com/movies", {
			headers: { Authorization: `Bearer ${token}` },
		})
			.then((response) => response.json())
			.then((data) => {
				const moviesFromApi = data.map((movie) => {
					return {
						id: movie._id,
						title: movie.Title,
						image: movie.ImagePath,
						director: movie.Director.Name,
						description: movie.Description,
						genre: movie.Genre.Name,
					};
				});

				setMovies(moviesFromApi);
			});
	}, [token]);

	return (
		<Row className='justify-content-md-center'>
			{!user ? (
				<>
					<Col xs={12} md={6}>
						<LoginView
							onLoggedIn={(user, token) => {
								setUser(user);
								setToken(token);
							}}
						/>
						or
						<SignupView />
					</Col>
				</>
			) : selectedMovie ? (
				<Col md={8} style={{ border: "1px solid black" }}>
					<MovieView
						movie={selectedMovie}
						onBackClick={() => setSelectedMovie(null)}
					/>
				</Col>
			) : movies.length === 0 ? (
				<div>The list is empty!</div>
			) : (
				<>
					{movies.map((movie) => (
						<Col className='mb-4' key={movie.id} md={3}>
							<MovieCard
								movie={movie}
								onMovieClick={(newSelectedMovie) => {
									setSelectedMovie(newSelectedMovie);
								}}
							/>
						</Col>
					))}
				</>
			)}
		</Row>
	);
};

export default MainView;
