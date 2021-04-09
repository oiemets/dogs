import styles from './IconButton.module.css';
import { Button, ButtonProps } from '../Button/Button';
import {
  Approved, ArrowLeft, Close, Error, 
  Heart,  HeartFilled, MagnifyingGlass, 
  OrderDown, OrderUp, Refresh, 
  Sad, Smile, Upload
} from '../../assets';

interface IconButtonProps extends ButtonProps {
  icon: string;
  color: string;
};

const iconPicker = (icon: string) => {
  switch (icon) {
    case 'approved': return <Approved/>;
    case 'arrow_left': return <ArrowLeft/>;
    case 'close': return <Close/>;
    case 'error': return <Error/>;
    case 'heart': return <Heart/>;
    case 'heart_filled': return <HeartFilled/>;
    case 'magnifying_glass': return <MagnifyingGlass/>;
    case 'order_down': return <OrderDown/>;
    case 'order_up': return <OrderUp/>;
    case 'refresh': return <Refresh/>;
    case 'sad': return <Sad/>;
    case 'smile': return <Smile/>;
    case 'upload': return <Upload/>;
  }
};

const colors = {
  white: `${styles.white}`,
  pink: `${styles.pink}`,
  green: `${styles.green}`,
  orange: `${styles.orange}`
}

const fontColor = (color: string): string => {  
  const { white, pink, green, orange } = colors;
  switch (color) {
    case 'white': return white;
    case 'pink': return pink;
    case 'green': return green;
    case 'orange': return orange;
    default: return '';
  }
}

export const IconButton: React.FC<IconButtonProps> = ({ icon, variant, onclick, color }) => {
  return (
    <Button
      className={`${styles.icon} ${fontColor(color)}`}
      variant={variant}
      onclick={onclick}
    >
      {iconPicker(icon)}
    </Button>
  );
}