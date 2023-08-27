import { token } from '@utils/index'
import type {
  Facet,
  JobList,
  OfferDetailsResponse,
  OfferResponse
} from '../types/infojobsApiTypes'

class InfojobsServices {
  private static headers = {
    Authorization: `Basic ${token}`,
    'Access-Control-Allow-Origin': '*'
  }

  private static async fetchApi(url: string): Promise<Response> {
    return fetch(url, {
      headers: InfojobsServices.headers
    })
  }

  static async getRelevantJobs(): Promise<JobList> {
    const url =
      'https://api.infojobs.net/api/9/offer?order=relevancia-desc&maxResults=5'
    const response = await InfojobsServices.fetchApi(url)
    return response.json()
  }

  static async getFacets(): Promise<Facet[]> {
    const url = 'https://api.infojobs.net/api/9/offer?facets=true&maxResults=1'
    const response = await InfojobsServices.fetchApi(url)
    const data: OfferResponse = await response.json()
    const facets = data.facets
    return facets
  }

  static async getOfferDetails(offerId: string): Promise<OfferDetailsResponse> {
    const url = `https://api.infojobs.net/api/7/offer/${offerId}`
    const response = await InfojobsServices.fetchApi(url)
    return response.json()
  }

  static async searchOffers(query: string): Promise<OfferResponse> {
    console.log(this.headers)
    const url = `https://api.infojobs.net/api/9/offer?${query}`
    const response = await InfojobsServices.fetchApi(url)
    return response.json()
  }
}

export { InfojobsServices }
