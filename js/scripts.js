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
    var values = [];
    validate();
    e.preventDefault();
    $("select").each(function(item){
      values.push($(this).val());
    }) 
    var rating = categorizeLiberal(values);
    $(".rating").text("According to my scientific calculations you are " + rating + "." )
    function validate(){
      $("select").each(function(){
        if ($(this).val==="Select"){
          $(this).closest("div").AddClass("has-warning");
        }
      });
    };
  });
  
});