// This is the main view of the app, which will be rendered by the main component (index.jsx). It will display a list of movies. When a user clicks on a movie, the app will display information about that movie, and a button that will return the user to the main view. This component will be a "smart" component because it will maintain state, in this case the list of movies and the selected movie.

import React from "react";
import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";

const MainView = () => {
	const [movies, setMovies] = useState([]);
	const [selectedMovie, setSelectedMovie] = useState(null);
	const [user, setUser] = useState(null);
	const [token, setToken] = useState(null);

	useEffect(() => {
		fetch("https://myflix-app-jl.herokuapp.com/movies")
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
	}, []);
	/* the above code might be then((movies) instead of data. also movies.map instead of data */

	if (!user) {
		return (
			<LoginView
				onLoggedIn={(user, token) => {
					setUser(user);
					setToken(token);
				}}
			/>
		);
	}

	/* second useEffect function below to pass Bearer authorization in the header of http requests to make authenticated requests to api */
	useEffect(() => {
		if (!token) return;

		fetch("https://myflix-app-jl.herokuapp.com/movies", {
			headers: { Authorization: `Bearer ${token}` },
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
			});
	}, [token]);

	/* these three functions below are represented by the variables above - the const [] = use state.  */

	if (selectedMovie) {
		return (
			<MovieView
				movie={selectedMovie}
				onBackClick={() => setSelectedMovie(null)}
			/>
		);
	}

	if (movies.length === 0) {
		return <div>The list is empty!</div>;
	}
	e;
	return (
		<div>
			{movies.map((movie) => (
				<MovieCard
					key={movie.id}
					movie={movie}
					onMovieClick={(newSelectedMovie) => {
						setSelectedMovie(newSelectedMovie);
					}}
				/>
			))}
			<button
				onClick={() => {
					setUser(null);
					setToken(null);
					localStorage.clear();
				}}
			>
				Log Out
			</button>
		</div>
	);
};

export default MainView;
