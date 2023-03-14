import { useState } from "react";

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
		<form onSubmit={handleSubmit}>
			<label>
				Username:
				<input
					type='text'
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					required
					minLength='3'
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
			<label>
				Email:
				<input
					type='email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
			</label>
			<label>
				Birthday:
				<input
					type='date'
					value={birthday}
					onChange={(e) => setBirthday(e.target.value)}
					required
				/>
			</label>
			<button type='submit'>Submit</button>
		</form>
	);
};
