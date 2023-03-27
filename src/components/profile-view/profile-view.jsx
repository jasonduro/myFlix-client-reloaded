import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Card, Container, Row, Col } from "react-bootstrap";
import { MovieCard } from "../movie-card/movie-card";
import { UserInfo } from "../profile-view/user-info";
import { UpdateUser } from "../profile-view/update-user";
import { FavoriteMovies } from "../profile-view/favorite-movies";

export const ProfileView = ({ movies, user, token }) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");
	const [birthday, setBirthday] = useState("");
	const [favoriteMovies, setFavoriteMovies] = useState([]);

	const getUser = (token) => {
		fetch(`https://myflix-app-jl.herokuapp.com/users/${user.Username}`, {
			method: "GET",
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
			.then((response) => response.json())
			.then((data) => {
				setUsername(data.Username);
				setPassword(data.Password);
				setEmail(data.Email);
				setBirthday(data.Birthday);
				setFavoriteMovies(data.FavoriteMovies);
			})
			.catch((e) => {
				console.log(e);
				alert("Error getting user");
			});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		fetch(`https://myflix-app-jl.herokuapp.com/users/${user.Username}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify({
				Username: username,
				Password: password,
				Email: email,
				Birthday: birthday,
			}),
		})
			.then((response) => response.json())
			.then((data) => {
				alert("Profile updated!");

				localStorage.setItem("user", JSON.stringify(data));
				window.open("/client", "_self");
			})
			.catch((e) => {
				console.log(e);
				alert("Error updating profile");
			});
	};

	const handleUpdate = (e) => {
		e.preventDefault();
		setUsername(e.target.value);
		setPassword(e.target.value);
		setEmail(e.target.value);
		setBirthday(e.target.value);
	};

	useEffect(() => {
		fetch(`https://myflix-app-jl.herokuapp.com/users/${user.Username}`, {
			method: "GET",
			headers: { Authorization: `Bearer ${token}` },
		})
			.then((response) => response.json())
			.then((data) => {
				setUsername(data.Username);
				setEmail(data.Email);
				setBirthday(data.Birthday);
				setFavoriteMovies(data.FavoriteMovies);
			})
			.catch((e) => {
				console.log(e);
				alert("Error");
			});
	}, [token]);

	const favoriteMovieCards = movies.filter((movie) =>
		favoriteMovies.includes(movie._id)
	);

	return (
		<>
			<h3 className='mt-3 mb-3'>MyFlix Profile</h3>
			<Container>
				<Row>
					<Col xs={12} md={6} lg={6}>
						<Card>
							<Card.Body>
								<Card.Title className='mb-3'>My Profile</Card.Title>
								<UserInfo
									name={user.Username}
									email={user.Email}
									birthday={user.Birthday}
								/>
							</Card.Body>
						</Card>
					</Col>
					<Col xs={12} md={6} lg={6}>
						<Card>
							<Card.Body>
								<Card.Title>Update Profile</Card.Title>
								<UpdateUser
									handleSubmit={handleSubmit}
									handleUpdate={handleUpdate}
									user={user}
								/>
							</Card.Body>
						</Card>
					</Col>
				</Row>
				<FavoriteMovies favoriteMovieCards={favoriteMovieCards} />
			</Container>
		</>
	);
};
