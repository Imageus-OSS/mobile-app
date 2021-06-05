type CardType = 'login' | 'register';

export type CardProps = {
  switchCard: (card: CardType) => void;
};