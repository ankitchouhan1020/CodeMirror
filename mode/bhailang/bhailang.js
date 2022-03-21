// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE

(function(mod) {
    if (typeof exports == "object" && typeof module == "object") // CommonJS
      mod(require("../../lib/codemirror"), require("../../addon/mode/simple"));
    else if (typeof define == "function" && define.amd) // AMD
      define(["../../lib/codemirror", "../../addon/mode/simple"], mod);
    else // Plain browser env
      mod(CodeMirror);
  })(function(CodeMirror) {
  "use strict";
  
    CodeMirror.defineSimpleMode("bhailang", {
        // The start state contains the rules that are initially used
        start: [
            // string and byte string
            { regex: /b?"/, token: "string", next: "string" },

            // Symbols, delimiters
            { regex: /^;/, token: "builtin" },
            { regex: /^\{/, token: "builtin" },
            { regex: /^\}/, token: "builtin" },
            { regex: /^\(/, token: "builtin" },
            { regex: /^\)/, token: "builtin" },
            { regex: /^,/, token: "builtin" },

            //Keywords
            { regex: /^\bhi bhai\b/, token: "keyword" },
            { regex: /^\bbye bhai\b/, token: "keyword" },
            { regex: /^\bbol bhai\b/, token: "keyword" },
            { regex: /^\bbhai ye hai\b/, token: "keyword" },
            { regex: /^\bagar bhai\b/, token: "keyword" },
            { regex: /^\bnahi to bhai\b/, token: "keyword" },
            { regex: /^\bwarna bhai\b/, token: "keyword" },
            { regex: /^\bnalla\b/, token: "keyword" },
            { regex: /^\bjab tak bhai\b/, token: "keyword" },
            { regex: /^\bbas kar bhai\b/, token: "keyword" },
            { regex: /^\bagla dekh bhai\b/, token: "keyword" },

            // Number
            { regex: /^-?\d+/, token: "number" },

            // Boolean
            { regex: /^\bsahi\b/, token: "builtin" },
            { regex: /^\bgalat\b/, token: "builtin" },

            // Identifier
            { regex: /^\w+/, token: "variable" },

            // Equality operator: ==, !=
            { regex: /^[=!]=/, token: "operator" },

            // Assignment operators: =, *=, /=, +=, -=
            { regex: /^=/, token: "operator" },
            { regex: /^[\*\%\/\+\-]=/, token: "operator" },

            // operator
            { regex: /^[+\-]/, token: "operator" },
            { regex: /^[*\/\%]/, token: "operator" },
            { regex: /^[><]=?/, token: "operator" },

            // logical operators: &&, ||
            { regex: /^&&/, token: "operator" },
            { regex: /^\|\|/, token: "operator" },
        ],

        string: [
            { regex: /"/, token: "string", next: "start" },
            { regex: /(?:[^\\"]|\\(?:.|$))*/, token: "string" }
        ],

        // The multi-line comment state.
        comment: [
            { regex: /.*?\*\//, token: "comment", next: "start" },
            { regex: /.*/, token: "comment" }
        ],
        // // The meta property contains global information about the mode. It
        // // can contain properties like lineComment, which are supported by
        // // all modes, and also directives like dontIndentStates, which are
        // // specific to simple modes.
        // meta: {
        //     dontIndentStates: ["comment"],
        //     lineComment: "//"
        // }
    });

    CodeMirror.defineMIME("text/x-bhailang", "bhailang")
});
