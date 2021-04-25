import React from 'react';
import styles from './IconFrame.module.css';
import bindStyles from 'classnames/bind';
import { ButtonLabel } from '../ButtonLabel/ButtonLabel';
import { Link } from 'react-router-dom';

type IconFrameProps = {
  target: 'voting' | 'breeds' | 'gallery';
  active?: boolean
}

const titleMap: Record<IconFrameProps["target"], string> = {
  voting: 'Voting',
  breeds: 'Breeds',
  gallery: 'Gallery'
}

const urlsMap: Record<IconFrameProps["target"], string> = {
  voting: '/voting',
  breeds: '/breeds',
  gallery: '/gallery'
}

const styleNames = bindStyles.bind(styles);

export const IconFrame: React.FC<IconFrameProps> = ({
  target,
  active
}) => {
  return (
    <Link
      to={urlsMap[target]}
      className={styleNames('labelRoot', { activeLabelRoot: active })}
    >
      <ButtonLabel
        beforeLabel={
          <span
            className={styleNames('icon', target, { iconActive: active })}
          />
        }
        labelClassName={styleNames('label')}
        active={active}
      >
        {titleMap[target]}
      </ButtonLabel>
    </Link>
  );
};