function add(){
  var num1 = $("#num_one").val();
  var num2 = $("#num_two").val();
  $("#answer").val(+num1 + +num2);
}
$("#add").on("click", add)

function subtract(){
  var num1 = $("#num_one").val();
  var num2 = $("#num_two").val();
  $("#answer").val(+num1 - +num2);
}
$("#subtract").on("click", subtract)

function multiply(){
  var num1 = $("#num_one").val();
  var num2 = $("#num_two").val();
  $("#answer").val(+num1 * +num2);
}
$("#multiply").on("click", multiply)

function divide(){
  var num1 = $("#num_one").val();
  var num2 = $("#num_two").val();
  $("#answer").val(+num1 / +num2);
}
$("#divide").on("click", divide)
