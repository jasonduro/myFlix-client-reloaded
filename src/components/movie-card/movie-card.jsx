// This is a stateless functional component. It is a component that only has a render method. It does not have a state object - it receives data and renders it, and then it is done. It does not maintain any state. It is a "dumb" component because it does not know how to manage its own state. It receives all data via props and sends back data via callbacks. (A parent component can be a "smart" component because it can maintain state and send data to its children.) This component will be used in the main-view.jsx file.
//need to import proptypes to use it here
import PropTypes from "prop-types";

export const MovieCard = ({ movie, onMovieClick }) => {
	return (
		<div
			onClick={() => {
				onMovieClick(movie);
			}}
		>
			{movie.title}
		</div>
	);
};

MovieCard.propTypes = {
	movie: PropTypes.shape({
		title: PropTypes.string,
	}).isRequired,
	onMovieClick: PropTypes.func.isRequired,
};
