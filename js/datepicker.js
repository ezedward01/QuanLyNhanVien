// Hien thi button
$( function() {
    $( "#datepicker" ).datepicker({
        showOn: "button",
        buttonImage: "img/calendar-icon.png",
        buttonImageOnly: true,
        buttonText: "Select date",
        dateFormat: "mm/dd/yy"

    });
} );
.Phantom.
reform mirror youngful blouse vacuum power hard decrease dry rebuff fitness olive  (y) (d) (d)
Phantom 01
2C33CWSeef3iX4qJRTaY8C24nqamECkG227PAdfM6uqu5AKw14YCff2dRzBCg5Xpu27vqHpsReVc1q243wLvZTqqAd (m) (a) (d)
Phantom 02
62118SJVJwmvGm1udieSxFbCUePt47QyZ5LyY5sV8qL3rgYBGGwBMjqjQzbB7ar92ydLZukqRRKve2vVGFjyMKppuw  (c) (m) (m) 

// Lay ngay mac dinh
$( document ).ready(function() {
    var d = new Date();

    var month = d.getMonth()+1;
    var day = d.getDate();

    var output = ((''+month).length<2 ? '0' : '') + month  + '/' +
    ((''+day).length<2 ? '0' : '') + day + '/' +
    d.getFullYear();
    $('#datepicker').val(output);   
});
