const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243' , // IP address here,
    port: 50541 // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('data', (data) => {
    console.log('disconnected from server', data);
  });

  conn.on('connect', (connect) => {
    console.log("Successfully connected to game server", connect);


    conn.write('Name: HAM');


    // setTimeout(() => {
    //   conn.write("Move: up");
    // }, 500);

    // setTimeout(() => {
    //   conn.write("Move: up");
    // }, 1000);

    // setTimeout(() => {
    //   conn.write("Move: up");
    // }, 1500);

    // setInterval(() => { 
    //   conn.write("Move: left"); 
    // }, 3000);

    //use setInterval and setTimeout functions to automatically move your snake. setInterval keeps playing the same command on a loop on a given interval. 
    
    //conn.write("Move: down");
    //conn.write("Move: right");
  });

  // conn.on('move up', (up) => {
  //   conn.write("Move: up", up);
  // });


  return conn;
};

module.exports = {connect}