import React from 'react';

import { Body } from '../styles/Burger';

type BurgerProps = {
  active: boolean;
  onClick: () => void;
};

export const Burger = ({ active, onClick }: BurgerProps) => (
  <Body active={active} onClick={onClick}>
    <span />
  </Body>
);
