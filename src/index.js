function showAnswer(response) {
   alert(response.data.answer);
}

const apiKey = "297bdob5643aebcfc422bc019b792eta";
const context = "be polite and provide a short answer";
let prompt = "When was AI first invented?";
const apiUrl =
   "https://api.shecodes.io/ai/v1/generate" +
   "?prompt=" +
   encodeURIComponent(prompt) +
   "&context=" +
   encodeURIComponent(context) +
   "&key=" +
   apiKey;

axios.get(apiUrl).then(showAnswer);
