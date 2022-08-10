import { writable } from "svelte/store";

export const theme = writable(localStorage.theme)
export const bgHighlightColor = writable(localStorage.bgHighlightColor)
export const textHighlightColor = writable(localStorage.textHighlightColor)

theme.subscribe(value => {
    localStorage.theme = value
})

bgHighlightColor.subscribe(value => {
    localStorage.bgHighlightColor = value
})

textHighlightColor.subscribe(value => {
    localStorage.textHighlightColor = value
})

