import React from 'react';

const person = (ch) => {
	return (
		<div className="App">
			<p>I'm {ch.name}! And I'm {ch.age} years old </p>
			<p>{ch.children}</p>
		</div>
		);
}

export default person;