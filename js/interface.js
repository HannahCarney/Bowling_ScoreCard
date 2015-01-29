 function moveOnMax(field, nextFieldID, disabled){
    if (field.value == "X" && field.id != ("frame10pins1") && field.id != ("frame10pins2")) {
        nextFieldID.disabled = true;
        disabled.focus(); }

    else if (field.value != "X" && field.id == ("frame10pins2")) {
      nextFieldId.disabled = true;
    }
    else if (field.value.length >= field.maxLength){
       nextFieldID.focus(); }
    };

  var strikeOrSpare = function(field) {
    if (field == "X") {
      field = parseInt(10);

    }
    else {
      field = parseInt(field);
    }
    return field
  };

   var isNan = function(input) {
        if (!isNaN(input)) {
          return input;
        } else {
          return "";
        }
      };