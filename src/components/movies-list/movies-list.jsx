import React from "react";
import { useSelector } from "react-redux";
import { MovieCard } from "../movie-card/movie-card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export const MoviesList = () => {
	const movies = useSelector((state) => state.movies.list);
	const filter = useSelector((state) => state.movies.filter)
		.trim()
		.toLowerCase();

	const filteredMovies = movies.filter((movie) =>
		movie.Title.toLowerCase().includes(filter)
	);

	return (
		<>
			<Row>
				{movies.length === 0 ? (
					<Col>The list is empty!</Col>
				) : (
					filteredMovies.map((movie) => (
						<Col className='mb-4' key={movie._id} xs={12} sm={6} md={4} lg={3}>
							<MovieCard movies={movie} />
						</Col>
					))
				)}
			</Row>
		</>
	);
};
