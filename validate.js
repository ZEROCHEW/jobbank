function validateForm() {
    let nid = document.getElementById("nid").value.trim();
    let fname = document.getElementById("fname").value.trim();
    let lname = document.getElementById("lname").value.trim();
    let workDays = document.getElementById("workDays").value.trim();
    let genders = document.getElementsByName("genderRad");

    let genderSelected = false;
    for (let i = 0; i < genders.length; i++) {
        if (genders[i].checked) { genderSelected = true; break; }
    }

    if (nid === "" || fname === "" || lname === "" || workDays === "" || !genderSelected) {
        alert("กรุณากรอกข้อมูลให้ครบทุกช่อง");
        return false;
    }

    if (isNaN(nid) || nid.length !== 13) {
        alert("National ID ต้องเป็นตัวเลข 13 หลักเท่านั้น");
        return false;
    }

    let days = parseInt(workDays);
    if (isNaN(days) || days < 1 || days > 6) {
        alert("ระบุจำนวนวันได้ตั้งแต่ 1-6 วันเท่านั้น");
        return false;
    }

    let total = payRateCalculate();
    alert("Your weekly pay rate is " + total + " THB");
    return false; 
}