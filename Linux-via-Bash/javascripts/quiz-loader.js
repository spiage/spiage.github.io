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
    },
    {
      part: "Часть III. Программирование на Shell",
      chapters: [
        {
          id: "ch10",
          title: "Глава 10. Структура скрипта",
          subchapters: [
            { id: "ch10_01", title: "01. Shebang", questions: 4 },
            { id: "ch10_02", title: "02. Запуск скрипта", questions: 4 },
            { id: "ch10_03", title: "03. Комментарии", questions: 2 },
            { id: "ch10_04", title: "04. Коды возврата", questions: 5 }
          ]
        },
        {
          id: "ch11",
          title: "Глава 11. Переменные в скриптах",
          subchapters: [
            { id: "ch11_01", title: "01. Присваивание", questions: 4 },
            { id: "ch11_02", title: "02. Обращение к переменным", questions: 3 },
            { id: "ch11_03", title: "03. Позиционные параметры", questions: 4 },
            { id: "ch11_04", title: "04. Специальные переменные", questions: 4 },
            { id: "ch11_05", title: "05. Локальные переменные", questions: 3 },
            { id: "ch11_06", title: "06. Подстановка команд", questions: 4 }
          ]
        },
        {
          id: "ch12",
          title: "Глава 12. Условные операторы",
          subchapters: [
            { id: "ch12_01", title: "01. if-then-else", questions: 5 },
            { id: "ch12_02", title: "02. test и [ ]", questions: 4 },
            { id: "ch12_03", title: "03. case", questions: 3 }
          ]
        },
        {
          id: "ch13",
          title: "Глава 13. Циклы",
          subchapters: [
            { id: "ch13_01", title: "01. while", questions: 4 },
            { id: "ch13_02", title: "02. until", questions: 3 },
            { id: "ch13_03", title: "03. for", questions: 4 }
          ]
        },
        {
          id: "ch14",
          title: "Глава 14. Функции",
          subchapters: [
            { id: "ch14_01", title: "01. Объявление функций", questions: 4 },
            { id: "ch14_02", title: "02. Аргументы функций", questions: 3 },
            { id: "ch14_03", title: "03. Локальные переменные", questions: 2 },
            { id: "ch14_04", title: "04. Возврат значений", questions: 4 }
          ]
        },
        {
          id: "ch15",
          title: "Глава 15. Ввод и вывод в скриптах",
          subchapters: [
            { id: "ch15_01", title: "01. read", questions: 4 },
            { id: "ch15_02", title: "02. printf", questions: 3 },
            { id: "ch15_03", title: "03. Обработка аргументов", questions: 3 }
          ]
        },
        {
          id: "ch16",
          title: "Глава 16. Обработка ошибок и сигналы",
          subchapters: [
            { id: "ch16_01", title: "01. set -e, set -u", questions: 3 },
            { id: "ch16_02", title: "02. Проверка ошибок", questions: 3 },
            { id: "ch16_03", title: "03. Сигналы", questions: 3 },
            { id: "ch16_04", title: "04. trap", questions: 3 }
          ]
        }
      ]
    },
    {
      part: "Часть IV. Продвинутые темы",
      chapters: [
        {
          id: "ch17",
          title: "Глава 17. Оптимизация скриптов",
          subchapters: [
            { id: "ch17_01", title: "01. Встроенные vs внешние", questions: 4 },
            { id: "ch17_02", title: "02. Минимизация fork/exec", questions: 3 },
            { id: "ch17_03", title: "03. Пакетная обработка", questions: 3 },
            { id: "ch17_04", title: "04. awk/sed вместо циклов", questions: 3 }
          ]
        },
        {
          id: "ch18",
          title: "Глава 18. Безопасность скриптов",
          subchapters: [
            { id: "ch18_01", title: "01. Валидация входных данных", questions: 3 },
            { id: "ch18_02", title: "02. Защита от инъекций", questions: 3 },
            { id: "ch18_03", title: "03. Временные файлы", questions: 3 },
            { id: "ch18_04", title: "04. Принцип наименьших привилегий", questions: 3 }
          ]
        },
        {
          id: "ch19",
          title: "Глава 19. Лучшие практики",
          subchapters: [
            { id: "ch19_01", title: "01. Стиль кода", questions: 3 },
            { id: "ch19_02", title: "02. Документирование", questions: 3 },
            { id: "ch19_03", title: "03. Тестирование", questions: 3 },
            { id: "ch19_04", title: "04. Версионирование", questions: 3 }
          ]
        }
      ]
    },
    {
      part: "Часть V. Bash-specific",
      chapters: [
        {
          id: "ch20",
          title: "Глава 20. Массивы и расширения Bash",
          subchapters: [
            { id: "ch20_01", title: "01. Индексированные массивы", questions: 3 },
            { id: "ch20_02", title: "02. Ассоциативные массивы", questions: 3 },
            { id: "ch20_03", title: "03. Расширения Bash", questions: 3 }
          ]
        },
        {
          id: "ch21",
          title: "Глава 21. Отладка в Bash",
          subchapters: [
            { id: "ch21_01", title: "01. Режимы отладки", questions: 3 },
            { id: "ch21_02", title: "02. shellcheck", questions: 3 },
            { id: "ch21_03", title: "03. Отладочные техники", questions: 3 }
          ]
        },
        {
          id: "ch22",
          title: "Глава 22. Интеграция с системой",
          subchapters: [
            { id: "ch22_01", title: "01. systemd и systemctl", questions: 3 },
            { id: "ch22_02", title: "02. Планировщики: cron, at", questions: 3 },
            { id: "ch22_03", title: "03. Журналирование: journalctl, logger", questions: 3 }
          ]
        }
      ]
    },
    {
      part: "Часть VI. Backups via Bash",
      chapters: [
        {
          id: "ch23",
          title: "Глава 23. Анатомия данных в Linux",
          subchapters: [
            { id: "ch23_01", title: "01. FHS: что бэкапить, что игнорировать", questions: 5 },
            { id: "ch23_02", title: "02. Inode, жёсткие и символьные ссылки", questions: 5 },
            { id: "ch23_03", title: "03. Метаданные: права, владельцы, специальные биты", questions: 5 },
            { id: "ch23_04", title: "04. ACL и расширенные атрибуты (xattr)", questions: 5 },
            { id: "ch23_05", title: "05. Файловые системы: ext4, btrfs, xfs", questions: 5 },
            { id: "ch23_06", title: "06. Физический уровень: диски, разделы, LVM", questions: 5 },
            { id: "ch23_07", title: "07. Загрузчик GRUB и этапы старта", questions: 5 },
            { id: "ch23_08", title: "08. Современные загрузчики: systemd-boot и EFISTUB", questions: 6 },
            { id: "ch23_09", title: "09. ZFS: файловая система для бэкапов", questions: 7 }
          ]
        },
        {
          id: "ch24",
          title: "Глава 24. Стратегии и расчёты резервного копирования",
          subchapters: [
            { id: "ch24_01", title: "01. Политики хранения", questions: 5 },
            { id: "ch24_02", title: "02. Правило 3-2-1 и схемы ротации (GFS)", questions: 5 },
            { id: "ch24_03", title: "03. Расчёт ёмкости хранилища (формулы)", questions: 5 },
            { id: "ch24_04", title: "04. Пример расчёта «на пальцах»", questions: 5 }
          ]
        },
        {
          id: "ch25",
          title: "Глава 25. Интегрированные сценарии: создание и восстановление",
          subchapters: [
            { id: "ch25_01", title: "01. Десктоп/Ноутбук: /home и конфиги", questions: 5 },
            { id: "ch25_02", title: "02. Десктоп: Bare Metal Recovery", questions: 5 },
            { id: "ch25_03", title: "03. Homelab: контейнеры, ВМ, сеть", questions: 5 },
            { id: "ch25_04", title: "04. Верификация восстановления", questions: 5 }
          ]
        },
        {
          id: "ch26",
          title: "Глава 26. Автоматизация и Bash-скрипты",
          subchapters: [
            { id: "ch26_01", title: "01. Архитектура скрипта: проверки, flock, коды возврата", questions: 5 },
            { id: "ch26_02", title: "02. Обработка ошибок и идемпотентность", questions: 5 },
            { id: "ch26_03", title: "03. Логирование и уведомления", questions: 5 },
            { id: "ch26_04", title: "04. Планировщики: cron vs systemd timers", questions: 5 },
            { id: "ch26_05", title: "05. Ротация GFS и безопасная очистка", questions: 5 },
            { id: "ch26_06", title: "06. Автоматическое тестовое восстановление", questions: 5 },
            { id: "ch26_07", title: "07. Мониторинг свежести и алертинг", questions: 5 }
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
    const partId = `part-${partIndex}`;
    html += `<div class="quiz-part" id="${partId}">`;
    html += `<div class="quiz-part-header">`;
    html += `<label class="quiz-part-label">`;
    html += `<input type="checkbox" class="part-checkbox" data-part="${partIndex}">`;
    html += `<strong>${part.part}</strong>`;
    html += `</label>`;
    html += `</div>`;

    part.chapters.forEach((chapter, chapterIndex) => {
      const chapterId = `${partId}-ch${chapterIndex}`;
      html += `<div class="quiz-chapter" id="${chapterId}">`;
      html += `<div class="quiz-chapter-header">`;
      html += `<label class="quiz-chapter-label">`;
      html += `<input type="checkbox" class="chapter-checkbox" data-part="${partIndex}" data-chapter="${chapterIndex}">`;
      html += `<span>${chapter.title}</span>`;
      html += `</label>`;
      html += `</div>`;
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
                   data-part="${partIndex}"
                   data-chapter="${chapterIndex}"
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

  // Добавляем обработчики для группового выбора
  addGroupSelectHandlers();
}

function addGroupSelectHandlers() {
  // Обработчики для чекбоксов частей
  document.querySelectorAll('.part-checkbox').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
      const partIndex = this.dataset.part;
      const subchapters = document.querySelectorAll(`input[name="subchapter"][data-part="${partIndex}"]`);
      subchapters.forEach(cb => {
        cb.checked = this.checked;
        cb.closest('.quiz-subchapter').classList.toggle('selected', this.checked);
      });
      updateStartButton();
      updateChapterCheckbox(partIndex);
    });
  });

  // Обработчики для чекбоксов глав
  document.querySelectorAll('.chapter-checkbox').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
      const partIndex = this.dataset.part;
      const chapterIndex = this.dataset.chapter;
      const subchapters = document.querySelectorAll(`input[name="subchapter"][data-part="${partIndex}"][data-chapter="${chapterIndex}"]`);
      subchapters.forEach(cb => {
        cb.checked = this.checked;
        cb.closest('.quiz-subchapter').classList.toggle('selected', this.checked);
      });
      updateStartButton();
      updatePartCheckbox(partIndex);
    });
  });

  // Обработчики для индивидуальных подглав
  document.querySelectorAll('input[name="subchapter"]').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
      this.closest('.quiz-subchapter').classList.toggle('selected', this.checked);
      updateStartButton();
      updateChapterCheckbox(this.dataset.part);
      updatePartCheckbox(this.dataset.part);
    });
  });
}

function updatePartCheckbox(partIndex) {
  const partCheckbox = document.querySelector(`.part-checkbox[data-part="${partIndex}"]`);
  if (!partCheckbox) return;

  const subchapters = document.querySelectorAll(`input[name="subchapter"][data-part="${partIndex}"]`);
  const checkedSubchapters = document.querySelectorAll(`input[name="subchapter"][data-part="${partIndex}"]:checked`);
  
  partCheckbox.checked = subchapters.length > 0 && checkedSubchapters.length === subchapters.length;
  partCheckbox.indeterminate = checkedSubchapters.length > 0 && checkedSubchapters.length < subchapters.length;
}

function updateChapterCheckbox(partIndex) {
  const chapterCheckboxes = document.querySelectorAll(`.chapter-checkbox[data-part="${partIndex}"]`);
  chapterCheckboxes.forEach(chapterCheckbox => {
    const chapterIndex = chapterCheckbox.dataset.chapter;
    const subchapters = document.querySelectorAll(`input[name="subchapter"][data-part="${partIndex}"][data-chapter="${chapterIndex}"]`);
    const checkedSubchapters = document.querySelectorAll(`input[name="subchapter"][data-part="${partIndex}"][data-chapter="${chapterIndex}"]:checked`);
    
    chapterCheckbox.checked = subchapters.length > 0 && checkedSubchapters.length === subchapters.length;
    chapterCheckbox.indeterminate = checkedSubchapters.length > 0 && checkedSubchapters.length < subchapters.length;
  });
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
  updateStartButton();
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
  window.location.href = '/Linux-via-Bash/tests/quiz/';
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
