import React from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";



export function UpdateUser({ user, handleSubmit, handleUpdate }) {
	return (
		<Form>
			<Form.Group className='mt-3'>
				<Form.Label>Username:</Form.Label>
				<Form.Control
					type='text'
					name='Username'
					defaultValue={user.Username}
					onChange={(e) => handleUpdate(e)}
					placeholder='New Username'
				/>
			</Form.Group>

			<Form.Group className='mt-3'>
				<Form.Label>Password:</Form.Label>
				<Form.Control
					type='password'
					name='password'
					defaultValue={user.Password}
					onChange={(e) => handleUpdate(e)}
				/>
			</Form.Group>

			<Form.Group className='mt-3'>
				<Form.Label>Email:</Form.Label>
				<Form.Control
					type='email'
					name='email'
					defaultValue={user.Email}
					onChange={(e) => handleUpdate(e)}
				/>
			</Form.Group>

			<Form.Group className='mt-3'>
				<Form.Label>Birthday:</Form.Label>
				<Form.Control
					type='date'
					name='birthday'
					defaultValue={user.Birthday}
					onChange={(e) => handleUpdate(e)}
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
