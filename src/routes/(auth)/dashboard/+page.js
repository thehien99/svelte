import { redirect } from "@sveltejs/kit";

export async function load() {
  if (typeof window !== 'undefined' && !window?.localStorage?.getItem('token')) {
    throw redirect(303, '/login')
  }
}