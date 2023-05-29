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

interface Province {
  id: number
  value: string
}

interface Experience {
  id: number
  value: string
}

interface Category {
  id: number
  value: string
}

interface Subcategory {
  id: number
  value: string
}

interface Studies {
  id: number
  value: string
}

interface Residence {
  id: number
  value: string
}

interface Country {
  id: number
  value: string
}

interface ContractType {
  id: number
  value: string
}

interface Journey {
  id: number
  value: string
}

interface Profile {
  id: string
  name: string
  description: string
  province: Province
  web: string
  numberWorkers: number
  logoUrl: string
  url: string
  corporateWebsiteUrl: string
  websiteUrl: string
  hidden: boolean
  typeIndustry: {
    id: number
    value: string
  }
  country: Country
  corporateResponsive: boolean
  showCorporativeHeader: boolean
  clientId: number
  followable: boolean
}

interface MaxPay {
  amount: number
  amountId: number
  periodId: number
  periodValue: string
  amountValue: string
}

interface MinPay {
  amount: number
  amountId: number
  periodId: number
  periodValue: string
  amountValue: string
}

interface JobLevel {
  id: number
  value: string
}

interface StaffInCharge {
  id: number
  value: string
}

interface Upsellings {
  highlightHomeMonth: boolean
  highlightHomeWeek: boolean
  highlightSubcategory: boolean
  highlightLogo: boolean
  highlightColor: boolean
  highlightUrgent: boolean
  highlightStandingOffer: boolean
}

interface Skill {
  skill: string
}

interface OfferDetailsResponse {
  title: string
  id: string
  state: number
  creationDate: string
  updateDate: string
  city: string
  externalUrlForm: string
  blocked: boolean
  applications: number
  province: Province
  experienceMin: Experience
  category: Category
  subcategory: Subcategory
  studiesMin: Studies
  residence: Residence
  country: Country
  contractType: ContractType
  journey: Journey
  subSegment: number
  profile: Profile
  cityPD: number
  zipCode: string
  latitude: number
  longitude: number
  exactLocation: boolean
  department: string
  vacancies: number
  minRequirements: string
  description: string
  desiredRequirements: string
  commissions: string
  contractDuration: string
  referenceId: string
  detailedStudiesId: number
  studying: boolean
  showPay: boolean
  multiProvince: boolean
  maxPay: MaxPay
  minPay: MinPay
  schedule: string
  jobLevel: JobLevel
  staffInCharge: StaffInCharge
  hasKillerQuestions: number
  hasOpenQuestions: number
  upsellings: Upsellings
  epreselec: boolean
  fiscalAddress: string
  shouldAskExportConsent: boolean
  exportConsentName: string
  link: string
  active: boolean
  archived: boolean
  deleted: boolean
  disponibleForFullVisualization: boolean
  availableForVisualization: boolean
  skillsList: Skill[]
  salaryDescription: string
}

export type { JobList, JobItem, OfferResponse, Facet, OfferDetailsResponse }
