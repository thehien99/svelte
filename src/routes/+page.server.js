import appAxios from "../URL/Api";
import { error } from "@sveltejs/kit"

export async function load({ query }) {
  const res = await appAxios({
    method: 'get',
    url: `/limit`,
    params: query
  })
  if (res.data.err === 1) {
    const products = res?.data?.response
    if (products) {
      return { products }
    }
    throw error(404)
  } else {
    throw error(res?.data?.msg)
  }
}

