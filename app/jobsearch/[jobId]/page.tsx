import { InfojobsServices } from '@services/infojobsServices'

interface Props {
  params: {
    jobId: string
  }
}

export default async function JobIdPage({ params }: Props) {
  const { jobId } = params
  const jobDetails = await InfojobsServices.getOfferDetails(jobId ?? '')
  return (
    <div>
      <h1>{JSON.stringify(jobDetails)}</h1>
    </div>
  )
}
