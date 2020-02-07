import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
// import './App.css';
import { Names, client } from "./client";

function App() {
	return (
		<ApolloProvider client={client}>
			<div className="App">
				<Names />
			</div>
		</ApolloProvider>
	);
}

export default App;
