function Validator(){
    this.kiemTraRong = function(value,spanId,mess){
        if(!value){
            getElm(spanId).style.display = 'block';
            getElm(spanId).innerHTML =mess;
            return false
        } else{
            getElm(spanId).style.display = 'none';
            getElm(spanId).innerHTML ='';
            return true;
        }
        trung 01.near
        sail parent aroma hen awful express guilt run pool dwarfish inherit beauty (f) (d) (m) 
        nearian_trung02.near
        elephant bicycle soldier south inherit type loan fly recipe yards cover casino (a) (y) (b)
    } 
    Solareum
    Ví sol 01
    evolve cram springtime primary universe merit coast include elder verify lady physical morning bicycle vote theme autumn vehicle 
    key wedding body terrain alley album (s) (c) (d)
    Ví sol 02
    mountain fatal rise shaft ill sudden garage wait couch under across rocket ritual tray unique onion cost dial donkey face 
    hurry lick cluster term (i) (s) (m)

    this.kiemTraDoDai = function(value,spanId,mess) {
        if(value.length >=4 && value.length <= 6){
            getElm(spanId).style.display = 'none';
            getElm(spanId).innerHTML ='';
            return true;  
        } else {
            getElm(spanId).style.display = 'block';
            getElm(spanId).innerHTML =mess;
            return false;    
        }
    }
    ICP
    1247259 sad crisp money once train ozone object whale task clever they view egg question memory lesson alert student voice casino attitude indigene uphold awake (c) (p) (a)

    this.kiemTraKiTu = (value,spanId,mess) =>{
        var pattern = new RegExp("^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
        "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
        "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$");
        if(pattern.test(value)){
            getElm(spanId).style.display = 'none';
            getElm(spanId).innerHTML ='';
            return true;  
        } else{
            getElm(spanId).style.display = 'block';
            getElm(spanId).innerHTML =mess;
            return false;  
        }
    }

    this.kiemTraEmail =(value,spanId,mess)=>{
        var pattern = new RegExp('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$');
        if(pattern.test(value)){
            getElm(spanId).style.display = 'none';
            getElm(spanId).innerHTML ='';
            return true;  
        } else{
            getElm(spanId).style.display = 'block';
            getElm(spanId).innerHTML =mess;
            return false;  
        }
    }

    this.kiemTraPassword =(value,spanId,mess)=>{
     
                    var lowerCaseLetters = /[a-z]/g;
                    var upperCaseLetters = /[A-Z]/g;
                    var numbers = /[0-9]/g;
   
        if(value.match(lowerCaseLetters)&&value.match(upperCaseLetters)&&value.match(numbers)&&(value.length >= 8 && value.length <= 16)){
            getElm(spanId).style.display = 'none';
            getElm(spanId).innerHTML ='';
            return true;  
        }   else{
            getElm(spanId).style.display = 'block';
            getElm(spanId).innerHTML =mess;
            return false;  
        }    
    }

    this.kiemTraNgayLam = (value,spanId,mess)=>{
        var reg =  /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/;
        if (value.match(reg)) {
            getElm(spanId).style.display = 'none';
            getElm(spanId).innerHTML ='';
          return true;
        }
        else {
          getElm(spanId).style.display = 'block';
          getElm(spanId).innerHTML =mess;
          return false;
        }    
    }

    this.kiemTraLuong = (value,spanId,mess) => {
        if (value>=1000000 && value<=20000000) {
            getElm(spanId).style.display = 'none';
            getElm(spanId).innerHTML ='';
          return true;
        }
        else {
          getElm(spanId).style.display = 'block';
          getElm(spanId).innerHTML =mess;
          return false;
        }  
    }

    this.chonChucVu = (value,spanId,mess)=>{
        if(value ==="Sếp" || value === "Trưởng phòng" || value ==="Nhân viên"){
            getElm(spanId).style.display = 'none';
            getElm(spanId).innerHTML ='';
          return true; 
        } else{
            getElm(spanId).style.display = 'block';
            getElm(spanId).innerHTML =mess;
            return false;
        }
    }
    
    this.kiemTraGioLam = (value,spanId,mess) => {
        if (value>=80 && value<=200) {
            getElm(spanId).style.display = 'none';
            getElm(spanId).innerHTML ='';
          return true;
        }
        else {
          getElm(spanId).style.display = 'block';
          getElm(spanId).innerHTML =mess;
          return false;
        }  
    }
zil 01
    dawn wreck motive nerve build warm uphold parent flat relish used couch  (m)  (s)  (a)
zil 02
    d43i31df70966647e7af4c755aa1128ac76c8ac7a85a96b4c61da5eaadd9dea4457  (d)  (z)  (h) 
    
Yoroi 01
    awesome congress items mean blush despair dizzy discover gravity bicycle basic doctor fearful fantasy acoustic  (i)  (a)  (b)
Yoroi 02
    pattern predict bezel pave plate solve kit pumpkin legend ahead disorder enough operas science kitten  (d)  (o)  (m)
Yorol air
    file ecology pigeons neglect invite client canoe trim eteral measure pelican must grimy mule vehicle  (p)  (b)  (s)
}

