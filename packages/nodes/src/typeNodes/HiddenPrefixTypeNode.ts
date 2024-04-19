import type { ConstantValueNode, HiddenPrefixTypeNode, TypeNode } from '@kinobi-so/node-types';

export function hiddenPrefixTypeNode<TType extends TypeNode, const TPrefix extends ConstantValueNode[]>(
    type: TType,
    prefix: TPrefix,
): HiddenPrefixTypeNode<TType, TPrefix> {
    return Object.freeze({
        kind: 'hiddenPrefixTypeNode',

        // Children.
        type,
        prefix,
    });
}
