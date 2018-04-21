// adding the task
// targeted "btn" class on "add task" button
$(".btn").on("click", function(){
  // console.log("what")
  var newTask = prompt("What is the next task?")
  console.log("newTask:", newTask);
  // placing newTask into HTML
  var addedTask = "<li><span>" + newTask + "</span><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i></li>";
  // targeting "ul" with an id "task-list" and appending the added task
  $("#task-list").append(addedTask);
});

$(".fa").click(function(){
  // console.log("trash");
  $(this).parent().remove();
});