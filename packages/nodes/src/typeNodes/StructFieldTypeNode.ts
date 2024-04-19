import type { StructFieldTypeNode, TypeNode, ValueNode } from '@kinobi-so/node-types';

import { camelCase, DocsInput, parseDocs } from '../shared';

export type StructFieldTypeNodeInput<
    TType extends TypeNode = TypeNode,
    TDefaultValue extends ValueNode | undefined = ValueNode | undefined,
> = Omit<StructFieldTypeNode<TType, TDefaultValue>, 'docs' | 'kind' | 'name'> & {
    readonly docs?: DocsInput;
    readonly name: string;
};

export function structFieldTypeNode<TType extends TypeNode, TDefaultValue extends ValueNode | undefined = undefined>(
    input: StructFieldTypeNodeInput<TType, TDefaultValue>,
): StructFieldTypeNode<TType, TDefaultValue> {
    if (!input.name) {
        // TODO: Coded error.
        throw new Error('StructFieldTypeNode must have a name.');
    }

    return Object.freeze({
        kind: 'structFieldTypeNode',

        // Data.
        name: camelCase(input.name),
        ...(input.defaultValueStrategy !== undefined && { defaultValueStrategy: input.defaultValueStrategy }),
        docs: parseDocs(input.docs),

        // Children.
        type: input.type,
        ...(input.defaultValue !== undefined && { defaultValue: input.defaultValue }),
    });
}
