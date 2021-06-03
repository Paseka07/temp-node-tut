// npm - globa; command, comes with node
// npm version 

//local dependecy - use it only in this particular project
// npm i <packageName>

//global dependecy - use it in any project
//npm install -g <packageName>
// sudo install -g <packageName (mac)

 //package.json - manifest file (store important info about project/package)
// manual approacj (create package.json in the root, create properties etc)
 //or
 // npm init (step by step, press enter to skip)
 //npm init -y (everything deafult)


 const _ = require('lodash') 

 const items = [1,[2,[3,[4]]]]
 const newItems = _.flattenDeep(items)
 console.log(newItems)