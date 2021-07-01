function DanhSachNhanVien(){
    this.arr = [];
    this.themNhanVien = function(nhanVien){
        this.arr.push(nhanVien);
    }
}

DanhSachNhanVien.prototype.timViTri = function(taiKhoanNV) {
    
    return this.arr.findIndex( function(item){
     
        return taiKhoanNV === item.taiKhoanNV
    })
}
// xoa 1 phan tu ra khoi mang
DanhSachNhanVien.prototype.xoaNV = function(taiKhoanNV) {
    
    var viTri = this.timViTri(taiKhoanNV);
    if(viTri !== -1){
        this.arr.splice(viTri,1);
    }
}

