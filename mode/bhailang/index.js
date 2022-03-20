// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE

(function (mod) {
    if (typeof exports == "object" && typeof module == "object") // CommonJS
        mod(require("../../lib/codemirror"));
    else if (typeof define == "function" && define.amd) // AMD
        define(["../../lib/codemirror"], mod);
    else // Plain browser env
        mod(CodeMirror);
})(function (CodeMirror) {
    "use strict";

    var TokenTypes = {
        NULL_TYPE: null,

        HI_BHAI_TYPE: "hi bhai",

        BYE_BHAI_TYPE: "bye bhai",

        BOL_BHAI_TYPE: "bol bhai",

        BHAI_YE_HAI_TYPE: "bhai ye hai",

        AGAR_BHAI: "agar bhai",

        WARNA_BHAI: "warna bhai",

        JAB_TAK_BHAI: "jab tak bhai",

        BAS_KAR_BHAI: "bas kar bhai",

        AGLA_DEKH_BHAI: "agla dekh bhai",

        NALLA_TYPE: "NALLA",

        SEMI_COLON_TYPE: ";",

        OPEN_CURLY_BRACE_TYPE: "{",

        CLOSED_CURLY_BRACE_TYPE: "}",

        OPEN_PARENTHESIS_TYPE: "(",

        CLOSED_PARENTHESIS_TYPE: ")",

        COMMA_TYPE: ",",

        NUMBER_TYPE: "NUMBER",

        IDENTIFIER_TYPE: "IDENTIFIER",

        SIMPLE_ASSIGN_TYPE: "SIMPLE_ASSIGN",

        COMPLEX_ASSIGN_TYPE: "COMPLEX_ASSIGN",

        ADDITIVE_OPERATOR_TYPE: "ADDITIVE_OPERATOR",

        MULTIPLICATIVE_OPERATOR_TYPE: "MULTIPLICATIVE_OPERATOR",

        RELATIONAL_OPERATOR: "RELATIONAL_OPERATOR",

        EQUALITY_OPERATOR: "EQUALITY_OPERATOR",

        STRING_TYPE: "STRING",

        BOOLEAN_TYPE: "BOOLEAN",

        LOGICAL_AND: "LOGICAL_AND",

        LOGICAL_OR: "LOGICAL_OR"
    };

    var SPEC = [
        // Whitespcaes
        { regex: /^\s+/, token: TokenTypes.NULL_TYPE },

        // singke line Comments
        { regex: /^\/\/.*/, token: TokenTypes.NULL_TYPE },

        // multi line comments
        { regex: /^\/\*[\s\S]*?\*\//, token: TokenTypes.NULL_TYPE },

        // Symbols, delimiters
        { regex: /^;/, token: TokenTypes.SEMI_COLON_TYPE },
        { regex: /^\{/, token: TokenTypes.OPEN_CURLY_BRACE_TYPE },
        { regex: /^\}/, token: TokenTypes.CLOSED_CURLY_BRACE_TYPE },
        { regex: /^\(/, token: TokenTypes.OPEN_PARENTHESIS_TYPE },
        { regex: /^\)/, token: TokenTypes.CLOSED_PARENTHESIS_TYPE },
        { regex: /^,/, token: TokenTypes.COMMA_TYPE },

        //Keywords
        { regex: /^\bhi bhai\b/, token: TokenTypes.HI_BHAI_TYPE },
        { regex: /^\bbye bhai\b/, token: TokenTypes.BYE_BHAI_TYPE },
        { regex: /^\bbol bhai\b/, token: TokenTypes.BOL_BHAI_TYPE },
        { regex: /^\bbhai ye hai\b/, token: TokenTypes.BHAI_YE_HAI_TYPE },
        { regex: /^\bagar bhai\b/, token: TokenTypes.AGAR_BHAI },
        { regex: /^\bwarna bhai\b/, token: TokenTypes.WARNA_BHAI },
        { regex: /^\bnalla\b/, token: TokenTypes.NALLA_TYPE },
        { regex: /^\bjab tak bhai\b/, token: TokenTypes.JAB_TAK_BHAI },
        { regex: /^\bbas kar bhai\b/, token: TokenTypes.BAS_KAR_BHAI },
        { regex: /^\bagla dekh bhai\b/, token: TokenTypes.AGLA_DEKH_BHAI },

        // Number
        { regex: /^-?\d+/, token: TokenTypes.NUMBER_TYPE },

        // Boolean
        { regex: /^\bsahi\b/, token: TokenTypes.BOOLEAN_TYPE },
        { regex: /^\bgalat\b/, token: TokenTypes.BOOLEAN_TYPE },

        // Identifier
        { regex: /^\w+/, token: TokenTypes.IDENTIFIER_TYPE },

        // Equality operator: ==, !=
        { regex: /^[=!]=/, token: TokenTypes.EQUALITY_OPERATOR },

        // Assignment operators: =, *=, /=, +=, -=
        { regex: /^=/, token: TokenTypes.SIMPLE_ASSIGN_TYPE },
        { regex: /^[\*\%\/\+\-]=/, token: TokenTypes.COMPLEX_ASSIGN_TYPE },

        // operator
        { regex: /^[+\-]/, token: TokenTypes.ADDITIVE_OPERATOR_TYPE },
        { regex: /^[*\/\%]/, token: TokenTypes.MULTIPLICATIVE_OPERATOR_TYPE },
        { regex: /^[><]=?/, token: TokenTypes.RELATIONAL_OPERATOR },

        // logical operators: &&, ||
        { regex: /^&&/, token: TokenTypes.LOGICAL_AND },
        { regex: /^\|\|/, token: TokenTypes.LOGICAL_OR },

        // String
        { regex: /^"[^"]*"/, token: TokenTypes.STRING_TYPE },
        { regex: /^'[^']*'/, token: TokenTypes.STRING_TYPE },
    ];

    CodeMirror.defineSimpleMode("bhailang", {
        // The start state contains the rules that are initially used
        start: SPEC,
        // The multi-line comment state.
        comment: [
            { regex: /.*?\*\//, token: "comment", next: "start" },
            { regex: /.*/, token: "comment" }
        ],
        // The meta property contains global information about the mode. It
        // can contain properties like lineComment, which are supported by
        // all modes, and also directives like dontIndentStates, which are
        // specific to simple modes.
        meta: {
            dontIndentStates: ["comment"],
            lineComment: "//"
        }
    });

    CodeMirror.defineMIME("text/x-bhailang", "bhailang")
});
