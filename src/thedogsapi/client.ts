import axios from 'axios';
import { Breed, BreedSearchResult, 
        BreedsListQueryParams, FavListQueryParams, 
        Favourite, FavPostRequest, DeleteRequestConfig,
        DeleteRequestPayload
} from './types';


export class TheDogsAPIClient {
  static readonly baseUrl = 'https://api.thedogapi.com/v1/';
  constructor(private key: string) {}

  private authHeader = { headers: { 'x-api-key': this.key } };

  private deleteReqConfig = (id: string): DeleteRequestConfig<DeleteRequestPayload> => ({...this.authHeader, data: { favourite_id: id }});

  private url = (chunk: string) => TheDogsAPIClient.baseUrl + chunk;

  private doGetRequest = async <T>(url: string) => (await axios.get<T>(url, this.authHeader)).data;

  private doPostRequest = async <T>(url: string, payload: {[key: string]: string}) => (await axios.post<T>(url, payload, this.authHeader)).data;

  private doDeleteRequest = async <T>(url: string, config: DeleteRequestConfig<any>) => (await axios.delete<T>(url, config)).data;

  private breedsList = (params: string) => 
    this.doGetRequest<Breed[]>(this.url(`breeds?${params}`));

  private breedsSearch = (query: string) => 
    this.doGetRequest<BreedSearchResult[]>(this.url(`breeds/search?q=${query}`));

  private favList = (params: string) => 
    this.doGetRequest<Favourite[]>(this.url(`favourites?${params}`));

  private addFavourite = (payload: FavPostRequest) => 
    this.doPostRequest<FavPostRequest[]>(this.url(`favourites`), payload);

  private getFavourite = (id: string) => 
    this.doGetRequest<Favourite>(this.url(`favourites/${id}`));

  private deleteFavourite = (id: string) => 
    this.doDeleteRequest(this.url(`favourites/${id}`), this.deleteReqConfig(id));


  breeds = () => ({
    search: (q: string) => this.breedsSearch(q),
    list: (params: BreedsListQueryParams = { order: 'asc' }) => 
      this.breedsList(new URLSearchParams(params).toString())
  });

  favourites = () => ({
    list: (params: FavListQueryParams = { sub_id: '' }) => this.favList(new URLSearchParams(params).toString()),
    add: (payload: FavPostRequest) => this.addFavourite(payload),
    get: (id: string) => this.getFavourite(id),
    del: (id: string) => this.deleteFavourite(id)
  });
};

