
/*This file holds all of the graph functions that position, create, and style the nodes*/

/*This function will be employed in later use once a database has been implemented

*/
function createNode(nodeName){


}




$(document).ready(function(){
var diagram = new go.Diagram("courseGraph");
   diagram.model = new go.GraphLinksModel(
     [{ key: "CSCI 161" },   // two node data, in an Array
      { key: "CSCI 261" }],
     [{ from: "CSCI 161", to: "CSCI 261"}]  // one link data, in an Array
   );
 });
