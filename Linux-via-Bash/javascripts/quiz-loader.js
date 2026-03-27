// quiz-loader.js - Загрузка и отображение списка глав

console.log("QUIZ_CONFIG loading...");

const QUIZ_CONFIG = {
  baseUrl: '../questions/',
  chapters: [
    {
      part: "Часть I. Основы Unix",
      chapters: [
        {
          id: "ch01",
          title: "Глава 1. Философия Unix",
          subchapters: [
            { id: "ch01_01", title: "01. Принципы Unix", questions: 5 },
            { id: "ch01_02", title: "02. Дизайн инструментов", questions: 5 },
            { id: "ch01_03", title: "03. Текстовые потоки", questions: 3 }
          ]
        },
        {
          id: "ch02",
          title: "Глава 2. Архитектура Unix",
          subchapters: [
            { id: "ch02_01", title: "01. Ядро и оболочка", questions: 3 },
            { id: "ch02_02", title: "02. Многопользовательская система", questions: 3 },
            { id: "ch02_03", title: "03. Иерархия файлов", questions: 3 }
          ]
        },
        {
          id: "ch03",
          title: "Глава 3. Файловая система и права",
          subchapters: [
            { id: "ch03_01", title: "01. Дерево каталогов", questions: 3 },
            { id: "ch03_02", title: "02. Пути и имена", questions: 3 },
            { id: "ch03_03", title: "03. Типы файлов", questions: 4 },
            { id: "ch03_04", title: "04. Ссылки", questions: 3 },
            { id: "ch03_05", title: "05. Файловые дескрипторы", questions: 4 },
            { id: "ch03_06", title: "06. Спецфайлы", questions: 3 },
            { id: "ch03_07", title: "07. Владелец, группа, остальные", questions: 3 },
            { id: "ch03_08", title: "08. Биты rwx", questions: 4 },
            { id: "ch03_09", title: "09. chmod, chown, chgrp", questions: 4 }
          ]
        },
        {
          id: "ch04",
          title: "Глава 4. Процессы и окружение",
          subchapters: [
            { id: "ch04_01", title: "01. Что такое процесс", questions: 4 },
            { id: "ch04_02", title: "02. fork и exec", questions: 4 },
            { id: "ch04_03", title: "03. Иерархия процессов", questions: 3 },
            { id: "ch04_04", title: "04. Стандартные потоки", questions: 4 },
            { id: "ch04_05", title: "05. Файловые дескрипторы процесса", questions: 3 },
            { id: "ch04_06", title: "06. Наследование при fork", questions: 3 },
            { id: "ch04_07", title: "07. Переменные окружения", questions: 4 },
            { id: "ch04_08", title: "08. export и область видимости", questions: 4 },
            { id: "ch04_09", title: "09. Важные переменные", questions: 4 }
          ]
        }
      ]
    },
    {
      part: "Часть II. Интерактивная работа",
      chapters: [
        {
          id: "ch05",
          title: "Глава 5. Введение в Shell",
          subchapters: [
            { id: "ch05_01", title: "01. Что такое shell", questions: 3 },
            { id: "ch05_02", title: "02. Интерактивный и неинтерактивный режим", questions: 3 },
            { id: "ch05_03", title: "03. Логин-шелл", questions: 3 }
          ]
        },
        {
          id: "ch06",
          title: "Глава 6. Перенаправление ввода-вывода",
          subchapters: [
            { id: "ch06_01", title: "01. Операторы > и <", questions: 4 },
            { id: "ch06_02", title: "02. Перенаправление stderr", questions: 3 },
            { id: "ch06_03", title: "03. Комбинирование (2>&1)", questions: 4 },
            { id: "ch06_04", title: "04. Here-документы", questions: 3 }
          ]
        },
        {
          id: "ch07",
          title: "Глава 7. Конвейеры",
          subchapters: [
            { id: "ch07_01", title: "01. Оператор |", questions: 4 },
            { id: "ch07_02", title: "02. tee", questions: 3 }
          ]
        },
        {
          id: "ch08",
          title: "Глава 8. Базовые команды",
          subchapters: [
            { id: "ch08_01", title: "01. Навигация: pwd, cd", questions: 4 },
            { id: "ch08_02", title: "02. Просмотр: cat, head, tail, less", questions: 4 },
            { id: "ch08_03", title: "03. Файловые операции: cp, mv, rm, mkdir", questions: 5 },
            { id: "ch08_04", title: "04. Поиск: find, locate", questions: 4 }
          ]
        },
        {
          id: "ch09",
          title: "Глава 9. Обработка текста",
          subchapters: [
            { id: "ch09_01", title: "01. grep", questions: 4 },
            { id: "ch09_02", title: "02. sort, uniq", questions: 4 },
            { id: "ch09_03", title: "03. cut, paste, join", questions: 4 },
            { id: "ch09_04", title: "04. wc", questions: 3 },
            { id: "ch09_05", title: "05. sed", questions: 4 },
            { id: "ch09_06", title: "06. awk", questions: 4 }
          ]
        }
      ]
    }
  ]
};

console.log("QUIZ_CONFIG loaded:", QUIZ_CONFIG);

// Используем стандартный подход для mkdocs
(function() {
  console.log("Quiz loader IIFE started");
  
  if (document.readyState === "loading") {
    console.log("Document loading, adding DOMContentLoaded listener");
    document.addEventListener("DOMContentLoaded", init);
  } else {
    console.log("Document already loaded, calling init directly");
    init();
  }
  
  function init() {
    console.log("Quiz init started");
    console.log("Chapter selector element:", document.getElementById("chapter-selector"));
    
    // Читаем query параметр subchapter
    const urlParams = new URLSearchParams(window.location.search);
    const preselectSubchapter = urlParams.get('subchapter');
    console.log("Preselect subchapter:", preselectSubchapter);
    
    initChapterSelector(preselectSubchapter);
    initButtons();
    loadProgress();
    
    // Если есть preselect, автоматически выбираем и запускаем тест
    if (preselectSubchapter) {
      setTimeout(() => {
        const checkbox = document.querySelector(`input[name="subchapter"][value="${preselectSubchapter}"]`);
        if (checkbox) {
          checkbox.checked = true;
          console.log("Auto-selected:", preselectSubchapter);
          // Явно активируем кнопку (т.к. change не триггерится при программном изменении)
          const startBtn = document.getElementById('start-quiz');
          if (startBtn) {
            startBtn.disabled = false;
            console.log("Start button enabled");
          }
          // Автоматически запускаем тест через 1000ms (даём время на загрузку вопросов)
          setTimeout(() => {
            if (startBtn && !startBtn.disabled) {
              console.log("Auto-starting quiz...");
              startBtn.click();
            }
          }, 1000);
        } else {
          console.warn("Checkbox not found for:", preselectSubchapter);
        }
      }, 200);
    }
  }
})();

function initChapterSelector(preselectSubchapter = null) {
  console.log("initChapterSelector called", preselectSubchapter ? "with preselect: " + preselectSubchapter : "");
  const container = document.getElementById('chapter-selector');
  console.log("Container:", container);

  if (!container) {
    console.error("Chapter selector container not found!");
    return;
  }

  let html = '';

  QUIZ_CONFIG.chapters.forEach((part, partIndex) => {
    console.log("Adding part:", part.part);
    html += `<div class="quiz-part">`;
    html += `<h3>${part.part}</h3>`;

    part.chapters.forEach((chapter, chapterIndex) => {
      html += `<div class="quiz-chapter">`;
      html += `<h4>${chapter.title}</h4>`;
      html += `<div class="quiz-subchapters">`;

      chapter.subchapters.forEach((sub, subIndex) => {
        const subId = `${chapter.id}_${sub.id.split('_')[1]}`;
        const checked = (preselectSubchapter === subId) ? 'checked' : '';
        html += `
          <label class="quiz-subchapter ${checked ? 'selected' : ''}">
            <input type="checkbox"
                   name="subchapter"
                   value="${subId}"
                   data-questions="${sub.questions}"
                   ${checked}>
            <span class="subchapter-title">${sub.title}</span>
            <span class="subchapter-count">(${sub.questions} вопросов)</span>
          </label>
        `;
      });
      
      html += `</div></div>`;
    });
    
    html += `</div>`;
  });
  
  console.log("Setting container HTML");
  container.innerHTML = html;
  console.log("Chapter selector initialized");
}

function initButtons() {
  console.log("initButtons called");
  // Кнопка начала теста
  const startBtn = document.getElementById('start-quiz');
  if (startBtn) {
    console.log("Start button found, adding click listener");
    startBtn.addEventListener('click', startQuiz);
  } else {
    console.error("Start button not found!");
  }
  
  // Кнопка экспорта
  const exportBtn = document.getElementById('export-progress');
  if (exportBtn) {
    console.log("Export button found, adding click listener");
    exportBtn.addEventListener('click', exportProgress);
  } else {
    console.error("Export button not found!");
  }
  
  // Кнопка импорта
  const importBtn = document.getElementById('import-progress');
  const importFile = document.getElementById('import-file');
  if (importBtn && importFile) {
    console.log("Import button and file input found");
    importBtn.addEventListener('click', () => importFile.click());
    importFile.addEventListener('change', importProgress);
  } else {
    console.error("Import button or file input not found!");
  }
  
  // Обновление состояния кнопки "Начать"
  const checkboxes = document.querySelectorAll('input[name="subchapter"]');
  console.log("Found checkboxes:", checkboxes.length);
  checkboxes.forEach(cb => {
    cb.addEventListener('change', updateStartButton);
  });
}

function updateStartButton() {
  const startBtn = document.getElementById('start-quiz');
  const checked = document.querySelectorAll('input[name="subchapter"]:checked');
  if (startBtn) {
    startBtn.disabled = checked.length === 0;
    console.log("Start button disabled:", checked.length === 0);
  }
}

function getSelectedSubchapters() {
  const checkboxes = document.querySelectorAll('input[name="subchapter"]:checked');
  return Array.from(checkboxes).map(cb => cb.value);
}

async function startQuiz() {
  console.log("startQuiz called");
  const selectedSubchapters = getSelectedSubchapters();
  const maxQuestions = parseInt(document.getElementById('max-questions').value) || 10;

  console.log("Selected subchapters:", selectedSubchapters);
  console.log("Max questions:", maxQuestions);

  if (selectedSubchapters.length === 0) {
    alert('Выберите хотя бы одну подглаву!');
    return;
  }

  // Сохраняем настройки теста
  localStorage.setItem('quiz_settings', JSON.stringify({
    subchapters: selectedSubchapters,
    maxQuestions
  }));

  // Переходим на страницу теста (абсолютный путь)
  window.location.href = '/tests/quiz/';
}

function loadProgress() {
  console.log("loadProgress called");
  const progress = JSON.parse(localStorage.getItem('quiz_progress') || '{}');
  const container = document.getElementById('progress-summary');
  if (!container) {
    console.error("Progress summary container not found!");
    return;
  }
  
  const totalSubchapters = QUIZ_CONFIG.chapters.reduce(
    (sum, part) => sum + part.chapters.reduce((s, ch) => s + ch.subchapters.length, 0),
    0
  );
  
  const completedSubchapters = Object.keys(progress).length;
  const percentage = Math.round((completedSubchapters / totalSubchapters) * 100);
  
  let html = `
    <div class="progress-card">
      <h3>Общий прогресс</h3>
      <div class="progress-bar">
        <div class="progress-fill" style="width: ${percentage}%"></div>
      </div>
      <p>${completedSubchapters} из ${totalSubchapters} подглав (${percentage}%)</p>
    </div>
  `;
  
  // Последние результаты
  const recentResults = JSON.parse(localStorage.getItem('quiz_results') || '[]');
  if (recentResults.length > 0) {
    html += `<div class="recent-results"><h3>Последние результаты</h3>`;
    recentResults.slice(0, 5).forEach(result => {
      const date = new Date(result.date).toLocaleDateString('ru-RU');
      html += `
        <div class="result-item">
          <span class="result-subchapter">${result.subchapter}</span>
          <span class="result-score ${result.score >= 80 ? 'good' : 'bad'}">
            ${result.score}%
          </span>
          <span class="result-date">${date}</span>
        </div>
      `;
    });
    html += `</div>`;
  }
  
  container.innerHTML = html;
  console.log("Progress loaded");
}

function exportProgress() {
  console.log("exportProgress called");
  const data = {
    progress: localStorage.getItem('quiz_progress'),
    results: localStorage.getItem('quiz_results'),
    settings: localStorage.getItem('quiz_settings'),
    exported: new Date().toISOString()
  };
  
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `quiz-progress-${new Date().toISOString().split('T')[0]}.json`;
  a.click();
  URL.revokeObjectURL(url);
  console.log("Progress exported");
}

function importProgress(event) {
  console.log("importProgress called");
  const file = event.target.files[0];
  if (!file) {
    console.error("No file selected");
    return;
  }
  
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const data = JSON.parse(e.target.result);
      console.log("Imported data:", data);
      
      if (data.progress) {
        localStorage.setItem('quiz_progress', data.progress);
      }
      if (data.results) {
        localStorage.setItem('quiz_results', data.results);
      }
      if (data.settings) {
        localStorage.setItem('quiz_settings', data.settings);
      }
      
      alert('Прогресс успешно загружен!');
      location.reload();
    } catch (err) {
      console.error("Import error:", err);
      alert('Ошибка при загрузке файла: ' + err.message);
    }
  };
  reader.readAsText(file);
}
