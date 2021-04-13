import { Button, ButtonProps } from '../Button/Button';
import styles from './IconButton.module.css';
import classNames from 'classnames/bind';
import {
  Approved, ArrowLeft, Close, Error, 
  Heart,  HeartFilled, Search, 
  OrderDown, OrderUp, Refresh, 
  Sad, Smile, Upload
} from '../../assets';
import styled from 'styled-components';

const styleNames = classNames.bind(styles);

const iconsMap = {
  approved: Approved,
  arrowLeft: ArrowLeft,
  close: Close,
  error: Error,
  heart: Heart,
  heartFilled: HeartFilled,
  search: Search,
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

const IconStyled = styled.span `
  margin: 0,
  display: inline-block,
  outline: none,
  padding: 10px,
  borderRadius: '20px'
`;

export const IconButton: React.FC<IconButtonProps> = ({ 
  icon, 
  variant = 'white', 
  color = '',
  size = 'S',
  className,
  onClick
  }) => {
    const theme = styleNames('icon', className, styles[size]);
    const iconColor = colors[color] ?? color;
    const Icon = iconsMap[icon];
    return (
      <Button
        onClick={onClick}
        className={theme}
        variant={variant}
      >
        <IconStyled>
          <Icon style={{color: iconColor}}/>
        </IconStyled>
      </Button>
    );
};