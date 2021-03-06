/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var julia_parser = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,6],$V1=[1,7],$V2=[1,12],$V3=[1,8],$V4=[1,9],$V5=[1,10],$V6=[5,11,61,62],$V7=[5,9,11,12,13,21,23,25,61,62],$V8=[1,29],$V9=[1,22],$Va=[1,23],$Vb=[1,17],$Vc=[1,19],$Vd=[1,26],$Ve=[1,27],$Vf=[1,28],$Vg=[1,30],$Vh=[1,39],$Vi=[1,38],$Vj=[1,41],$Vk=[1,42],$Vl=[1,43],$Vm=[1,44],$Vn=[1,45],$Vo=[1,46],$Vp=[1,47],$Vq=[1,48],$Vr=[1,49],$Vs=[1,50],$Vt=[1,51],$Vu=[1,52],$Vv=[1,53],$Vw=[1,54],$Vx=[1,55],$Vy=[5,9,11,12,13,16,19,21,23,25,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,50,54,61,62],$Vz=[5,9,11,12,13,16,19,21,23,25,28,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,50,54,59,61,62],$VA=[1,66],$VB=[1,98],$VC=[2,55],$VD=[19,50],$VE=[16,54],$VF=[1,108],$VG=[1,109],$VH=[5,9,11,12,13,16,19,21,23,25,30,31,32,33,34,35,36,37,50,54,61,62],$VI=[5,9,11,12,13,16,19,21,23,25,30,31,32,33,34,35,36,37,38,39,40,50,54,61,62],$VJ=[5,9,11,12,13,16,19,21,23,25,30,31,32,33,34,35,36,37,38,39,40,41,43,44,50,54,61,62];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"expressions":3,"statements":4,"EOF":5,"statements_":6,"statement":7,"statement_with_semicolon":8,"while":9,"e":10,"end":11,"for":12,"IDENTIFIER":13,"in":14,"dot_expr":15,",":16,"pairs":17,"(":18,")":19,"do":20,"if":21,"elif":22,"function":23,"parameters":24,"return":25,"access_array":26,"=":27,".":28,"function_call":29,"or":30,"and":31,"<=":32,"<":33,">=":34,">":35,"!=":36,"==":37,"+":38,"-":39,"..":40,"*":41,"^":42,"/":43,"%":44,"not_expr":45,"!":46,"parentheses_expr":47,"[":48,"access_arr":49,"]":50,"exprs":51,"{":52,"key_values":53,"}":54,"NUMBER":55,"STRING_LITERAL":56,"type":57,"parameter":58,"][":59,"types":60,"elseif":61,"else":62,"identifiers":63,"key_value":64,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",9:"while",11:"end",12:"for",13:"IDENTIFIER",14:"in",16:",",17:"pairs",18:"(",19:")",20:"do",21:"if",23:"function",25:"return",27:"=",28:".",30:"or",31:"and",32:"<=",33:"<",34:">=",35:">",36:"!=",37:"==",38:"+",39:"-",40:"..",41:"*",42:"^",43:"/",44:"%",46:"!",48:"[",50:"]",52:"{",54:"}",55:"NUMBER",56:"STRING_LITERAL",59:"][",61:"elseif",62:"else"},
productions_: [0,[3,2],[6,2],[6,1],[4,1],[7,1],[7,4],[7,6],[7,12],[7,5],[7,4],[7,7],[8,2],[8,3],[8,3],[8,3],[8,1],[10,3],[10,3],[10,3],[10,3],[10,3],[10,3],[10,3],[10,3],[10,3],[10,3],[10,3],[10,3],[10,3],[10,3],[10,3],[10,2],[10,1],[45,2],[45,1],[15,3],[15,1],[26,4],[29,3],[29,4],[47,3],[47,6],[47,1],[47,1],[47,2],[47,3],[47,3],[47,1],[47,1],[47,1],[57,1],[58,1],[24,3],[24,1],[24,0],[49,3],[49,1],[51,3],[51,1],[60,3],[60,1],[22,4],[22,3],[22,2],[63,3],[63,1],[53,3],[53,1],[64,3]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
return $$[$0-1];
break;
case 2:
this.$ = [$$[$0-1]].concat($$[$0]);
break;
case 3: case 37: case 54: case 57:
this.$ =
 [$$[$0]];
break;
case 4:
this.$ = ["statements",$$[$0]]
break;
case 5:
this.$ = ["semicolon",$$[$0]];
break;
case 6:
this.$ = ["while",$$[$0-2],$$[$0-1]];
break;
case 7:
this.$ = ["foreach","Object",$$[$0-4],$$[$0-2],$$[$0-1]];
break;
case 8:
this.$ = ["foreach_with_index","Object",$$[$0-10],$$[$0-8],$$[$0-4],$$[$0-1]];
break;
case 9:
this.$ = ["if",$$[$0-3],$$[$0-2],$$[$0-1]];
break;
case 10:
this.$ = ["if",$$[$0-2],$$[$0-1]];
break;
case 11:
this.$ = ["function","public","Object",$$[$0-5],$$[$0-3],$$[$0-1]];
break;
case 12:
this.$ = ["return",$$[$0]];
break;
case 13: case 14:
this.$ = ["set_var",$$[$0-2],$$[$0]];
break;
case 15:
this.$ = [".",[$$[$0-2]].concat($$[$0])]
break;
case 17:
this.$ = ['||',$$[$0-2],$$[$0]];
break;
case 18:
this.$ = ['&&',$$[$0-2],$$[$0]];
break;
case 19: case 20: case 21: case 22: case 23: case 24: case 25: case 26: case 27: case 28: case 29: case 30: case 31:
this.$ = [$$[$0-1],$$[$0-2],$$[$0]];
break;
case 32:
this.$ = ["-",$$[$0]];
break;
case 34:
this.$ = ["!", [".",$$[$0]]];
break;
case 35:
this.$ = [".", $$[$0]];
break;
case 36: case 53: case 56: case 58: case 60: case 65:
this.$ = [$$[$0-2]].concat($$[$0]);
break;
case 38:
this.$ = ["access_array",$$[$0-3],$$[$0-1]];
break;
case 39:
this.$ = ["function_call",$$[$0-2],[]];
break;
case 40:
this.$ = ["function_call",$$[$0-3],$$[$0-1]];
break;
case 41:
this.$ = $$[$0-1];
break;
case 42:
this.$ = ["anonymous_function","Object",$$[$0-3],$$[$0-1]];
break;
case 45:
this.$ = ["initializer_list","Object",[]];
break;
case 46:
this.$ = ["initializer_list","Object",$$[$0-1]];
break;
case 47:
this.$ = ["associative_array","Object","Object",$$[$0-1]];
break;
case 48: case 49: case 50:
this.$ = yytext;
break;
case 52:
this.$ = ["Object", $$[$0]];
break;
case 55:
this.$ = [];
break;
case 59: case 61: case 66: case 68:
this.$ = [$$[$0]];
break;
case 62:
this.$ = ["elif",$$[$0-2],$$[$0-1],$$[$0]]
break;
case 63:
this.$ = ["elif",$$[$0-1],$$[$0]]
break;
case 64:
this.$ = ["else",$$[$0]];
break;
case 67:
this.$ = $$[$0-2].concat([$$[$0]]);
break;
case 69:
this.$ = [$$[$0-2],$$[$0]]
break;
}
},
table: [{3:1,4:2,6:3,7:4,8:5,9:$V0,12:$V1,13:$V2,21:$V3,23:$V4,25:$V5,26:11,29:13},{1:[3]},{5:[1,14]},o($V6,[2,4]),o($V6,[2,3],{7:4,8:5,26:11,29:13,6:15,9:$V0,12:$V1,13:$V2,21:$V3,23:$V4,25:$V5}),o($V7,[2,5]),{10:16,13:$V8,15:20,18:$V9,23:$Va,26:24,29:25,39:$Vb,45:18,46:$Vc,47:21,48:$Vd,52:$Ve,55:$Vf,56:$Vg},{13:[1,31]},{10:32,13:$V8,15:20,18:$V9,23:$Va,26:24,29:25,39:$Vb,45:18,46:$Vc,47:21,48:$Vd,52:$Ve,55:$Vf,56:$Vg},{13:[1,33]},{10:34,13:$V8,15:20,18:$V9,23:$Va,26:24,29:25,39:$Vb,45:18,46:$Vc,47:21,48:$Vd,52:$Ve,55:$Vf,56:$Vg},{27:[1,35]},{18:$Vh,27:[1,36],28:[1,37],48:$Vi},o($V7,[2,16]),{1:[2,1]},o($V6,[2,2]),{4:40,6:3,7:4,8:5,9:$V0,12:$V1,13:$V2,21:$V3,23:$V4,25:$V5,26:11,29:13,30:$Vj,31:$Vk,32:$Vl,33:$Vm,34:$Vn,35:$Vo,36:$Vp,37:$Vq,38:$Vr,39:$Vs,40:$Vt,41:$Vu,42:$Vv,43:$Vw,44:$Vx},{10:56,13:$V8,15:20,18:$V9,23:$Va,26:24,29:25,39:$Vb,45:18,46:$Vc,47:21,48:$Vd,52:$Ve,55:$Vf,56:$Vg},o($Vy,[2,33]),{13:$V8,15:57,18:$V9,23:$Va,26:24,29:25,47:21,48:$Vd,52:$Ve,55:$Vf,56:$Vg},o($Vy,[2,35]),o($Vy,[2,37],{28:[1,58]}),{10:59,13:$V8,15:20,18:$V9,23:$Va,26:24,29:25,39:$Vb,45:18,46:$Vc,47:21,48:$Vd,52:$Ve,55:$Vf,56:$Vg},{18:[1,60]},o($Vz,[2,43]),o($Vz,[2,44]),{10:63,13:$V8,15:20,18:$V9,23:$Va,26:24,29:25,39:$Vb,45:18,46:$Vc,47:21,48:$Vd,50:[1,61],51:62,52:$Ve,55:$Vf,56:$Vg},{53:64,56:$VA,64:65},o($Vz,[2,48]),o($Vz,[2,49],{18:$Vh,48:$Vi}),o($Vz,[2,50]),{14:[1,67],16:[1,68]},{4:69,6:3,7:4,8:5,9:$V0,12:$V1,13:$V2,21:$V3,23:$V4,25:$V5,26:11,29:13,30:$Vj,31:$Vk,32:$Vl,33:$Vm,34:$Vn,35:$Vo,36:$Vp,37:$Vq,38:$Vr,39:$Vs,40:$Vt,41:$Vu,42:$Vv,43:$Vw,44:$Vx},{18:[1,70]},o($V7,[2,12],{30:$Vj,31:$Vk,32:$Vl,33:$Vm,34:$Vn,35:$Vo,36:$Vp,37:$Vq,38:$Vr,39:$Vs,40:$Vt,41:$Vu,42:$Vv,43:$Vw,44:$Vx}),{10:71,13:$V8,15:20,18:$V9,23:$Va,26:24,29:25,39:$Vb,45:18,46:$Vc,47:21,48:$Vd,52:$Ve,55:$Vf,56:$Vg},{10:72,13:$V8,15:20,18:$V9,23:$Va,26:24,29:25,39:$Vb,45:18,46:$Vc,47:21,48:$Vd,52:$Ve,55:$Vf,56:$Vg},{13:$V8,15:73,18:$V9,23:$Va,26:24,29:25,47:21,48:$Vd,52:$Ve,55:$Vf,56:$Vg},{13:$V8,18:$V9,23:$Va,26:24,29:25,47:75,48:$Vd,49:74,52:$Ve,55:$Vf,56:$Vg},{10:63,13:$V8,15:20,18:$V9,19:[1,76],23:$Va,26:24,29:25,39:$Vb,45:18,46:$Vc,47:21,48:$Vd,51:77,52:$Ve,55:$Vf,56:$Vg},{11:[1,78]},{10:79,13:$V8,15:20,18:$V9,23:$Va,26:24,29:25,39:$Vb,45:18,46:$Vc,47:21,48:$Vd,52:$Ve,55:$Vf,56:$Vg},{10:80,13:$V8,15:20,18:$V9,23:$Va,26:24,29:25,39:$Vb,45:18,46:$Vc,47:21,48:$Vd,52:$Ve,55:$Vf,56:$Vg},{10:81,13:$V8,15:20,18:$V9,23:$Va,26:24,29:25,39:$Vb,45:18,46:$Vc,47:21,48:$Vd,52:$Ve,55:$Vf,56:$Vg},{10:82,13:$V8,15:20,18:$V9,23:$Va,26:24,29:25,39:$Vb,45:18,46:$Vc,47:21,48:$Vd,52:$Ve,55:$Vf,56:$Vg},{10:83,13:$V8,15:20,18:$V9,23:$Va,26:24,29:25,39:$Vb,45:18,46:$Vc,47:21,48:$Vd,52:$Ve,55:$Vf,56:$Vg},{10:84,13:$V8,15:20,18:$V9,23:$Va,26:24,29:25,39:$Vb,45:18,46:$Vc,47:21,48:$Vd,52:$Ve,55:$Vf,56:$Vg},{10:85,13:$V8,15:20,18:$V9,23:$Va,26:24,29:25,39:$Vb,45:18,46:$Vc,47:21,48:$Vd,52:$Ve,55:$Vf,56:$Vg},{10:86,13:$V8,15:20,18:$V9,23:$Va,26:24,29:25,39:$Vb,45:18,46:$Vc,47:21,48:$Vd,52:$Ve,55:$Vf,56:$Vg},{10:87,13:$V8,15:20,18:$V9,23:$Va,26:24,29:25,39:$Vb,45:18,46:$Vc,47:21,48:$Vd,52:$Ve,55:$Vf,56:$Vg},{10:88,13:$V8,15:20,18:$V9,23:$Va,26:24,29:25,39:$Vb,45:18,46:$Vc,47:21,48:$Vd,52:$Ve,55:$Vf,56:$Vg},{10:89,13:$V8,15:20,18:$V9,23:$Va,26:24,29:25,39:$Vb,45:18,46:$Vc,47:21,48:$Vd,52:$Ve,55:$Vf,56:$Vg},{10:90,13:$V8,15:20,18:$V9,23:$Va,26:24,29:25,39:$Vb,45:18,46:$Vc,47:21,48:$Vd,52:$Ve,55:$Vf,56:$Vg},{10:91,13:$V8,15:20,18:$V9,23:$Va,26:24,29:25,39:$Vb,45:18,46:$Vc,47:21,48:$Vd,52:$Ve,55:$Vf,56:$Vg},{10:92,13:$V8,15:20,18:$V9,23:$Va,26:24,29:25,39:$Vb,45:18,46:$Vc,47:21,48:$Vd,52:$Ve,55:$Vf,56:$Vg},{10:93,13:$V8,15:20,18:$V9,23:$Va,26:24,29:25,39:$Vb,45:18,46:$Vc,47:21,48:$Vd,52:$Ve,55:$Vf,56:$Vg},o($Vy,[2,32]),o($Vy,[2,34]),{13:$V8,15:94,18:$V9,23:$Va,26:24,29:25,47:21,48:$Vd,52:$Ve,55:$Vf,56:$Vg},{19:[1,95],30:$Vj,31:$Vk,32:$Vl,33:$Vm,34:$Vn,35:$Vo,36:$Vp,37:$Vq,38:$Vr,39:$Vs,40:$Vt,41:$Vu,42:$Vv,43:$Vw,44:$Vx},{13:$VB,19:$VC,24:96,58:97},o($Vz,[2,45]),{50:[1,99]},o($VD,[2,59],{16:[1,100],30:$Vj,31:$Vk,32:$Vl,33:$Vm,34:$Vn,35:$Vo,36:$Vp,37:$Vq,38:$Vr,39:$Vs,40:$Vt,41:$Vu,42:$Vv,43:$Vw,44:$Vx}),{16:[1,102],54:[1,101]},o($VE,[2,68]),{27:[1,103]},{13:$V8,15:104,18:$V9,23:$Va,26:24,29:25,47:21,48:$Vd,52:$Ve,55:$Vf,56:$Vg},{13:[1,105]},{11:[1,107],22:106,61:$VF,62:$VG},{13:$VB,19:$VC,24:110,58:97},o($V7,[2,13],{30:$Vj,31:$Vk,32:$Vl,33:$Vm,34:$Vn,35:$Vo,36:$Vp,37:$Vq,38:$Vr,39:$Vs,40:$Vt,41:$Vu,42:$Vv,43:$Vw,44:$Vx}),o($V7,[2,14],{30:$Vj,31:$Vk,32:$Vl,33:$Vm,34:$Vn,35:$Vo,36:$Vp,37:$Vq,38:$Vr,39:$Vs,40:$Vt,41:$Vu,42:$Vv,43:$Vw,44:$Vx}),o($V7,[2,15]),{50:[1,111]},{50:[2,57],59:[1,112]},o($Vz,[2,39]),{19:[1,113]},o($V7,[2,6]),o([5,9,11,12,13,16,19,21,23,25,30,50,54,61,62],[2,17],{31:$Vk,32:$Vl,33:$Vm,34:$Vn,35:$Vo,36:$Vp,37:$Vq,38:$Vr,39:$Vs,40:$Vt,41:$Vu,42:$Vv,43:$Vw,44:$Vx}),o([5,9,11,12,13,16,19,21,23,25,30,31,50,54,61,62],[2,18],{32:$Vl,33:$Vm,34:$Vn,35:$Vo,36:$Vp,37:$Vq,38:$Vr,39:$Vs,40:$Vt,41:$Vu,42:$Vv,43:$Vw,44:$Vx}),o($VH,[2,19],{38:$Vr,39:$Vs,40:$Vt,41:$Vu,42:$Vv,43:$Vw,44:$Vx}),o($VH,[2,20],{38:$Vr,39:$Vs,40:$Vt,41:$Vu,42:$Vv,43:$Vw,44:$Vx}),o($VH,[2,21],{38:$Vr,39:$Vs,40:$Vt,41:$Vu,42:$Vv,43:$Vw,44:$Vx}),o($VH,[2,22],{38:$Vr,39:$Vs,40:$Vt,41:$Vu,42:$Vv,43:$Vw,44:$Vx}),o($VH,[2,23],{38:$Vr,39:$Vs,40:$Vt,41:$Vu,42:$Vv,43:$Vw,44:$Vx}),o($VH,[2,24],{38:$Vr,39:$Vs,40:$Vt,41:$Vu,42:$Vv,43:$Vw,44:$Vx}),o($VI,[2,25],{41:$Vu,42:$Vv,43:$Vw,44:$Vx}),o($VI,[2,26],{41:$Vu,42:$Vv,43:$Vw,44:$Vx}),o($VI,[2,27],{41:$Vu,42:$Vv,43:$Vw,44:$Vx}),o($VJ,[2,28],{42:$Vv}),o($Vy,[2,29]),o($VJ,[2,30],{42:$Vv}),o($VJ,[2,31],{42:$Vv}),o($Vy,[2,36]),o($Vz,[2,41]),{19:[1,114]},{16:[1,115],19:[2,54]},o([16,19],[2,52]),o($Vz,[2,46]),{10:63,13:$V8,15:20,18:$V9,23:$Va,26:24,29:25,39:$Vb,45:18,46:$Vc,47:21,48:$Vd,51:116,52:$Ve,55:$Vf,56:$Vg},o($Vz,[2,47]),{56:$VA,64:117},{10:118,13:$V8,15:20,18:$V9,23:$Va,26:24,29:25,39:$Vb,45:18,46:$Vc,47:21,48:$Vd,52:$Ve,55:$Vf,56:$Vg},{4:119,6:3,7:4,8:5,9:$V0,12:$V1,13:$V2,21:$V3,23:$V4,25:$V5,26:11,29:13},{14:[1,120]},{11:[1,121]},o($V7,[2,10]),{10:122,13:$V8,15:20,18:$V9,23:$Va,26:24,29:25,39:$Vb,45:18,46:$Vc,47:21,48:$Vd,52:$Ve,55:$Vf,56:$Vg},{4:123,6:3,7:4,8:5,9:$V0,12:$V1,13:$V2,21:$V3,23:$V4,25:$V5,26:11,29:13},{19:[1,124]},o([5,9,11,12,13,16,19,21,23,25,27,28,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,50,54,59,61,62],[2,38]),{13:$V8,18:$V9,23:$Va,26:24,29:25,47:75,48:$Vd,49:125,52:$Ve,55:$Vf,56:$Vg},o($Vz,[2,40]),{4:126,6:3,7:4,8:5,9:$V0,12:$V1,13:$V2,21:$V3,23:$V4,25:$V5,26:11,29:13},{13:$VB,19:$VC,24:127,58:97},o($VD,[2,58]),o($VE,[2,67]),o($VE,[2,69],{30:$Vj,31:$Vk,32:$Vl,33:$Vm,34:$Vn,35:$Vo,36:$Vp,37:$Vq,38:$Vr,39:$Vs,40:$Vt,41:$Vu,42:$Vv,43:$Vw,44:$Vx}),{11:[1,128]},{17:[1,129]},o($V7,[2,9]),{4:130,6:3,7:4,8:5,9:$V0,12:$V1,13:$V2,21:$V3,23:$V4,25:$V5,26:11,29:13,30:$Vj,31:$Vk,32:$Vl,33:$Vm,34:$Vn,35:$Vo,36:$Vp,37:$Vq,38:$Vr,39:$Vs,40:$Vt,41:$Vu,42:$Vv,43:$Vw,44:$Vx},{11:[2,64]},{4:131,6:3,7:4,8:5,9:$V0,12:$V1,13:$V2,21:$V3,23:$V4,25:$V5,26:11,29:13},{50:[2,56]},{11:[1,132]},{19:[2,53]},o($V7,[2,7]),{18:[1,133]},{11:[2,63],22:134,61:$VF,62:$VG},{11:[1,135]},o($Vz,[2,42]),{13:$V8,15:136,18:$V9,23:$Va,26:24,29:25,47:21,48:$Vd,52:$Ve,55:$Vf,56:$Vg},{11:[2,62]},o($V7,[2,11]),{19:[1,137]},{20:[1,138]},{4:139,6:3,7:4,8:5,9:$V0,12:$V1,13:$V2,21:$V3,23:$V4,25:$V5,26:11,29:13},{11:[1,140]},o($V7,[2,8])],
defaultActions: {14:[2,1],123:[2,64],125:[2,56],127:[2,53],134:[2,62]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* skip whitespace */
break;
case 1:return 55
break;
case 2:return 56
break;
case 3:return "$"
break;
case 4:return "function"
break;
case 5:return "end"
break;
case 6:return 61
break;
case 7:return 21
break;
case 8:return 62
break;
case 9:return 25
break;
case 10:return 9
break;
case 11:return 12
break;
case 12:return 'of'
break;
case 13:return 'not'
break;
case 14:return 16
break;
case 15:return 40
break;
case 16:return 28
break;
case 17:return ':'
break;
case 18:return 31
break;
case 19:return 30
break;
case 20:return 36
break;
case 21:return 46
break;
case 22:return 34
break;
case 23:return 35
break;
case 24:return 32
break;
case 25:return 33
break;
case 26:return 37
break;
case 27:return 27
break;
case 28:return '*='
break;
case 29:return 41
break;
case 30:return 42
break;
case 31:return 43
break;
case 32:return 44
break;
case 33:return 39
break;
case 34:return 38
break;
case 35:return 42
break;
case 36:return 52
break;
case 37:return 54
break;
case 38:return 59
break;
case 39:return 48
break;
case 40:return 50
break;
case 41:return 18
break;
case 42:return 19
break;
case 43:return '_'
break;
case 44:return 17
break;
case 45:return 14
break;
case 46:return 20
break;
case 47:return 13
break;
case 48:return 5
break;
case 49:return 'INVALID'
break;
}
},
rules: [/^(?:\s+)/,/^(?:[0-9]+(\.[0-9]+)?\b)/,/^(?:"([^\\\"]|\\.)*")/,/^(?:\$)/,/^(?:function\b)/,/^(?:end\b)/,/^(?:elseif\b)/,/^(?:if\b)/,/^(?:else\b)/,/^(?:return\b)/,/^(?:while\b)/,/^(?:for\b)/,/^(?:of\b)/,/^(?:not\b)/,/^(?:,)/,/^(?:\.\.)/,/^(?:\.)/,/^(?::)/,/^(?:and\b)/,/^(?:or\b)/,/^(?:!=)/,/^(?:!)/,/^(?:>=)/,/^(?:>)/,/^(?:<=)/,/^(?:<)/,/^(?:==)/,/^(?:=)/,/^(?:\*=)/,/^(?:\*)/,/^(?:\^)/,/^(?:\/)/,/^(?:%)/,/^(?:-)/,/^(?:\+)/,/^(?:\^)/,/^(?:\{)/,/^(?:\})/,/^(?:\]\[)/,/^(?:\[)/,/^(?:\])/,/^(?:\()/,/^(?:\))/,/^(?:_\b)/,/^(?:pairs\b)/,/^(?:in\b)/,/^(?:do\b)/,/^(?:[a-zA-Z_][a-zA-Z0-9_]*)/,/^(?:$)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = julia_parser;
exports.Parser = julia_parser.Parser;
exports.parse = function () { return julia_parser.parse.apply(julia_parser, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}