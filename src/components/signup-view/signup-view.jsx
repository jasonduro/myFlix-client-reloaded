import React from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";

export const SignupView = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");
	const [birthday, setBirthday] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();

		const data = {
			Username: username,
			Password: password,
			Email: email,
			Birthday: birthday,
		};

		fetch("https://myflix-app-jl.herokuapp.com/users", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		}).then((response) => {
			if (response.ok) {
				alert("User successfully created");
				window.location.reload();
			} else {
				alert("Error creating user");
			}
		});
	};

	return (
		<>
			<h1 className='mt-3'>Welcome to MyFlix!</h1>
			<h5 className='mb-3'>Create an account</h5>
			<Form onSubmit={handleSubmit}>
				<Form.Group className='mb-3 mt-3' controlId='formUsername'>
					<Form.Label>Username</Form.Label>
					<Form.Control
						type='text'
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						required
						placeholder='Create Username'
						minLength='3'
					/>
				</Form.Group>

				<Form.Group className='mb-3' controlId='formPassword'>
					<Form.Label>Password</Form.Label>
					<Form.Control
						type='password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
						placeholder='Set Password'
					/>
				</Form.Group>

				<Form.Group className='mb-3' controlId='formEmail'>
					<Form.Label>Email</Form.Label>
					<Form.Control
						type='email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
						placeholder='Add Email'
					/>
				</Form.Group>

				<Form.Group className='mb-3' controlId='formBirthday'>
					<Form.Label>Birthday</Form.Label>
					<Form.Control
						type='date'
						value={birthday}
						onChange={(e) => setBirthday(e.target.value)}
						required
					/>
				</Form.Group>
				<Button variant='primary' type='submit'>
					Submit
				</Button>
			</Form>
		</>
	);
};
