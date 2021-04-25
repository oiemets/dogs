import { AppAction, AppCommand } from '../types';
import { PublicImage } from '../../thedogsapi';

export type ImagesLoadStart = AppAction<'ImagesLoadStart'>;

export type ImagesLoadSuccess = AppAction<'ImagesLoadSuccess', PublicImage[]>;

export const imagesLoadStart = (): ImagesLoadStart => ({
  type: 'ImagesLoadStart'
});

export const imagesLoadSuccess = (images: PublicImage[]): ImagesLoadSuccess => ({
  type: 'ImagesLoadSuccess',
  payload: images
});

export const loadImages = (breed_id: string, limit?: string): AppCommand =>
  async (dispatch, _, { api }) => {
    dispatch(imagesLoadStart());
    const images = await api.images().list({ breed_id, limit });
    dispatch(imagesLoadSuccess(images));
  };