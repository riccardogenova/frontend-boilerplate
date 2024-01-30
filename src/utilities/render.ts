import { NodeID } from '../declarations';
import { utilityGetNode } from './getNode';

export function render(nodeID: NodeID, component: () =>string) {
  const node = utilityGetNode(nodeID);
  node.innerHTML = component();
}
