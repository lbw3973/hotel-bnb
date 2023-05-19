import { axiosFirebase } from '@/apis/axios'

export const useDuplicateID = async (email) => {
  const res = await axiosFirebase.get('/users.json')
  const users = Object.values(res.data).flat()
  const usersEmail = users.map((user) => user.email)

  return usersEmail.some((user) => user === email)
}
