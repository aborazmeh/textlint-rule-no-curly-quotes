import TextLintTester from "textlint-tester";
import rule from "../src/index";

const tester = new TextLintTester();
// ruleName, rule, { valid, invalid }
tester.run("rule", rule, {
    valid: [
        `this is a text with "double quotations" and with 'single ones', too! no problems here. `,
    ],
    invalid: [
        {
            text: `this is a text with curly “double quotations”.`,
            output: `this is a text with curly "double quotations".`,
            errors: [
                {
                    message: "Found double-curly-quotes.",
                    range: [26, 27]
                },
                {
                    message: "Found double-curly-quotes.",
                    range: [44, 45]
                }
            ]
        },
        {
            text: `a text with curly ‘double quotations’.`,
            output: "a text with curly 'double quotations'.",
            errors: [
                {
                    message: "Found single-curly-quotes.",
                    range: [18, 19]
                },
                {
                    message: "Found single-curly-quotes.",
                    range: [36, 37]
                }
            ]
        },
    ]
});
