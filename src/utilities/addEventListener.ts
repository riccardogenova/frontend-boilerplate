import { NodeID } from '../declarations';
import { utilityGetNode } from './getNode';

export function utilityAddEventListener(nodeID: NodeID, event: keyof HTMLElementEventMap, handler: () => void) {
  const node = utilityGetNode(nodeID);
  node.addEventListener(event, handler);
}
