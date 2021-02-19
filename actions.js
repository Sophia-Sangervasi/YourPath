
//global variables



//handler to add more course drop downs
$("addBtn").click(function(){
  addMoreCourses();
})

function addMoreCourses(){
  var $newDD = $("#courses");

    $newDD.append("<option selected>Choose...</option>");
    $newDD.append("<option data-subtext='CSCI 161'>Intro to Computer Science</option>");
  $newDD.append("<option data-subtext='CSCI 261'>Advanced Intro to Compuer Science </option>");
  $newDD.append("<option data-subtext='Math 210'>Discrete Mathematics</option>");
  $newDD.append("<option data-subtext='CSCI 291'>Programming Language Paradigms</option>");
  $newDD.append("<option data-subtext='CSCI 240'>Software Engineering</option>");
  $newDD.append("<option data-subtext='CSCI 281'>Assembly Language & Architecture</option>");
  $newDD.append("<option data-subtext='CSCI 315'>Graphics</option>");
  $newDD.append("<option data-subtext='CSCI 361'>Algorithms & Data Structures</option>");
  $newDD.append("<option data-subtext='CSCI 325'>Networking</option>");
  $newDD.append("<option data-subtext='CSCI 455'>Databases</option>");
  $newDD.append("<option data-subtext='CSCI 475'>Operating Systems</option>");
  $newDD.append("<option data-subtext='CSCI 431'>Artificial Intelligence</option>");
  $newDD.append("<option data-subtext='CSCI 440'>Capstone</option>");

}
