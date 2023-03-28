// This is a stateless functional component. It is a component that only has a render method. It does not have a state object - it receives data and renders it, and then it is done. It does not maintain any state. It is a "dumb" component because it does not know how to manage its own state. It receives all data via props and sends back data via callbacks. (A parent component can be a "smart" component because it can maintain state and send data to its children.) This component will be used in the main-view.jsx file.

import React from "react";
import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const MovieCard = ({ movies }) => {
	return (
		<Card className='h-100 mt-3' xs={12} sm={6} md={4} lg={3}>
			<Card.Img variant='top' src={movies.ImagePath} />
			<Card.Body>
				<Card.Title>{movies.Title}</Card.Title>
				<Card.Text>Director: {movies.Director?.Name}</Card.Text>
				<Link to={`/movies/${encodeURIComponent(movies._id)}`}>
					<Button variant='link'>Open</Button>
				</Link>
			</Card.Body>
		</Card>
	);
};

MovieCard.propTypes = {
	movie: PropTypes.shape({
		Title: PropTypes.string,
		Director: PropTypes.shape({
			Name: PropTypes.string,
			Bio: PropTypes.string,
		}).isRequired,
	}),
};
