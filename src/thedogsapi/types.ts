type Size = {
	imperial: string;
	metric: string;
};

type Image = {
	id: string;
	url: string;
};

type BreedImage = Image & {
	height: number;
	width: number;
};

type ListQueryParams = {
	limit?: string;
	page?: string;
};

export type Breed = {
	id: number | string;
	name: string;
	bred_for?: string;
	breed_group?: string;
	height?: Size;
	image?: BreedImage;
	life_span?: string;
	reference_image_id?: string;
	origin?: string;
	temperament?: string;
	weight?: Size;
};

export type BreedSearchResult = Omit<Breed, 'image'>;

export type BreedsListQueryParams = ListQueryParams & {
	order?: 'asc' | 'desc';
};

export type Favourite = {
	created_at: string;
	id: FavouriteID;
	image_id: string;
	image?: Image;
	sub_id?: string;
	user_id?: string;
};

export type FavouritesListQueryParams = ListQueryParams & {
	sub_id?: string;
};

export type FavouriteID = number | string;

export type AddFavouritePayload = {
	image_id: string;
	sub_id?: string;
};

export type AddFavouriteResponse = {
	message: string;
	id: string | number;
};

export type PublicImage = BreedImage & {
	breeds: Omit<Breed, 'image'>[];
};

export type ImagesListQueryParams = ListQueryParams & {
	breed_id: string;
};

export type Vote = Omit<Favourite, 'image' | 'user_id'> & {
	country_code?: string;
	value?: number;
};
