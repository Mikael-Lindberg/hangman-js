//https://random-word-api.herokuapp.com/word?number=1

async function getRandomWord() {
  const res = await fetch(
    "https://random-word-api.herokuapp.com/word?number=1"
  );
  const data = await res.json();

  return data;
}

const word = await getRandomWord();

document.getElementById("word").innerHTML = word;

console.log(word);
