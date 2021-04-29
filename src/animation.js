const img = document.querySelector('#weatherImg');
fetch('https://api.giphy.com/v1/gifs/translate?api_key=3X2ApJT7aNnInzDc4ImBbzZLzv0UNSGA&s=scattered-clouds', {mode: 'cors'})
.then(function(response) {
  return response.json();
})
.then(function(response) {
  img.src = response.data.images.original.url;
});
