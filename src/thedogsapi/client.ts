import axios, { AxiosRequestConfig } from 'axios';
import {
	Breed,
	BreedSearchResult,
	BreedsListQueryParams,
	Favourite,
	FavouritesListQueryParams,
	FavouriteID,
	AddFavouritePayload,
	PublicImage,
	ImagesListQueryParams,
	Vote,
	AddVotePayload,
	Response,
} from './types';

export class TheDogsAPIClient {
	static readonly baseUrl = 'https://api.thedogapi.com/v1/';
	constructor(private key?: string) {
		if (!key) {
			throw new Error('Key required!');
		}
	}

	/** General */
	private authHeader = { headers: { 'x-api-key': this.key } };

	private url = (chunk: string) => TheDogsAPIClient.baseUrl + chunk;

	private doGetRequest = async <T>(url: string) =>
		(await axios.get<T>(url, this.authHeader)).data;

	private doPostRequest = async <T>(
		url: string,
		payload: Record<string, string | number>
	) => (await axios.post<T>(url, payload, this.authHeader)).data;

	private doDeleteRequest = async <T>(
		url: string,
		config: AxiosRequestConfig
	) => (await axios.delete<T>(url, config)).data;

	/** Breeds */
	private breedsList = (params: string) =>
		this.doGetRequest<Breed[]>(this.url(`breeds?${params}`));

	/** Search */
	private breedsSearch = (query: string) =>
		this.doGetRequest<BreedSearchResult[]>(
			this.url(`breeds/search?q=${query}`)
		);

	/** Favourites */
	private favouritesList = (params: string) =>
		this.doGetRequest<Favourite[]>(this.url(`favourites?${params}`));

	private getFavourite = (id: FavouriteID) =>
		this.doGetRequest<Favourite>(this.url(`favourites/${id}`));

	private addFavourite = (payload: AddFavouritePayload) =>
		this.doPostRequest<Response>(this.url(`favourites`), payload);

	private deleteFavourite = (id: FavouriteID) =>
		this.doDeleteRequest<Response>(
			this.url(`favourites/${id}`),
			this.authHeader
		);

	/** Images */
	private imagesList = (params: string) =>
		this.doGetRequest<PublicImage[]>(this.url(`images/search?${params}`));

	private randomImage = () =>
		this.doGetRequest<PublicImage[]>(this.url('images/search'));

	/** Votes */
	private votesList = () => this.doGetRequest<Vote[]>(this.url('votes'));

	private addVote = (payload: AddVotePayload) =>
		this.doPostRequest<Response>(this.url('votes'), payload);

	breeds = () => ({
		list: (params: BreedsListQueryParams = { order: 'asc' }) =>
			this.breedsList(new URLSearchParams(params).toString()),
	});

	search = () => ({
		searchByName: (query: string) => this.breedsSearch(query),
	});

	favourites = () => ({
		list: (params?: FavouritesListQueryParams) =>
			this.favouritesList(new URLSearchParams(params).toString()),
		getById: (id: FavouriteID) => this.getFavourite(id),
		add: (payload: AddFavouritePayload) => this.addFavourite(payload),
		delete: (id: FavouriteID) => this.deleteFavourite(id),
	});

	images = () => ({
		list: (params: ImagesListQueryParams) =>
			this.imagesList(new URLSearchParams(params).toString()),
		getRandomImage: () => this.randomImage(),
	});

	votes = () => ({
		list: () => this.votesList(),
		add: (payload: AddVotePayload) => this.addVote(payload),
	});
}
