import { ALIAS_KEYS } from "./utils";

export const PLACEHOLDERS = [
  "Identifier",
  "StringLiteral",
  "Expression",
  "Statement",
  "Declaration",
  "BlockStatement",
  "ClassBody",
  "Pattern",
] as const;

export const PLACEHOLDERS_ALIAS: Record<string, string[]> = {
  Declaration: ["Statement"],
  Pattern: ["PatternLike", "LVal"],
};

for (const type of PLACEHOLDERS) {
  const alias = ALIAS_KEYS[type];
  if (alias?.length) PLACEHOLDERS_ALIAS[type] = alias;
}

export const PLACEHOLDERS_FLIPPED_ALIAS: Record<string, string[]> = {};

Object.keys(PLACEHOLDERS_ALIAS).forEach(type => {
  PLACEHOLDERS_ALIAS[type].forEach(alias => {
    if (!Object.hasOwnProperty.call(PLACEHOLDERS_FLIPPED_ALIAS, alias)) {
      PLACEHOLDERS_FLIPPED_ALIAS[alias] = [];
    }
    PLACEHOLDERS_FLIPPED_ALIAS[alias].push(type);
  });
});
