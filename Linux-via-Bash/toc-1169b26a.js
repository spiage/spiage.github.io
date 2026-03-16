// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item "><li class="spacer"></li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="preface/index.html"><strong aria-hidden="true">1.</strong> Предисловие</a></span></li><li class="chapter-item "><li class="spacer"></li></li><li class="chapter-item "><li class="part-title">Часть I. Основы Linux</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part1/ch01_intro/index.html"><strong aria-hidden="true">2.</strong> Глава 1. Введение в ядро Linux</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part1/ch01_intro/01_why_kernel_matters.html"><strong aria-hidden="true">2.1.</strong> Почему понимание ядра важно</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part1/ch01_intro/02_user_kernel_space.html"><strong aria-hidden="true">2.2.</strong> User space vs Kernel space</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part1/ch01_intro/03_syscalls.html"><strong aria-hidden="true">2.3.</strong> Что такое системный вызов</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part1/ch01_intro/04_strace_intro.html"><strong aria-hidden="true">2.4.</strong> Знакомство со strace</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part1/ch02_syscalls/index.html"><strong aria-hidden="true">3.</strong> Глава 2. Системные вызовы</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part1/ch02_syscalls/01_syscall_table.html"><strong aria-hidden="true">3.1.</strong> Таблица системных вызовов</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part1/ch02_syscalls/02_libc_wrappers.html"><strong aria-hidden="true">3.2.</strong> Библиотечные обёртки</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part1/ch02_syscalls/03_error_handling.html"><strong aria-hidden="true">3.3.</strong> Обработка ошибок</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part1/ch02_syscalls/04_blocking_calls.html"><strong aria-hidden="true">3.4.</strong> Блокирующие вызовы</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part1/ch02_syscalls/05_buffering_caching.html"><strong aria-hidden="true">3.5.</strong> Буферизация и кэширование</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part1/ch03_cpu_modes/index.html"><strong aria-hidden="true">4.</strong> Глава 3. Режимы процессора</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part1/ch03_cpu_modes/01_protection_rings.html"><strong aria-hidden="true">4.1.</strong> Аппаратная модель привилегий</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part1/ch03_cpu_modes/02_memory_isolation.html"><strong aria-hidden="true">4.2.</strong> Защита адресного пространства</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part1/ch03_cpu_modes/03_privileged_instructions.html"><strong aria-hidden="true">4.3.</strong> Привилегированные инструкции</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part1/ch03_cpu_modes/04_cpu_modes.html"><strong aria-hidden="true">4.4.</strong> Инструкции переключения</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part1/ch03_cpu_modes/05_context_switch.html"><strong aria-hidden="true">4.5.</strong> Стоимость переключения</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part1/ch04_filesystem/index.html"><strong aria-hidden="true">5.</strong> Глава 4. Файловая система</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part1/ch04_filesystem/01_everything_is_file.html"><strong aria-hidden="true">5.1.</strong> Всё есть файл</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part1/ch04_filesystem/02_file_descriptors.html"><strong aria-hidden="true">5.2.</strong> Файловые дескрипторы</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part1/ch04_filesystem/03_file_syscalls.html"><strong aria-hidden="true">5.3.</strong> Системные вызовы для работы с файлами</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part1/ch04_filesystem/04_permissions.html"><strong aria-hidden="true">5.4.</strong> Права доступа</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part1/ch04_filesystem/05_inode_vfs.html"><strong aria-hidden="true">5.5.</strong> Inode и VFS</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part1/ch04_filesystem/06_mounting.html"><strong aria-hidden="true">5.6.</strong> Монтирование</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part1/ch04_filesystem/07_special_files.html"><strong aria-hidden="true">5.7.</strong> Специальные файлы</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part1/ch04_filesystem/08_proc_sys.html"><strong aria-hidden="true">5.8.</strong> /proc и /sys</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part1/ch05_processes/index.html"><strong aria-hidden="true">6.</strong> Глава 5. Процессы</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part1/ch05_processes/01_process_basics.html"><strong aria-hidden="true">6.1.</strong> Основы процессов</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part1/ch05_processes/02_fork_exec_wait.html"><strong aria-hidden="true">6.2.</strong> fork, exec, wait</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part1/ch05_processes/03_process_states.html"><strong aria-hidden="true">6.3.</strong> Жизненный цикл и состояния</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part1/ch05_processes/04_environment.html"><strong aria-hidden="true">6.4.</strong> Окружение процесса</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part1/ch05_processes/05_exit_codes.html"><strong aria-hidden="true">6.5.</strong> Завершение и коды возврата</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part1/ch05_processes/06_signals.html"><strong aria-hidden="true">6.6.</strong> Сигналы</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part1/ch05_processes/07_job_control.html"><strong aria-hidden="true">6.7.</strong> Управление заданиями</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part1/ch06_ipc/index.html"><strong aria-hidden="true">7.</strong> Глава 6. Межпроцессное взаимодействие</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part1/ch06_ipc/01_pipes.html"><strong aria-hidden="true">7.1.</strong> Анонимные пайпы</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part1/ch06_ipc/02_fifo.html"><strong aria-hidden="true">7.2.</strong> Именованные пайпы (FIFO)</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part1/ch06_ipc/03_signals_ipc.html"><strong aria-hidden="true">7.3.</strong> Сигналы как IPC</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part1/ch06_ipc/04_sockets.html"><strong aria-hidden="true">7.4.</strong> Сокеты</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part1/ch07_debugging/index.html"><strong aria-hidden="true">8.</strong> Глава 7. Инструменты диагностики</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part1/ch07_debugging/01_strace.html"><strong aria-hidden="true">8.1.</strong> strace</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part1/ch07_debugging/02_lsof.html"><strong aria-hidden="true">8.2.</strong> lsof</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part1/ch07_debugging/03_proc_analysis.html"><strong aria-hidden="true">8.3.</strong> Анализ /proc</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part1/ch07_debugging/04_other_tools.html"><strong aria-hidden="true">8.4.</strong> Дополнительные утилиты</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part1/ch08_security/index.html"><strong aria-hidden="true">9.</strong> Глава 8. Безопасность и изоляция</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part1/ch08_security/01_permission_checking.html"><strong aria-hidden="true">9.1.</strong> Проверка прав ядром</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part1/ch08_security/02_capabilities.html"><strong aria-hidden="true">9.2.</strong> Capabilities</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part1/ch08_security/03_setuid.html"><strong aria-hidden="true">9.3.</strong> setuid, setgid, sticky</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part1/ch08_security/04_memory_protection.html"><strong aria-hidden="true">9.4.</strong> Защита памяти</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part1/ch08_security/05_bypass_protection.html"><strong aria-hidden="true">9.5.</strong> Обход защиты</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part1/ch08_security/06_namespaces.html"><strong aria-hidden="true">9.6.</strong> Namespaces и контейнеры</a></span></li></ol><li class="chapter-item "><li class="spacer"></li></li><li class="chapter-item "><li class="part-title">Часть II. Основы Bash</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part2/ch09_shell/index.html"><strong aria-hidden="true">10.</strong> Глава 9. Shell как интерпретатор</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part2/ch09_shell/01_shell_role.html"><strong aria-hidden="true">10.1.</strong> Роль shell</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part2/ch09_shell/02_command_processing.html"><strong aria-hidden="true">10.2.</strong> Этапы обработки команды</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part2/ch09_shell/03_builtins_externals.html"><strong aria-hidden="true">10.3.</strong> Встроенные и внешние команды</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part2/ch09_shell/04_command_execution.html"><strong aria-hidden="true">10.4.</strong> Поиск и выполнение команд</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part2/ch10_commands/index.html"><strong aria-hidden="true">11.</strong> Глава 10. Встроенные и внешние команды</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part2/ch10_commands/01_builtins_vs_externals.html"><strong aria-hidden="true">11.1.</strong> Встроенные vs внешние</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part2/ch10_commands/02_special_builtins.html"><strong aria-hidden="true">11.2.</strong> Специальные builtins</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part2/ch10_commands/03_bash_builtins.html"><strong aria-hidden="true">11.3.</strong> Встроенные команды Bash</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part2/ch10_commands/04_directory_stack.html"><strong aria-hidden="true">11.4.</strong> Стек каталогов</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part2/ch10_commands/05_external_commands.html"><strong aria-hidden="true">11.5.</strong> Внешние команды</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part2/ch11_commands/index.html"><strong aria-hidden="true">12.</strong> Глава 11. Базовые команды и навигация</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part2/ch11_commands/01_navigation.html"><strong aria-hidden="true">12.1.</strong> Навигация</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part2/ch11_commands/02_viewing.html"><strong aria-hidden="true">12.2.</strong> Просмотр содержимого</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part2/ch11_commands/03_file_operations.html"><strong aria-hidden="true">12.3.</strong> Работа с файлами</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part2/ch11_commands/04_search.html"><strong aria-hidden="true">12.4.</strong> Поиск</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part2/ch12_redirection/index.html"><strong aria-hidden="true">13.</strong> Глава 12. Перенаправление ввода-вывода</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part2/ch12_redirection/01_std_streams.html"><strong aria-hidden="true">13.1.</strong> Стандартные потоки</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part2/ch12_redirection/02_output_redirection.html"><strong aria-hidden="true">13.2.</strong> Перенаправление вывода</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part2/ch12_redirection/03_input_redirection.html"><strong aria-hidden="true">13.3.</strong> Перенаправление ввода</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part2/ch12_redirection/04_fd_redirection.html"><strong aria-hidden="true">13.4.</strong> Работа с файловыми дескрипторами</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part2/ch12_redirection/05_here_doc.html"><strong aria-hidden="true">13.5.</strong> Here-документы и here-строки</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part2/ch13_pipes/index.html"><strong aria-hidden="true">14.</strong> Глава 13. Конвейеры (pipes)</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part2/ch13_pipes/01_what_is_pipeline.html"><strong aria-hidden="true">14.1.</strong> Что такое конвейер</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part2/ch13_pipes/02_pipeline_operators.html"><strong aria-hidden="true">14.2.</strong> Операторы конвейера</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part2/ch13_pipes/03_pipeline_exit_status.html"><strong aria-hidden="true">14.3.</strong> Код выхода конвейера</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part2/ch13_pipes/04_subshells_in_pipelines.html"><strong aria-hidden="true">14.4.</strong> Подпроцессы в конвейере</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part2/ch13_pipes/05_tee_command.html"><strong aria-hidden="true">14.5.</strong> Команда tee</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part2/ch13_pipes/06_xargs.html"><strong aria-hidden="true">14.6.</strong> xargs</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part2/ch13_pipes/07_process_substitution.html"><strong aria-hidden="true">14.7.</strong> Подстановка процессов</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part2/ch14_variables/index.html"><strong aria-hidden="true">15.</strong> Глава 14. Переменные в bash</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part2/ch14_variables/01_variables.html"><strong aria-hidden="true">15.1.</strong> Определение и использование переменных</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part2/ch14_variables/02_quoting.html"><strong aria-hidden="true">15.2.</strong> Экранирование</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part2/ch14_variables/03_command_substitution.html"><strong aria-hidden="true">15.3.</strong> Подстановка команд</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part2/ch14_variables/04_arithmetic.html"><strong aria-hidden="true">15.4.</strong> Арифметические подстановки</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part2/ch15_history/index.html"><strong aria-hidden="true">16.</strong> Глава 15. История команд и псевдонимы</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part2/ch15_history/01_history.html"><strong aria-hidden="true">16.1.</strong> Работа с историей</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part2/ch15_history/02_aliases.html"><strong aria-hidden="true">16.2.</strong> Псевдонимы</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part2/ch15_history/03_functions.html"><strong aria-hidden="true">16.3.</strong> Функции</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part2/ch16_globbing/index.html"><strong aria-hidden="true">17.</strong> Глава 16. Шаблоны имён файлов (globbing)</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part2/ch16_globbing/01_globbing.html"><strong aria-hidden="true">17.1.</strong> Шаблоны имён файлов</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part2/ch17_environment/index.html"><strong aria-hidden="true">18.</strong> Глава 17. Переменные окружения и файлы настройки</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part2/ch17_environment/01_execution_environment.html"><strong aria-hidden="true">18.1.</strong> Окружение выполнения команд</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part2/ch17_environment/02_environment_variables.html"><strong aria-hidden="true">18.2.</strong> Переменные окружения</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part2/ch17_environment/03_startup_files.html"><strong aria-hidden="true">18.3.</strong> Файлы настройки</a></span></li></ol><li class="chapter-item "><li class="spacer"></li></li><li class="chapter-item "><li class="part-title">Часть III. Программирование на Bash</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part3/ch18_structure/index.html"><strong aria-hidden="true">19.</strong> Глава 18. Структура скрипта</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part3/ch18_structure/01_shebang.html"><strong aria-hidden="true">19.1.</strong> Shebang (#!)</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part3/ch18_structure/02_executable.html"><strong aria-hidden="true">19.2.</strong> Права на выполнение</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part3/ch18_structure/03_comments.html"><strong aria-hidden="true">19.3.</strong> Комментарии</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part3/ch18_structure/04_exit_codes.html"><strong aria-hidden="true">19.4.</strong> Коды возврата</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part3/ch19_variables/index.html"><strong aria-hidden="true">20.</strong> Глава 19. Переменные и типы</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part3/ch19_variables/01_variables.html"><strong aria-hidden="true">20.1.</strong> Переменные</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part3/ch19_variables/02_types.html"><strong aria-hidden="true">20.2.</strong> Типы переменных</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part3/ch19_variables/03_arrays.html"><strong aria-hidden="true">20.3.</strong> Массивы</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part3/ch19_variables/04_special_vars.html"><strong aria-hidden="true">20.4.</strong> Специальные переменные</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part3/ch20_expansion/index.html"><strong aria-hidden="true">21.</strong> Глава 20. Parameter expansion</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part3/ch20_expansion/01_basics.html"><strong aria-hidden="true">21.1.</strong> Основы расширения</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part3/ch20_expansion/02_default.html"><strong aria-hidden="true">21.2.</strong> Значение по умолчанию</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part3/ch20_expansion/03_substring.html"><strong aria-hidden="true">21.3.</strong> Подстроки и длина</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part3/ch20_expansion/04_pattern.html"><strong aria-hidden="true">21.4.</strong> Манипуляции с шаблонами</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part3/ch20_expansion/05_replace.html"><strong aria-hidden="true">21.5.</strong> Замена и регистр</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part3/ch21_conditionals/index.html"><strong aria-hidden="true">22.</strong> Глава 21. Условные операторы</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part3/ch21_conditionals/01_if_statement.html"><strong aria-hidden="true">22.1.</strong> Оператор if</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part3/ch21_conditionals/02_case.html"><strong aria-hidden="true">22.2.</strong> Оператор case</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part3/ch21_conditionals/03_test.html"><strong aria-hidden="true">22.3.</strong> test и [ ]</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part3/ch21_conditionals/04_double_brackets.html"><strong aria-hidden="true">22.4.</strong> [ ]</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part3/ch22_loops/index.html"><strong aria-hidden="true">23.</strong> Глава 22. Циклы</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part3/ch22_loops/01_for_loop.html"><strong aria-hidden="true">23.1.</strong> Цикл for</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part3/ch22_loops/02_while_until.html"><strong aria-hidden="true">23.2.</strong> while и until</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part3/ch22_loops/03_break_continue.html"><strong aria-hidden="true">23.3.</strong> break и continue</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part3/ch22_loops/04_select.html"><strong aria-hidden="true">23.4.</strong> select</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part3/ch23_functions/index.html"><strong aria-hidden="true">24.</strong> Глава 23. Функции</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part3/ch23_functions/01_declaration.html"><strong aria-hidden="true">24.1.</strong> Объявление функций</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part3/ch23_functions/02_local_vars.html"><strong aria-hidden="true">24.2.</strong> Локальные переменные</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part3/ch23_functions/03_return.html"><strong aria-hidden="true">24.3.</strong> Возврат значений</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part3/ch23_functions/04_recursion.html"><strong aria-hidden="true">24.4.</strong> Рекурсия</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part3/ch24_io/index.html"><strong aria-hidden="true">25.</strong> Глава 24. Ввод и вывод</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part3/ch24_io/01_read.html"><strong aria-hidden="true">25.1.</strong> read</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part3/ch24_io/02_printf.html"><strong aria-hidden="true">25.2.</strong> printf</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part3/ch24_io/03_exec_redirect.html"><strong aria-hidden="true">25.3.</strong> exec и перенаправления</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part3/ch24_io/04_args_shift.html"><strong aria-hidden="true">25.4.</strong> Обработка аргументов</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part3/ch25_errors/index.html"><strong aria-hidden="true">26.</strong> Глава 25. Обработка ошибок</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part3/ch25_errors/01_set_eu_pipefail.html"><strong aria-hidden="true">26.1.</strong> set -e, -u, pipefail</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part3/ch25_errors/02_trap.html"><strong aria-hidden="true">26.2.</strong> trap</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part3/ch25_errors/03_logging.html"><strong aria-hidden="true">26.3.</strong> Логирование</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part3/ch26_text/index.html"><strong aria-hidden="true">27.</strong> Глава 26. Работа с текстом</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part3/ch26_text/01_cut_paste_join.html"><strong aria-hidden="true">27.1.</strong> cut, paste, join</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part3/ch26_text/02_sort_uniq.html"><strong aria-hidden="true">27.2.</strong> sort, uniq</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part3/ch26_text/03_sed.html"><strong aria-hidden="true">27.3.</strong> sed</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part3/ch26_text/04_awk.html"><strong aria-hidden="true">27.4.</strong> awk</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part3/ch27_debugging/index.html"><strong aria-hidden="true">28.</strong> Глава 27. Отладка скриптов</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part3/ch27_debugging/01_debug_modes.html"><strong aria-hidden="true">28.1.</strong> Режимы отладки</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part3/ch27_debugging/02_trap_syntax.html"><strong aria-hidden="true">28.2.</strong> trap и проверка синтаксиса</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part3/ch27_debugging/03_shellcheck.html"><strong aria-hidden="true">28.3.</strong> shellcheck</a></span></li></ol><li class="chapter-item "><li class="spacer"></li></li><li class="chapter-item "><li class="part-title">Часть IV. Продвинутый Bash</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part4/ch28_expansions/index.html"><strong aria-hidden="true">29.</strong> Глава 28. Подстановки и расширения</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part4/ch29_parallelism/index.html"><strong aria-hidden="true">30.</strong> Глава 29. Параллелизм</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part4/ch30_fd/index.html"><strong aria-hidden="true">31.</strong> Глава 30. Файловые дескрипторы</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part4/ch31_network/index.html"><strong aria-hidden="true">32.</strong> Глава 31. Взаимодействие с сетью</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part4/ch32_systemd/index.html"><strong aria-hidden="true">33.</strong> Глава 32. Интеграция с сервисами</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part4/ch33_optimization/index.html"><strong aria-hidden="true">34.</strong> Глава 33. Оптимизация</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part4/ch34_security/index.html"><strong aria-hidden="true">35.</strong> Глава 34. Безопасность скриптов</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part4/ch35_best_practices/index.html"><strong aria-hidden="true">36.</strong> Глава 35. Лучшие практики</a></span></li><li class="chapter-item "><li class="spacer"></li></li><li class="chapter-item "><li class="part-title">Часть V. Приложения</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part5/ch36_resources/index.html"><strong aria-hidden="true">37.</strong> Приложение A. Литература и ресурсы</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part5/ch37_exercises/index.html"><strong aria-hidden="true">38.</strong> Приложение B. Практические упражнения</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part5/ch38_checklist/index.html"><strong aria-hidden="true">39.</strong> Приложение C. Чек-лист сисадмина</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="part5/ch39_cheatsheets/index.html"><strong aria-hidden="true">40.</strong> Приложение D. Шпаргалки</a></span></li><li class="chapter-item "><li class="spacer"></li></li><li class="chapter-item "><li class="part-title">Справочные материалы</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="refs/bash/index.html"><strong aria-hidden="true">41.</strong> Переведённые разделы bash manual</a></span></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split('#')[0].split('?')[0];
        if (current_page.endsWith('/')) {
            current_page += 'index.html';
        }
        const links = Array.prototype.slice.call(this.querySelectorAll('a'));
        const l = links.length;
        for (let i = 0; i < l; ++i) {
            const link = links[i];
            const href = link.getAttribute('href');
            if (href && !href.startsWith('#') && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The 'index' page is supposed to alias the first chapter in the book.
            if (link.href === current_page
                || i === 0
                && path_to_root === ''
                && current_page.endsWith('/index.html')) {
                link.classList.add('active');
                let parent = link.parentElement;
                while (parent) {
                    if (parent.tagName === 'LI' && parent.classList.contains('chapter-item')) {
                        parent.classList.add('expanded');
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', e => {
            if (e.target.tagName === 'A') {
                const clientRect = e.target.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                sessionStorage.setItem('sidebar-scroll-offset', clientRect.top - sidebarRect.top);
            }
        }, { passive: true });
        const sidebarScrollOffset = sessionStorage.getItem('sidebar-scroll-offset');
        sessionStorage.removeItem('sidebar-scroll-offset');
        if (sidebarScrollOffset !== null) {
            // preserve sidebar scroll position when navigating via links within sidebar
            const activeSection = this.querySelector('.active');
            if (activeSection) {
                const clientRect = activeSection.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                const currentOffset = clientRect.top - sidebarRect.top;
                this.scrollTop += currentOffset - parseFloat(sidebarScrollOffset);
            }
        } else {
            // scroll sidebar to current active section when navigating via
            // 'next/previous chapter' buttons
            const activeSection = document.querySelector('#mdbook-sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        const sidebarAnchorToggles = document.querySelectorAll('.chapter-fold-toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(el => {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define('mdbook-sidebar-scrollbox', MDBookSidebarScrollbox);


// ---------------------------------------------------------------------------
// Support for dynamically adding headers to the sidebar.

(function() {
    // This is used to detect which direction the page has scrolled since the
    // last scroll event.
    let lastKnownScrollPosition = 0;
    // This is the threshold in px from the top of the screen where it will
    // consider a header the "current" header when scrolling down.
    const defaultDownThreshold = 150;
    // Same as defaultDownThreshold, except when scrolling up.
    const defaultUpThreshold = 300;
    // The threshold is a virtual horizontal line on the screen where it
    // considers the "current" header to be above the line. The threshold is
    // modified dynamically to handle headers that are near the bottom of the
    // screen, and to slightly offset the behavior when scrolling up vs down.
    let threshold = defaultDownThreshold;
    // This is used to disable updates while scrolling. This is needed when
    // clicking the header in the sidebar, which triggers a scroll event. It
    // is somewhat finicky to detect when the scroll has finished, so this
    // uses a relatively dumb system of disabling scroll updates for a short
    // time after the click.
    let disableScroll = false;
    // Array of header elements on the page.
    let headers;
    // Array of li elements that are initially collapsed headers in the sidebar.
    // I'm not sure why eslint seems to have a false positive here.
    // eslint-disable-next-line prefer-const
    let headerToggles = [];
    // This is a debugging tool for the threshold which you can enable in the console.
    let thresholdDebug = false;

    // Updates the threshold based on the scroll position.
    function updateThreshold() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // The number of pixels below the viewport, at most documentHeight.
        // This is used to push the threshold down to the bottom of the page
        // as the user scrolls towards the bottom.
        const pixelsBelow = Math.max(0, documentHeight - (scrollTop + windowHeight));
        // The number of pixels above the viewport, at least defaultDownThreshold.
        // Similar to pixelsBelow, this is used to push the threshold back towards
        // the top when reaching the top of the page.
        const pixelsAbove = Math.max(0, defaultDownThreshold - scrollTop);
        // How much the threshold should be offset once it gets close to the
        // bottom of the page.
        const bottomAdd = Math.max(0, windowHeight - pixelsBelow - defaultDownThreshold);
        let adjustedBottomAdd = bottomAdd;

        // Adjusts bottomAdd for a small document. The calculation above
        // assumes the document is at least twice the windowheight in size. If
        // it is less than that, then bottomAdd needs to be shrunk
        // proportional to the difference in size.
        if (documentHeight < windowHeight * 2) {
            const maxPixelsBelow = documentHeight - windowHeight;
            const t = 1 - pixelsBelow / Math.max(1, maxPixelsBelow);
            const clamp = Math.max(0, Math.min(1, t));
            adjustedBottomAdd *= clamp;
        }

        let scrollingDown = true;
        if (scrollTop < lastKnownScrollPosition) {
            scrollingDown = false;
        }

        if (scrollingDown) {
            // When scrolling down, move the threshold up towards the default
            // downwards threshold position. If near the bottom of the page,
            // adjustedBottomAdd will offset the threshold towards the bottom
            // of the page.
            const amountScrolledDown = scrollTop - lastKnownScrollPosition;
            const adjustedDefault = defaultDownThreshold + adjustedBottomAdd;
            threshold = Math.max(adjustedDefault, threshold - amountScrolledDown);
        } else {
            // When scrolling up, move the threshold down towards the default
            // upwards threshold position. If near the bottom of the page,
            // quickly transition the threshold back up where it normally
            // belongs.
            const amountScrolledUp = lastKnownScrollPosition - scrollTop;
            const adjustedDefault = defaultUpThreshold - pixelsAbove
                + Math.max(0, adjustedBottomAdd - defaultDownThreshold);
            threshold = Math.min(adjustedDefault, threshold + amountScrolledUp);
        }

        if (documentHeight <= windowHeight) {
            threshold = 0;
        }

        if (thresholdDebug) {
            const id = 'mdbook-threshold-debug-data';
            let data = document.getElementById(id);
            if (data === null) {
                data = document.createElement('div');
                data.id = id;
                data.style.cssText = `
                    position: fixed;
                    top: 50px;
                    right: 10px;
                    background-color: 0xeeeeee;
                    z-index: 9999;
                    pointer-events: none;
                `;
                document.body.appendChild(data);
            }
            data.innerHTML = `
                <table>
                  <tr><td>documentHeight</td><td>${documentHeight.toFixed(1)}</td></tr>
                  <tr><td>windowHeight</td><td>${windowHeight.toFixed(1)}</td></tr>
                  <tr><td>scrollTop</td><td>${scrollTop.toFixed(1)}</td></tr>
                  <tr><td>pixelsAbove</td><td>${pixelsAbove.toFixed(1)}</td></tr>
                  <tr><td>pixelsBelow</td><td>${pixelsBelow.toFixed(1)}</td></tr>
                  <tr><td>bottomAdd</td><td>${bottomAdd.toFixed(1)}</td></tr>
                  <tr><td>adjustedBottomAdd</td><td>${adjustedBottomAdd.toFixed(1)}</td></tr>
                  <tr><td>scrollingDown</td><td>${scrollingDown}</td></tr>
                  <tr><td>threshold</td><td>${threshold.toFixed(1)}</td></tr>
                </table>
            `;
            drawDebugLine();
        }

        lastKnownScrollPosition = scrollTop;
    }

    function drawDebugLine() {
        if (!document.body) {
            return;
        }
        const id = 'mdbook-threshold-debug-line';
        const existingLine = document.getElementById(id);
        if (existingLine) {
            existingLine.remove();
        }
        const line = document.createElement('div');
        line.id = id;
        line.style.cssText = `
            position: fixed;
            top: ${threshold}px;
            left: 0;
            width: 100vw;
            height: 2px;
            background-color: red;
            z-index: 9999;
            pointer-events: none;
        `;
        document.body.appendChild(line);
    }

    function mdbookEnableThresholdDebug() {
        thresholdDebug = true;
        updateThreshold();
        drawDebugLine();
    }

    window.mdbookEnableThresholdDebug = mdbookEnableThresholdDebug;

    // Updates which headers in the sidebar should be expanded. If the current
    // header is inside a collapsed group, then it, and all its parents should
    // be expanded.
    function updateHeaderExpanded(currentA) {
        // Add expanded to all header-item li ancestors.
        let current = currentA.parentElement;
        while (current) {
            if (current.tagName === 'LI' && current.classList.contains('header-item')) {
                current.classList.add('expanded');
            }
            current = current.parentElement;
        }
    }

    // Updates which header is marked as the "current" header in the sidebar.
    // This is done with a virtual Y threshold, where headers at or below
    // that line will be considered the current one.
    function updateCurrentHeader() {
        if (!headers || !headers.length) {
            return;
        }

        // Reset the classes, which will be rebuilt below.
        const els = document.getElementsByClassName('current-header');
        for (const el of els) {
            el.classList.remove('current-header');
        }
        for (const toggle of headerToggles) {
            toggle.classList.remove('expanded');
        }

        // Find the last header that is above the threshold.
        let lastHeader = null;
        for (const header of headers) {
            const rect = header.getBoundingClientRect();
            if (rect.top <= threshold) {
                lastHeader = header;
            } else {
                break;
            }
        }
        if (lastHeader === null) {
            lastHeader = headers[0];
            const rect = lastHeader.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top >= windowHeight) {
                return;
            }
        }

        // Get the anchor in the summary.
        const href = '#' + lastHeader.id;
        const a = [...document.querySelectorAll('.header-in-summary')]
            .find(element => element.getAttribute('href') === href);
        if (!a) {
            return;
        }

        a.classList.add('current-header');

        updateHeaderExpanded(a);
    }

    // Updates which header is "current" based on the threshold line.
    function reloadCurrentHeader() {
        if (disableScroll) {
            return;
        }
        updateThreshold();
        updateCurrentHeader();
    }


    // When clicking on a header in the sidebar, this adjusts the threshold so
    // that it is located next to the header. This is so that header becomes
    // "current".
    function headerThresholdClick(event) {
        // See disableScroll description why this is done.
        disableScroll = true;
        setTimeout(() => {
            disableScroll = false;
        }, 100);
        // requestAnimationFrame is used to delay the update of the "current"
        // header until after the scroll is done, and the header is in the new
        // position.
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                // Closest is needed because if it has child elements like <code>.
                const a = event.target.closest('a');
                const href = a.getAttribute('href');
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    threshold = targetElement.getBoundingClientRect().bottom;
                    updateCurrentHeader();
                }
            });
        });
    }

    // Takes the nodes from the given head and copies them over to the
    // destination, along with some filtering.
    function filterHeader(source, dest) {
        const clone = source.cloneNode(true);
        clone.querySelectorAll('mark').forEach(mark => {
            mark.replaceWith(...mark.childNodes);
        });
        dest.append(...clone.childNodes);
    }

    // Scans page for headers and adds them to the sidebar.
    document.addEventListener('DOMContentLoaded', function() {
        const activeSection = document.querySelector('#mdbook-sidebar .active');
        if (activeSection === null) {
            return;
        }

        const main = document.getElementsByTagName('main')[0];
        headers = Array.from(main.querySelectorAll('h2, h3, h4, h5, h6'))
            .filter(h => h.id !== '' && h.children.length && h.children[0].tagName === 'A');

        if (headers.length === 0) {
            return;
        }

        // Build a tree of headers in the sidebar.

        const stack = [];

        const firstLevel = parseInt(headers[0].tagName.charAt(1));
        for (let i = 1; i < firstLevel; i++) {
            const ol = document.createElement('ol');
            ol.classList.add('section');
            if (stack.length > 0) {
                stack[stack.length - 1].ol.appendChild(ol);
            }
            stack.push({level: i + 1, ol: ol});
        }

        // The level where it will start folding deeply nested headers.
        const foldLevel = 3;

        for (let i = 0; i < headers.length; i++) {
            const header = headers[i];
            const level = parseInt(header.tagName.charAt(1));

            const currentLevel = stack[stack.length - 1].level;
            if (level > currentLevel) {
                // Begin nesting to this level.
                for (let nextLevel = currentLevel + 1; nextLevel <= level; nextLevel++) {
                    const ol = document.createElement('ol');
                    ol.classList.add('section');
                    const last = stack[stack.length - 1];
                    const lastChild = last.ol.lastChild;
                    // Handle the case where jumping more than one nesting
                    // level, which doesn't have a list item to place this new
                    // list inside of.
                    if (lastChild) {
                        lastChild.appendChild(ol);
                    } else {
                        last.ol.appendChild(ol);
                    }
                    stack.push({level: nextLevel, ol: ol});
                }
            } else if (level < currentLevel) {
                while (stack.length > 1 && stack[stack.length - 1].level > level) {
                    stack.pop();
                }
            }

            const li = document.createElement('li');
            li.classList.add('header-item');
            li.classList.add('expanded');
            if (level < foldLevel) {
                li.classList.add('expanded');
            }
            const span = document.createElement('span');
            span.classList.add('chapter-link-wrapper');
            const a = document.createElement('a');
            span.appendChild(a);
            a.href = '#' + header.id;
            a.classList.add('header-in-summary');
            filterHeader(header.children[0], a);
            a.addEventListener('click', headerThresholdClick);
            const nextHeader = headers[i + 1];
            if (nextHeader !== undefined) {
                const nextLevel = parseInt(nextHeader.tagName.charAt(1));
                if (nextLevel > level && level >= foldLevel) {
                    const toggle = document.createElement('a');
                    toggle.classList.add('chapter-fold-toggle');
                    toggle.classList.add('header-toggle');
                    toggle.addEventListener('click', () => {
                        li.classList.toggle('expanded');
                    });
                    const toggleDiv = document.createElement('div');
                    toggleDiv.textContent = '❱';
                    toggle.appendChild(toggleDiv);
                    span.appendChild(toggle);
                    headerToggles.push(li);
                }
            }
            li.appendChild(span);

            const currentParent = stack[stack.length - 1];
            currentParent.ol.appendChild(li);
        }

        const onThisPage = document.createElement('div');
        onThisPage.classList.add('on-this-page');
        onThisPage.append(stack[0].ol);
        const activeItemSpan = activeSection.parentElement;
        activeItemSpan.after(onThisPage);
    });

    document.addEventListener('DOMContentLoaded', reloadCurrentHeader);
    document.addEventListener('scroll', reloadCurrentHeader, { passive: true });
})();

