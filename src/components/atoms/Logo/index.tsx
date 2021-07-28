import React from 'react';

import logoImg from '../../../../assets/LogoEmpire.png';
import { LogoImage } from './styles';

type LogoProps = {};

export const Logo: React.FC<LogoProps> = () => {
  return <LogoImage source={logoImg} />;
};
