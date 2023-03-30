import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Card, Container, Row, Col } from "react-bootstrap";
import { MovieCard } from "../movie-card/movie-card";
import { UserInfo } from "../profile-view/user-info";
import { UpdateUser } from "../profile-view/update-user";
import { FavoriteMovies } from "../profile-view/favorite-movies";

import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../redux/reducers/user";
import { setToken } from "../../redux/reducers/token";
import { setMovies } from "../../redux/reducers/movies";

export const ProfileView = () => {
	const movies = useSelector((state) => state.movies.list);
	const user = useSelector(
		(state) => state.user.user || JSON.parse(localStorage.getItem("user"))
	);
	const token = useSelector(
		(state) => state.token.token || localStorage.getItem("token")
	);

	const dispatch = useDispatch();

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
				const usersFromApi = data.users.map((user) => {
					return {
						Username: user.Username,
						Password: user.Password,
						Email: user.Email,
						Birthday: user.Birthday,
					};
				});
				dispatch(setUser(usersFromApi));
			})
			.catch((e) => {
				console.log(e);
				alert("Error");
			});
	}, [token]);

	/* 	const favoriteMovieCards = movies.filter((movie) =>
		favoriteMovies.includes(movie._id)
	); */

	return (
		<>
			<h3 className='mt-3 mb-3'>MyFlix Profile</h3>
			<Container>
				<Row>
					<Col xs={12} md={6} lg={6}>
						<Card>
							<Card.Body>
								<Card.Title className='mb-3'>My Profile</Card.Title>
								<UserInfo />
							</Card.Body>
						</Card>
					</Col>
					<Col xs={12} md={6} lg={6}>
						<Card>
							<Card.Body>
								<Card.Title>Update Profile</Card.Title>
								<UpdateUser />
							</Card.Body>
						</Card>
					</Col>
				</Row>
				{/* 				<FavoriteMovies favoriteMovieCards={favoriteMovieCards} /> */}
			</Container>
		</>
	);
};
