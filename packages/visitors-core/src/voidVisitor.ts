import type { NodeKind } from '@codama/nodes';

import { mergeVisitor } from './mergeVisitor';
import { Visitor } from './visitor';

export function voidVisitor<TNodeKind extends NodeKind = NodeKind>(nodeKeys?: TNodeKind[]): Visitor<void, TNodeKind> {
    return mergeVisitor(
        () => undefined,
        () => undefined,
        nodeKeys,
    );
}
