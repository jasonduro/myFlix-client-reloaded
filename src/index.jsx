// This is the JavaScript entry point - your code begins here.

import { createRoot } from "react-dom/client";
import MainView from "./components/main-view/main-view";
import { Container } from "react-bootstrap";

import { store } from "./redux/store";
import { Provider } from "react-redux";

import "./index.scss";

const MyFlixApplication = () => {
	return (
		<Provider store={store}>
			<Container>
				<MainView />
			</Container>
		</Provider>
	);
};

// Finds the root of your app
const container = document.querySelector("#root");
const root = createRoot(container);

// Tells React to render your app in the root DOM element
root.render(<MyFlixApplication />);
