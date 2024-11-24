import {createTreeNode} from "../../createTreeNode.ts";
import type {FunctionHeaderSegmentsRestSegmentsTreeNode} from "../function-header-segments-rest-segments/FunctionHeaderSegmentsRestSegmentsTreeNode.ts";
import type {FunctionHeaderKnownStartingSegmentsTreeNode} from "../function-header-known-starting-segments/FunctionHeaderKnownStartingSegmentsTreeNode.ts";
import type {FunctionHeaderUnknownStartingSegmentsTreeNode} from "../function-header-unknown-starting-segments/FunctionHeaderUnknownStartingSegmentsTreeNode.ts";
import type {FunctionHeaderWordStartingSegmentsTreeNode} from "./FunctionHeaderWordStartingSegmentsTreeNode.ts";
import type {FunctionHeaderWordSegmentTreeNode} from "../function-header-word-segment/FunctionHeaderWordSegmentTreeNode.ts";
import {functionHeaderWordStartingSegmentsTreeNodeTypeName} from "./functionHeaderWordStartingSegmentsTreeNodeTypeName.ts";

export function createFunctionHeaderWordStartingSegmentsTreeNode(
	firstSegment: FunctionHeaderWordSegmentTreeNode,
	restSegments:
		| FunctionHeaderKnownStartingSegmentsTreeNode
		| FunctionHeaderUnknownStartingSegmentsTreeNode
		| null
		| FunctionHeaderSegmentsRestSegmentsTreeNode,
): FunctionHeaderWordStartingSegmentsTreeNode {
	return createTreeNode(functionHeaderWordStartingSegmentsTreeNodeTypeName, [
		firstSegment,
		restSegments,
	]);
}