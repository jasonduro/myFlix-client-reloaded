// Purpose: To display a single movie's details to the user. This component is a child of the main-view component. It is rendered when the user clicks on a movie card. It displays the movie's title, director, and image. It also has a button that allows the user to return to the main view.

import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./movie-view.scss";

export const MovieView = ({ movies, onBackClick }) => {
	const { movieId } = useParams();

	const movie = movies.find((m) => m._id === movieId);

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

MovieView.propTypes = {
	movie: PropTypes.shape({
		title: PropTypes.string,
		director: PropTypes.string,
	}).isRequired,
	onBackClick: PropTypes.func.isRequired,
};
