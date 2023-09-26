export type TWheelOfFortuneState = {
  enabled: boolean;
  started: boolean;
  finished: boolean;
  gameScreen: any;
  oneTurn: number;
  angleBySegment: number;
  angleOffset: number;
  _wheelPaths: [{ [key: string]: any }];
  _angle: any;
  rewards: Array<any>;
  numberOfSegments: number;
  angle: number;
};

export type TWheelOfFortuneProps = {
  options: TWheelOfFortuneOptions;
  campaignData?: any;
  closeCampaign?: any;
};

export type TWheelOfFortuneOptions = {
  reward: TWheelOfFortuneReward;
  possibleRewards: TWheelOfFortunePossibleReward[];
  baseColor: string;
  bgImage: string;
  campaignTitle: string;
  ctaButtonColor: string;
  ctaButtonTextColor: string;
  ctaButtonContent: string;
  overlay: string;
  pointerColor: string;
  pointerImage: string;
  resultTitle: string;
  lang: string;
};

export type TWheelOfFortunePossibleReward = {
  color: string;
  content: string;
  description: string;
  index: number;
};

export type TWheelOfFortuneReward = {
  assignedToUser: boolean;
  coupon: string;
  couponUrl: string;
  description: string;
  index: number;
  instanceId: string;
  timestamp: string;
};
