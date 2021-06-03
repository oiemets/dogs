import { useEffect } from 'react';
import bindStyles from 'classnames/bind';
import styles from './Log.module.css';
import { LogItem } from '../LogItem';
import { useTypedSelector } from '../../hooks';
import { useAppDispatch, loadVotes, loadFavourites, getLog } from '../../state';
import { getTimeFromIso, getDateFromIso } from '../../utils';

const styleNames = bindStyles.bind(styles);

export const Log: React.FC = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(loadVotes());
		dispatch(loadFavourites());
	}, [dispatch]);

	const log = useTypedSelector(state => getLog(state));

	return (
		<div className={styleNames('root')}>
			{log.map(({ image_id, created_at, location, action, message }) => (
				<LogItem
					key={created_at}
					icon={action === 'added' ? location : 'none'}
					time={getDateFromIso(created_at ?? '')}
					image_id={image_id}
					text={`${!message || message === 'SUCCESS' ? 'was' : "wasn't"}
          ${action}
          ${action === 'added' ? 'to' : 'from'}
          `}
					location={location}
				/>
			))}
		</div>
	);
};
