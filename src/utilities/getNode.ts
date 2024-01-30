import { NodeID } from '../declarations';

export function utilityGetNode(nodeID: NodeID) {
  const node = document.getElementById(nodeID);
  if (!!node) return node;
  else throw new Error(`Element with id ${nodeID} not found`);
}
