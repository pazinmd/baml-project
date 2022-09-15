// creating an array and passing the number, questions, options, and answers
let questions = [
  {
  numb: 1,
  question: "Что такое BAML?",
  answer: "Ограничение ДБО",
  options: [
    "Внутренняя проверка операций",
    "Блокировка средств клиента банком",
    "Ограничение ДБО",
    "Проверка Росфинмониторинга"
  ]
},
  {
  numb: 2,
  question: "Росфинмониторинг - это ваш отдел?",
  answer: "Нет, это федеральный орган исп. власти",
  options: [
    "Нет, это отдел Центрального Банка РФ",
    "Да, мы финансируем это подразделение в банке.",
    "Да, это отдел нашего банка",
    "Нет, это федеральный орган исп. власти"
  ]
},
  {
  numb: 3,
  question: "Мерами по работе с AML являются...",
  answer: "115 ФЗ, Росфинмониторинг, Отдел специализированного сопровождения бизнеса, УКБО",
  options: [
    "115ФЗ и УКБО",
    "Росфинмониторинг, УКБО, 115 ФЗ",
    "115 ФЗ, Росфинмониторинг, Отдел специализированного сопровождения бизнеса, УКБО",
    "Крестик и пацанское слово"
  ]
},
  {
  numb: 4,
  question: "Если я выведу средства могу ли я не закрывать в таком случае счет?",
  answer: "Нет, если вы сейчас даете согласие на вывод средств, то и аккаунт ваш мы тоже закрываем",
  options: [
    "Нет, если вы сейчас даете согласие на вывод средств, то и аккаунт ваш мы тоже закрываем",
    "Да. Счет будет открыт, можете пользоваться",
    "Да. Счет будет открыт, а вы можете пользоваться в рамках установленного лимита",
    "Да, может еще один счет откроем?"
  ]
},
  {
  numb: 5,
  question: "Где указан порядок работы с BAML?",
  answer: "Процедура Специнфо AML",
  options: [
    "Процедура Специнфо AML",
    "УКБО",
    "Инсайт",
    "Help.tinkoff.ru"
  ]
},
{
  numb: 6,
  question: "Клиент обратился за выводом средств после вынесения решения о BAML. Предоставил реквизиты своей сестры. Твои действия?",
  answer: "Выводить можно только на реквизиты аккаунта со своим именем. Вывести не получится",
  options: [
    "Пройду по выводу средств. Укажу в комментарии, что клиент выводит средства своей сестре.",
    "Позвоню в Бэк-Офис для уточнения и согласования",
    "Выводить можно только на реквизиты аккаунта со своим именем. Вывести не получится",
    "Позвоню на сотрудника, работающего в OUI. Только у них есть доступы к этому"
  ]
},
{
  numb: 7,
  question: "Клиент собирается закрыть счет после BAML. Но спрашивает будут ли у него ограничения, если откроет новый. Как поступишь?",
  answer: "Скажу, что вы можете оставить заявку на новый после закрытия. Но мы не можем гарантировать вам отстутствие ограничений",
  options: [
    "В процедуре проверю Специнфо AML указано можно ли открыть клиенту новый счет после закрытия. Скажу информацию оттуда.",
    "Скажу, что вы можете оставить заявку на новый после закрытия. Но мы не можем гарантировать вам отстутствие ограничений",
    "Посмотрю на поле комментариев в таске по запросу документов. Там всегда пишут можно ли открыть счет еще.",
    "Согласно информации с инсайта, если клиент откроет новый счет, то и ограничений никаких не будет."
  ]
},
{
  numb: 8,
  question: "Клиент обращается из Великобритании. Ему был вынесен BAML. Хочет вывести средства на свой счет в иностранном банке. Твой ответ?",
  answer: "К сожалению вы можете вывести средства только на свои реквизиты в Российском банке",
  options: [
    "К сожалению вы можете вывести средства только на свои реквизиты в Российском банке",
    "К сожалению вы не можете давать распоряжение на вывод средств, находясь в недружественной стране.",
    "Пришлите ваши реквизиты в чат. А также, согласно информациии в процедуре - пришлите справки о доходе.",
    "Давайте сделаем вывод средств на звонке. Для вас предпочтительнее swift или перевод по номеру карты?"
  ]
},
{
  numb: 9,
  question: "В каком из документов указана информация о том, что клиенты обязаны предоставлять организациям, осуществляющим операции с денежными средствами информацию и документы?",
  answer: "И в 115-ФЗ и в УКБО",
  options: [
    "В УКБО",
    "В 115-ФЗ",
    "И в 115-ФЗ и в УКБО",
    "Информация не указана ни в одном из этих документов"
  ]
},
{
  numb: 10,
  question: "Клиент обратился и спрашивает - 'Комплексная банковская проверка - это что вообще? Расскажите мне о ней больше.'",
  answer: "Это является внутренней информацией компании. Говорить об этом я, к сожалению, не могу.",
  options: [
    "Проверка отдела специализированного сопровождения бизнеса и выявление комплаенс рисков по каждому клиенту.",
    "Это комплекс мер, направленных нашим банком на выявление операций по отмыванию денег.",
    "Это является внутренней информацией компании. Говорить об этом я, к сожалению, не могу.",
    "В процедуре 'Юридически обоснованный ответ' есть эта информация."
  ]
}
// you can uncomment the below codes and make duplicate as more as you want to add question
// but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....
//   {
//   numb: 6,
//   question: "Your Question is Here",
//   answer: "Correct answer of the question is here",
//   options: [
//     "Option 1",
//     "option 2",
//     "option 3",
//     "option 4"
//   ]
// },
];