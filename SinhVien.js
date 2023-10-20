

class SinhVien {
  constructor(msv, name, email, pass, birth, course, dt, dl, dh) {
    this.msv = msv;
    this.name = name;
    this.email = email;
    this.pass = pass;
    this.birth = birth;
    this.course = course;
    this.dt = dt;
    this.dl = dl;
    this.dh = dh;
    this.dTB = this.DTB();
  }
  DTB() {
    return (parseFloat(this.dt) + parseFloat(this.dh) + parseFloat(this.dl)) / 3;
  }
}