import type { TextlintRuleModule } from "@textlint/types";

const quotes = [
    {
        regex: "[“”]",
        replace: `"`,
        message: "Found double-curly-quotes."
    },
    {
        regex: "[‘’]",
        replace: `'`,
        message: "Found single-curly-quotes."
    },
]

const report: TextlintRuleModule = (context) => {
    const { Syntax, RuleError, fixer, report, getSource, locator } = context;
    return {
        [Syntax.Str](node) { // "Str" node
            const text = getSource(node); // Get text

            quotes.forEach(q => {
                const matches = text.matchAll(new RegExp(q.regex, 'g'));
                for (const match of matches) {
                    const index = match.index ?? 0;
                    const matchRange = [index, index + match[0].length] as const;
                    const replace = fixer.replaceTextRange(matchRange, q.replace)
                    const ruleError = new RuleError(q.message, {
                        padding: locator.range(matchRange),
                        fix: replace,
                    });
                    report(node, ruleError);
                }
            })
        }
    }
};

export default {
    linter: report,
    fixer: report
};
