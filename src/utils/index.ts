const clientId = import.meta.env.PUBLIC_INFOJOBS_CLIENTID
const clientSecret = import.meta.env.PUBLIC_INFOJOBS_CLIENTSECRET
const token = btoa(`${clientId}:${clientSecret}`)

export { token }
