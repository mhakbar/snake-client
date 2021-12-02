


const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', handleUserInput);
  
  return stdin;
};


const handleUserInput = function (key) {

  if (key === "\u0003") {
    process.exit();
  } else if (key === "\u001b[A") {
    conn.write('Move: up');
    console.log(`Moved up`);
  } else if (key === "\u001b[C") {
    conn.write('Move: right');
    console.log(`Moved right`);
  } else if (key === "\u001b[B") {
    conn.write('Move: down');
    console.log(`Moved down`);

  } else if (key === "\u001b[D") {
    conn.write('Move: left');
    console.log(`Moved left`);
  }
    else if (key === "f") {
      conn.write('Say: WOW');
      console.log(`Say: WOW`);


};
};

module.exports = {setupInput};