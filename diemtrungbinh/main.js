const tinhTB = (array) => {
    let n = array.length;
    let sum = 0, dtb =0;
    for(let i=0; i<n; i++){
        sum += array[i];
    }
    return dtb =sum/n;
}

document.getElementById("tinhtb").onclick = (e) => {
    e.preventDefault();
    let arrayInput = document.querySelectorAll(".form-group input");
    console.log(arrayInput);
    let diems = {};
    for(let i=0; i<arrayInput.length; i++){
        let tagInput = arrayInput[i];
        let {id, value} = tagInput;
        diems = {...diems, [id]: parseFloat(value)};
    }
    console.log(diems);
    let aver = tinhTB(diems);
    document.getElementById("diem").innerHTML = aver;
}