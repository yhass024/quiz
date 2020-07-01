const correctAnswers = ["B", "B", "B", "B"];
const formGrabber = document.querySelector(".quiz-form");
const scoreDisplayGrabber = document.querySelector(".result");

formGrabber.addEventListener("submit", (e) => {
  e.preventDefault();
  let score = 0;
  const userAnswers = [
    formGrabber.q1.value,
    formGrabber.q2.value,
    formGrabber.q3.value,
    formGrabber.q4.value,
  ];

  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
  });
  scrollTo(0, 0);
  scoreDisplayGrabber.classList.remove("d-none");
  scoreDisplayGrabber.querySelector("span").textContent = `${score}%`;
});
