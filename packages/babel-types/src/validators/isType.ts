import { FLIPPED_ALIAS_KEYS, ALIAS_KEYS } from "../definitions";
import type * as t from "..";

export default function isType<T extends t.Node["type"]>(
  nodeType: string,
  targetType: T,
): nodeType is T;

export default function isType(
  nodeType: string | null | undefined,
  targetType: string,
): boolean;

/**
 * Test if a `nodeType` is a `targetType` or if `targetType` is an alias of `nodeType`.
 */
export default function isType(nodeType: string, targetType: string): boolean {
  if (nodeType === targetType) return true;

  // This is a fast-path. If the test above failed, but an alias key is found, then the
  // targetType was a primary node type, so there's no need to check the aliases.
  // @ts-expect-error targetType may not index ALIAS_KEYS
  if (ALIAS_KEYS[targetType]) return false;

  const aliases: Array<string> | undefined = FLIPPED_ALIAS_KEYS[targetType];
  if (aliases) {
    if (aliases[0] === nodeType) return true;

    for (const alias of aliases) {
      if (nodeType === alias) return true;
    }
  }

  return false;
}
