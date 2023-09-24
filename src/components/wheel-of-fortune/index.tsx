import React, { useEffect, useReducer } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Animated,
  TouchableOpacity,
  Text,
  ImageBackground,
} from 'react-native';
import * as d3Shape from 'd3-shape';
import type {
  TWheelOfFortuneState,
  TWheelOfFortuneProps,
} from '../../types/types/wheel-of-fortune.type';
import { wofReducer } from '../../reducers/wheel-of-fortune';
import SVGWheel from './SVGWheel';
import WinScreen from './WinScreen';

const { width, height } = Dimensions.get('screen');

const initialState: TWheelOfFortuneState = {
  enabled: false,
  started: false,
  finished: false,
  gameScreen: new Animated.Value(width - 40),
  oneTurn: 360,
  angleBySegment: 10,
  angleOffset: 180,
  _wheelPaths: [{ path: '', color: '', value: '', centroid: '' }],
  _angle: new Animated.Value(0),
  rewards: [],
  numberOfSegments: 0,
  angle: 0,
};

const WheelOfFortune = ({ options, closeCampaign }: TWheelOfFortuneProps) => {
  const [state, dispatch] = useReducer(wofReducer, initialState);

  const prepareWheel = () => {
    const rewards = options.possibleRewards.map((reward: any) => {
      return reward.content;
    });
    const rewardsLength = rewards.length;

    dispatch({
      type: 'change',
      payload: {
        rewards,
        numberOfSegments: rewardsLength,
        oneTurn: 360,
        angleBySegment: 360 / rewardsLength,
        angleOffset: 360 / rewardsLength / 2,
        _wheelPaths: makeWheel(rewardsLength),
        _angle: new Animated.Value(0),
      },
    });
  };

  const resetWheelState = () => {
    dispatch({
      type: 'change',
      payload: {
        enabled: false,
        started: false,
        finished: false,
        gameScreen: new Animated.Value(width - 40),
        wheelOpacity: new Animated.Value(1),
        imageLeft: new Animated.Value(width / 2 - 30),
        imageTop: new Animated.Value(height / 2 - 70),
      },
    });
  };

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
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const makeWheel = (numberOfSegments: number) => {
    const data: any = Array.from({ length: numberOfSegments }).fill(1);
    const arcs = d3Shape.pie()(data);

    return arcs.map((arc: any, index: number) => {
      const possibleReward = options.possibleRewards[index];
      const instance = d3Shape
        .arc()
        .padAngle(0.01)
        .outerRadius(width / 2)
        .innerRadius(40);

      return {
        path: instance(arc),
        color: possibleReward?.color || '#333',
        value: possibleReward?.content || '',
        centroid: instance.centroid(arc),
      };
    });
  };

  const onPress = () => {
    const duration = 5000;
    const winnerIndex = options.reward.index;
    const oneSliceAngle = state.oneTurn / state.numberOfSegments;
    const animateTargetAngle =
      (4 * 360 +
        winnerIndex * oneSliceAngle -
        oneSliceAngle / 2 +
        Math.floor(Math.random() * (oneSliceAngle - 20) + 10)) *
      -1;

    dispatch({
      type: 'change',
      payload: {
        started: true,
      },
    });
    Animated.timing(state._angle, {
      toValue: animateTargetAngle,
      duration: duration,
      useNativeDriver: false,
    }).start(() => {
      setTimeout(() => {
        dispatch({
          type: 'change',
          payload: {
            finished: true,
          },
        });
      }, 1000);
    });
  };

  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <ImageBackground
          source={{ uri: options?.bgImage || '' }}
          resizeMode="cover"
          style={styles.modalBgImage}
        >
          <TouchableOpacity
            onPress={() => closeCampaign()}
            style={styles.closeButtonContainer}
          >
            <View style={styles.closeButton}>
              <Text style={styles.closeButtonText}>X</Text>
            </View>
          </TouchableOpacity>
          {state.finished ? (
            <WinScreen options={options} />
          ) : (
            <>
              <Text style={styles.title}>{options.campaignTitle}</Text>
              <Animated.View style={styles.animatedView}>
                <SVGWheel options={options} state={state} />
              </Animated.View>
              <TouchableOpacity
                onPress={() => onPress()}
                disabled={state.started}
                style={styles.CTAButtonContainer}
              >
                <View
                  style={[
                    styles.CTAButton,
                    { backgroundColor: options?.ctaButtonColor || '#fff' },
                  ]}
                >
                  <Text
                    style={[
                      styles.CTAButtonText,
                      { color: options?.ctaButtonTextColor || '#333' },
                    ]}
                  >
                    {options.ctaButtonContent}
                  </Text>
                </View>
              </TouchableOpacity>
            </>
          )}
        </ImageBackground>
      </View>
    </View>
  );
};

export default WheelOfFortune;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    position: 'relative',
    margin: 10,
    width: width - 20,
    backgroundColor: '#fff',
    borderRadius: 5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  modalBgImage: {
    position: 'relative',
    width: width - 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#FFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
    marginTop: 20,
  },
  closeButtonContainer: {
    zIndex: 1,
    position: 'absolute',
    top: -15,
    right: 10,
  },
  closeButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#fff',
    borderColor: '#333',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  animatedView: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  CTAButtonContainer: {
    position: 'relative',
    marginBottom: 20,
  },
  CTAButton: {
    width: '100%',
    minWidth: 150,
    height: 40,
    borderRadius: 10,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  CTAButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});
