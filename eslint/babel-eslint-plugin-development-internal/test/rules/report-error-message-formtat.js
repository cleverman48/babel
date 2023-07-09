import RuleTester from "../../../babel-eslint-shared-fixtures/utils/RuleTester.js";
import rule from "../../lib/rules/report-error-message-format.cjs";

const ruleTester = new RuleTester();

ruleTester.run("report-error-message-format", rule, {
  valid: [
    "makeErrorTemplates({});",
    'makeErrorTemplates({ ThisIsAnError: "This is an error." });',
    `makeErrorTemplates({ ThisIsAnError: "'this' is an error." });`,
    `makeErrorTemplates({ ThisIsAnError: "\`this\` is an error." });`,
    `makeErrorTemplates({ ThisIsAnError: "This is an error?" });`,
    `makeErrorTemplates({ ThisIsAnError: "'this' is an error?" });`,
    `makeErrorTemplates({ ThisIsAnError: "\`this\` is an error?" });`,
    'makeErrorTemplates({ ThisIsAnError: "This is\\nan error." });',
    `makeErrorTemplates({ ThisIsAnError: "'this' is\\nan error." });`,
    `makeErrorTemplates({ ThisIsAnError: "\`this\` is\\nan error." });`,
    `makeErrorTemplates({ ThisIsAnError: "This is\\nan error?" });`,
    `makeErrorTemplates({ ThisIsAnError: "'this' is\\nan error?" });`,
    `makeErrorTemplates({ ThisIsAnError: "\`this\` is\\nan error?" });`,
  ],
  invalid: [
    {
      code: "makeErrorTemplates({ ThisIsAnError: 'this is an error.' });",
      errors: [{ messageId: "mustMatchPattern" }],
    },
    {
      code: "makeErrorTemplates({ ThisIsAnError: 'This is an error' });",
      errors: [{ messageId: "mustMatchPattern" }],
    },
    {
      code: "makeErrorTemplates({ ThisIsAnError: 'this is an error?' });",
      errors: [{ messageId: "mustMatchPattern" }],
    },
    {
      code: "makeErrorTemplates({ ThisIsAnError: '`this` is an error' });",
      errors: [{ messageId: "mustMatchPattern" }],
    },
    {
      code: `makeErrorTemplates({ ThisIsAnError: "'this' is an error" });`,
      errors: [{ messageId: "mustMatchPattern" }],
    },
  ],
});
