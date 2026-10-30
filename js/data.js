/* Give Love — каталог шаблонов.
   Полная инструкция: README.md → «Как добавить шаблон».

   Чтобы добавить картинки шаблону, допиши ему поля:
     coverImg: 'images/templates/imen/cover.jpg',
     pageImgs: ['images/templates/imen/01.jpg', 'images/templates/imen/02.jpg', ...],
     bgImg:    'images/templates/imen/bg.jpg'
*/
const T = [
 {id:'imen',name:'Именинница',mast:'ИМЕНИННИЦА',cat:'birthday',catName:'День рождения',price:695,pages:24,pop:10,tag:'Хит',font:'Playfair Display',bg:'#F2C7D0',fg:'#3B1220',acc:'#B3264A',pbg:'#FFF8F9',pfg:'#2A0F17',layout:'classic',
  issue:'Спецвыпуск · 25 лет',head:'Ане 25: главная героиня года',subs:['Лучшие фото года','Интервью с именинницей'],
  desc:'Журнал о любимой имениннице: обложка с её фото, история жизни, лучшие моменты года и пожелания близких.',
  toc:[['Детство','Первые фото и смешные истории'],['Год в кадре','Двенадцать месяцев, двенадцать моментов'],['Пожелания','Тёплые слова от друзей и семьи']],
  q:'Лучший подарок — люди, которые сегодня рядом.'},
 {id:'bestie',name:'Именинница for Bestie',cat:'birthday',catName:'День рождения',price:795,pages:34,pop:11,tag:'Новинка',
  acc:'#7FB0DC',bg:'#DDEBF7',
  desc:'Журнал ко дню рождения лучшей подруги на 34 страницы: «Who is that girl?», детство, год в фото по месяцам, плейлист, стиль, «Your 18», что в сумочке, бьюти-секреты, любимые фильмы, ваши моменты и письмо от тебя.',
  pageImgs:[
    'images/templates/bestie/01.jpg',
    'images/templates/bestie/02.jpg',
    'images/templates/bestie/03.jpg',
    'images/templates/bestie/04.jpg',
    'images/templates/bestie/05.jpg',
    'images/templates/bestie/06.jpg',
    'images/templates/bestie/07.jpg',
    'images/templates/bestie/08.jpg',
    'images/templates/bestie/09.jpg',
    'images/templates/bestie/10.jpg',
    'images/templates/bestie/11.jpg',
    'images/templates/bestie/12.jpg',
    'images/templates/bestie/13.jpg',
    'images/templates/bestie/14.jpg',
    'images/templates/bestie/15.jpg',
    'images/templates/bestie/16.jpg',
    'images/templates/bestie/17.jpg',
    'images/templates/bestie/18.jpg',
    'images/templates/bestie/19.jpg',
    'images/templates/bestie/20.jpg',
    'images/templates/bestie/21.jpg',
    'images/templates/bestie/22.jpg',
    'images/templates/bestie/23.jpg',
    'images/templates/bestie/24.jpg',
    'images/templates/bestie/25.jpg',
    'images/templates/bestie/26.jpg',
    'images/templates/bestie/27.jpg',
    'images/templates/bestie/28.jpg',
    'images/templates/bestie/29.jpg',
    'images/templates/bestie/30.jpg',
    'images/templates/bestie/31.jpg',
    'images/templates/bestie/32.jpg',
    'images/templates/bestie/33.jpg',
    'images/templates/bestie/34.jpg'
  ]
 },
 {id:'love',name:'История любви',mast:'LOVE STORY',cat:'couple',catName:'Для пары',price:695,pages:24,pop:8,font:'Cormorant Garamond',bg:'#5E0F1F',fg:'#FBEFEF',acc:'#F2B8B8',pbg:'#FFF9F8',pfg:'#3A0A14',layout:'classic',
  issue:'Номер для двоих',head:'Как мы встретились и что было дальше',subs:['Первое свидание','Наши места'],
  desc:'Подарок на годовщину или 14 февраля: ваша история от знакомства до сегодняшнего дня в фотографиях и словах.',
  toc:[['Знакомство','С чего всё началось'],['Наши места','Где мы были счастливы'],['Будущее','Мечты и планы на двоих']],
  q:'Я понял, что это ты, ещё до того, как ты сказала «привет».'},
 {id:'mama',name:'Для мамы',mast:'МАМА',cat:'family',catName:'Для семьи',price:695,pages:24,pop:7,font:'Prata',bg:'#CFD8C6',fg:'#25301F',acc:'#8A4F5B',pbg:'#FAFBF7',pfg:'#25301F',layout:'split',
  issue:'Особый выпуск',head:'Самая главная женщина в нашей жизни',subs:['Семейный архив','Письма от детей и внуков'],
  desc:'Журнал для мамы или бабушки: семейные фото разных лет, её рецепты и письма от детей и внуков.',
  toc:[['Семейный архив','Фото разных лет'],['Мамины рецепты','Блюда по её записям'],['Письма','Слова от детей и внуков']],
  q:'Всё, что я умею, я когда-то увидел у неё.'},
 {id:'geroy',name:'Его день рождения',mast:'ГЕРОЙ',cat:'birthday',catName:'День рождения',price:695,pages:24,pop:6,font:'Unbounded',bg:'#14243D',fg:'#F2EEE3',acc:'#D9A441',pbg:'#F5F6F8',pfg:'#14243D',layout:'bold',
  issue:'Выпуск № 30',head:'Человек года по версии семьи',subs:['30 фактов о нём','Главные достижения'],
  desc:'Мужской журнал ко дню рождения или юбилею: биография, достижения, факты и поздравления друзей.',
  toc:[['Биография','От первых шагов до первой машины'],['Достижения','Чем мы гордимся'],['Поздравления','Слова от друзей']],
  q:'Жизнь только начинается, а сколько уже успел.'},
 {id:'svadba',name:'Наша свадьба',mast:'WEDDING',cat:'couple',catName:'Для пары',price:795,pages:32,pop:5,tag:'Новинка',font:'Playfair Display',bg:'#2F3A35',fg:'#F3F4EF',acc:'#C7B48A',pbg:'#FFFFFF',pfg:'#22291F',layout:'classic',
  issue:'Свадебный номер',head:'Сказали «да» и ни разу не пожалели',subs:['День в фотографиях','Наши клятвы'],
  desc:'Свадебный журнал вместо обычного фотоальбома: предложение, подготовка, сам день и пожелания гостей.',
  toc:[['Предложение','Как это было'],['Наш день','Свадьба в фотографиях'],['Гости','Пожелания друзей и родных']],
  q:'Хотели праздник для своих, а получили лучший день в жизни.'},
 {id:'vypusk',name:'Выпускной',mast:'ВЫПУСК',cat:'family',catName:'Для семьи',price:695,pages:24,pop:4,font:'Unbounded',bg:'#FF6A1A',fg:'#1A1206',acc:'#1A1206',pbg:'#FFFFFF',pfg:'#1A1206',layout:'split',
  issue:'Выпуск 2026',head:'Четыре года, которые мы не забудем',subs:['Лица курса','Цитаты преподавателей'],
  desc:'Журнал для выпускника, класса или группы: лица курса, истории учёбы и пожелания преподавателей.',
  toc:[['Лица курса','Каждый выпускник на странице'],['Учёба','Сессии, практики и дипломы'],['Пожелания','Слова от преподавателей']],
  q:'Пришли незнакомыми, а уходим семьёй.'}
];
const SETS=[
 {id:'set-mama',name:'Мама + Именинница',items:['mama','imen'],price:1100,old:1390,pop:7},
 {id:'set-love',name:'Love Story + Именинница',items:['love','imen'],price:1100,old:1390,pop:6},
 {id:'set-geroy',name:'Герой + Именинница',items:['geroy','imen'],price:1100,old:1390,pop:5}
].map(x=>({...x,isSet:true,cat:'sets',catName:'Набор из 2 шаблонов',tag:'−20%',pages:'2 × 24',desc:'Два шаблона по цене со скидкой: удобно, если поздравляете нескольких человек.'}));
const ALL=[...T,...SETS];
const CATS=[['all','Все'],['birthday','День рождения'],['couple','Для пары'],['family','Для семьи'],['sets','Наборы −20%']];
