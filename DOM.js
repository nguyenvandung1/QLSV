

var ipMSV, ipName, ipMail, ipPass, ipDate, ipKH, ipDT, ipDL, ipHD, table, txtMSV, txtName, txtEmail, txtBirth, txtCourse, txtDT, txtDL, txtHD, txtDTB;

var DOMID = (id) => document.getElementById(id);

function getID(){
    ipMSV = DOMID("ipMSV");
    ipName = DOMID("ipName");
    ipMail = DOMID("ipEmail");
    ipPass = DOMID("ipPass");
    ipDate = DOMID("ipBirth");
    ipKH = DOMID("ipCourse");
    ipDT = DOMID("ipDT");
    ipDL = DOMID("ipDL");
    ipDH = DOMID("ipDH");
    table = DOMID("table");
    txtMSV = DOMID("txtMSV");
    txtName = DOMID("txtName");
    txtEmail = DOMID("txtEmail");
    txtBirth = DOMID("txtBirth");
    txtCourse = DOMID("txtCourse");
    txtDT = DOMID("txtDT");
    txtDL = DOMID("txtDL");
    txtDH = DOMID("txtDH");
    txtDTB = DOMID("txtDTB");
}


var ipEDMSV, ipEDName, ipEDMail, ipEDPass, ipEDBirth, ipEDCourse, ipEDDT, ipEDDL, ipEDDH, errEDDH, errEDDL, errEDDT, errEDKH, errEDPass,errEDName, errEDBirth, errEDMail;
function getIDED(){
    ipEDMSV = DOMID("ipEDMSV");
    ipEDName = DOMID('ipEDName');
    ipEDMail = DOMID('ipEDMail');
    ipEDPass = DOMID('ipEDPass');
    ipEDBirth = DOMID('ipEDBirth');
    errEDBirth = DOMID('errEDBirth');
    ipEDCourse = DOMID('ipEDCourse');
    ipEDDT = DOMID('ipEDDT');
    ipEDDL = DOMID('ipEDDL');
    ipEDDH = DOMID('ipEDDH');
    errEDDH = DOMID('errEDDH');
    errEDDL = DOMID('errEDDL');
    errEDDT = DOMID('errEDDT');
    errEDKH = DOMID('errEDKH');
    errEDPass = DOMID('errEDPass');
    errEDName = DOMID('errEDName');
    errEDMail = DOMID('errEDMail');

}