
let list = [];
let listSV = new DSSV(list);






function ADDSV() {
    getID();
    let cIP = new CheckInput();
    let errMSV = DOMID("errMSV");
    if (cIP.cNull(ipMSV.value)) {
        errMSV.innerText = "MSV không được để trống!!";
        return;
    } else {
        errMSV.innerText = "";
        if (cIP.cMSV(ipMSV.value)) {
            errMSV.innerText = "MSV không đúng định dạng \"FPT 3 chữ số\"";
            return;
        }
    }

    let check = cIP.cTonTai(ipMSV.value, listSV.list);
    if (check == 1) {
        errMSV.innerText = "MSV đã tồn tại!!";
        return;
    }



    let errName = DOMID("errName");
    if (cIP.cNull(ipName.value)) {
        errName.innerText = "Name không được để trống!!";
        return;
    } else {
        errName.innerText = "";
        if (cIP.cName(ipName.value)) {
            errName.innerText = "Tên không chứa chữ số";
            return;
        }
    }

    let errM = DOMID("errMail");
    if (cIP.cNull(ipMail.value)) {
        errM.innerText = "Email không được để trống!!";
        return;
    } else {
        errM.innerText = "";
        if (cIP.cMail(ipMail.value)) {
            errM.innerText = "Vui lòng điền Email hợp lệ!!";
            return;
        }


    }

    let errB = DOMID("errBirth");
    if (cIP.cNull(ipDate.value)) {
        errB.innerText = "Ngày sinh không được để trống!!";
        return;
    } else {
        errB.innerText = "";
    }

    let errP = DOMID("errPass")
    if (cIP.cNull(ipPass.value)) {
        errP.innerText = "Pass không được để trống!!";
        return;
    } else {
        errP.innerText = "";
    }


    let errKH = DOMID("errKH");
    if (cIP.cNull(ipKH.value)) {
        errKH.innerText = "Khóa học không được để trống!!";
        return;

    } else {
        errKH.innerText = "";
    }

    let errDT = DOMID("errDT");
    if (cIP.cNull(ipDT.value)) {
        errDT.innerText = "Điểm Toán không được để trống!!";
        return;
    } else {
        errDT.innerText = "";
        if (cIP.cD(ipDT.value)) {
            errDT.innerText = "Điểm phải >= 0 và <= 10";
            return;
        }
    }

    let errDL = DOMID("errDL");
    if (cIP.cNull(ipDL.value)) {
        errDL.innerText = "Điểm lý không được để trống!!";
        return;
    } else {
        errDL.innerText = "";
        if (cIP.cD(ipDL.value)) {
            errDL.innerText = "Điểm phải >= 0 và <= 10";
            return;
        }
    }

    let errDH = DOMID("errDH");
    if (cIP.cNull(ipDH.value)) {
        errDH.innerText = "Điểm hóa không được để trống!!";
        return;
    } else {
        errDH.innerText = "";
        if (cIP.cD(ipDH.value)) {
            errDH.innerText = "Điểm phải >= 0 và <= 10";
            return;
        }
    }

    let sv = new SinhVien(ipMSV.value, ipName.value, ipMail.value, ipPass.value, ipDate.value, ipKH.value, ipDT.value, ipDL.value, ipDH.value);
    listSV.themSV(sv);
    alert("Thêm thành công!!");
    loadForm();
    loadListSV(listSV.list);


}






function loadListSV(listt) {
    let table = DOMID("table");
    // console.log(listt);
    // Delete rows in reverse order
    for (let i = table.rows.length - 1; i >= 0; i--) {
        table.deleteRow(i);
    }

    for (let i = 0; i < listt.length; i++) {
        let sv = listt[i];
        table.appendChild(row(sv.msv, sv.name, sv.birth, sv.email, sv.course, sv.dTB.toFixed(2)));
    }
}

function row(msv, name, birth, email, course, agv) {
    let tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${msv}</td>
        <td>${name.substring(0, 10)}...</td>
        <td>${birth}</td>
        <td>${email.substring(0, 10)}...</td>
        <td>${course}</td>
        <td>${agv}</td>
        <td>
            <button type="button" value="${msv}" onclick="showSV(this)" class="btn btn-info">Xem TT</button>
        </td>
        <td>
            <button type="button" value="${msv}" onclick="deleteSV(this)" class="btn btn-danger">Xóa</button>
        </td>
    `;
    return tr;
}

function deleteSV(btn) {
    let maSV = btn.value;
    let vt = listSV.list.findIndex(function (sv, maS) {
        return sv.msv == maSV;
    })

    listSV.list.splice(vt, 1);
    saveLC();
    getLC();
}


// 
let vtED;

function showSV(btn) {
    let diaglog = document.getElementById("diaglog");
    if (diaglog.style.display == "none") {
        diaglog.style.display = 'block';
    }



    getID();
    let maSV = btn.value;
    let vt = listSV.list.findIndex(function (sv, maS) {
        return sv.msv == maSV;
    })
    vtED = vt;

    let btnUpdate = document.getElementById('btnUpdate');
    btnUpdate.value = maSV;

    let sv = listSV.list[vt];
    console.log(sv);

    txtName.innerText = sv.name;
    txtMSV.innerText = sv.msv;
    txtBirth.innerText = sv.birth;
    txtCourse.innerText = sv.course;
    txtEmail.innerText = sv.email;
    txtDT.innerText = sv.dt;
    txtDL.innerText = sv.dl;
    txtDH.innerText = sv.dh;
    txtDTB.innerHTML = sv.dTB.toFixed(2);

}


function btnBack() {
    let diaglog = document.getElementById("diaglog");
    diaglog.style.display = 'none';
}






function saveLC() {
    if (listSV.list.length > 0) {
        let danhSachSinhVienJson = JSON.stringify(listSV.list);
        localStorage.setItem("ListSinhVienLC", danhSachSinhVienJson);
        alert('Save successfully!');
    } else {
        alert('List SV null!');
    }
}



function getLC() {
    let jsDSSV = localStorage.getItem("ListSinhVienLC");
    let listJS = JSON.parse(jsDSSV);

    if (listJS.length > 0) {
        listSV.list = listJS;
        loadListSV(listSV.list);
        alert('Get successfully');

    } else {
        alert('List localStorage null');
    }
    // console.log(listSV.list);
    // console.log(listSV.list[0].dTB);


}



function loadForm() {
    ipMSV.value = "";
    ipBirth.value = "";
    ipCourse.value = "";
    ipDH.value = "";
    ipPass.value = "";
    ipDL.value = "";
    ipDT.value = "";
    ipName.value = "";
    ipDate.value = "";
    ipKH.value = "";
    ipMail.value = "";
}

function loadForm2() {
    ipEDMSV.value = '';
    ipEDDL.value = '';
    ipEDDT.value = '';
    ipEDBirth.value = '';
    ipEDPass.value = '';
    ipEDMail.value = '';
    ipEDName.value = '';
    ipEDCourse.value = '';
}


// update
let msvED;
function updateSV() {
    let form_edit = document.getElementById("form_edit");
    form_edit.style.display = 'block';

    msvED = document.getElementById('btnUpdate').value;

    // let vt = listSV.list.findIndex(function (sv) {
    //     return sv.msv == msvED;
    // })
    // alert(vtED+ " "+ msvED);

    // let sv = listSV.list[vt];
    // getID();

    let diaglog = DOMID("diaglog");
    diaglog.style.display = 'none';
    setVLID();
}
function setVLID() {
    let ipEDMSV = DOMID('ipEDMSV');
    ipEDMSV.readOnly = true;
    ipEDMSV.value = msvED;
}

function EDBack() {
    let form_edit = document.getElementById("form_edit");
    form_edit.style.display = 'none';
}

function btnEdit() {
    getIDED();

    console.log(ipEDMSV.value);
    // let maSV = ipEDMSV.value
    let cIP = new CheckInput();

    if (cIP.cNull(ipEDName.value)) {
        errEDName.innerText = "Name không được để trống!!";
        alert('ok')
        return;
    } else {
        errEDName.innerText = "";
        if (cIP.cName(ipName.value)) {
            errEDName.innerText = "Tên không chứa chữ số";
            return;
        }
    }
    if (cIP.cNull(ipEDMail.value)) {
        errEDMail.innerText = "Email không được để trống!!";
        return;
    } else {
        errEDMail.innerText = "";
        if (cIP.cMail(ipEDMail.value)) {
            errEDMail.innerText = "Vui lòng điền Email hợp lệ!!";
            return;
        }


    }


    if (cIP.cNull(ipEDBirth.value)) {
        errEDBirth.innerText = "Ngày sinh không được để trống!!";
        return;
    } else {
        errEDBirth.innerText = "";
    }


    if (cIP.cNull(ipEDPass.value)) {
        errEDPass.innerText = "Pass không được để trống!!";
        return;
    } else {
        errEDPass.innerText = "";
    }


    if (cIP.cNull(ipEDCourse.value)) {
        errEDKH.innerText = "Khóa học không được để trống!!";
        return;

    } else {
        errEDKH.innerText = "";
    }


    if (cIP.cNull(ipEDDT.value)) {
        errEDDT.innerText = "Điểm Toán không được để trống!!";
        return;
    } else {
        errEDDT.innerText = "";
        if (cIP.cD(ipEDDT.value)) {
            errEDDT.innerText = "Điểm phải >= 0 và <= 10";
            return;
        }
    }

    if (cIP.cNull(ipEDDL.value)) {
        errEDDL.innerText = "Điểm lý không được để trống!!";
        return;
    } else {
        errEDDL.innerText = "";
        if (cIP.cD(ipEDDL.value)) {
            errEDDL.innerText = "Điểm phải >= 0 và <= 10";
            return;
        }
    }


    if (cIP.cNull(ipEDDH.value)) {
        errEDDH.innerText = "Điểm hóa không được để trống!!";
        return;
    } else {
        errEDDH.innerText = "";
        if (cIP.cD(ipEDDH.value)) {
            errEDDH.innerText = "Điểm phải >= 0 và <= 10";
            return;
        }
    }

    let vt = listSV.list.findIndex(function (sv) {
        return sv.msv == ipEDMSV.value;
    })


    let sv = new SinhVien(ipEDMSV.value, ipEDName.value, ipEDMail.value, ipEDPass.value, ipEDBirth.value, ipEDCourse.value, ipEDDT.value, ipEDDL.value, ipEDDH.value);
    listSV.editSV(vt, sv);
    alert("Sửa thành công!!");
    loadForm2();
    let form_edit = DOMID('form_edit');
    form_edit.style.display = 'none';
    loadListSV(listSV.list);



}




function search() {
    let search = DOMID('search').value;
    var regex = new RegExp(search, "i");

    let arrSearch = listSV.list.filter((list) => regex.test(list.name));

    console.log(arrSearch);

    loadListSV(arrSearch);

    search = '';

}

function loadTable() {
    loadListSV(listSV.list);
}

function deleteForm() {
    getID();
    loadForm();
}