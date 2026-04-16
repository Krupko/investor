import man from '../../assets/img/mypath/manj.jpg';
import manA from '../../assets/img/mypath/man-a.avif';
import manW from '../../assets/img/mypath/man-w.webp';
import man2J from '../../assets/img/mypath/man2-j.jpg';
import man2A from '../../assets/img/mypath/man2-a.avif';
import man2W from '../../assets/img/mypath/man2-w.webp';
import mypath from '../../assets/img/mypath/mypath.png';
import mypathA from '../../assets/img/mypath/mypath-a.avif';
import mypathW from '../../assets/img/mypath/mypath-w.webp';
import mypath2 from '../../assets/img/mypath/mypath2.png';
import mypath2A from '../../assets/img/mypath/mypath2-a.avif';
import mypath2W from '../../assets/img/mypath/mypath2-w.webp';

export interface BlockProps {
  id?: string | number;
  className?: string;
  classNameSVG?: string;
  webp?: string | undefined;
  avif?: string | undefined;
  jpg: string;
  alt?: string | undefined;
  width?: number;
  height?: number;
  label?: string | undefined;
  label2?: string | undefined;
}

export const MYPATH: BlockProps[] = [
  {
    id: 1,
    className: '',
    webp: manW,
    avif: manA,
    jpg: man,
    label:
      'В мир инвестиций я пришёл в декабре 2009 года. Тогда у меня начали появляться свободные деньги и первое, на что я обратил внимание, - это депозиты. В этот период времени я читал огромное количество литературы, связанной с финансами и управлением. И в этой литературе часто проскальзывало умное слово «инвестиции». Изучая движение акций на фондовом рынке, я осознал, что потенциальная прибыль здесь может превзойти мой годовой доход от депозитов всего за неделю.',
    label2: '',
    alt: 'Картинка',
    width: 375,
    height: 500,
  },
  {
    id: 2,
    className: '',
    classNameSVG: '',
    webp: mypathW,
    avif: mypathA,
    jpg: mypath,
    label:
      'В 2015 году я поступил на MBA, что стало поворотным решением в моей жизни. Через год после учёбы я полностью сменил своё окружение и полностью погрузился в мир финансов и инвестиций. Буквально через год я увольняюсь с работы и с 2016 года я больше никогда не ходил на работу в классическом её понимании.',
    label2: '',
    alt: 'Картинка',
    width: 467,
    height: 435,
  },
  {
    id: 3,
    className: '',
    webp: man2W,
    avif: man2A,
    jpg: man2J,
    label:
      'В 2017 году заканчиваю MBA и получаю диплом. В это время я уделяю огромное количество времени фондовому рынку, занимаюсь трейдингом, спекулятивными сделками на американском рынке и получаю хорошие финансовые результаты. В 2018 году начинаю изучать опционы и активно торгую фьючерсами. В этот момент я знакомлюсь с таким понятием как Margin Call и теряю достаточно крупную сумму на акциях Магнита. Но очень быстро я вернул то, что потерял. Фондовый рынок научил меня, несмотря ни на что, следовать своим целям, быть спокойным и уверенным в своих действиях.',
    label2:
      'В 2019 году я практически круглосуточно начинаю торговать опционами, что позволяет мне приумножить свой капитал в 10 раз за 1,5 года. 2020 год подарил мне прекрасную возможность заработать 2 000% на торговле опционами. Этот результат мне удалось получить за 1 год. В этот год я осознал, что я хочу, и, самое главное, я готов начать делиться своими знаниями с людьми. ',
    alt: 'Картинка',
    width: 375,
    height: 500,
  },
  {
    id: 4,
    className: '',
    classNameSVG: '',
    webp: mypath2W,
    avif: mypath2A,
    jpg: mypath2,
    label:
      '2023 год, на текущий год я веду большое количество проектов — Формула денег, Linetsky Capital, Наставничество, у меня есть стратегии автоследования «Активное управление РФ» и «Linetsky Capital mini», которым следуют больше 6000 человек в Пульсе. Самая большая моя гордость — мой открытый проект #52недели52акции, благодаря которому люди смогли удвоить свой портфель за год, при этом риск, который они брали на себя, был минимален. Я очень рад делиться своими знаниями и опытом с вами.',
    label2: '',
    alt: 'Картинка',
    width: 507,
    height: 388,
  },
];
