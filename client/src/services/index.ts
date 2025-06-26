

export const checkinDailyHealth = async (factors: IDailyHealth)=> {
  const resp = await fetch("/api/checkin", {
    headers: {
    "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(factors)
  })
  if (!resp.ok){
    const respError = await resp.json()
    throw new Error(respError.message)
  }
  return await resp.json() as {suggesstions: string[]};
}