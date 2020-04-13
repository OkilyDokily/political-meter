//business logic


function countLiberalAnswers(values){
  var liberal = 0; 
  values.forEach(function(item){
    if(item == "liberal"){
      liberal++;
    }
  });
  return liberal;
};

function categorizeLiberal(values){
  var liberalCount = countLiberalAnswers(values);
  if (liberalCount > 5){
    return "very liberal";
  } else if (liberalCount >=4){
    return "moderately liberal";
  }
  else if (liberalCount >= 2){
    return "moderately conservative";
  }
  else {
    return "very conservative";
  }
}

$(document).ready(function(){

  $("form").submit(function(e){
    e.preventDefault();
    var values = [];
    hide();
    if(!validate()){
      return;
    };
    
    $("select").each(function(item){
      values.push($(this).val());
    }) 
    var rating = categorizeLiberal(values);
    $(".rating").text("According to my scientific calculations you are " + rating + "." )
    
    
    function validate(){
      var isValidated = true;
      $("select").each(function(){
        if ($(this).val()==="Select"){
          isValidated = false;
          $(this).closest("div").addClass("has-error");
          $(this).closest("div").append("<span class='help-block'>Please select an answer.</span>");
        }
      });
      return isValidated;
    };

    function hide(){
      $("select").each(function(){
          $("div.has-error").removeClass("has-error");
          $("span.help-block").remove();
      });
    }
  });
  
});