import React from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../redux/reducers/user";
import { FavoriteMovies } from "./favorite-movies";

export function UpdateUser() {
	const user = useSelector((state) => state.user);
	const dispatch = useDispatch();

	return (
		<Form>
			<Form.Group className='mt-3'>
				<Form.Label>Username:</Form.Label>
				<Form.Control
					type='text'
					name='Username'
					defaultValue={user.Username}
					placeholder='New Username'
				/>
			</Form.Group>

			<Form.Group className='mt-3'>
				<Form.Label>Password:</Form.Label>
				<Form.Control
					type='password'
					name='password'
					defaultValue={user.Password}
				/>
			</Form.Group>

			<Form.Group className='mt-3'>
				<Form.Label>Email:</Form.Label>
				<Form.Control type='email' name='email' defaultValue={user.Email} />
			</Form.Group>

			<Form.Group className='mt-3'>
				<Form.Label>Birthday:</Form.Label>
				<Form.Control
					type='date'
					name='birthday'
					defaultValue={user.Birthday}
				/>
			</Form.Group>
			<Button className='mt-3' variant='primary' type='submit'>
				Update
			</Button>
		</Form>
	);
	<FavoriteMovies favoriteMovieCards={FavoriteMovies} />;
}
