import React from "react";

export function UpdateUser({ user, handleSubmit, handleUpdate }) {
	return (
		<form className='profile-form' onSubmit={(e) => handleSubmit(e)}>
			<label>Username:</label>
			<input
				type='text'
				name='Username'
				defaultValue={user.Username}
				onChange={(e) => handleUpdate(e.target.value)}
			/>
			<label>Password</label>
			<input
				type='password'
				name='password'
				defaultValue={user.Password}
				onChange={(e) => handleUpdate(e.target.value)}
			/>
			<label>Email</label>
			<input
				type='email'
				name='email'
				defaultValue={user.Email}
				onChange={(e) => handleUpdate(e.target.value)}
			/>
			<label>Birthday</label>
			<input
				type='date'
				name='birthday'
				defaultValue={user.Birthday}
				onChange={(e) => handleUpdate(e.target.value)}
			/>
			<button variant='primary' type='submit'>
				Update
			</button>
		</form>
	);
}
