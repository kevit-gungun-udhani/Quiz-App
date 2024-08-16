import { useSelector } from "react-redux";

export default function ShowQuiz() {
  const quiz = useSelector((state) => state.quiz.currentQuestion);
  console.log(quiz);
  function handleSubmit(formData) {
    const ans = formData.getAll("option")
  }
  return (
    <div>
      <h2>{quiz.id}</h2>
      <h3>{quiz.que}</h3>
      <form action={handleSubmit}>
        {quiz.ans.map((ans) => (
          <div key={ans.id}>
            <input type="radio" name="option" value={ans.ans} />
            <label>{ans.ans}</label>
          </div>
        ))}
        <button type="submit">submit</button>
      </form>
    </div>
  );
}