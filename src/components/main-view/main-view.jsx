import React from "react";
import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";
import { ProfileView } from "../profile-view/profile-view";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { NavigationBar } from "../navigation-bar/navigation-bar";

import { useSelector, useDispatch } from "react-redux";
import { setMovies } from "../../redux/reducers/movies";
import { MoviesList } from "../movies-list/movies-list";

const MainView = () => {
	const movies = useSelector((state) => state.movies.list);
	const user = useSelector(
		(state) => state.user.user || JSON.parse(localStorage.getItem("user"))
	);
	const token = useSelector(
		(state) => state.token.token || localStorage.getItem("token")
	);

	const dispatch = useDispatch();

	useEffect(() => {
		if (!token) return;
		fetch("https://myflix-app-jl.herokuapp.com/movies", {
			headers: { Authorization: `Bearer ${token}` },
		})
			.then((response) => response.json())
			.then((data) => dispatch(setMovies(data)));
	}, [token]);

	return (
		<BrowserRouter>
			<NavigationBar
				onLoggedOut={() => {
					setUser(null);
					setToken(null);
					localStorage.clear();
				}}
			/>
			<Row className='justify-content-md-center'>
				<Routes>
					<Route
						path='/signup'
						element={
							<>
								{user ? (
									<Navigate to='/' />
								) : (
									<Col xs={12} md={6}>
										<SignupView />
									</Col>
								)}
							</>
						}
					/>

					<Route
						path='/login'
						element={
							<>
								{user ? (
									<Navigate to='/' />
								) : (
									<Col xs={12} md={6}>
										<LoginView />
									</Col>
								)}
							</>
						}
					/>

					<Route
						path='/movies/:movieId'
						element={
							<>
								{!user ? (
									<Navigate to='/login' replace />
								) : movies.length === 0 ? (
									<Col>The list is empty!</Col>
								) : (
									<Col xs={12} style={{ border: "1px solid black" }}>
										<MovieView />
									</Col>
								)}
							</>
						}
					/>

					<Route
						path='/'
						element={
							<>{!user ? <Navigate to='/login' replace /> : <MoviesList />}</>
						}
					/>
					<Route
						path='/profile'
						element={
							<>
								{!user ? (
									<Navigate to='/login' replace />
								) : (
									<ProfileView user={user} movies={movies} token={token} />
								)}
							</>
						}
					/>
				</Routes>
			</Row>
		</BrowserRouter>
	);
};

export default MainView;
