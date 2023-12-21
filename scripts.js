const binaryDisable = document.getElementById('binaryDisable');
  const decimalDisable = document.getElementById('decimalDisable');
  const octalDisable = document.getElementById('octalDisable');
  const hexadecimalDisable = document.getElementById('hexadecimalDisable');
  const Button0 = document.getElementById('Button0');
  const Button1 = document.getElementById('Button1');
  const Button2 = document.getElementById('Button2');
  const Button3 = document.getElementById('Button3');
  const Button4 = document.getElementById('Button4');
  const Button5 = document.getElementById('Button5');
  const Button6 = document.getElementById('Button6');
  const Button7 = document.getElementById('Button7');
  const Button8 = document.getElementById('Button8');
  const Button9 = document.getElementById('Button9');
  const ButtonA = document.getElementById('ButtonA');
  const ButtonB = document.getElementById('ButtonB');
  const ButtonC = document.getElementById('ButtonC');
  const ButtonD = document.getElementById('ButtonD');
  const ButtonE = document.getElementById('ButtonE');
  const ButtonF = document.getElementById('ButtonF');

  binaryDisable.addEventListener('click', function() {
    Button0.disabled = false;
    Button1.disabled = false;
    Button2.disabled = true;
    Button3.disabled = true;
    Button4.disabled = true;
    Button5.disabled = true;
    Button6.disabled = true;
    Button7.disabled = true;
    Button8.disabled = true;
    Button9.disabled = true;
    ButtonA.disabled = true;
    ButtonB.disabled = true;
    ButtonC.disabled = true;
    ButtonD.disabled = true;
    ButtonE.disabled = true;
    ButtonF.disabled = true;
  });
  decimalDisable.addEventListener('click', function() {
    Button0.disabled = false;
    Button1.disabled = false;
    Button2.disabled = false;
    Button3.disabled = false;
    Button4.disabled = false;
    Button5.disabled = false;
    Button6.disabled = false;
    Button7.disabled = false;
    Button8.disabled = false;
    Button9.disabled = false;
    ButtonA.disabled = true;
    ButtonB.disabled = true;
    ButtonC.disabled = true;
    ButtonD.disabled = true;
    ButtonE.disabled = true;
    ButtonF.disabled = true;
  });
  octalDisable.addEventListener('click', function() {
    Button0.disabled = false;
    Button1.disabled = false;
    Button2.disabled = false;
    Button3.disabled = false;
    Button4.disabled = false;
    Button5.disabled = false;
    Button6.disabled = false;
    Button7.disabled = false;
    Button8.disabled = true;
    Button9.disabled = true;
    ButtonA.disabled = true;
    ButtonB.disabled = true;
    ButtonC.disabled = true;
    ButtonD.disabled = true;
    ButtonE.disabled = true;
    ButtonF.disabled = true;
  });
  hexadecimalDisable.addEventListener('click', function() {
    Button0.disabled = false;
    Button1.disabled = false;
    Button2.disabled = false;
    Button3.disabled = false;
    Button4.disabled = false;
    Button5.disabled = false;
    Button6.disabled = false;
    Button7.disabled = false;
    Button8.disabled = false;
    Button9.disabled = false;
    ButtonA.disabled = false;
    ButtonB.disabled = false;
    ButtonC.disabled = false;
    ButtonD.disabled = false;
    ButtonE.disabled = false;
    ButtonF.disabled = false;
  });
const bindisplay= document.getElementById('bindisplay');
const decidisplay = document.getElementById('decidisplay');
const octaldisplay = document.getElementById('octaldisplay');
const hexadisplay = document.getElementById('hexadisplay');

function appendToDisplay(value) {
  bindisplay.value += value;
  decidisplay.value += value;
  octaldisplay.value += value;
  hexadisplay.value += value;
}

function clearDisplay() {
  bindisplay.value = '';
  decidisplay.value = '';
  octaldisplay.value = '';
  hexadisplay.value = '';
  document.getElementById("bindisplay").value="";
  document.getElementById("decimalOutput").innerHTML="";
  document.getElementById("octalOutput").innerHTML="";
  document.getElementById("hexadecimalOutput").innerHTML="";
  document.getElementById("decidisplay").value="";
  document.getElementById("binaryOutputs").innerHTML="";
  document.getElementById("octalOutputs").innerHTML="";
  document.getElementById("hexadecimalOutputs").innerHTML="";
  document.getElementById("octaldisplay").value="";
  document.getElementById("binaryResult").innerHTML="";
  document.getElementById("decimalResult").innerHTML="";
  document.getElementById("hexResult").innerHTML="";
  document.getElementById("hexadisplay").value="";
  document.getElementById("binaryResults").innerHTML="";
  document.getElementById("decimalResults").innerHTML="";
  document.getElementById("octalResults").innerHTML="";
}
function deleteLastDigit() {
  var currentDisplayValue = document.getElementById('bindisplay').value;
  document.getElementById('bindisplay').value = currentDisplayValue.slice(0, -1);
  
  var currentDisplayValue = document.getElementById('decidisplay').value;
  document.getElementById('decidisplay').value = currentDisplayValue.slice(0, -1);

  var currentDisplayValue = document.getElementById('octaldisplay').value;
  document.getElementById('octaldisplay').value = currentDisplayValue.slice(0, -1);

  var currentDisplayValue = document.getElementById('hexadisplay').value;
  document.getElementById('hexadisplay').value = currentDisplayValue.slice(0, -1);
    }
  function binary(){
      document.getElementById("binary").style.display="block";
      document.getElementById("bin").style.display="block";
      document.getElementById("hexa").style.display="none";
      document.getElementById("hex").style.display="none";
      document.getElementById("decimal").style.display="none";
      document.getElementById("deci").style.display="none";
      document.getElementById("octal").style.display="none";
      document.getElementById("oct").style.display="none";
      document.getElementById("bindisplay").value="";
      document.getElementById("decimalOutput").innerHTML="";
      document.getElementById("octalOutput").innerHTML="";
      document.getElementById("hexadecimalOutput").innerHTML="";
      document.getElementById("numerator").innerHTML="BINARY";
      document.getElementById("numerator").style.fontWeight="bold";
  }
  function decimal(){
      document.getElementById("decimal").style.display="block";
      document.getElementById("deci").style.display="block";
      document.getElementById("hexa").style.display="none";
      document.getElementById("hex").style.display="none";
      document.getElementById("binary").style.display="none";
      document.getElementById("bin").style.display="none";
      document.getElementById("octal").style.display="none";
      document.getElementById("oct").style.display="none";
      document.getElementById("decidisplay").value="";
      document.getElementById("binaryOutputs").innerHTML="";
      document.getElementById("octalOutputs").innerHTML="";
      document.getElementById("hexadecimalOutputs").innerHTML="";
      document.getElementById("numerator").innerHTML="DECIMAL";
      document.getElementById("numerator").style.fontWeight="bold";
  }
  function octal(){
      document.getElementById("octal").style.display="block";
      document.getElementById("oct").style.display="block";
      document.getElementById("hexa").style.display="none";
      document.getElementById("hex").style.display="none";
      document.getElementById("decimal").style.display="none";
      document.getElementById("deci").style.display="none";
      document.getElementById("binary").style.display="none";
      document.getElementById("bin").style.display="none";
      document.getElementById("octaldisplay").value="";
      document.getElementById("binaryResult").innerHTML="";
      document.getElementById("decimalResult").innerHTML="";
      document.getElementById("hexResult").innerHTML="";
      document.getElementById("numerator").innerHTML="OCTAL";
      document.getElementById("numerator").style.fontWeight="bold";
  }  
  function hexa(){
    document.getElementById("hexa").style.display="block";
    document.getElementById("hex").style.display="block";
    document.getElementById("octal").style.display="none";
    document.getElementById("oct").style.display="none";
    document.getElementById("decimal").style.display="none";
    document.getElementById("deci").style.display="none";
    document.getElementById("binary").style.display="none";
    document.getElementById("bin").style.display="none";
    document.getElementById("hexadisplay").value="";
    document.getElementById("binaryResults").innerHTML="";
    document.getElementById("decimalResults").innerHTML="";
    document.getElementById("octalResults").innerHTML="";
    document.getElementById("numerator").innerHTML="HEXA DECIMAL";
    document.getElementById("numerator").style.fontWeight="bold";
}

function convert() {
    const bindisplay = document.getElementById('bindisplay').value;

    // Convert binary to decimal
    const decimalOutput = parseInt(bindisplay, 2);
    document.getElementById('decimalOutput').innerText = isNaN(decimalOutput) ? 'Invalid input' : decimalOutput ;

    // Convert decimal to octal
    const octalOutput = decimalOutput.toString(8);
    document.getElementById('octalOutput').innerText = isNaN(decimalOutput) ? 'Invalid input' : octalOutput ;

    // Convert decimal to hexadecimal
    const hexadecimalOutput = decimalOutput.toString(16).toUpperCase();
    document.getElementById('hexadecimalOutput').innerText = isNaN(decimalOutput) ? 'Invalid input' : hexadecimalOutput ;
  }
  function convertDecimal() {
    const decidisplay = document.getElementById('decidisplay').value;
    // Convert decimal to binary
    const binaryOutputs = (decidisplay >>> 0).toString(2);
    document.getElementById('binaryOutputs').innerText = isNaN(decidisplay) ? 'Invalid input' : binaryOutputs ;

// Convert decimal to octal
const octalOutputs = (decidisplay  >>> 0).toString(8);
    document.getElementById('octalOutputs').innerText = isNaN(decidisplay) ? 'Invalid input' : octalOutputs ;

    // Convert decimal to hexadecimal
    const hexadecimalOutputs = (decidisplay  >>> 0).toString(16).toUpperCase();
    document.getElementById('hexadecimalOutputs').innerText = isNaN(decidisplay) ? 'Invalid input' : hexadecimalOutputs;
 }
 function convertOctal() {
  const octaldisplay = document.getElementById('octaldisplay').value;
  const decimalResult = parseInt(octaldisplay, 8);
  const binaryResult = decimalResult.toString(2);
  const hexResult = decimalResult.toString(16).toUpperCase();

    // Convert octal to binary
  document.getElementById('binaryResult').textContent = binaryResult  ;
  
    // Convert octal to decimal
  document.getElementById('decimalResult').textContent = decimalResult ;
  
    // Convert octal to hexadecimal
  document.getElementById('hexResult').textContent = hexResult  ;
}
function convertHexadecimal() {
  const hexadisplay = document.getElementById('hexadisplay').value;
  const decimalResult = parseInt(hexadisplay, 16);
  const binaryResult = decimalResult.toString(2);
  const octalResult = decimalResult.toString(8);

  document.getElementById('binaryResults').textContent = binaryResult  ;
  document.getElementById('decimalResults').textContent = decimalResult ;
  document.getElementById('octalResults').textContent = octalResult ;

}