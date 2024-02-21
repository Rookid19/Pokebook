import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { toast } from 'react-toastify';

export const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',

});

export const fetcher = <Data>(
  url: string,
  method: AxiosRequestConfig['method'] = 'GET',
  payload?: any,
): Promise<AxiosResponse<Data>> => {
  return new Promise<AxiosResponse<Data>>((resolve, reject) => {
    const config: AxiosRequestConfig = {
      url,
      method,
      headers: {
        'Content-Type': 'application/json',
      },
    };

    if (payload) {
      config.data = payload;
    }

    api
      .request<Data>(config)
      .then((response: AxiosResponse<Data>) => {
        resolve(response);
      })
      .catch((error) => {
        console.log("roo", error.message)
    
        reject(error);
      })
  });
};
