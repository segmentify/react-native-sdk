import React, { useEffect, useReducer } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Animated,
  TouchableOpacity,
} from 'react-native';
import * as d3Shape from 'd3-shape';
import type {
  TWheelOfFortuneState,
  TWheelOfFortuneProps,
} from '../../types/types';
import { wofReducer } from '../../reducers/wheel-of-fortune';
import SVGWheel from './SVGWheel';

const { width, height } = Dimensions.get('screen');

const initialState: TWheelOfFortuneState = {
  enabled: false,
  started: false,
  finished: false,
  winner: null,
  gameScreen: new Animated.Value(width - 40),
  wheelOpacity: new Animated.Value(1),
  imageLeft: new Animated.Value(width / 2 - 30),
  imageTop: new Animated.Value(height / 2 - 70),
  fontSize: 20,
  oneTurn: 360,
  angleBySegment: 0,
  angleOffset: 0,
  _wheelPaths: { path: '', color: '', value: '', centroid: '' },
  _angle: new Animated.Value(0),
  rewards: [],
  rewardCount: 0,
  numberOfSegments: 0,
  angle: 0,
};

const WheelOfFortune = ({ options, getWinner }: TWheelOfFortuneProps) => {
  const [state, dispatch] = useReducer(wofReducer, initialState);

  const prepareWheel = () => {
    dispatch({
      type: 'change',
      payload: {
        rewards: options.rewards,
        rewardCount: options.rewards.length,
        numberOfSegments: options.rewards.length,
        fontSize: 20,
        oneTurn: 360,
        angleBySegment: 360 / options.rewards.length,
        angleOffset: 360 / options.rewards.length / 2,
        winner:
          options.winner ?? Math.floor(Math.random() * options.rewards.length),
        _wheelPaths: makeWheel(),
        _angle: new Animated.Value(0),
      },
    });

    options.onRef(this); // TODO: fix this
  };

  const resetWheelState = () => {
    dispatch({
      type: 'change',
      payload: {
        enabled: false,
        started: false,
        finished: false,
        winner: null,
        gameScreen: new Animated.Value(width - 40),
        wheelOpacity: new Animated.Value(1),
        imageLeft: new Animated.Value(width / 2 - 30),
        imageTop: new Animated.Value(height / 2 - 70),
      },
    });
  };

  // const tryAgain = () => {
  //   prepareWheel();
  //   resetWheelState();
  //   angleListener();
  //   onPress();
  // };

  const angleListener = () => {
    state._angle.addListener((event: { value: any }) => {
      if (state.enabled) {
        dispatch({
          type: 'change',
          payload: {
            enabled: false,
            finished: false,
          },
        });
      }

      dispatch({
        type: 'change',
        payload: {
          angle: event.value,
        },
      });
    });
  };

  useEffect(() => {
    prepareWheel();
    angleListener();

    return () => {
      resetWheelState();
      options.onRef(undefined);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const makeWheel = () => {
    const data: any = Array.from({ length: state.numberOfSegments }).fill(1);
    const arcs = d3Shape.pie()(data);
    var colors = options.colors
      ? options.colors
      : [
          '#E07026',
          '#E8C22E',
          '#ABC937',
          '#4F991D',
          '#22AFD3',
          '#5858D0',
          '#7B48C8',
          '#D843B9',
          '#E23B80',
          '#D82B2B',
        ];
    return arcs.map((arc: any, index: number) => {
      const instance = d3Shape
        .arc()
        .padAngle(0.01)
        .outerRadius(width / 2)
        .innerRadius(options.innerRadius || 100);
      return {
        path: instance(arc),
        color: colors[index % colors.length],
        value: state.rewards[index],
        centroid: instance.centroid(arc),
      };
    });
  };

  const getWinnerIndex = () => {
    const deg = Math.abs(Math.round(state.angle % state.oneTurn));
    // wheel turning counterclockwise
    if (state.angle < 0) {
      return Math.floor(deg / state.angleBySegment);
    }
    // wheel turning clockwise
    return (
      (state.numberOfSegments - Math.floor(deg / state.angleBySegment)) %
      state.numberOfSegments
    );
  };

  const onPress = () => {
    const duration = options.duration || 10000;

    dispatch({
      type: 'change',
      payload: {
        started: true,
      },
    });
    Animated.timing(state._angle, {
      toValue:
        365 -
        state.winner * (state.oneTurn / state.numberOfSegments) +
        360 * (duration / 1000),
      duration: duration,
      useNativeDriver: true,
    }).start(() => {
      const winnerIndex = getWinnerIndex();
      dispatch({
        type: 'change',
        payload: {
          finished: true,
          winner: state._wheelPaths[winnerIndex].value,
        },
      });
      if (getWinner) {
        getWinner(state._wheelPaths[winnerIndex].value, winnerIndex);
      } else {
        options?.getWinner?.(state._wheelPaths[winnerIndex].value, winnerIndex);
      }
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Animated.View style={styles.animatedView}>
          <SVGWheel options={options} state={state} />
        </Animated.View>
      </View>
      {options.playButton && (
        <TouchableOpacity onPress={() => onPress()}>
          {options.playButton()}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default WheelOfFortune;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    position: 'absolute',
    width: width,
    height: height / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animatedView: {
    padding: 10,
  },
  startText: {
    fontSize: 50,
    color: '#fff',
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.4)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});
