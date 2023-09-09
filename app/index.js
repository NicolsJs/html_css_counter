var count = 0; 
document.querySelector("#value").innerHTML= count;

function incrementar(){
  count = count + 1 
document.querySelector("#value").innerHTML= count;

  console.log(count)
}
function decrementar(){
  if (count <= 0 )
  return
  count = count - 1
document.querySelector("#value").innerHTML= count;


}
function reset(){
  count = 0
document.querySelector("#value").innerHTML= count;

}
