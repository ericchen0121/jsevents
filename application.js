$(document).ready(function() {
  var todoTemplate = $.trim($('#todo_template').html());

  function bindEvents() {
    new_todo = buildTodo($('input').val())
    clearTodoForm();
    $('.todo_list').append(new_todo);
    $('.todo').on('click', '.delete', function(){$(this).closest('.todo').remove() })
  }
  
  function clearTodoForm(){
    $('input').val('')
  }

  function buildTodo(todoName) {
    var $todo = $(todoTemplate);
    $todo.find('h2').text(todoName);
    return $todo;
  }

  $('button.add').on('click', function(){
    bindEvents();
  })
})
