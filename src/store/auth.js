import { writable } from 'svelte/store';

export const user = writable(null)

export const infoUser = writable({
  name: null,
  id: null
})
