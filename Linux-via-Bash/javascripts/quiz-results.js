// quiz-results.js - Отображение результатов теста

(function() {
  console.log("Quiz results loader started");
  
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initResults);
  } else {
    initResults();
  }
})();

function initResults() {
  console.log("initResults called");
  const container = document.getElementById('results-container');
  if (!container) {
    console.error("Results container not found!");
    return;
  }
  
  // Получаем последний результат
  const results = JSON.parse(localStorage.getItem('quiz_results') || '[]');
  if (results.length === 0) {
    container.innerHTML = `
      <div class="no-results">
        <h2>Нет результатов</h2>
        <p>Вы ещё не прошли ни одного теста.</p>
        <a href="../" class="btn btn-primary">← К выбору глав</a>
      </div>
    `;
    return;
  }
  
  const lastResult = results[results.length - 1];
  console.log("Last result:", lastResult);
  
  // Формируем HTML
  let html = `
    <div class="results-summary">
      <h2>Последний результат</h2>
      
      <div class="result-card">
        <div class="result-score ${lastResult.score >= 80 ? 'good' : 'bad'}">
          ${lastResult.score}%
        </div>
        
        <p class="result-date">
          ${new Date(lastResult.date).toLocaleString('ru-RU')}
        </p>
        
        <p class="result-text">
          Правильно: ${lastResult.correct} из ${lastResult.total}
        </p>
        
        <p class="result-subchapters">
          Главы: ${lastResult.subchapters.join(', ')}
        </p>
      </div>
      
      <div class="result-actions">
        <a href="../" class="btn btn-primary">← К выбору глав</a>
        <button onclick="location.reload()" class="btn btn-secondary">
          🔄 Обновить
        </button>
      </div>
    </div>
  `;
  
  // История результатов
  if (results.length > 1) {
    html += `
      <div class="results-history">
        <h3>История результатов</h3>
        <table class="results-table">
          <thead>
            <tr>
              <th>Дата</th>
              <th>Главы</th>
              <th>Правильно</th>
              <th>Процент</th>
            </tr>
          </thead>
          <tbody>
    `;
    
    results.slice().reverse().slice(0, 10).forEach(result => {
      html += `
        <tr>
          <td>${new Date(result.date).toLocaleDateString('ru-RU')}</td>
          <td>${result.subchapters.length} глав</td>
          <td>${result.correct}/${result.total}</td>
          <td class="score-${result.score >= 80 ? 'good' : 'bad'}">${result.score}%</td>
        </tr>
      `;
    });
    
    html += `
          </tbody>
        </table>
      </div>
    `;
  }
  
  // Детализация по вопросам
  if (lastResult.answers && lastResult.answers.length > 0) {
    html += `
      <div class="results-details">
        <h3>Детализация по вопросам</h3>
        <div class="answers-list">
    `;
    
    lastResult.answers.forEach((answer, index) => {
      html += `
        <div class="answer-item ${answer.isCorrect ? 'correct' : 'incorrect'}">
          <span class="answer-number">${index + 1}.</span>
          <span class="answer-status">${answer.isCorrect ? '✅' : '❌'}</span>
        </div>
      `;
    });
    
    html += `
        </div>
      </div>
    `;
  }
  
  container.innerHTML = html;
  console.log("Results displayed");
}
