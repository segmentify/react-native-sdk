import React from 'react';
import { Animated, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import type {
  TWheelOfFortuneState,
  TWheelOfFortuneOptions,
} from '../../types/types/wheel-of-fortune.type';

interface IKnobOfWheel {
  state: TWheelOfFortuneState;
  options: TWheelOfFortuneOptions;
}

const KnobOfWheel = ({ state, options }: IKnobOfWheel) => {
  const knobSize = 25;

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
    <Animated.View style={styles({ knobSize, YOLO }).container}>
      {options.pointerImage && options.pointerImage !== '' ? (
        <Animated.Image
          source={{ uri: options.pointerImage }}
          style={styles({ knobSize, YOLO }).image}
          resizeMode="contain"
        />
      ) : (
        <Svg
          width={knobSize}
          height={(knobSize * 100) / 57}
          viewBox={`0 0 27 49`}
          style={styles({ knobSize, YOLO }).animatedSvg}
        >
          <Path
            d="M13.152 1.25464e-09C5.90501 0.000100001 0 5.9779 0 13.3146C0.001 23.3005 12.026 47.1952 12.538 47.8518C12.686 48.036 12.913 48.1512 13.152 48.1512C13.391 48.1512 13.619 48.0475 13.778 47.8517C14.29 47.2067 26.315 23.2887 26.315 13.3144C26.303 5.9776 20.41 -9.99987e-05 13.152 1.25464e-09Z"
            fill={options.pointerColor}
          />
        </Svg>
      )}
    </Animated.View>
  );
};

export default KnobOfWheel;

const styles = ({ knobSize, YOLO }: { knobSize: number; YOLO: any }) =>
  StyleSheet.create({
    container: {
      position: 'absolute',
      top: -knobSize - 10,
      width: knobSize,
      height: knobSize * 2,
      justifyContent: 'flex-start',
      zIndex: 2,
      transform: [
        {
          rotate: YOLO.interpolate({
            inputRange: [-1, -0.5, -0.0001, 0.0001, 0.5, 1],
            outputRange: ['0deg', '0deg', '-15deg', '15deg', '0deg', '0deg'],
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
      transform: [{ translateY: 8 }],
    },
  });
