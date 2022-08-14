export type Route = {
  text: string;
  to: string;
  subroutes?: Route[];
};

export const ROUTES: Route[] = [
  { text: 'О нас', to: 'about-us' },
  { text: 'Врачи', to: 'specialists' },
  { text: 'Услуги', to: 'services' },
  { text: 'Цены', to: 'prices' },
  {
    text: 'Клиентам',
    to: 'info',
    subroutes: [
      { text: 'Органы контроля', to: 'inspection' },
      { text: 'Условия оплаты', to: 'payment-conditions' },
      { text: 'Правила оказания услуг', to: 'code-of-service' },
      { text: 'Бесплатная помощь', to: 'free-help' },
      { text: 'Гарантии', to: 'warranty' },
      { text: 'Внутренний распорядок', to: 'internal-service' },
      // { text: 'Полис ДМС', to: 'dms' },
      { text: 'Лицензии', to: 'license' },
      // { text: 'Вакансии', to: 'career' },
    ],
  },
  // { text: 'Акции', to: 'offers' },
  { text: 'Фотогалерея', to: 'gallery' },
];
