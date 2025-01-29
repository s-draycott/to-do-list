const revealJoke = document.querySelector<HTMLButtonElement>("#revealJokeBtn");
const jokePara = document.querySelector<HTMLParagraphElement>("#getJoke");
const punchlinePara = document.querySelector<HTMLParagraphElement>("#getPunchline");

if (!revealJoke || !jokePara || !punchlinePara) {
      throw new Error("Issues with the HTM selectors")
    }

const getRandomResponse = async() => {
  const response = await fetch ("https://official-joke-api.appspot.com/random_joke")
  const data = await response.json()
  const { setup, punchline } = { ...data };
  return { setup, punchline }
}

const handleJokeBtn = async () => {
  const apiResponse = await getRandomResponse();
  jokePara.innerText = apiResponse.setup;
  punchlinePara.innerText = apiResponse.punchline;
}



revealJoke.addEventListener("click", handleJokeBtn)

