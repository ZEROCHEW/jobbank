function payRateCalculate() {
  let workDays = (document.getElementById("workDays").value).trim();
  let selectObj = document.getElementById("year");
  let yearOfStudy = parseInt(selectObj.options[selectObj.selectedIndex].value);
  //alert("yearOfStudy = "+yearOfStudy);
  let rate = 0;
 
  if (yearOfStudy === 1) {
    rate = 55;
  } else if (yearOfStudy === 2) {
    rate = 65;
  } else if (yearOfStudy === 3) {
    rate = 75;
  } else if (yearOfStudy === 4) {
    rate = 85;
  }
 
  let total = rate * parseInt(workDays);
 
  return total;
}