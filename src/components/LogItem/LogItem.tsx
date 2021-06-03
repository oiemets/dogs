import bindStyles from 'classnames/bind';
import styles from './LogItem.module.css';
import { Heart, Smile, Sad } from '../../assets';

const styleNames = bindStyles.bind(styles);

const iconsMap = {
	favourites: Heart,
	dislikes: Sad,
	likes: Smile,
	none: '',
};

type LogItemProps = {
	className?: string;
	icon?: keyof typeof iconsMap;
	image_id?: string | number;
	time?: string;
	location?: string;
	text?: string;
};

export const LogItem: React.FC<LogItemProps> = ({
	className,
	icon = 'favourites',
	image_id,
	time,
	location,
	text,
}) => {
	const Icon = iconsMap[icon];
	return (
		<div className={styleNames('root', className)}>
			<div className={styleNames('info')}>
				<h3 className={styleNames('time')}>{`${time}`}</h3>
				<h3 className={styleNames('title')}>
					Image ID:<span className={styleNames('id')}>{`${image_id}`}</span>
					<span className={styleNames('text')}>{`${text}`}</span>
					<span className={styleNames('location')}>{`${location}`}</span>
				</h3>
			</div>
			{icon !== 'none' && <Icon className={styleNames('icon', icon)} />}
		</div>
	);
};
