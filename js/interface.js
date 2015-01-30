function moveOnMax(field, nextFieldID, disabled, lastFieldID){
    if (field.value.toLowerCase() == "x" && field.id != ("frame10pins1") && field.id != ("frame10pins2")) {
        nextFieldID.disabled = true;
        disabled.focus(); }

    else if (field.value.toLowerCase() != "x" && field.id == ("frame10pins2") && (parseInt(field.value) + parseInt(lastFieldID.value) != 10)) {
      nextFieldID.disabled = true;
    }
     else if (field.value.toLowerCase() != "x" && field.id == ("frame10pins2") && (parseInt(field.value) + parseInt(lastFieldID.value) == 10)){
      nextFieldID.focus();
    }
    else if (field.value.length >= field.maxLength){
       nextFieldID.focus(); }
    };

  var strikeOrSpare = function(field) {
    if (field.toLowerCase() == "x") {
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


