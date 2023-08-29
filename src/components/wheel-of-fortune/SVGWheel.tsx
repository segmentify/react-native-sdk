import React from 'react';
import { View, Animated, StyleSheet, Dimensions } from 'react-native';
import Svg, { G, Path } from 'react-native-svg';
import type {
  TWheelOfFortuneState,
  TWheelOfFortuneOptions,
} from '../../types/types';

import TextOfWheel from './TextOfWheel';
import KnobOfWheel from './KnobOfWheel';

const AnimatedSvg = Animated.createAnimatedComponent(Svg);
const { width } = Dimensions.get('screen');

interface ISVGWheel {
  options: TWheelOfFortuneOptions;
  state: TWheelOfFortuneState;
}

const SVGWheel = ({ options, state }: ISVGWheel) => {
  return (
    <View style={styles({ options, state }).container}>
      <KnobOfWheel options={options} state={state} />
      <Animated.View style={styles({ options, state }).animatedView}>
        <AnimatedSvg
          width={state.gameScreen}
          height={state.gameScreen}
          viewBox={`0 0 ${width} ${width}`}
          style={styles({ options, state }).animatedSvg}
        >
          <G y={width / 2} x={width / 2}>
            {state._wheelPaths.map((arc: any, i: number) => {
              const [x, y] = arc.centroid;
              const number = arc.value.toString();

              return (
                <G key={`arc-${i}`}>
                  <Path d={arc.path} strokeWidth={2} fill={arc.color} />
                  <G
                    rotation={
                      (i * state.oneTurn) / state.numberOfSegments +
                      state.angleOffset
                    }
                    origin={`${x}, ${y}`}
                  >
                    <TextOfWheel
                      options={options}
                      x={x}
                      y={y}
                      number={number}
                      i={i}
                    />
                  </G>
                </G>
              );
            })}
          </G>
        </AnimatedSvg>
      </Animated.View>
    </View>
  );
};

export default SVGWheel;

const styles = ({ options, state }: ISVGWheel) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    animatedView: {
      alignItems: 'center',
      justifyContent: 'center',
      transform: [
        {
          rotate: state._angle.interpolate({
            inputRange: [-state.oneTurn, 0, state.oneTurn],
            outputRange: [
              `-${state.oneTurn}deg`,
              `0deg`,
              `${state.oneTurn}deg`,
            ],
          }),
        },
      ],
      backgroundColor: options.backgroundColor
        ? options.backgroundColor
        : '#fff',
      width: width - 20,
      height: width - 20,
      borderRadius: (width - 20) / 2,
      borderWidth: options.borderWidth ? options.borderWidth : 2,
      borderColor: options.borderColor ? options.borderColor : '#fff',
      opacity: state.wheelOpacity,
    },
    animatedSvg: {
      transform: [{ rotate: `-${state.angleOffset}deg` }],
      margin: 10,
    },
  });
