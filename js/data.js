/* Give Love — каталог шаблонов.
   Полная инструкция: README.md → «Как добавить шаблон».

   Чтобы добавить картинки шаблону, допиши ему поля:
     coverImg: 'images/templates/imen/cover.jpg',
     pageImgs: ['images/templates/imen/01.jpg', 'images/templates/imen/02.jpg', ...],
     bgImg:    'images/templates/imen/bg.jpg'
*/
const T = [
 {id:'birthday',name:'Любимой имениннице',cat:'birthday',catName:'День рождения',price:795,pages:24,pop:11,tag:'Хит',
  acc:'#E59AAE',bg:'#F6DDE3',ratio:'567/765',
  credit:'Пример оформления · дизайн AMJ & Niko Magazines',
  desc:'Журнал ко дню рождения на 24 страницы: обложка с фото именинницы, «Who’s that girl?», образ и что у неё в сумочке, любимые города, её аромат и макияж, лучшие моменты, фотогалерея, тест «Насколько хорошо ты её знаешь» и пожелания.',
  pageImgs:[
    'images/templates/birthday/01.jpg',
    'images/templates/birthday/02.jpg',
    'images/templates/birthday/03.jpg',
    'images/templates/birthday/04.jpg',
    'images/templates/birthday/05.jpg',
    'images/templates/birthday/06.jpg',
    'images/templates/birthday/07.jpg',
    'images/templates/birthday/08.jpg',
    'images/templates/birthday/09.jpg',
    'images/templates/birthday/10.jpg',
    'images/templates/birthday/11.jpg',
    'images/templates/birthday/12.jpg',
    'images/templates/birthday/13.jpg',
    'images/templates/birthday/14.jpg',
    'images/templates/birthday/15.jpg',
    'images/templates/birthday/16.jpg',
    'images/templates/birthday/17.jpg',
    'images/templates/birthday/18.jpg',
    'images/templates/birthday/19.jpg',
    'images/templates/birthday/20.jpg',
    'images/templates/birthday/21.jpg',
    'images/templates/birthday/22.jpg',
    'images/templates/birthday/23.jpg',
    'images/templates/birthday/24.jpg'
  ]
 },
 {id:'mama',name:'Дорогой маме',cat:'family',catName:'Для семьи',price:695,pages:24,pop:8,
  acc:'#D98C9C',bg:'#F7E3E7',ratio:'567/765',
  credit:'Пример оформления · дизайн Niko Magazines',
  desc:'Журнал для мамы на 24 страницы: обложка с вашим фото, «Who’s that woman?», её стиль и образ, путешествия, лучшие моменты, семейные воспоминания, 10 фактов о ней, «Спасибо, мама!» и её фирменные рецепты.',
  pageImgs:[
    'images/templates/mama/01.jpg',
    'images/templates/mama/02.jpg',
    'images/templates/mama/03.jpg',
    'images/templates/mama/04.jpg',
    'images/templates/mama/05.jpg',
    'images/templates/mama/06.jpg',
    'images/templates/mama/07.jpg',
    'images/templates/mama/08.jpg',
    'images/templates/mama/09.jpg',
    'images/templates/mama/10.jpg',
    'images/templates/mama/11.jpg',
    'images/templates/mama/12.jpg',
    'images/templates/mama/13.jpg',
    'images/templates/mama/14.jpg',
    'images/templates/mama/15.jpg',
    'images/templates/mama/16.jpg',
    'images/templates/mama/17.jpg',
    'images/templates/mama/18.jpg',
    'images/templates/mama/19.jpg',
    'images/templates/mama/20.jpg',
    'images/templates/mama/21.jpg',
    'images/templates/mama/22.jpg',
    'images/templates/mama/23.jpg',
    'images/templates/mama/24.jpg'
  ]
 },
 {id:'love',name:'История любви',cat:'couple',catName:'Для пары',price:695,pages:26,pop:7,
  acc:'#E8355A',bg:'#F4D3DA',ratio:'567/765',
  credit:'Пример оформления · дизайн Niko Magazines',
  desc:'Журнал о вашей паре на 26 страниц: обложка с вашим фото, «Кто этот парень» и «Кто эта девушка», где всё начиналось, ваше лето, письмо о любви, лучший день, ваша музыка, фотоплёнка и заметки о любви.',
  pageImgs:[
    'images/templates/love/01.jpg',
    'images/templates/love/02.jpg',
    'images/templates/love/03.jpg',
    'images/templates/love/04.jpg',
    'images/templates/love/05.jpg',
    'images/templates/love/06.jpg',
    'images/templates/love/07.jpg',
    'images/templates/love/08.jpg',
    'images/templates/love/09.jpg',
    'images/templates/love/10.jpg',
    'images/templates/love/11.jpg',
    'images/templates/love/12.jpg',
    'images/templates/love/13.jpg',
    'images/templates/love/14.jpg',
    'images/templates/love/15.jpg',
    'images/templates/love/16.jpg',
    'images/templates/love/17.jpg',
    'images/templates/love/18.jpg',
    'images/templates/love/19.jpg',
    'images/templates/love/20.jpg',
    'images/templates/love/21.jpg',
    'images/templates/love/22.jpg',
    'images/templates/love/23.jpg',
    'images/templates/love/24.jpg',
    'images/templates/love/25.jpg',
    'images/templates/love/26.jpg'
  ]
 }
];
/* Наборы со скидкой. Пример: {id:'set-mama',name:'Мама + Любимой имениннице',items:['mama','birthday'],price:1100,old:1390,pop:7}, */
const SETS=[
].map(x=>({...x,isSet:true,cat:'sets',catName:'Набор из 2 шаблонов',tag:'−20%',pages:'2 × 24',desc:'Два шаблона по цене со скидкой: удобно, если поздравляете нескольких человек.'}));
const ALL=[...T,...SETS];
const CATS=[['all','Все'],['birthday','День рождения'],['couple','Для пары'],['family','Для семьи']];
