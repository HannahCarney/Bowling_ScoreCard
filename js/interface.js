  var game = new Game();

  function moveOnMax(field, nextFieldID){
    if (field.value == "X") {
        nextFieldID.disabled = true;
    }
    else if (field.value.length >= field.maxLength){
       nextFieldID.focus(); }
    }

  var strikeOrSpare = function(field) {
    if (field == "X") {
      field = parseInt(10);

    }
    else {
      field = parseInt(field);
    }
    return field
  }