import { error } from "@sveltejs/kit"
import appAxios from "../../../URL/Api"
export async function load({ params }) {
  const id = params.id
  const res = await appAxios({
    method: 'get',
    url: `/limit`,
    params: { id }
  })
  if (res?.data?.err === 1) {
    const products = res?.data?.response?.rows
    if (products) {
      return { products }
    }
    throw error(404)
  } else {
    throw error(res?.data?.msg)
  }
}

