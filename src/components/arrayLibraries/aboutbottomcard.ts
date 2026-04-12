import safe from '../../assets/img/about/safe.png';
import safew from '../../assets/img/about/safe.webp';
import statistics from '../../assets/img/about/statistics.png';
import statisticsw from '../../assets/img/about/statistics.webp';

export interface AboutBottomCardItem {
  id: number | string;
  title: string;
  p1: string;
  p2: string;
  p3: string;
  label: string;
  p31: string;
  image: string;
  imagew: string;
}

export const ABOUTBOTTOMCARD = [
  {
    id: 1,
    title: 'Linetsky Capital mini',
    p1: 'Инвестирование небольших сумм в акции РФ от 1 года',
    p2:
      'Стратегия создана, чтобы продемонстрировать, ' +
      'как из маленькой суммы создается большой капитал.',
    p3: 'Доходность: ',
    label: '+5%',
    p31: ' на сегодняшний день',
    image: safe,
    imagew: safew,
  },

  {
    id: 2,
    title: 'Активное управление РФ',
    p1: 'Стратегия активного управления акциями и облигациями российского рынка.',
    p2:
      'Цель: получить максимальную доходность, ' +
      'принимая разумные риски на сделку и портфель в целом.',
    p3: 'Доходность ',
    label: '+105%',
    p31: ' на сегодняшний день',
    image: statistics,
    imagew: statisticsw,
  },
];
