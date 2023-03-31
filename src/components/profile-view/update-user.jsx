import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { setUser } from "../../redux/reducers/user";

export const UpdateUser = () => {
	const user = JSON.parse(localStorage.getItem("user"));
	const token = localStorage.getItem("token");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");
	const [birthday, setBirthday] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		const updatedUser = {
			Username: username,
			Password: password,
			Email: email,
			Birthday: birthday,
		};
		fetch(`https://myflix-app-jl.herokuapp.com/users/${user.Username}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify(updatedUser),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log("API returned data: ", data);
				setUser(updatedUser);
				localStorage.setItem("user", JSON.stringify(updatedUser));
				alert("User updated successfully");
			})
			.catch((e) => {
				console.log("Error updating user data: ", e);
				alert("Error");
			});
	};

	return (
		<Form onSubmit={handleSubmit}>
			<Form.Group className='mt-3'>
				<Form.Label>Username:</Form.Label>
				<Form.Control
					type='text'
					name='username'
					value={username}
					placeholder='Enter new username'
					onChange={(e) => setUsername(e.target.value)}
				/>
			</Form.Group>

			<Form.Group className='mt-3'>
				<Form.Label>Password:</Form.Label>
				<Form.Control
					type='password'
					name='password'
					value={password}
					placeholder='Enter new password'
					onChange={(e) => setPassword(e.target.value)}
				/>
			</Form.Group>

			<Form.Group className='mt-3'>
				<Form.Label>Email:</Form.Label>
				<Form.Control
					type='email'
					name='email'
					value={email}
					placeholder='Enter new email'
					onChange={(e) => setEmail(e.target.value)}
				/>
			</Form.Group>

			<Form.Group controlId='formBirthday' className='mt-3'>
				<Form.Label>Birthday:</Form.Label>
				<Form.Control
					type='date'
					name='birthday'
					value={birthday}
					placeholder='Enter new birthday'
					onChange={(e) => setBirthday(e.target.value)}
				/>
			</Form.Group>

			<Button
				onClick={handleSubmit}
				className='mt-3'
				variant='primary'
				type='submit'
			>
				Update
			</Button>
		</Form>
	);
};
