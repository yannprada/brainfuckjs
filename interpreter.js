
function convertChar(char) {
  switch (char) {
    case '>': return 'p++;';
    case '<': return 'p--;';
    case '+': return 'data[p]++;';
    case '-': return 'data[p]--;';
    case '.': return 'output(String.fromCharCode(data[p]));';
    case ',': return 'data[p] = input().charCodeAt();';
    case '[': return 'do {';
    case ']': return '} while (data[p] > 0);';
    default: return '';
  }
}

function brainfuckToJS(code) {
  const js = [];
  for (let char of code) {
    js.push(convertChar(char));
  }
  return js.join('');
}

function interpret(code, input, output) {
  return eval(`
    const data = Array.from({ length: 30000 }, () => 0);
    let p = 0;
    ${brainfuckToJS(code)}
    delete data;
    delete p;
  `);
}
