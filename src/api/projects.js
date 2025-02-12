import { PROJECT_LIST, PROJECTS_DETAILS } from './data'

export const getProjectList = async () => {
  try {
    const response = await new Response(JSON.stringify(PROJECT_LIST), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    })

    return await response.json()
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const getProject = async (id) => {
  try {
    const response = await new Response(JSON.stringify(PROJECTS_DETAILS), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch article with id: ${id}`)
    }

    const data = await response.json()
    if (!data) return

    return data.find((project) => project.id === id)
  } catch (error) {
    console.error(error)
    throw error
  }
}
