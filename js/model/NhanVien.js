function NhanVien(_taiKhoanNV,_hoTen,_email,_ngayLam,_luongCoBan,_chucVu,_gioLamTrongThang,_password){
    this.taiKhoanNV = _taiKhoanNV;
    this.hoTen = _hoTen;
    this.email = _email;    
    this.password= _password;
    this.ngayLam = _ngayLam;  
    this.luongCoBan= _luongCoBan; 
    this.chucVu = _chucVu;
    this.gioLamTrongThang =_gioLamTrongThang;

    this.tinhTongLuong = function(){
       if(this.chucVu ==='Sếp'){ 
         return this.luongCoBan*3;
       }
       if(this.chucVu ==='Trưởng phòng'){
        return this.luongCoBan*2;
       } 
       if(this.chucVu ==='Nhân viên') {
        return this.luongCoBan;
       }

    };
    this.tongLuong = this.tinhTongLuong();

    this.xepLoaiNV = function(){
        if(this.gioLamTrongThang <160){
            return "nhân viên trung bình";
          }
          if(this.gioLamTrongThang >= 160 &&this.gioLamTrongThang <=176){
           return  'nhân viên khá';
          } 
          if(this.gioLamTrongThang >= 176 &&this.gioLamTrongThang <=192){
           return  'nhân viên giỏi';
          } 
          if(this.gioLamTrongThang >= 192 ){
           return  'nhân viên xuất sắc';
          }         
   
    };
    this.xepLoai = this.xepLoaiNV();

}
Algo
Algo_01
budget, adult, colour, embrace, forget, gospel, yellow, defy, elder, unveil, inflict, control, antique, pull, height, situate, cram, behind,
inch, ask, dune, despair, cell, able, sight.   (c) (s) (d)

Algo_02
until, usual, villages, catch, cancel, like, wide, world, sister, timber, loyal, fall, castle, oxygen, chalk, pole, hover, inquiry, 
online, gospel, scene, cram, marriage, abstract, outer (v) (w) (m)

TestnetAlgo 01
oyster, inner, warranter, clutch, text, define, clinic, movie, repeat, virtual, then, rude, nasty, already, table, twelve, 
second, clutch, flock, differ, eternal, offer, personal, ability, duck  (s) (p) (p)

Keplr
cosmos_01
online interest note cactus asset square argue trash pretty curry fix kid (b) (b) (f)

cosmos_02
still crush stumber draft finger rely exist diagram vacant orbital lend present (q) (o) (a)

Dot
dot 01
swap meadow exchange decrease matter shy divert stable toe hundreds husband indoor  (c)  (h)  (i)

dot 02
wife total speechify trick vote husband yard what mixture youngful post hen  (d)  (y)  (y)

dot 03
office ethics more south drill motor rival ice impose main remind timber  (r)  (o)  (j)

Plug
fancy scrap bottle cargo hybrid inner total own tomorrow malaga push flat  (j)  (i)  (g)

Stoic
royal still dorm boring aim know ribbon sorry asset rebuke flag aware  (r)  (b)  (a)
