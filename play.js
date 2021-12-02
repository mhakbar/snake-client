// const net = require("net");

// // establishes a connection with the game server
// const connect = function () {
//   const conn = net.createConnection({
//     host: '165.227.47.243' , // IP address here,
//     port: 50541 // PORT number here,
//   });

//   // interpret incoming data as text
//   conn.setEncoding("utf8");

//   conn.on('data', (data) => {
//     console.log('disconnected from server', data);
//   });



//   return conn;
// };
const {connect} = require("./client");

//connect();

// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', handleUserInput);
  
  return stdin;
};
const conn = connect() ;
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


  
  

  // your code here
};
};

setupInput();



// conn.on('data',function(message){
//   console.log(message);
// }); 