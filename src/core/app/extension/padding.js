import {getHeight, getWidth} from './dimension';

export function lowPadding() {
  return getWidth() * 0.01;
}

export function normalPadding() {
  return getWidth() * 0.03;
}

export function horizontalPadding() {
  return getWidth() * 0.01;
}

export function verticalPadding() {
  return getHeight() * 0.01;
}

export function highPadding() {}
