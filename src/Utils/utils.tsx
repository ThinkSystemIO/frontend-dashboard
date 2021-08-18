export const pollIsServiceDeployed = async (name: string): Promise<boolean> => {
  let status = 0

  try {
    for (let i = 0; status !== 200; i++) {
      const response = await fetch(`./${name}`)
      status = response.status
      await new Promise(r => setTimeout(r, 1000));
      if (i === 30) return false
    }
  } catch (e) {
    console.error(e)
    return false
  }

  return true
}

export const isServiceDeployed = async (name: string): Promise<boolean> => {
  try {
    const response = await fetch(`./${name}`)
    return response.status === 200
  } catch (e) {
    console.error(e)
  }
  return false
}

export const activateService = async (name: string): Promise<boolean> => {
  try {
    const response = await fetch(`./${name}/activate`)
    return response.status === 200
  } catch (e) {
    console.error(e)
  }
  return false
}