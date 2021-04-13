import axios from 'axios';
import { Breed, BreedSearchResult, 
        BreedsListQueryParams, FavListQueryParams, 
        Favourite, FavPostRequest
} from './types';


export class TheDogsAPIClient {
  static readonly baseUrl = 'https://api.thedogapi.com/v1/';
  constructor(private key: string) {}

  private authHeader = {
    headers: { 'x-api-key': this.key }
  };

  private url = (chunk: string) => TheDogsAPIClient.baseUrl + chunk;

  private doGetRequest = async <T>(url: string) => (await axios.get<T>(url, this.authHeader)).data;

  private doPostRequest = async <T>(url: string, payload: {[key: string]: string}) => (await axios.post<T>(url, payload, this.authHeader)).data;

  private breedsList = (params: string) => 
    this.doGetRequest<Breed[]>(this.url(`breeds?${params}`));

  private breedsSearch = (query: string) => 
    this.doGetRequest<BreedSearchResult[]>(this.url(`breeds/search?q=${query}`));

  private favList = (params: string) => 
    this.doGetRequest<Favourite[]>(this.url(`favourites?${params}`));

  private addFavourite = (payload: FavPostRequest) => 
    this.doPostRequest<FavPostRequest[]>(this.url(`favourites`), payload);

  breeds = () => ({
    search: (q: string) => this.breedsSearch(q),
    list: (params: BreedsListQueryParams = { order: 'asc' }) => 
      this.breedsList(new URLSearchParams(params).toString())
  });

  favourites = () => ({
    add: (payload: FavPostRequest) => this.addFavourite(payload),
    list: (params: FavListQueryParams = { sub_id: '' }) => this.favList(new URLSearchParams(params).toString())
  });
};

