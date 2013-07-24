$(document).ready(function() {
  var todoTemplate = $.trim($('#todo_template').html());

  function bindEvents() {
    // Bind functions which add, remove, and complete todos

    // Add Todo
    $(".toolbox").delegate(".add", "click", function(){
      addTodo(todoText());
    });

    // Delete Todo
    $('.todo').delegate('a.delete', 'click', function(){
      
    });

  }

  function todoText() {
    return $('.toolbox .todo').val()
  }

  function addTodo(text) {
    $('.todo_list').append(buildTodo(text))
  }

  function buildTodo(todoName) {
    var $todo = $(todoTemplate);
    $todo.find('h2').text(todoName);
    return $todo;
  }
  
  bindEvents();
});
