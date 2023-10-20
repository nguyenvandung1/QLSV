

class DSSV{
    constructor(list){
        this.list = list;
    }
    themSV(sv){
        this.list.push(sv);
    }
    editSV(vt,sv){
        this.list.splice(vt, 1, sv);
    }

    xoaSV(vt){
        this.list.splice(vt, 1);
    }

    timSV(mSV){
        return this.list.findIndex(function(sv){
            return sv.msv = mSV;
        })
    }

    putList = function(){
        for(var i=0; i < this.list.length; i++){
            var sv = this.list[i];
            console.log(sv.msv+": "+sv.name);
        }
    }

    

}