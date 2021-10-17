import { useEffect } from 'react';
import bindStyles from 'classnames/bind';
import styles from './Log.module.css';
import { LogItem, LogItemProps } from '../LogItem';
import { useTypedSelector } from '../../hooks';
import {
	useAppDispatch,
	loadVotes,
	loadFavourites,
	actionsLog,
	LogItem as LogItemData,
} from '../../state';
import { getTimeFromIso, getDateFromIso } from '../../utils';
import { ActionValue } from '../../thedogsapi';

const styleNames = bindStyles.bind(styles);

export type LogProps = {
	data: LogItemData[];
};

const getIconName = (
	type: LogItemData['type'],
	value: ActionValue
): LogItemProps['icon'] => {
	switch (type) {
		case 'favorite':
			return value ? 'favorite' : 'none';
		case 'vote':
			return value ? 'like' : 'dislike';
	}
};

const getLocationName = (
	type: LogItemData['type'],
	value: ActionValue
): LogItemProps['location'] => {
	switch (type) {
		case 'favorite':
			return 'Favorites';
		case 'vote':
			return value ? 'Likes' : 'Dislikes';
	}
};

export const Log: React.FC<LogProps> = ({ data }) => {
	return (
		<div className={styleNames('root')}>
			{data.map(({ created_at, value, type, image_id }) => (
				<LogItem
					key={created_at}
					icon={getIconName(type, value)}
					time={getDateFromIso(created_at ?? '')}
					image_id={image_id}
					location={getLocationName(type, value)}
				/>
			))}
		</div>
	);
};
