import React from 'react';
import { Animated, Image, StyleSheet } from 'react-native';
import Svg from 'react-native-svg';
import type {
  TWheelOfFortuneState,
  TWheelOfFortuneOptions,
} from '../../types/types';

interface IKnobOfWheel {
  options: TWheelOfFortuneOptions;
  state: TWheelOfFortuneState;
}

const KnobOfWheel = ({ options, state }: IKnobOfWheel) => {
  const knobSize = options.knobSize ? options.knobSize : 20;
  // [0, state.numberOfSegments]
  const YOLO = Animated.modulo(
    Animated.divide(
      Animated.modulo(
        Animated.subtract(state._angle, state.angleOffset),
        state.oneTurn
      ),
      new Animated.Value(state.angleBySegment)
    ),
    1
  );

  return (
    <Animated.View style={styles({ knobSize, YOLO, state }).container}>
      <Svg
        width={knobSize}
        height={(knobSize * 100) / 57}
        viewBox={`0 0 57 100`}
        style={styles({ knobSize, YOLO, state }).animatedSvg}
      >
        <Image
          source={
            options.knobSource
              ? options.knobSource
              : require('../../assets/images/knob.png')
          }
          style={styles({ knobSize, YOLO, state }).image}
        />
      </Svg>
    </Animated.View>
  );
};

export default KnobOfWheel;

const styles = ({
  knobSize,
  YOLO,
  state,
}: {
  knobSize: number;
  YOLO: any;
  state: TWheelOfFortuneState;
}) =>
  StyleSheet.create({
    container: {
      width: knobSize,
      height: knobSize * 2,
      justifyContent: 'flex-end',
      zIndex: 1,
      opacity: state.wheelOpacity,
      transform: [
        {
          rotate: YOLO.interpolate({
            inputRange: [-1, -0.5, -0.0001, 0.0001, 0.5, 1],
            outputRange: ['0deg', '0deg', '35deg', '-35deg', '0deg', '0deg'],
          }),
        },
      ],
    },
    animatedSvg: {
      transform: [{ translateY: 8 }],
    },
    image: {
      width: knobSize,
      height: (knobSize * 100) / 57,
    },
  });
