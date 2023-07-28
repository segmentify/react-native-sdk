import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {TERTIARY_COLOR} from '../../constants';

export function NotificationIcon({
  width = 96,
  height = 96,
  color = TERTIARY_COLOR,
}) {
  return (
    <Svg viewBox="0 0 48 48" width={width} height={height} fill={color}>
      <Path d="M23.277 4.018C15.194 4.398 9 11.343 9 19.38v7.267L6.35 31.98a1.5 1.5 0 00-.014.03C5.27 34.277 6.996 37 9.502 37H18c0 3.296 2.704 6 6 6s6-2.704 6-6h8.496c2.506 0 4.235-2.722 3.168-4.99a1.5 1.5 0 00-.014-.03L39 26.648V19c0-8.506-7.137-15.387-15.723-14.982zm.141 2.996A11.974 11.974 0 0136 19v8a1.5 1.5 0 00.156.668l2.793 5.621c.18.385-.028.711-.453.711H9.502c-.425 0-.631-.325-.451-.71v-.003l2.793-5.619A1.5 1.5 0 0012 27v-7.62c0-6.5 4.98-12.063 11.418-12.366zM21 37h6c0 1.674-1.326 3-3 3s-3-1.326-3-3z" />
    </Svg>
  );
}

export default NotificationIcon;
