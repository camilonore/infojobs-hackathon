import { token } from '@utils/index'
import type {
  Facet,
  JobList,
  OfferDetailsResponse,
  OfferResponse
} from 'types/infojobsApiTypes'

class InfojobsService {
  private static headers = {
    Authorization: `Basic ${token}`
  }

  private static async fetchApi(url: string): Promise<Response> {
    return fetch(url, {
      headers: InfojobsService.headers
    })
  }

  static async getRelevantJobs(): Promise<JobList> {
    const url =
      'https://api.infojobs.net/api/9/offer?order=relevancia-desc&maxResults=5'
    const response = await InfojobsService.fetchApi(url)
    return response.json()
  }

  static async getFacets(): Promise<Facet[]> {
    const url = 'https://api.infojobs.net/api/9/offer?facets=true&maxResults=1'
    const response = await InfojobsService.fetchApi(url)
    const data: OfferResponse = await response.json()
    const facets = data.facets
    return facets
  }

  static async getOfferDetails(offerId: string): Promise<OfferDetailsResponse> {
    const url = `https://api.infojobs.net/api/7/offer/${offerId}`
    const response = await InfojobsService.fetchApi(url)
    return response.json()
  }

  static async searchOffers(query: string): Promise<OfferResponse> {
    const url = `https://api.infojobs.net/api/9/offer?${query}`
    const response = await InfojobsService.fetchApi(url)
    return response.json()
  }
}

export { InfojobsService }
