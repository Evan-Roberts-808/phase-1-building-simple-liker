// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const hearts = document.querySelectorAll('.like-glyph')

function likeArticle(e) {
  const heart = e.target;
  
  mimicServerCall()

    .then(function(serverMessage) {
      alert(serverMessage);
      if (heart.innerHTML === EMPTY_HEART) {
      heart.innerHTML = FULL_HEART;
      heart.classList.add('activated-heart');
    } else if (heart.innerHTML === FULL_HEART) {
      heart.innerHTML = EMPTY_HEART;
      heart.classList.remove('activated-heart');
    }
  })

    .catch(function(serverMessage) {
      if (serverMessage) {
        document.getElementById('modal').classList.remove('hidden');
        document.getElementById('modal-message').innerHTML = serverMessage;
        setTimeout(function() {
          document.getElementById('modal').classList.add('hidden');
        }, 3000);
      }
    })
}

for (const glyph of hearts) {
  glyph.addEventListener('click', likeArticle)
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
