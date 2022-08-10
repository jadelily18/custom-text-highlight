import { writable } from "svelte/store";


export const darkMode = writable(JSON.parse(localStorage.darkMode))
export const bgHighlightColor = writable(localStorage.bgHighlightColor)
export const textHighlightColor = writable(localStorage.textHighlightColor)


darkMode.subscribe(value => {
    localStorage.darkMode = value
})

bgHighlightColor.subscribe(value => {
    localStorage.bgHighlightColor = value
})

textHighlightColor.subscribe(value => {
    localStorage.textHighlightColor = value
})

