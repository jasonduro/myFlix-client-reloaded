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
