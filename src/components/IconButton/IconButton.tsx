import { Button, ButtonProps } from '../Button/Button';
import styles from './IconButton.module.css';
import bindStyles from 'classnames/bind';
import {
  Approved, ArrowLeft, Close, Error,
  Heart, HeartFilled, Search,
  OrderDown, OrderUp, Refresh,
  Sad, Smile, Upload
} from '../../assets';

type IconButtonProps = ButtonProps & {
  icon: keyof typeof iconsMap;
  color?: keyof typeof colors;
  size?: 'S' | 'M' | 'L';
};

type Color = 'white' | 'pink' | 'green' | 'orange' | string;

const styleClasses = bindStyles.bind(styles);

const iconsMap = {
  approved: Approved,
  arrowLeft: ArrowLeft,
  close: Close,
  error: Error,
  heart: Heart,
  heartFilled: HeartFilled,
  search: Search,
  asc: OrderDown,
  desc: OrderUp,
  refresh: Refresh,
  sad: Sad,
  smile: Smile,
  upload: Upload
};

const colors: Record<Color, string> = {
  white: '#FFFFFF',
  pink: '#FF868E',
  green: '#97EAB9',
  orange: '#FFD280'
};

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  variant = 'white',
  color = '',
  size = 'S',
  className,
  active,
  onClick
}) => {
  const theme = styleClasses('icon', size, className);
  const iconColor = colors[color] ?? color;
  const Icon = iconsMap[icon];
  return (
    <Button
      onClick={onClick}
      labelClassName={theme}
      variant={variant}
      active={active}
    >
      <Icon style={{ color: iconColor }} />
    </Button>
  );
};