import { writable } from "svelte/store";


const getValueFromStorage = async (key) => {

    let storedValue = new Promise((resolve, reject) => {
        chrome.storage.sync.get([key], (result) => { 
            if (result[key] == undefined) {
                switch (key) {
                    case 'isEnabled':
                        resolve(true)
                        break;
                    case 'darkMode':
                        resolve(true)
                        break;
                    case 'bgHighlightColor':
                        resolve("#ACCEF7") // default chrome bg selection color according to https://stackoverflow.com/questions/16094837/what-is-the-browser-default-background-color-when-selecting-text
                        break;
                    case 'textHighlightColor':
                        resolve("#FFFFFF") // default chrome text selection color set to white
                        break;
                }
            } else {
                resolve(result[key]);
            }
        });
    }) 

    let actualValue = await storedValue;
    return actualValue;
}

export const isEnabled = writable(await getValueFromStorage('isEnabled'))
export const darkMode = writable(await getValueFromStorage('darkMode'))
export const bgHighlightColor = writable(await getValueFromStorage('bgHighlightColor'))
export const textHighlightColor = writable(await getValueFromStorage('textHighlightColor'))


isEnabled.subscribe(value => {
    chrome.storage.sync.set({"isEnabled": value}, () => { console.log("Enabled set to: ", value); });
})

darkMode.subscribe(value => {
    chrome.storage.sync.set({"darkMode": value}, () => { console.log("Dark mode set to: ", value); });
})

