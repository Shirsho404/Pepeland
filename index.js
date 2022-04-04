function mydark()
{
  document.body.classList.toggle("lightmode");

}
function icon()
{
  if(document.getElementsById("iconchng").src=="icons8-do-not-disturb-ios-24.png")
  {
    document.getElementsById("iconchng").src="icons8-sun-50.png";
  }
  else{
    document.getElementsById("iconchng").src="icons8-do-not-disturb-ios-24.png";
  }
}