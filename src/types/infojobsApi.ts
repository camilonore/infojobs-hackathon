interface Province {
  id: number
  value: string
}

interface Category {
  id: number
  value: string
}

interface ContractType {
  id: number
  value: string
}

interface Subcategory {
  id: number
  value: string
}

interface Salary {
  id: number
  value: string
}

interface Experience {
  id: number
  value: string
}

interface WorkDay {
  id: number
  value: string
}

interface Study {
  id: number
  value: string
}

interface Teleworking {
  id: number
  value: string
}

interface Author {
  id: string
  privateId: number
  name: string
  uri: string
  corporateResponsive: boolean
  showCorporativeHeader: boolean
  logoUrl?: string
}

interface JobItem {
  id: string
  title: string
  province: Province
  city: string
  link: string
  category: Category
  contractType: ContractType
  subcategory: Subcategory
  salaryMin: Salary
  salaryMax: Salary
  salaryPeriod: Salary
  experienceMin: Experience
  workDay: WorkDay
  study: Study
  teleworking: Teleworking
  published: string
  updated: string
  author: Author
  requirementMin: string
  bold: boolean
  applications: string
  subSegment: number
  executive: boolean
  salaryDescription: string
  multiProvince: boolean
  urgent: boolean
  color: boolean
}

interface JobList {
  currentPage: number
  pageSize: number
  totalResults: number
  currentResults: number
  totalPages: number
  availableSortingMethods: string[]
  sortBy: string
  sinceDate: string
  items: JobItem[]
}

type FacetValue = {
  key: string
  value: string
  count: number
}

type Facet = {
  key: string
  name: string
  values: FacetValue[]
}

type City = {
  key: string
  value: string
  count: number
}

type Offer = {
  id: string
  title: string
  province: Province
  city: string
  link: string
  category: Category
  contractType: ContractType
  subcategory: Subcategory
  salaryMin: Salary
  salaryMax: Salary
  salaryPeriod: Salary
  experienceMin: Experience
  workDay: WorkDay
  study: Study
  teleworking: Teleworking
  published: string
  updated: string
  author: Author
  requirementMin: string
  bold: boolean
  applications: string
  subSegment: number
  executive: boolean
  salaryDescription: string
  multiProvince: boolean
  urgent: boolean
  color: boolean
}

type OfferResponse = {
  currentPage: number
  pageSize: number
  totalResults: number
  currentResults: number
  totalPages: number
  availableSortingMethods: string[]
  sortBy: string
  sinceDate: string
  items: Offer[]
  dataLayer: {
    offer_search_page: string
    offer_search_page_limit: string
    region_level2_id: string
  }
  facets: Facet[]
  queryParameters: {
    study: string[]
    province: string[]
    salaryPeriod: string
    city: string[]
    contractType: string[]
    query: string
    experienceMin: string[]
    category: string[]
    workDay: string[]
    teleworking: string[]
  }
  eligibleForAutomaticAlertCreation: boolean
  offers: Offer[]
}

export type { JobList, JobItem, OfferResponse }
