const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP, 
    port: PORT
    // host: '165.227.47.243' , // IP address here,
    // port: 50541 // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('data', (data) => {
    console.log('disconnected from server', data);
  });

  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write('Name: HAM');

  });


  return conn;
};
console.log("Connecting ...");
module.exports = {connect}