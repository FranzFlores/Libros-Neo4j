var neo4j = require('neo4j-driver');

var driver = neo4j.driver(
    'neo4j://localhost',
    neo4j.auth.basic('neo4j', 'root')
  )


module.exports  = driver;