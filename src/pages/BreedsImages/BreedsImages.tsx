import React, { useEffect } from 'react';
import { Link, useRouteMatch, useHistory } from 'react-router-dom';
import { useTypedSelector } from '../../hooks';
import {
  breedsData,
  breedsReady,
  breedsSelectOptions,
  useAppDispatch
} from '../../state';
import {
  Grid,
  ButtonLabel,
  roundedClassName,
  Select,
  IconButton,
  Button
} from '../../components';
import bindStyles from 'classnames/bind';
import styles from './BreedsImages.module.css';
import { Breed } from '../../thedogsapi';
import { loadBreeds } from '../../state/actions';
import { Patch } from '../../assets';

const styleNames = bindStyles.bind(styles);

const limitSelectOptions = ['5', '10', '15', '20'].map(n => ({
  value: n,
  text: `Limit: ${n}`
}));

export const BreedsImages: React.FC = () => {
  const { path } = useRouteMatch();
  const renderItem = getRenderItem(path);
  const dispatch = useAppDispatch();
  const history = useHistory();
  const historyGoBack = () => history.goBack();
  // const [breeds, setBreeds] = useState<any[]>([]);

  useEffect(() => {
    dispatch(loadBreeds());
  }, [dispatch]);

  const isLoading = !useTypedSelector(state => breedsReady(state));
  const breeds = useTypedSelector(state => breedsData(state));
  const breedsOptions = useTypedSelector(state => breedsSelectOptions(state));

  const onChangeTest = (e: any) => console.log(e.target.value);

  return (
    <div className={styleNames('root', { 'isLoading': isLoading })}>
      <div className={styleNames('nav')}>
        <IconButton
          icon='arrowLeft'
          variant='satin'
          onClick={historyGoBack}
          className={styleNames('icon')}
        />
        <Link
          to={'/breeds'}
          className={styleNames('linkBtn')}
        >
          <Button
            variant='geraldine'
            labelClassName={styleNames('navBtn')}
          >
            breeds
          </Button>
        </Link>
        {
          !isLoading ?
            <>
              <Select
                option={breedsOptions}
                defaultOpt='All breeds'
                className={styleNames('breedSelect')}
                onChange={onChangeTest}
              />

              <div className={styleNames('navRight')}>
                <Select
                  option={limitSelectOptions}
                  defaultOpt='10'
                  onChange={onChangeTest}
                />
                <IconButton
                  icon='orderUp'
                  variant='gray'
                  className={styleNames('orderBtn')}
                  onClick={() => console.log('up')}
                />
                <IconButton
                  icon='orderDown'
                  variant='gray'
                  className={styleNames('orderBtn')}
                  onClick={() => console.log('down')}
                />
              </div>
            </> :
            null
        }
      </div>

      {
        isLoading ?
          <h3 className={styleNames('loadingTitle')}>
            Loading breeds page...
          </h3> :
          <div className={styleNames('grid')}>
            <Grid
              data={breeds}
              renderItem={renderItem}
            />
          </div>
      }
    </div>
  );
};

const getRenderItem = (path: string) => ({ id, name, image }: Breed) =>
  <Link
    to={`${path}/${id}`}
    className={styleNames('link')}
    key={id}
  >
    {
      image ?
        <img
          src={`${image.url}`}
          alt={`${name} Breed`}
          className={styleNames('img')}
        /> :
        <Patch />
    }
    <ButtonLabel
      labelClassName={styleNames('btn', roundedClassName)}
    >
      {name}
    </ButtonLabel>
  </Link>;

