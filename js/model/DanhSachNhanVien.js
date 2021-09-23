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
56b0091e75bb9e1d72acfa75efe569b5df08412e0b3487955ec41343e44b6d3e
// xoa 1 phan tu ra khoi mang
DanhSachNhanVien.prototype.xoaNV = function(taiKhoanNV) {
    
    var viTri = this.timViTri(taiKhoanNV);
    if(viTri !== -1){
        this.arr.splice(viTri,1);
    }
}
vacant rib pianoforte candy glory hurt possible swing clock ability lamp orbit...meta  (p) (f)
cable toy honest potato oil wheat concert damp forum bat wine benefit...near (c) (t)

