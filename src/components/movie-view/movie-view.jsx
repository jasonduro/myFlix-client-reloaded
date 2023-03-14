// Purpose: To display a single movie's details to the user. This component is a child of the main-view component. It is rendered when the user clicks on a movie card. It displays the movie's title, director, and image. It also has a button that allows the user to return to the main view.

export const MovieView = ({ movie, onBackClick }) => {
	return (
		<div>
			<div>
				<img src={movie.image} alt='movie poster image' />
			</div>
			<div>
				<span>Title: </span>
				<span>{movie.title}</span>
			</div>
			<div>
				<span>Director: </span>
				<span>{movie.director}</span>
			</div>
			<button onClick={onBackClick}>Back</button>
		</div>
	);
};
