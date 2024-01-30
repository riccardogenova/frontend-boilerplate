/** @format */

export const mapNodes = {
  root: 'root',
} as const;

export type NodeID = (typeof mapNodes)[keyof typeof mapNodes];
