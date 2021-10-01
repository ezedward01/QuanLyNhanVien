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
56bb0091e75bb9e1d72acfa75efe569b5df08412e0b3487955ec41343e44b6dd3e (02)
8d7712b7e7288f415c63b2c3d08e659870457031bd4b2ccf20d9b885b8bb2000ad (test)
d266ddcf798dc2749a24beba7b2ad5d1733c0e47b2180b6e05112d134d15ac1122  (test 02) 
// xoa 1 phan tu ra khoi mang
DanhSachNhanVien.prototype.xoaNV = function(taiKhoanNV) {
    
    var viTri = this.timViTri(taiKhoanNV);
    if(viTri !== -1){
        this.arr.splice(viTri,1);
    }
}
vacant rib pianoforte candy glory hurt possible swing clock ability lamp orbit...meta  (p) (f) (m)
cable toy honest potato oil wheat concert damp forum bat wine benefit...near (c) (t) (d)

