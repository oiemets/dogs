import bindStyles from 'classnames/bind';
import styles from './LogItem.module.css';
import { Heart, Smile, Sad } from '../../assets';

const styleNames = bindStyles.bind(styles);

const iconsMap = {
	favourite: Heart,
	dislike: Sad,
	like: Smile,
	none: null,
};

export type LogItemProps = {
	icon: keyof typeof iconsMap;
	className?: string;
	image_id?: string | number;
	time?: string;
	location: 'Favorites' | 'Likes' | 'Dislikes';
};

export const LogItem: React.FC<LogItemProps> = ({
	className,
	icon,
	image_id,
	time,
	location,
}) => {
	const Icon = iconsMap[icon];
	return (
		<div className={styleNames('root', className)}>
			<div className={styleNames('info')}>
				<h3 className={styleNames('time')}>{`${time}`}</h3>
				<h3 className={styleNames('title')}>
					Image ID:<span className={styleNames('id')}>{`${image_id}`}</span>
					<span className={styleNames('text')}>
						was added to {`${location}`}
					</span>
					{/* <span className={styleNames('location')}>{`${location}`}</span> */}
				</h3>
			</div>
			{Icon && <Icon className={styleNames('icon', icon)} />}
		</div>
	);
};
