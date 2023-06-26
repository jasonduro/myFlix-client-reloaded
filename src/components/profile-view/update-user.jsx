import React from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

export function UpdateUser({
	user,
	handleSubmit,
	handleUsernameChange,
	handlePasswordChange,
	handleEmailChange,
	handleBirthdayChange,
}) {
	return (
		<Form>
			<Form.Group className='mt-3'>
				<Form.Label>Username:</Form.Label>
				<Form.Control
					type='text'
					name='Username'
					value={user.Username}
					onChange={(e) => handleUsernameChange(e)}
					placeholder='New Username'
				/>
			</Form.Group>

			<Form.Group className='mt-3'>
				<Form.Label>Password:</Form.Label>
				<Form.Control
					type='password'
					name='password'
					value={user.Password}
					onChange={(e) => handlePasswordChange(e)}
				/>
			</Form.Group>

			<Form.Group className='mt-3'>
				<Form.Label>Email:</Form.Label>
				<Form.Control
					type='email'
					name='email'
					value={user.Email}
					onChange={(e) => handleEmailChange(e)}
				/>
			</Form.Group>

			<Form.Group className='mt-3'>
				<Form.Label>Birthday:</Form.Label>
				<Form.Control
					type='date'
					name='birthday'
					value={user.Birthday}
					onChange={(e) => handleBirthdayChange(e)}
				/>
			</Form.Group>
			<Button
				className='mt-3'
				variant='primary'
				type='submit'
				onClick={handleSubmit}
			>
				Update
			</Button>
		</Form>
	);
}
