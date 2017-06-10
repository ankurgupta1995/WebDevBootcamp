//check off lines
$("#todoList").on("click", ".todoItem", function() {
	$(this).toggleClass("done");
});

//click on x to delete
$("#todoList").on("click", ".deleteButton", function(e) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	e.stopPropagation();
});

$("#addTodo").on("keypress", function(e) {
	if(e.which === 13) {
		var newTodo = $(this).val();
		$(this).val("");
		//create new li
		if(newTodo)
			$("#todoList").append("<li class=\"todoItem\"><span class=\"deleteButton\"> X </span>"+newTodo+"</li>");
	}
});