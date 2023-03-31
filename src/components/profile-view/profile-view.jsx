import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { UserInfo } from "../profile-view/user-info";
import { UpdateUser } from "../profile-view/update-user";
import { FavoriteMovies } from "../profile-view/favorite-movies";

export const ProfileView = () => {
	return (
		<>
			<h3 className='mt-3 mb-3'>MyFlix Profile</h3>
			<Container>
				<Row>
					<Col xs={12} md={6} lg={6}>
						<Card>
							<Card.Body>
								<Card.Title className='mb-3'>My Profile</Card.Title>
								<UserInfo />
							</Card.Body>
						</Card>
					</Col>
					<Col xs={12} md={6} lg={6}>
						<Card>
							<Card.Body>
								<Card.Title>Update Profile</Card.Title>
								<UpdateUser />
							</Card.Body>
						</Card>
					</Col>
					<Col xs={12} md={12} lg={12}>
						<Card>
							<Card.Body>
								<Card.Title>Favorite Movies</Card.Title>
								<FavoriteMovies />
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
};
