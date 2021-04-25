import React from 'react';
import { useParams } from 'react-router-dom';

type Params = { id: string };

export const Breed: React.FC = () => {
	const { id } = useParams<Params>();

	return (
		<>
			<h3>Breed ID: {id}</h3>
		</>
	);
};
