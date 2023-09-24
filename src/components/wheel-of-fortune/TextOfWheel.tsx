import React from 'react';
import { Text, TSpan } from 'react-native-svg';

interface ITextProps {
  x: number;
  y: number;
  number: string;
  i: number;
}

const TextOfWheel = ({ x, y, number, i }: ITextProps) => {
  const fontSize = 20;
  return (
    <Text
      x={x - number.length * 5}
      y={y - 80}
      fill={'#fff'}
      textAnchor="middle"
      fontSize={fontSize}
    >
      {Array.from({ length: number.length }).map((_, j) => {
        return (
          <TSpan y={y} dx={fontSize * 0.07} key={`arc-${i}-slice-${j}`}>
            {number.charAt(j)}
          </TSpan>
        );
      })}
    </Text>
  );
};

export default TextOfWheel;
