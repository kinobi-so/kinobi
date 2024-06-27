# `AmountTypeNode`

A node that wraps a [`NumberTypeNode`](./NumberTypeNode) to provide additional context such as its unit and decimal places.

## Attributes

### Data

| Attribute  | Type               | Description                                                                                                                                                                                                                                                                                           |
| ---------- | ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `kind`     | `"amountTypeNode"` | The node discriminator.                                                                                                                                                                                                                                                                               |
| `decimals` | `number`           | The number of decimal places the wrapped integer has. For instance, if the wrapper number is a `12345` and `decimals === 2`, then the amount should be interpreted as `123.45`. This is particularly useful to represent financial values as floating points are notoriously unsafe for that purpose. |
| `unit`     | `string`           | (Optional) The unit of the amount — e.g. `"USD"` or `"%"`.                                                                                                                                                                                                                                            |

### Children

| Attribute | Type                                                                       | Description             |
| --------- | -------------------------------------------------------------------------- | ----------------------- |
| `number`  | [`NestedTypeNode`](./NestedTypeNode)<[`NumberTypeNode`](./NumberTypeNode)> | The number node to wrap |

## Functions

### `amountTypeNode(input)`

Helper function that creates a `AmountTypeNode` object from an input object.

```ts
const node = amountTypeNode(numberTypeNode('u64'), 2, 'USD');
const nodeWithoutUnits = amountTypeNode(numberTypeNode('u16'), 2);
```

## Examples

### 2-decimals USD amount

```ts
amountTypeNode(numberTypeNode('u32'), 2, 'USD');

// 0.01 USD   => 0x01000000
// 10 USD     => 0x03E80000
// 400.60 USD => 0x9C7C0000
```