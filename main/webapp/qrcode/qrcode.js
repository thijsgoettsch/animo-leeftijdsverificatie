let qrcode;

$(document).ready(function() {
    qrcode = new QRious({
        element: document.getElementById('qr-code'),
        size: 200
    });
});

function generateQRCode() {
    const QRTEXT = document.getElementById("qr-text").value;
    document.getElementById("qr-result").innerHTML = "QR code for " + QRTEXT +":";
    qrcode.set({
        foreground: 'black',
        size: 200,
        value: QRTEXT
    });
}