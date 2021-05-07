import { Link } from 'react-router-dom';
import { Logo } from '../../assets';

export type LogoProps = {
  linkToRoot: boolean;
  className?: string;
};

export const Logotype: React.FC<LogoProps> = ({
  linkToRoot = true,
  className
}) => {
  const image = <Logo className={className} />;

  if (linkToRoot) {
    return <Link to={'/'}>{image}</Link>
  }

  return image;
};
