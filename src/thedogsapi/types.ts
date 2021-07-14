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

export type ActionValue = 1 | 0;

export type FavouriteResponse = {
	id: FavouriteID;
	created_at: string;
	image_id: string;
	image: Partial<Image>;
	sub_id: string | null;
	user_id: string;
};

export type FavouritesListQueryParams = ListQueryParams & {
	sub_id?: string;
};

export type FavouriteID = number | string;

export type AddFavouritePayload = {
	image_id: string;
	sub_id?: string;
};

export type PublicImage = BreedImage & {
	breeds: Omit<Breed, 'image'>[];
};

export type ImagesListQueryParams = ListQueryParams & {
	breed_id: string;
};

export type VoteResponse = {
	country_code: string;
	created_at: string;
	id: number | string;
	image_id: string;
	sub_id: string | null;
	value: ActionValue;
};

export type AddVotePayload = {
	image_id: string;
	sub_id?: string;
	value: ActionValue;
};

export type ActionResponse = {
	id: number;
	message: string;
};
