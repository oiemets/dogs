import styles from './IconButton.module.css';
import { Button, ButtonProps } from '../Button/Button';
import classNames from 'classnames/bind';
import {
  Approved, ArrowLeft, Close, Error, 
  Heart,  HeartFilled, MagnifyingGlass, 
  OrderDown, OrderUp, Refresh, 
  Sad, Smile, Upload
} from '../../assets';

const styleNames = classNames.bind(styles);

const iconsMap = {
  approved: Approved,
  arrowLeft: ArrowLeft,
  close: Close,
  error: Error,
  heart: Heart,
  heartFilled: HeartFilled,
  magnifyingGlass: MagnifyingGlass,
  orderDown: OrderDown,
  orderUp: OrderUp,
  refresh: Refresh,
  sad: Sad,
  smile: Smile,
  upload: Upload
};

type Color = 'white' | 'pink' | 'green' | 'orange' | string;

const colors: Record<Color, string> = {
  white: '#FFFFFF',
  pink: '#FF868E',
  green: '#97EAB9', 
  orange: '#FFD280'
};

interface IconButtonProps extends ButtonProps {
  icon: keyof typeof iconsMap;
  color?: keyof typeof colors;
  size?: 'S' | 'M' | 'L';
};

const iconVariant = {
  white: styleNames('icon', 'white'),
  whiteDark: styleNames('icon', 'whiteDark'),
  satin: styleNames('icon', 'satin'),
  geraldine: styleNames('icon', 'geraldine'),
  gray: styleNames('icon', 'gray')
};

export const IconButton: React.FC<IconButtonProps> = ({ 
  icon, 
  variant = 'white', 
  color,
  size = 'S',
  className
  }) => {
    const theme = classNames(iconVariant[variant], styles[size]);
    const Icon = iconsMap[icon];
    if(color && color === colors[color]) {
      color = colors[color];
    }
    return (
      <Button
        className={className ? className : theme}
        variant={variant}
      >
        <Icon style={{color}}/>
      </Button>
    );
}