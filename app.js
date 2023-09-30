var qrText = document.getElementById("qr-text");
var sizes = document.getElementById("sizes");
var generateBtn = document.getElementById("Generatebtn");
var downloadBtn = document.getElementById("Downloadbtn");

var qrContainer = document.querySelector(".qr-body");

var size = sizes.value;

generateBtn.addEventListener('click', (e)=> {
    e.preventDefault();
    Empty();
    if(qrText.value.length > 0){
        generateQRCode();
    }

    else 
    {
        alert("Enter the text or URL to generate your QR code");
    }
   
});


sizes.addEventListener('change', (e)=>{
    size = e.target.value;
    Empty();

});

function Empty()
{
    // if(qrText.value.length > 0){
    //     generateQRCode();
    // }
    // else 
    // {
    //     alert("Enter the text or URL to generate your QR code");
    // }

    qrText.value.length > 0 ?  generateQRCode() : alert("Enter the text or URL to generate your QR code");;
  
}

downloadBtn.addEventListener('click', ()=>{
    var img = document.querySelector('.qr-body img');

    if(img !== null)
    {
        var imgAtrr = img.getAttribute('src');
        downloadBtn.setAttribute("href", imgAtrr);
    }
    else 
    {
        downloadBtn.setAttribute("href", `${document.querySelector('canvas').toDataURL()}`);
    }
});

function generateQRCode()
{
    qrContainer.innerHTML ="";
    new QRCode(qrContainer, {
        text:qrText.value,
        height:size,
        width:size,
        colorLight:"#fff",
        colorDark:"#000",
    });
}