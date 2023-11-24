// Questions that will be asked
const Questions = [{
	q: "How many dragon balls are there?",
	a: [{ text: "7", isCorrect: true },
	{ text: "5", isCorrect: false },
	{ text: "10", isCorrect: false },
	{ text: "6", isCorrect: false }
	]

},
{
	q: "Who is Ash main pokemon?",
	a: [{ text: "Pikachu", isCorrect: false, isSelected: false },
	{ text: "Bulbasaur", isCorrect: false },
	{ text: "Metaoid", isCorrect: false },
	{ text: "Charizard", isCorrect: true }
	]

},
{
	q: "How many Hashira are in Demon Slayer?",
	a: [{ text: "5", isCorrect: false },
	{ text: "7", isCorrect: false },
	{ text: "9", isCorrect: true },
	{ text: "12", isCorrect: false }
	]

}

]

let currQuestion = 0
let score = 0

function loadQues() {
	const question = document.getElementById("ques")
	const opt = document.getElementById("opt")

	question.textContent = Questions[currQuestion].q;
	opt.innerHTML = ""

	for (let i = 0; i < Questions[currQuestion].a.length; i++) {
		const choicesdiv = document.createElement("div");
		const choice = document.createElement("input");
		const choiceLabel = document.createElement("label");

		choice.type = "radio";
		choice.name = "answer";
		choice.value = i;

		choiceLabel.textContent = Questions[currQuestion].a[i].text;

		choicesdiv.appendChild(choice);
		choicesdiv.appendChild(choiceLabel);
		opt.appendChild(choicesdiv);
	}
}

loadQues();

function loadScore() {
	const totalScore = document.getElementById("score")
	totalScore.textContent = `You scored ${score} out of ${Questions.length}`
}


function nextQuestion() {
	if (currQuestion < Questions.length - 1) {
		currQuestion++;
		loadQues();
	} else {
		document.getElementById("opt").remove()
		document.getElementById("ques").remove()
		document.getElementById("btn").remove()
		loadScore();
	}
}

function checkAns() {
	const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

	if (Questions[currQuestion].a[selectedAns].isCorrect) {
		score++;
		console.log("Correct")
		nextQuestion();
	} else {
		nextQuestion();
	}
}