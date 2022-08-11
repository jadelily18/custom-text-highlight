let backgroundColor;
let textColor;

// i have absolutely no fucking clue what is happening

chrome.storage.sync.get(['bgHighlightColor'], (result) => {
	backgroundColor = result.bgHighlightColor;
});

chrome.storage.sync.get(['textHighlightColor'], (result) => {
	textColor = result.textHighlightColor;
});

let style = document.createElement('style');

style.setAttribute('id', 'customTextHighlight');

style.innerHTML =
	'::selection {' +
	'color: ' +
	textColor +
	' !important;background-color: ' +
	backgroundColor +
	' !important;}';

document.head.appendChild(style);

console.log('bg color: ' + backgroundColor + '\n' + 'text color: ' + textColor);
