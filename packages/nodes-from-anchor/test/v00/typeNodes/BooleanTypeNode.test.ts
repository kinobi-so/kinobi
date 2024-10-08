import { booleanTypeNode } from '@codama/nodes';
import { expect, test } from 'vitest';

import { typeNodeFromAnchorV00 } from '../../../src';

test('it creates boolean type nodes', () => {
    expect(typeNodeFromAnchorV00('bool')).toEqual(booleanTypeNode());
});
