import { isEqual } from 'lodash';

export const propsEqual = <T>(prevProps: T, newProps: T): boolean => isEqual(prevProps, newProps);