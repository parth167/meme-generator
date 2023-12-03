const form = document.querySelector('#memeform');

const result = document.getElementById('memes');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log('submited');
  const imageInput = document.getElementById('image').value;
  const toptextInput = document.getElementById('toptext').value;
  const bottomtextInput = document.getElementById('botmtext').value;
  
  const meme = document.createElement('div');
  meme.classList.add('meme');

  const images = document.createElement('img');
  images.src = imageInput;
  images.onload = () => {
    meme.appendChild(images);

    const topElement = document.createElement('div');
    topElement.classList.add('memetxttop', 'top');
    topElement.innerText = toptextInput;
    meme.appendChild(topElement);

    const bootomElement = document.createElement('div');
    bootomElement.classList.add('memetxtbotm', 'bottom');
    bootomElement.innerText = bottomtextInput;
    meme.appendChild(bootomElement);

    result.appendChild(meme);
    form.reset();
  };
});
