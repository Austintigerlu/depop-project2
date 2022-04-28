const image = document.querySelector('.edit-image')
const url = document.querySelector('.url')
const preview = document.querySelector('.preview')

preview.addEventListener('click', () => {
	image.src = url.value;
})