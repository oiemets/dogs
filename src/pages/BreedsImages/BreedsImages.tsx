import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useTypedSelector, useQuery } from '../../hooks';
import {
	breedsData,
	breedsReady,
	getBreedNamesWithId,
	useAppDispatch,
	loadBreeds,
	setLimit,
	setSortingOrder,
} from '../../state';
import {
	Select,
	SelectBreed,
	IconButton,
	NavGoBack,
	GridView,
} from '../../components';
import bindStyles from 'classnames/bind';
import styles from './BreedsImages.module.css';
import { Breed } from '../../thedogsapi';
import { ensureLeadingSlash } from '../../utils';

const styleNames = bindStyles.bind(styles);

const LIMIT_PRESETS = [5, 10, 15, 20] as const;
const DEFAULT_LIMIT = LIMIT_PRESETS[1];
const limitSelectOptions = LIMIT_PRESETS.map(n => ({
	value: n,
	text: `Limit: ${n}`,
}));

const ALL_BREEDS = { value: '', name: 'All breeds' } as const;

const breedsAscSorter = (a: Breed, b: Breed) => {
	const nameA = a.name.toUpperCase();
	const nameB = b.name.toUpperCase();
	if (nameA < nameB) {
		return -1;
	}
	if (nameA > nameB) {
		return 1;
	}
	return 0;
};

type SortDirection = 'asc' | 'desc';

export const BreedsImages: React.FC = () => {
	const dispatch = useAppDispatch();
	const history = useHistory();

	const isLoading = !useTypedSelector(state => breedsReady(state));
	const rawBreeds = useTypedSelector(state => breedsData(state));
	const breedNames = useTypedSelector(state => getBreedNamesWithId(state));
	const [selectedBreed, setSelectedBreed] = useState('');

	const query = useQuery();
	const limit = Number(query.get('limit')) || DEFAULT_LIMIT;
	const order = query.get('order');
	const search = query.get('q');

	useEffect(() => {
		dispatch(loadBreeds());
	}, [dispatch]);

	const breeds = useMemo(() => {
		let result = [...rawBreeds];

		if (order) {
			order === 'asc'
				? result.sort(breedsAscSorter)
				: result.sort(breedsAscSorter).reverse();
		}

		result = result.splice(0, limit);

		return result;
	}, [rawBreeds, order, limit]);

	const onBreedNameChange = useCallback(
		({ value, text }: SelectBreed) => {
			setSelectedBreed(text);
			history.push(`${ensureLeadingSlash(history.location.pathname)}${value}`);
		},
		[history]
	);

	const onLimitChange = useCallback(
		({ value }) => {
			dispatch(setLimit(value));
		},
		[dispatch]
	);

	const onSortChange = useCallback(
		(sort: SortDirection) => {
			dispatch(setSortingOrder(sort));
		},
		[dispatch]
	);

	return (
		<>
			<div className={styleNames('root', { isLoading: isLoading })}>
				<div className={styleNames('nav')}>
					<NavGoBack title='breeds' />
					{!isLoading && !search ? (
						<div className={styleNames('right')}>
							<Select
								options={[ALL_BREEDS, ...breedNames].map(name => ({
									value: name.value,
									text: name.name,
								}))}
								value={selectedBreed}
								className={styleNames('breedSelect')}
								onChange={onBreedNameChange}
							/>

							<div className={styleNames('navRight')}>
								<Select
									options={limitSelectOptions}
									value={limit}
									onChange={onLimitChange}
								/>
								<IconButton
									icon='asc'
									variant='gray'
									active={order === 'asc'}
									className={styleNames('orderBtn')}
									onClick={() => onSortChange('asc')}
								/>
								<IconButton
									icon='desc'
									variant='gray'
									active={order === 'desc'}
									className={styleNames('orderBtn')}
									onClick={() => onSortChange('desc')}
								/>
							</div>
						</div>
					) : null}
				</div>
				<GridView
					data={breeds}
					isLoading={isLoading}
					loadingTitle='Loading breeds page...'
				/>
			</div>
		</>
	);
};
