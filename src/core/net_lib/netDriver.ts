import axios, { AxiosInstance } from "axios";


export class NetDriver {
  public readonly instance: AxiosInstance;
  public baseUrl: string;

  constructor(_baseUrl: string){
    this.baseUrl = _baseUrl;
    this.instance = axios.create({
      baseURL: _baseUrl
    });
  }


  public async get<T>(){

  }
  public async post<T>(){

  }
  public async put<T>(){

  }
  public async delete<T>(){

  }


}