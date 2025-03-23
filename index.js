function selectPlan(planNumber) {
  if(planNumber!=="plan1") document.getElementById("plan1").classList.remove('plan--selected');
  if(planNumber!=="plan2") document.getElementById("plan2").classList.remove('plan--selected');
  if(planNumber!=="plan3") document.getElementById("plan3").classList.remove('plan--selected');            

  document.getElementById(planNumber).classList.add('plan--selected');
}