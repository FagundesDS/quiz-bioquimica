
import { useState } from 'react';

const questions = [
  {
    question: "Qual o principal objetivo da cadeia respiratória?",
    options: [
      "Produzir glicose",
      "Formar água",
      "Gerar ATP",
      "Realizar fotossíntese"
    ],
    answer: "Gerar ATP"
  },
  {
    question: "A cadeia respiratória ocorre na membrana externa da mitocôndria.",
    options: ["Verdadeiro", "Falso"],
    answer: "Falso"
  }
];

function App() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (option) => {
    const updatedAnswers = [...answers, { question: questions[current].question, selected: option }];
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
      setAnswers(updatedAnswers);
    } else {
      setAnswers(updatedAnswers);
      setShowResults(true);
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Quiz de Bioquímica</h1>
      {!showResults ? (
        <div>
          <h2>{questions[current].question}</h2>
          {questions[current].options.map((option, idx) => (
            <button key={idx} onClick={() => handleAnswer(option)} style={{ display: 'block', margin: '0.5rem 0' }}>
              {option}
            </button>
          ))}
        </div>
      ) : (
        <div>
          <h2>Respostas</h2>
          {answers.map((a, i) => (
            <div key={i}>
              <strong>{a.question}</strong><br/>
              Sua resposta: {a.selected}<br/><br/>
            </div>
          ))}
          <h3>Respostas corretas:</h3>
          {questions.map((q, i) => (
            <div key={i}>
              <strong>{q.question}</strong><br/>
              Resposta correta: {q.answer}<br/><br/>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
