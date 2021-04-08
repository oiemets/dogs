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
};

const iconPicker = (icon: string) => {
  switch (icon) {
    case 'approved': return <Approved />;
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

export const IconButton: React.FC<IconButtonProps> = ({ icon, variant, onclick }) => {
  return (
    <Button
      className=
        {
          variant === 'geraldine' 
          ? 
          `${styles.btn_icon} ${styles.icon}`
          :
          `${styles.btn_icon}`
        }
      variant={variant}
      onclick={onclick}
    >
      {iconPicker(icon)}
    </Button>
  );
}