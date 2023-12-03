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
  // code for meme image
  const images = document.createElement('img');
  images.src = imageInput;
  images.onload = () => {
    meme.appendChild(images);
    // code for top text
    const topElement = document.createElement('div');
    topElement.classList.add('memetxt', 'top');
    topElement.innerText = toptextInput;
    meme.appendChild(topElement);
    // code for bottom text
    const bootomElement = document.createElement('div');
    bootomElement.classList.add('memetxt', 'bottom');
    bootomElement.innerText = bottomtextInput;
    meme.appendChild(bootomElement);
    // code for deleting the meme
    const removeButton = document.createElement('button');
    removeButton.innerText = 'Remove';
    removeButton.addEventListener('click', () => {
      meme.remove();
    });
    meme.appendChild(removeButton);

    result.appendChild(meme);
    form.reset();
  };
});
