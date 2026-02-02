const btn=document.querySelector("#btn");
let answer=document.querySelector(".answer");
const error = document.querySelector(".error");
const resultBox=document.querySelector(".result")

btn.addEventListener("click",()=>{

    if (btn.disabled) return;
    btn.disabled = true;

    setTimeout(() => btn.disabled = false, 300);


let from = document.querySelector(".from select").value;
let to = document.querySelector(".to select ").value;
let input = parseFloat(document.querySelector("#from_temp").value);

from = from.toLowerCase();
to = to.toLowerCase();

// console.log(input)
// console.log(from)
// console.log(to)
 error.innerText = "";
answer.innerText = "";
resultBox.style.visibility = "hidden";
resultBox.style.opacity = "0";


convert_Temp(input,from,to,answer,error);
});


function convert_Temp(input,from,to,answer,error)
{
    let result;
    if(isNaN(input))
    {
        resultBox.style.visibility = "visible";
        resultBox.style.opacity = "1";

        error.innerText="Please enter a temperature";
        return;
    }

    if(from===to)
    {
        resultBox.style.visibility = "visible";
        resultBox.style.opacity = "1";
        error.innerText = "⚠️ Please select different units";
        return;
    }

    if (from === "kelvin" && input < 0) {
    resultBox.style.visibility = "visible";
        resultBox.style.opacity = "1";
    error.innerText = "Kelvin cannot be negative";
    return;
    }

    let celsius;
    if(from==="celsius")
        celsius=input;
    else if(from==="fahrenheit")
    {
        celsius=(input-32)*(5/9);
    }
    else
    {
        celsius=input-273.15;
    }

    if(to==="celsius")
    {
        result=celsius;
    }
    else if(to==="fahrenheit")
    {
        result=(celsius*9/5) + 32
    }
    else
    {
        result=celsius+273.15;
    }
    console.log(result);
    // answer.innerText=result;
    answer.innerText = `${result.toFixed(2)} °${to.charAt(0).toUpperCase()}`;
    resultBox.style.visibility = "visible";
        resultBox.style.opacity = "1";


}

document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") btn.click();
});

