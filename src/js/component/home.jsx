import React from "react";
import { useState } from "react";

import Button from "./button.jsx"

//create your first component
const Home = () => {
	// all operations & variables here

	let [counter, setCounter] = useState(0);

	const increase = () => {
		setCounter(counter+1); // counter++ is slower
	}

	const decrease = () => {
		setCounter(--counter);
	}

	return (
		<div className="text-center">
			<Button title='Increase' click={increase} />
			<h1>{counter}</h1>
			<Button title='Decrease' click={decrease} />
		</div>
	);
};

export default Home;
