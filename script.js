// Function to calculate exchange rate and display result in corresponding input field
function convertMoney() {
    let usdValue = parseFloat(document.getElementById("usdAmount").value);
    let cadValue = parseFloat(document.getElementById("cadAmount").value);
    console.log(usdValue)
  
    if (isValueNaN(usdValue) && isValueNaN(cadValue)) {
      alert("Please enter a valid number for USD or CAD amount.");
      return;
    }
    if ( usdValue<0 || cadValue<0) {
      alert("Please enter a valid number for USD or CAD amount.");
      return;
    }
  
  
    if (!isValueNaN(usdValue) && !isValueNaN(cadValue)) {
      alert("Please enter amount in either USD or CAD, not both.");
      return;
    }
  
    if (!isValueNaN(usdValue)) {
      let exchangeRate = 1.33; 
      let convertedAmount = usdValue * exchangeRate;
      document.getElementById("cadAmount").value = convertedAmount.toFixed(3);
    }
  
    if (!isValueNaN(cadValue)) {
      let exchangeRate = 0.75; 
      let convertedAmount = cadValue * exchangeRate;
      document.getElementById("usdAmount").value = convertedAmount.toFixed(3);
    }
  }
  
  // Function to check if value is NaN
  function isValueNaN(value) {
    return isNaN(value);
  }
  // Function to clear input fields
function clearInputs() {
    document.getElementById("cadAmount").value = "";
    document.getElementById("usdAmount").value = "";
  }
  
  