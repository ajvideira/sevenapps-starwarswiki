import React from 'react';

import logoImg from '../../../../assets/logo-empire.png';
import { LogoImage } from './styles';

const sizes: { [key: string]: number } = {
  small: 28,
  large: 64,
};

type LogoProps = {
  size?: string;
};

export const Logo: React.FC<LogoProps> = ({ size }) => {
  return <LogoImage source={logoImg} size={sizes[size || 'large']} />;
};
