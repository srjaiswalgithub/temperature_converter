// {/* <div>
//         <h2>Please enter the temperature you'd like to convert</h2><br>
//         <input type="number" name="temp" id="temp">
//         <select name="cf" id="cf">
//             <option value="cel">Celcius</option>
//             <option value="fah">Fahrenheit</option>
//         </select><br>
//         <button type="submit" id="submit" onsubmit = "calTemp()">submit</button>
//         <span id="result"></span>
//     </div> */}

const calTemp = () =>{
    var temp = document.getElementById("temp").value;
    var cf = document.getElementById("cf").value;

let ans;
const celtofeh = (val) =>{
    var final = Math.round((val*9/5)+32);
    return final;
}
const fahtocel = (val) =>{
    var final = Math.round((val-32)*5/9);
    return final;
}
    
    if(cf==='cel'){
        ans = celtofeh(temp);
        document.getElementById('result').innerHTML = `= ${ans}°Fahrenreit `;
        
    }
    else{
        ans = fahtocel(temp);
        document.getElementById('result').innerHTML = `= ${ans}°Celcius `;

    }
    

}