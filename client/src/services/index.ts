

export const checkinDailyHealth = async (factors: IDailyHealth)=> {
  const resp = await fetch("/api//checkin", {
    headers: {
    "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(factors)
  })
  return await resp.json() as {suggesstions: string[]};
}