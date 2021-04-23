document.getElementById("tinhLuong").onclick = (e) => {
    e.preventDefault();
    let nhanVien = {};
    let arrayInput = document.querySelectorAll(".form-group input");
    let chucVu = document.getElementById("chucVu").value;

    for(let i=0; i<arrayInput.length; i++){
        let tagInput = arrayInput[i];
        console.log(tagInput);
        let {id, value} = tagInput;
        console.log(id, value);
        nhanVien = {...nhanVien, [id]: value, "chucVu": chucVu}
        console.log(nhanVien);
    }
    let tongLuong = nhanVien.luongCB*nhanVien.heSo;
    let content = "";
    content += `
            <div class="card-header">${nhanVien.maNV}</div>
            <div class="card-header">${nhanVien.tenNV}</div>
            <div class="card-body">
                <h5 class="card-title">${nhanVien.chucVu}</h5>
                <p class="card-text">${tongLuong}</p>
            </div>
    `
    document.getElementById("card").innerHTML = content;
}