import styles from './Button.module.css';

export interface ButtonProps {
  variant: string;
  onclick: (e: React.SyntheticEvent) => void;
  className?: string;
}

const btnVariant= {
  white: `${styles.btn} ${styles.btn_white}`,
  satin: `${styles.btn} ${styles.btn_satin}`,
  geraldine: `${styles.btn} ${styles.btn_geraldine}`
};

const btnTheme = (variant: string): string => {
  const { white, satin, geraldine } = btnVariant;
  switch(variant) {
    case 'white': return white;
    case 'satin': return satin;
    case 'geraldine': return geraldine;
    default: return '';
  }
}

export const Button: React.FC<ButtonProps> = ({ children, onclick, variant, className }) => {
  return (
    <button 
      className={className ? `${className} ${btnTheme(variant)}` : btnTheme(variant)}
      onClick={onclick}
    >
        {children}
    </button>
  );
}