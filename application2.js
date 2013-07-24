$(document).ready(function() {
  var todoTemplate = $.trim($('#todo_template').html());

  function bindEvents() {
    // $(".toolbox").delegate(".add", "click", function(){
    //   addTodo(todoText());
    // });

    $('.todo_list').append(buildTodo($('input').val() ) );

    $('.todo').on('click', '.delete', function(){ $(this).closest('.todo').remove() })
  
    function todoText() {
      return $('input.todo').val()
    }

    function addTodo(text) {
      $('.todo_list').append(buildTodo(text))
    }


  } // end bindEvents()
  
  function buildTodo(todoName) {
    var $todo = $(todoTemplate);
    $todo.find('h2').text(todoName);
    return $todo;
  }
  
  $('button').on('click', function(){
    bindEvents();
  })
})
