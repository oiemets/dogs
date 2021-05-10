import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, useTypedSelector } from '../../hooks';
import { Carousel } from '../../components';
import styles from './Breed.module.css';
import bindStyles from 'classnames/bind';
import {
	useAppDispatch,
	loadImages,
	getImagesWithNames,
	imagesReady,
	getImagesBreedInfo,
	searchBreedByName,
	searchReady,
} from '../../state';
import { NavGoBack } from '../../components';

type Params = { id: string };

const styleNames = bindStyles.bind(styles);

export const Breed: React.FC = () => {
	const { id } = useParams<Params>();
	const breedName = useQuery().get('name');
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(loadImages(id, '5'));
		if (breedName) {
			dispatch(searchBreedByName(breedName));
		}
	}, [dispatch, id, breedName]);

	const isImagesLoading = !useTypedSelector(state => imagesReady(state));
	const isSearchLoading = !useTypedSelector(state => searchReady(state));
	const isLoading = isImagesLoading && isSearchLoading;
	const images = useTypedSelector(state => getImagesWithNames(state));
	const data = useTypedSelector(state => getImagesBreedInfo(state));

	if (!data) {
		return null;
	}

	const { name, bred_for, height, weight, temperament, life_span } = data;

	if (isLoading) {
		return (
			<div className={styleNames('root', { isLoading: isLoading })}>
				<div className={styleNames('loadingTitle')}>images are loading...</div>
			</div>
		);
	}
	return (
		<div className={styleNames('root')}>
			<div className={styleNames('nav')}>
				<NavGoBack title='breeds' to='/breeds' idLabel={id} />
			</div>

			{Boolean(images.length) && (
				<Carousel images={images} className={styleNames('carousel')} />
			)}

			<div className={styleNames('info')}>
				<h1 className={styleNames('title')}>{name}</h1>
				<h2 className={styleNames('subtitle')}>{bred_for}</h2>

				<dl className={styleNames('list')}>
					<div className={styleNames('left')}>
						<div className={styleNames('listGroup')}>
							<dt className={styleNames('listTitle')}>temperament:</dt>
							<dd className={styleNames('listDetails')}>{temperament}</dd>
						</div>
					</div>

					<div className={styleNames('right')}>
						<div className={styleNames('listGroup')}>
							<dt className={styleNames('listTitle')}>height:</dt>
							<dd className={styleNames('listDetails')}>{height?.metric}</dd>
						</div>

						<div className={styleNames('listGroup')}>
							<dt className={styleNames('listTitle')}>weight:</dt>
							<dd className={styleNames('listDetails')}>{weight?.metric}</dd>
						</div>

						<div className={styleNames('listGroup')}>
							<dt className={styleNames('listTitle')}>life span:</dt>
							<dd className={styleNames('listDetails')}>{life_span}</dd>
						</div>
					</div>
				</dl>
			</div>
		</div>
	);
};
