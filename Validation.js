

function CheckInput() {
    this.cNull = function (v) {
            if (v.trim() == '') return true;
            return false;
        }



    this.cMSV = function (value) {
        const regexMSV = /^FPT\d{3}$/;
        if (!regexMSV.test(value)) return true;
        return false;
    }

    this.cName = function (value) {
        const regexName = /^[^0-9]*$/;
        if (!regexName.test(value)) return true;
        return false;
    }

    this.cMail = function (value) {
        const regexMail = /^\S+@\S+\.\S+$/;
        if (!regexMail.test(value)) return true;
        return false;
    }

    this.cD = function (value) {
        var d = parseInt(value);
        if (d < 0 || d > 10) return true;
        return false;
    }

    this.cTonTai = function(value, list){
        var i = 0;
        if(list.length != 0){
            list.forEach(function(sv) {
                if(sv.msv == value) i = 1;
            });
        }
        return i;

    }

}