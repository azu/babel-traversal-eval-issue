import { parse } from "@babel/parser";
import _traverse from "@babel/traverse";

const traverse = _traverse.default || _traverse;

function getPath(code) {
    const ast = parse(code);
    let path;
    traverse(ast, {
        Program: function (_path) {
            path = _path;
            _path.stop();
        },
    });
    return path;
}


const path = getPath("Math.hasOwnProperty('min')");
const evalResult = path.get("body.0.expression").evaluate();
console.log(evalResult)
