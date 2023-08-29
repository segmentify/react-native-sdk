import React from 'react';
import { Text, TSpan } from 'react-native-svg';

import type { TWheelOfFortuneOptions } from '../../types/types';

interface ITextProps {
  options: TWheelOfFortuneOptions;
  x: number;
  y: number;
  number: string;
  i: number;
}

const TextOfWheel = ({ options, x, y, number, i }: ITextProps) => {
  const fontSize = 20;
  return (
    <Text
      x={x - number.length * 5}
      y={y - 80}
      fill={options.textColor ? options.textColor : '#fff'}
      textAnchor="middle"
      fontSize={fontSize}
    >
      {Array.from({ length: number.length }).map((_, j) => {
        // Render reward text vertically
        if (options.textAngle === 'vertical') {
          return (
            <TSpan x={x} dy={fontSize} key={`arc-${i}-slice-${j}`}>
              {number.charAt(j)}
            </TSpan>
          );
        }
        // Render reward text horizontally
        else {
          return (
            <TSpan y={y - 40} dx={fontSize * 0.07} key={`arc-${i}-slice-${j}`}>
              {number.charAt(j)}
            </TSpan>
          );
        }
      })}
    </Text>
  );
};

export default TextOfWheel;
