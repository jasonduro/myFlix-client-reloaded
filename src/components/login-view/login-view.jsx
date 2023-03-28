import React from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/reducers/user";
import { setToken } from "../../redux/reducers/token";

export const LoginView = ({ onLoggedIn }) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();

	const handleSubmit = (event) => {
		event.preventDefault();

		const data = {
			Username: username,
			Password: password,
		};

		fetch("https://myflix-app-jl.herokuapp.com/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log("Login response: ", data);
				if (data.user) {
					localStorage.setItem("token", data.token);
					localStorage.setItem("user", JSON.stringify(data.user));
					dispatch(setUser(username, data.token));
					dispatch(setToken(data.token));
				} else {
					alert("No such user");
				}
			})
			.catch((e) => {
				alert("Error logging in");
			});
	};

	return (
		<>
			<h1 className='mb-3 mt-3'>MyFlix Login</h1>
			<Form onSubmit={handleSubmit}>
				<Form.Group className='mb-3' controlId='formUsername'>
					<Form.Label>Username</Form.Label>
					<Form.Control
						type='text'
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						required
						placeholder='Your Username'
						minLength={3}
					/>
				</Form.Group>

				<Form.Group className='mb-3' controlId='formPassword'>
					<Form.Label>Password</Form.Label>
					<Form.Control
						type='password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
						placeholder='Your Password'
					/>
				</Form.Group>
				<Button variant='primary' type='submit'>
					Submit
				</Button>
			</Form>
		</>
	);
};
