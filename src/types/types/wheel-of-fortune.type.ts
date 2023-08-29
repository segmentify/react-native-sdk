export type TWheelOfFortuneState = {
  enabled: boolean;
  started: boolean;
  finished: boolean;
  winner: any;
  gameScreen: any;
  wheelOpacity: any;
  imageLeft: any;
  imageTop: any;
  fontSize: number;
  oneTurn: number;
  angleBySegment: number;
  angleOffset: number;
  _wheelPaths: { [key: string]: any };
  _angle: any;
  rewards: Array<any>;
  rewardCount: number;
  numberOfSegments: number;
  angle: number;
};

export type TWheelOfFortuneProps = {
  options: TWheelOfFortuneOptions;
  getWinner?: any;
};

export type TWheelOfFortuneOptions = {
  rewards: string[];
  knobSize?: number;
  borderWidth?: number;
  borderColor?: string;
  backgroundColor?: string;
  duration?: number;
  knobSource?: any;
  playButton?: any;
  innerRadius?: number;
  winner?: number;
  colors?: string[];
  textColor?: string;
  textAngle?: string;
  onRef?: any;
  getWinner?: any;
};
