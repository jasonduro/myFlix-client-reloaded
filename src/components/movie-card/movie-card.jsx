// This is a stateless functional component. It is a component that only has a render method. It does not have a state object - it receives data and renders it, and then it is done. It does not maintain any state. It is a "dumb" component because it does not know how to manage its own state. It receives all data via props and sends back data via callbacks. (A parent component can be a "smart" component because it can maintain state and send data to its children.) This component will be used in the main-view.jsx file.
import React from "react";
import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";

export const MovieCard = ({ movie, onMovieClick }) => {
	return (
		<Card className='h-100'>
			<Card.Img variant='top' src={movie.image} />
			<Card.Body>
				<Card.Title>{movie.title}</Card.Title>
				<Button variant='link' onClick={() => onMovieClick(movie)}>
					Open
				</Button>
			</Card.Body>
		</Card>
	);
};

MovieCard.propTypes = {
	movie: PropTypes.shape({
		title: PropTypes.string,
	}).isRequired,
	onMovieClick: PropTypes.func.isRequired,
};
