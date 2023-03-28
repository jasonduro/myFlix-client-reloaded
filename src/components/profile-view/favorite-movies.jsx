import { React, useState } from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { MovieCard } from "../movie-card/movie-card";
import { useState } from "react";

export function FavoriteMovies({ favoriteMovieCards }) {
	const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
	const [token, setToken] = useState(localStorage.getItem("token"));
	return (
		<>
			<Row>
				<Col>
					<h3>Favorite Movies List</h3>
				</Col>
			</Row>
			<Row>
				<Col>
					{favoriteMovieCards.length > 0 ? (
						<Col xs={12}>
							{favoriteMovieCards.map((movie) => (
								<Col
									className='mb-4'
									key={movie._id}
									xs={12}
									sm={6}
									md={4}
									lg={3}
								>
									<MovieCard movies={movie} user={user} token={token} />
								</Col>
							))}
						</Col>
					) : (
						<div>You have no favorite movies yet.</div>
					)}
				</Col>
			</Row>
		</>
	);
}
