
//All the javascript methods that will be used with jquery

/*This function takes no args but performs the action of cloning
a new dropdown menu to select additional courses*/
function addCourse(){
  var select = $("#courses").clone().appendTo("#coursesTaken"); //this is the select we want to clone
  $(select).selectpicker('refresh');
  return;
}

/*This function takes no args but controls when to delete a added course*/
function deleteCourse(){
  var toBeDeleted = $("#courses").remove();
  $(toBeDeleted).selectpicker('refresh');
  return;

}

//All the jQuery methods
$(document).ready(function(){

  /*This function adds another course dropdown menu when the
  add button has been clicked once*/
  $("#addBtn").click(function(){
    addCourse();
  });


  /*This function removes a course dropdown menu when the
  delete button has been clicked once*/
  $("#deleteBtn").click(function(){
    deleteCourse();
  });


});
