import React from 'react';
import { Grid } from '../Grid';
import { Breed } from '../../thedogsapi';
import bindStyles from 'classnames/bind';
import styles from './GridView.module.css';
import { Link } from 'react-router-dom';
import { Patch } from '../../assets';
import { ButtonLabel, roundedClassName } from '../../components';

const styleNames = bindStyles.bind(styles);

type GridViewProps = {
	loadingTitle: string;
	isLoading: boolean;
	view?: 'search';
	data: any;
};

export const GridView: React.FC<GridViewProps> = ({
	loadingTitle,
	isLoading,
	data,
	view,
}) => {
	return (
		<>
			{isLoading ? (
				<h3 className={styleNames('loadingTitle')}>{loadingTitle}</h3>
			) : (
				<div className={styleNames('grid')}>
					<Grid data={data} renderItem={getRenderItem(view === 'search')} />
				</div>
			)}
		</>
	);
};

const getRenderItem = (addNameParam: boolean = false) => ({
	id,
	name,
	image,
}: Breed) => {
	const to = `breeds/${id}`;

	return (
		<Link
			to={addNameParam ? `${to}?name=${name}` : to}
			className={styleNames('link', { noImage: !Boolean(image) })}
			key={id}>
			{image ? (
				<img
					src={`${image.url}`}
					alt={`${name} Breed`}
					className={styleNames('img')}
				/>
			) : (
				<Patch className={styleNames('patch')} />
			)}
			<ButtonLabel labelClassName={styleNames('btn', roundedClassName)}>
				{name}
			</ButtonLabel>
		</Link>
	);
};
