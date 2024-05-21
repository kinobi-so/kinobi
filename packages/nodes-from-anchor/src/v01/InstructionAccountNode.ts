import {
    accountValueNode,
    InstructionAccountNode,
    instructionAccountNode,
    pdaSeedValueNode,
    pdaValueNode,
    publicKeyValueNode,
    pdaNode,
    PdaSeedNode,
    variablePdaSeedNode,
    publicKeyTypeNode,
    constantPdaSeedNodeFromBytes,
    hex,
    PdaSeedValueNode,
} from '@kinobi-so/nodes';
import { KinobiError, KINOBI_ERROR__ANCHOR__SEED_KIND_UNIMPLEMENTED } from '@kinobi-so/errors';
import { IdlV01InstructionAccount, IdlV01Seed, IdlV01InstructionAccountItem } from './idl';

export function instructionAccountNodesFromAnchorV01(idl: IdlV01InstructionAccountItem[]): InstructionAccountNode[] {
    return idl.flatMap(account =>
        'accounts' in account
            ? instructionAccountNodesFromAnchorV01(account.accounts)
            : [instructionAccountNodeFromAnchorV01(account)],
    );
}

export function instructionAccountNodeFromAnchorV01(idl: IdlV01InstructionAccount): InstructionAccountNode {
    const isOptional = idl.optional ?? false;
    const docs = idl.docs ?? [];
    const isSigner = idl.signer ?? false;
    const isWritable = idl.writable ?? false;
    const name = idl.name ?? '';
    let defaultValue = undefined;

    if (idl.address) {
        defaultValue = publicKeyValueNode(idl.address, name);
    }

    if (idl.pda) {
        const [seeds, lookups] = idl.pda.seeds.reduce(
            ([seeds, lookups], seed: IdlV01Seed) => {
                const kind = seed.kind;

                switch (kind) {
                    case 'const':
                        return [
                            [...seeds, constantPdaSeedNodeFromBytes('base16', hex(new Uint8Array(seed.value)))],
                            lookups,
                        ];
                    case 'account':
                        return [
                            [...seeds, variablePdaSeedNode(seed.path, publicKeyTypeNode())],
                            [...lookups, pdaSeedValueNode(seed.path, accountValueNode(seed.path))],
                        ];
                    default:
                        throw new KinobiError(KINOBI_ERROR__ANCHOR__SEED_KIND_UNIMPLEMENTED, {
                            kind,
                        });
                }
            },
            <[PdaSeedNode[], PdaSeedValueNode[]]>[[], []],
        );

        defaultValue = pdaValueNode(
            pdaNode({
                name,
                seeds,
            }),
            lookups,
        );
    }

    return instructionAccountNode({
        defaultValue,
        docs,
        isOptional,
        isSigner,
        isWritable,
        name,
    });
}
