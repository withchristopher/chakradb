$(document).ready(function() {
  // Getting a reference to the input field where user adds a new tooth
  var $newItemInput = $('input.new-item');
  // Our new toothless will go inside the toothContainer
  var $toothContainer = $('.tooth-container');
  // Adding event listeners for deleting, editing, and adding toothless
  $(document).on('click', 'button.delete', deleteTooth);
  $(document).on('click', 'button.complete', toggleComplete);
  $(document).on('click', '.tooth-item', editTooth);
  $(document).on('keyup', '.tooth-item', finishEdit);
  $(document).on('blur', '.tooth-item', cancelEdit);
  $(document).on('submit', '#tooth-form', insertTooth);

  // Our initial toothless array
  var toothless = [];

  // Getting toothless from database when page loads
  getToothless();

  // This function resets the toothless displayed with new toothless from the database
  function initializeRows() {
    $toothContainer.empty();
    var rowsToAdd = [];
    for (var i = 0; i < toothless.length; i++) {
      rowsToAdd.push(createNewRow(toothless[i]));
    }
    $toothContainer.prepend(rowsToAdd);
  }

  // This function grabs toothless from the database and updates the view
  function getToothless() {
    $.get('/api/toothless', function(data) {
      toothless = data;
      initializeRows();
    });
  }

  // This function deletes a tooth when the user clicks the delete button
  function deleteTooth(event) {
    event.stopPropagation();
    var id = $(this).data('id');
    $.ajax({
      method: 'DELETE',
      url: '/api/toothless/' + id
    }).then(getToothless);
  }

  // This function handles showing the input box for a user to edit a tooth
  function editTooth() {
    var currentTooth = $(this).data('tooth');
    $(this)
      .children()
      .hide();
    $(this)
      .children('input.edit')
      .val(currentTooth.text);
    $(this)
      .children('input.edit')
      .show();
    $(this)
      .children('input.edit')
      .focus();
  }

  // Toggles complete status
  function toggleComplete(event) {
    event.stopPropagation();
    var tooth = $(this)
      .parent()
      .data('tooth');
    tooth.complete = !tooth.complete;
    updateTooth(tooth);
  }

  // This function starts updating a tooth in the database if a user hits the "Enter Key"
  // While in edit mode
  function finishEdit(event) {
    var updatedTooth = $(this).data('tooth');
    if (event.which === 13) {
      updatedTooth.text = $(this)
        .children('input')
        .val()
        .trim();
      $(this).blur();
      updateTooth(updatedTooth);
    }
  }

  // This function updates a tooth in our database
  function updateTooth(tooth) {
    $.ajax({
      method: 'PUT',
      url: '/api/toothless/' + tooth.id,
      data: tooth
    }).then(getToothless);
  }

  // This function is called whenever a tooth item is in edit mode and loses focus
  // This cancels any edits being made
  function cancelEdit() {
    var currentTooth = $(this).data('tooth');
    if (currentTooth) {
      $(this)
        .children()
        .hide();
      $(this)
        .children('input.edit')
        .val(currentTooth.text);
      $(this)
        .children('span')
        .show();
      $(this)
        .children('button')
        .show();
    }
  }

  // This function constructs a tooth-item row
  function createNewRow(tooth) {
    var $newInputRow = $(
      [
        "<li class='list-group-item tooth-item'>",
        '<span>',
        tooth.text,
        '</span>',
        "<input type='text' class='edit' style='display: none;'>",
        "<button class='delete btn btn-danger'>x</button>",
        "<button class='complete btn btn-primary'>✓</button>",
        '</li>'
      ].join('')
    );

    $newInputRow.find('button.delete').data('id', tooth.id);
    $newInputRow.find('input.edit').css('display', 'none');
    $newInputRow.data('tooth', tooth);
    if (tooth.complete) {
      $newInputRow.find('span').css('text-decoration', 'line-through');
    }
    return $newInputRow;
  }

  // This function inserts a new tooth into our database and then updates the view
  function insertTooth(event) {
    event.preventDefault();
    var tooth = {
      text: $newItemInput.val().trim(),
      complete: false
    };

    $.post('/api/toothless', tooth, getToothless);
    $newItemInput.val('');
  }
});
