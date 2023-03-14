import React from "react";
import { useState } from "react";

export const LoginView = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

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
					onLoggedIn(data.user, data.token);
				} else {
					alert("No such user");
				}
			})
			.catch((e) => {
				alert("Error logging in");
			});

		return (
			<>
				<div>
					<h1>MyFlix Login</h1>
					<form onSubmit={handleSubmit}>
						<label>
							Username:
							<input
								type='text'
								value={username}
								onChange={(e) => setUsername(e.target.value)}
								required
								minLength={3}
							/>
						</label>
						<label>
							Password:
							<input
								type='password'
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
							/>
						</label>
						<button type='submit'>Submit</button>
					</form>
				</div>
			</>
		);
	};
};
