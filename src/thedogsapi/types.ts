type Size = {
  imperial: string,
  metric: string
}

type Image = {
  id: string;
  url: string;
}

type BreedImage = Image & {
  height: number;
  width: number;
}

type ListQueryParams = {
  limit?: string;
  page?: string;
}

export type Breed = {
  id: number,
  name: string,
  bred_for?: string,
  breed_group?: string,
  height?: Size,
  image?: BreedImage,
  life_span?: string,
  reference_image_id?: string,
  origin?: string,
  temperament?: string,
  weight?: Size
}

export type BreedSearchResult = Omit<Breed, 'image'>

export type BreedsListQueryParams = ListQueryParams & {
  order?: 'asc' | 'desc';
}

export type Favourite = {
  created_at: string;
  id: string;
  image_id: string;
  image?: Image;
  sub_id?: string;
  user_id?: string;
}

export type FavListQueryParams = ListQueryParams & {
  sub_id?: string;
}

export type FavPostRequest = {
  image_id: string;
  sub_id?: string;
}

export type DeleteRequestPayload = {
  favourite_id: string;
}

export type DeleteRequestConfig<T> = {
  headers?: {[key: string]: string};
  data: T;
}
