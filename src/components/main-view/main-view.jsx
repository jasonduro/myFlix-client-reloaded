// This is the main view of the app, which will be rendered by the main component (index.jsx). It will display a list of movies. When a user clicks on a movie, the app will display information about that movie, and a button that will return the user to the main view. This component will be a "smart" component because it will maintain state, in this case the list of movies and the selected movie.

import React from "react";
import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

const MainView = () => {
	const [movies, setMovies] = useState([
		{
			id: 1,
			title: "Eloquent JavaScript",
			image: "https://picsum.photos/300",
			director: "Marijn Haverbeke",
		},
		{
			id: 2,
			title: "Mastering JavaScript Functional Programming",
			image: "https://picsum.photos/400",
			director: "Marijn Haverbeke",
		},
		{
			id: 3,
			title: "JavaScript: The Good Parts",
			image: "https://picsum.photos/400",
			director: "Marijn Haverbeke",
		},
		{
			id: 4,
			title: "JavaScript: The Definitive Guide",
			image: "https://picsum.photos/400",
			director: "Marijn Haverbeke",
		},
		{
			id: 5,
			title: "The Road to React",
			image: "https://picsum.photos/400",
			director: "Marijn Haverbeke",
		},
	]);

	const [selectedMovie, setSelectedMovie] = useState(null);

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
		</div>
	);
};

export default MainView;
