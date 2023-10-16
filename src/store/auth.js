import { browser } from '$app/environment';
import { writable } from 'svelte/store';
const initialValue = browser ? window?.localStorage?.getItem('token') : null
export const user = writable(initialValue)
const userName = browser && (window.localStorage.getItem('name'))
export const nameUser = writable(userName)
nameUser.subscribe((value) => {
  if (browser) {
    window.localStorage.setItem("name", value)
  }
})
