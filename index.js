module.exports = {
    "plugins": [
        "stylelint-scss"
    ],
    "extends": [
        "stylelint-config-standard"
    ],
    "rules": {
        "indentation": 4,
        "string-quotes": "single",
        "color-hex-case": "lower",
        "color-hex-length": "short",
        "color-named": "never",
        "selector-max-id": 0,
        "selector-max-attribute": 1,
        "selector-combinator-space-after": "always",
        "selector-attribute-quotes": "always",
        "selector-attribute-operator-space-before": "never",
        "selector-attribute-operator-space-after": "never",
        "selector-attribute-brackets-space-inside": "never",
        "comment-empty-line-before": null,
        "declaration-block-trailing-semicolon": "always",
        "declaration-no-important": true,
        "declaration-colon-space-before": "never",
        "declaration-colon-space-after": "always",
        "declaration-empty-line-before": null,
        "property-no-vendor-prefix": true,
        "value-no-vendor-prefix": true,
        "number-leading-zero": "always",
        "function-url-quotes": "always",
        "font-family-name-quotes": "always-unless-keyword",
        "at-rule-no-vendor-prefix": true,
        "selector-pseudo-element-colon-notation": "double",
        "selector-pseudo-class-parentheses-space-inside": "never",
        "selector-no-vendor-prefix": true,
        "media-feature-range-operator-space-before": "always",
        "media-feature-range-operator-space-after": "always",
        "media-feature-parentheses-space-inside": "never",
        "media-feature-name-no-vendor-prefix": true,
        "media-feature-colon-space-before": "never",
        "media-feature-colon-space-after": "always",
        "at-rule-no-unknown": null,
        "no-descending-specificity": null,
        "selector-max-specificity": [
            "0,2,0",
            {
                "ignoreSelectors": [
                    "/^::?\\w+/"
                ]
            }
        ],
        "at-rule-empty-line-before": [
            "always",
            {
                "ignoreAtRules": [
                    "else",
                    "import",
                    "include",
                    "extend"
                ],
                "except": [
                    "first-nested"
                ],
                "ignore": [
                    "after-comment"
                ]
            }
        ],
        "block-opening-brace-space-before": "always",
        "block-closing-brace-newline-after": [
            "always",
            {
                "ignoreAtRules": [
                    "if",
                    "else"
                ]
            }
        ],
        "at-rule-name-space-after": "always",
        "rule-empty-line-before": [
            "always",
            {
                "except": [
                    "first-nested"
                ],
                "ignore": [
                    "after-comment"
                ]
            }
        ],
        "scss/at-else-closing-brace-newline-after": "always-last-in-chain",
        "scss/at-else-closing-brace-space-after": "always-intermediate",
        "scss/at-else-empty-line-before": "never",
        "scss/at-if-closing-brace-newline-after": "always-last-in-chain",
        "scss/at-if-closing-brace-space-after": "always-intermediate",
        "selector-class-pattern": "^[a-z]([a-z0-9-]+)?(__([a-z0-9]+-?)+)*(--([a-z0-9]+-?)+)*(__([a-z0-9]+-?)+){0,2}$",
        "scss/dollar-variable-pattern": "^[a-z_]([a-z0-9-]+)?(__([a-z0-9]+-?)+)*(--([a-z0-9]+-?)+)*(__([a-z0-9]+-?)+){0,2}$",
        "scss/percent-placeholder-pattern": "^[a-z_]([a-z0-9-]+)?(__([a-z0-9]+-?)+)*(--([a-z0-9]+-?)+)*(__([a-z0-9]+-?)+){0,2}$",
        "no-duplicate-selectors": [true],
        "unit-allowed-list": [
            [
                "em",
                "rem",
                "%",
                "vw",
                "vh",
                "vmin",
                "vmax"
            ],
            {
                "ignoreProperties": {
                    "px": [
                        "/^border/",
                        "/^outline/",
                        "/^stroke/",
                        "box-shadow",
                        "text-shadow",
                        "/^\\$/",
                        "clip"
                    ],
                    "s": [
                        "/^transition/",
                        "/^animation/"
                    ],
                    "deg": [
                        "/^transform/",
                        "/^background/"
                    ],
                    "%": [
                        "/^transform/"
                    ],
                    "fr": [
                        "/^grid-template-columns/"
                    ]
                }
            }
        ]
    }
};
