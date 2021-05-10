import React from 'react';
import { Grid } from '../Grid';
import { Breed } from '../../thedogsapi';
import bindStyles from 'classnames/bind';
import styles from './GridView.module.css';
import { Link } from 'react-router-dom';
import { Patch } from '../../assets';
// import { ensureLeadingSlash } from '../../utils';
import { ButtonLabel, roundedClassName } from '../../components';

const styleNames = bindStyles.bind(styles);

type GridViewProps = {
	loadingTitle: string;
	isLoading: boolean;
	data: any;
};

export const GridView: React.FC<GridViewProps> = ({
	loadingTitle,
	isLoading,
	data,
}) => {
	return (
		<>
			{isLoading ? (
				<h3 className={styleNames('loadingTitle')}>{loadingTitle}</h3>
			) : (
				<div className={styleNames('grid')}>
					<Grid data={data} renderItem={renderItem} />
				</div>
			)}
		</>
	);
};

const renderItem = ({ id, name, image }: Breed) => (
	<Link
		// to={location => ({
		// 	...location,
		// 	search: '',
		// 	pathname: `${ensureLeadingSlash(location.pathname)}${id}`,
		// })}
		to={`breeds/${id}`}
		className={styleNames('link')}
		key={id}>
		{image ? (
			<img
				src={`${image.url}`}
				alt={`${name} Breed`}
				className={styleNames('img')}
			/>
		) : (
			<Patch />
		)}
		<ButtonLabel labelClassName={styleNames('btn', roundedClassName)}>
			{name}
		</ButtonLabel>
	</Link>
);
