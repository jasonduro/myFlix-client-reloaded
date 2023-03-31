import React from "react";
import { useSelector } from "react-redux";
import { setUser } from "../../redux/reducers/user";

export const UserInfo = () => {
	const user = useSelector((state) => state.user.user);

	return (
		<div>
			<p>Name: {user.Username}</p>
			<p>Email: {user.Email}</p>
			<p>Birthday: {user.Birthday}</p>
		</div>
	);
};
