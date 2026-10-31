/* Give Love — каталог шаблонов.
   Полная инструкция: README.md → «Как добавить шаблон».

   Чтобы добавить картинки шаблону, допиши ему поля:
     coverImg: 'images/templates/imen/cover.jpg',
     pageImgs: ['images/templates/imen/01.jpg', 'images/templates/imen/02.jpg', ...],
     bgImg:    'images/templates/imen/bg.jpg'
*/
const T = [
 {id:'bestie',name:'Любимой имениннице',cat:'birthday',catName:'День рождения',price:795,pages:34,pop:11,tag:'Новинка',
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
 {id:'mama',name:'Дорогой маме',mast:'МАМА',cat:'family',catName:'Для семьи',price:695,pages:24,pop:8,font:'Prata',bg:'#CFD8C6',fg:'#25301F',acc:'#8A4F5B',pbg:'#FAFBF7',pfg:'#25301F',layout:'split',
  issue:'Особый выпуск',head:'Самая главная женщина в нашей жизни',subs:['Семейный архив','Письма от детей и внуков'],
  desc:'Журнал для мамы или бабушки: семейные фото разных лет, её рецепты и письма от детей и внуков.',
  toc:[['Семейный архив','Фото разных лет'],['Мамины рецепты','Блюда по её записям'],['Письма','Слова от детей и внуков']],
  q:'Всё, что я умею, я когда-то увидел у неё.'},
 {id:'love',name:'История любви',mast:'LOVE STORY',cat:'couple',catName:'Для пары',price:695,pages:24,pop:7,font:'Cormorant Garamond',bg:'#5E0F1F',fg:'#FBEFEF',acc:'#F2B8B8',pbg:'#FFF9F8',pfg:'#3A0A14',layout:'classic',
  issue:'Номер для двоих',head:'Как мы встретились и что было дальше',subs:['Первое свидание','Наши места'],
  desc:'Подарок на годовщину или 14 февраля: ваша история от знакомства до сегодняшнего дня в фотографиях и словах.',
  toc:[['Знакомство','С чего всё началось'],['Наши места','Где мы были счастливы'],['Будущее','Мечты и планы на двоих']],
  q:'Я понял, что это ты, ещё до того, как ты сказала «привет».'}
];
/* Наборы со скидкой. Пример: {id:'set-mama',name:'Мама + Любимой имениннице',items:['mama','bestie'],price:1100,old:1390,pop:7}, */
const SETS=[
].map(x=>({...x,isSet:true,cat:'sets',catName:'Набор из 2 шаблонов',tag:'−20%',pages:'2 × 24',desc:'Два шаблона по цене со скидкой: удобно, если поздравляете нескольких человек.'}));
const ALL=[...T,...SETS];
const CATS=[['all','Все'],['birthday','День рождения'],['couple','Для пары'],['family','Для семьи']];
