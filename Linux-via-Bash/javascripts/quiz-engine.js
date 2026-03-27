// quiz-engine.js - Движок для проведения тестов

// Простая функция для обработки базового Markdown
function parseMarkdown(text) {
  if (!text) return '';
  
  return text
    // **жирный текст**
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    // *курсив*
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    // `код`
    .replace(/`(.+?)`/g, '<code>$1</code>')
    // [ссылка](url)
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>')
    // Перенос строки
    .replace(/\n/g, '<br>');
}

let currentQuiz = {
  questions: [],
  currentIndex: 0,
  answers: [],
  settings: {}
};

// Используем стандартный подход для mkdocs
(function() {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initQuiz);
  } else {
    initQuiz();
  }
})();

async function initQuiz() {
  console.log("initQuiz started");
  const settings = JSON.parse(localStorage.getItem('quiz_settings') || '{}');
  
  if (!settings.subchapters || settings.subchapters.length === 0) {
    console.log("No subchapters selected, redirecting to index");
    window.location.href = '/Linux-via-Bash/tests/';
    return;
  }
  
  currentQuiz.settings = settings;
  console.log("Settings loaded:", settings);
  
  // Загружаем вопросы для выбранных подглав
  const allQuestions = await loadQuestions(settings.subchapters);
  console.log("Loaded questions:", allQuestions.length);
  
  // Перемешиваем и ограничиваем количество
  const shuffled = shuffleArray(allQuestions);
  currentQuiz.questions = shuffled.slice(0, settings.maxQuestions);
  currentQuiz.currentIndex = 0;
  currentQuiz.answers = [];
  
  console.log("Starting quiz with", currentQuiz.questions.length, "questions");
  
  // Показываем первый вопрос
  showQuestion();
}

async function loadQuestions(subchapterIds) {
  console.log("Loading questions for:", subchapterIds);
  const allQuestions = [];

  for (const subId of subchapterIds) {
    try {
      const response = await fetch(`../questions/${subId}.json`);
      if (!response.ok) throw new Error(`Не найден файл для ${subId}`);

      const data = await response.json();
      console.log("Loaded", data.questions.length, "questions for", subId);
      allQuestions.push(...data.questions);
    } catch (err) {
      console.warn(`Не удалось загрузить ${subId}:`, err);
    }
  }

  return allQuestions;
}

function showQuestion() {
  const container = document.getElementById('quiz-container');
  if (!container) {
    console.error("Quiz container not found!");
    return;
  }
  
  const question = currentQuiz.questions[currentQuiz.currentIndex];
  if (!question) {
    console.log("No more questions, finishing quiz");
    finishQuiz();
    return;
  }
  
  const progress = Math.round(
    ((currentQuiz.currentIndex) / currentQuiz.questions.length) * 100
  );
  
  let html = `
    <div class="quiz-question" data-question-id="${question.id}">
      <div class="quiz-progress">
        <div class="quiz-progress-bar">
          <div class="quiz-progress-fill" style="width: ${progress}%"></div>
        </div>
        <span class="quiz-progress-text">
          Вопрос ${currentQuiz.currentIndex + 1} из ${currentQuiz.questions.length}
        </span>
      </div>

      <h2 class="question-text">${parseMarkdown(question.question)}</h2>

      <div class="question-options" data-type="${question.type}">
        ${renderOptions(question)}
      </div>

      <div class="quiz-actions">
        <button id="check-answer" class="btn btn-primary" disabled>
          Проверить
        </button>
      </div>

      <div id="explanation" class="explanation" style="display: none;"></div>

      <div id="next-action" class="next-action" style="display: none;">
        <button id="next-question" class="btn btn-primary">
          ${currentQuiz.currentIndex < currentQuiz.questions.length - 1 ? 'Далее →' : 'Завершить тест'}
        </button>
      </div>
    </div>
  `;
  
  container.innerHTML = html;
  
  // Добавляем обработчики событий
  attachQuestionEvents(question);
}

function renderOptions(question) {
  switch (question.type) {
    case 'single_choice':
    case 'true_false':
      return question.options.map((opt, i) => `
        <label class="option">
          <input type="radio" name="answer" value="${i}">
          <span>${parseMarkdown(opt)}</span>
        </label>
      `).join('');

    case 'multiple_choice':
      return question.options.map((opt, i) => `
        <label class="option">
          <input type="checkbox" name="answer" value="${i}">
          <span>${parseMarkdown(opt)}</span>
        </label>
      `).join('');

    case 'fill_blank':
      return question.options.map((opt, i) => `
        <label class="option">
          <input type="radio" name="answer" value="${i}">
          <span>${parseMarkdown(opt)}</span>
        </label>
      `).join('');

    default:
      return '<p>Неподдерживаемый тип вопроса</p>';
  }
}

function attachQuestionEvents(question) {
  const inputs = document.querySelectorAll('input[name="answer"]');
  const checkBtn = document.getElementById('check-answer');
  
  inputs.forEach(input => {
    input.addEventListener('change', () => {
      checkBtn.disabled = false;
    });
  });
  
  checkBtn.addEventListener('click', () => checkAnswer(question));
  
  const nextBtn = document.getElementById('next-question');
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentQuiz.currentIndex++;
      showQuestion();
    });
  }
}

function checkAnswer(question) {
  const inputs = document.querySelectorAll('input[name="answer"]:checked');
  const selectedAnswers = Array.from(inputs).map(i => parseInt(i.value));
  
  if (selectedAnswers.length === 0) return;
  
  // Проверяем ответ
  const isCorrect = checkCorrectness(selectedAnswers, question.correct, question.type);
  
  // Сохраняем ответ
  currentQuiz.answers.push({
    questionId: question.id,
    selected: selectedAnswers,
    correct: question.correct,
    isCorrect
  });
  
  // Показываем результат
  showExplanation(question, isCorrect, selectedAnswers);
}

function checkCorrectness(selected, correct, type) {
  if (type === 'multiple_choice') {
    // Для множественного выбора все правильные ответы должны быть выбраны
    const selectedSet = new Set(selected);
    const correctSet = new Set(correct);
    return selected.length === correct.length && 
           selected.every(s => correctSet.has(s));
  }
  
  // Для одиночного выбора
  return selected[0] === correct[0];
}

function showExplanation(question, isCorrect, selected) {
  const explanation = document.getElementById('explanation');
  const nextAction = document.getElementById('next-action');
  const checkBtn = document.getElementById('check-answer');
  
  // Блокируем все inputs
  const inputs = document.querySelectorAll('input[name="answer"]');
  inputs.forEach(input => {
    input.disabled = true;
    const label = input.closest('.option');
    
    // Подсвечиваем правильные и неправильные
    if (question.correct.includes(parseInt(input.value))) {
      label.classList.add('correct');
    }
    if (selected.includes(parseInt(input.value)) && !question.correct.includes(parseInt(input.value))) {
      label.classList.add('incorrect');
    }
  });
  
  // Показываем объяснение
  explanation.innerHTML = `
    <div class="explanation-header ${isCorrect ? 'correct' : 'incorrect'}">
      ${isCorrect ? '✅ Правильно!' : '❌ Неправильно'}
    </div>
    <div class="explanation-text">
      ${parseMarkdown(question.explanation)}
    </div>
    ${question.references.length > 0 ? `
      <div class="explanation-references">
        <strong>📖 См. также:</strong>
        ${question.references.map(ref => `<a href="../../${ref}">${ref.split('/').pop()}</a>`).join('')}
      </div>
    ` : ''}
  `;
  
  explanation.style.display = 'block';
  nextAction.style.display = 'block';
  checkBtn.style.display = 'none';
}

function finishQuiz() {
  const container = document.getElementById('quiz-container');
  if (!container) return;
  
  // Считаем результат
  const correct = currentQuiz.answers.filter(a => a.isCorrect).length;
  const total = currentQuiz.questions.length;
  const score = Math.round((correct / total) * 100);
  
  console.log("Quiz finished:", { correct, total, score });
  
  // Сохраняем результат
  const result = {
    date: new Date().toISOString(),
    subchapters: currentQuiz.settings.subchapters,
    correct,
    total,
    score,
    answers: currentQuiz.answers
  };
  
  const results = JSON.parse(localStorage.getItem('quiz_results') || '[]');
  results.push(result);
  localStorage.setItem('quiz_results', JSON.stringify(results));
  
  // Обновляем прогресс по подглавам
  const progress = JSON.parse(localStorage.getItem('quiz_progress') || '{}');
  currentQuiz.settings.subchapters.forEach(subId => {
    if (!progress[subId]) {
      progress[subId] = { attempts: 0, bestScore: 0 };
    }
    progress[subId].attempts++;
    if (score > progress[subId].bestScore) {
      progress[subId].bestScore = score;
    }
  });
  localStorage.setItem('quiz_progress', JSON.stringify(progress));
  
  // Показываем результат
  container.innerHTML = `
    <div class="quiz-results">
      <h2>Тест завершён!</h2>
      
      <div class="result-score ${score >= 80 ? 'good' : 'bad'}">
        ${score}%
      </div>
      
      <p class="result-text">
        Правильно: ${correct} из ${total}
      </p>
      
      ${score >= 80 ? `
        <div class="result-message success">
          🎉 Отличный результат!
        </div>
      ` : `
        <div class="result-message retry">
          📚 Рекомендуем повторить материал и пройти тест ещё раз
        </div>
      `}
      
      <div class="result-actions">
        <a href="/Linux-via-Bash/tests/" class="btn btn-primary">← К выбору глав</a>
        <button onclick="location.reload()" class="btn btn-secondary">
          🔄 Пройти ещё раз
        </button>
        <a href="/Linux-via-Bash/tests/results/" class="btn btn-secondary">
          📊 Подробные результаты
        </a>
      </div>
    </div>
  `;
}

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
