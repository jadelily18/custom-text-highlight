let backgroundColor = localStorage.bgHighlightColor;
let textColor = localStorage.textHighlightColor;

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
