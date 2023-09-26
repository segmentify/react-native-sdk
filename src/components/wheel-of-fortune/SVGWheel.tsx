import React from 'react';
import { View, Animated, StyleSheet, Dimensions } from 'react-native';
import Svg, { G, Path } from 'react-native-svg';
import type {
  TWheelOfFortuneState,
  TWheelOfFortuneOptions,
} from '../../types/types/wheel-of-fortune.type';

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
      <KnobOfWheel state={state} options={options} />
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
              const rotateAngle = arc.endAngle < Math.PI ? 0 : -90;
              return (
                <G key={`arc-${i}`}>
                  <Path d={arc.path} strokeWidth={2} fill={arc.color} />
                  <G
                    rotation={
                      (i * state.oneTurn) / state.numberOfSegments +
                      state.angleOffset +
                      rotateAngle
                    }
                    origin={`${x}, ${y}`}
                  >
                    <TextOfWheel x={x} y={y} number={number} i={i} />
                  </G>
                </G>
              );
            })}
          </G>
        </AnimatedSvg>
      </Animated.View>
      <Svg
        width={width}
        height={width}
        viewBox={`0 0 489 520`}
        style={styles({ options, state }).wheelBottom}
      >
        <G>
          <Path
            d="M393.918 500.936L363.44 500.936L323.833 422.528L165.406 422.53L125.8 500.939L95.3214 500.939C94.0064 500.939 93.0007 501.94 93.0008 503.25L93.0008 506.485L396.239 506.482L396.239 503.247C396.239 501.937 395.234 500.936 393.918 500.936Z"
            fill={options.baseColor ? options.baseColor : '#fff'}
          />
        </G>
      </Svg>
    </View>
  );
};

export default SVGWheel;

const styles = ({ options, state }: ISVGWheel) =>
  StyleSheet.create({
    container: {
      position: 'relative',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 15,
      marginBottom: 15,
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
      backgroundColor: options.baseColor ? options.baseColor : '#fff',
      width: width - 30,
      height: width - 30,
      borderRadius: (width - 20) / 2,
      borderWidth: 2,
      borderColor: '#fff',
      marginBottom: 40,
      zIndex: 1,
    },
    wheelBottom: {
      position: 'absolute',
      bottom: 0,
    },
    animatedSvg: {
      transform: [{ rotate: `-${state.angleOffset}deg` }],
      margin: 10,
    },
  });
