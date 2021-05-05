import axios, { AxiosRequestConfig } from 'axios';
import {
  Breed, BreedSearchResult,
  BreedsListQueryParams, Favourite,
  FavouritesListQueryParams, FavouriteID,
  AddFavouritePayload, AddFavouriteResponse, PublicImage, ImagesListQueryParams
} from './types';
import { toQueryParamsString } from '../utils';
export class TheDogsAPIClient {

  static readonly baseUrl = 'https://api.thedogapi.com/v1/';
  constructor(private key: string) { }

  /** General */
  private authHeader = { headers: { 'x-api-key': this.key } };

  private url = (chunk: string) => TheDogsAPIClient.baseUrl + chunk;

  private doGetRequest = async <T>(url: string) => (await axios.get<T>(url, this.authHeader)).data;

  private doPostRequest = async <T>(url: string, payload: Record<string, string>) => (await axios.post<T>(url, payload, this.authHeader)).data;

  private doDeleteRequest = async <T>(url: string, config: AxiosRequestConfig) => (await axios.delete<T>(url, config)).data;


  /** Breeds */
  private breedsList = (params: string) =>
    this.doGetRequest<Breed[]>(this.url(`breeds?${params}`));

  private breedsSearch = (query: string) =>
    this.doGetRequest<BreedSearchResult[]>(this.url(`breeds/search?q=${query}`));


  /** Favourites */
  private favouritesList = (params: string) => this.doGetRequest<Favourite[]>(this.url(`favourites?${params}`));

  private getFavourite = (id: FavouriteID) => this.doGetRequest<Favourite>(this.url(`favourites/${id}`));

  private addFavourite = (payload: AddFavouritePayload) => this.doPostRequest<AddFavouriteResponse>(this.url(`favourites`), payload);

  private deleteFavourite = (id: FavouriteID) => this.doDeleteRequest<Response>(this.url(`favourites/${id}`), this.authHeader);


  /** Images */
  private imagesList = (params: string) => this.doGetRequest<PublicImage[]>(this.url(`images/search?${params}`));



  breeds = () => ({
    search: (q: string) => this.breedsSearch(q),
    list: (params: BreedsListQueryParams = { order: 'asc' }) =>
      this.breedsList(new URLSearchParams(params).toString())
  });

  favourites = () => ({
    list: (params?: FavouritesListQueryParams) => this.favouritesList(toQueryParamsString(params)),
    getById: (id: FavouriteID) => this.getFavourite(id),
    add: (payload: AddFavouritePayload) => this.addFavourite(payload),
    delete: (id: FavouriteID) => this.deleteFavourite(id)
  });

  images = () => ({
    list: (params: ImagesListQueryParams) => this.imagesList(toQueryParamsString(params))
  });
};

