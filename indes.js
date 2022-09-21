function validateForm() {
    let a = document.forms["QUIZ1"]["nama"].value;
    let b = document.forms["QUIZ1"]["ttl"].value;
    let c = document.forms["QUIZ1"]["unit"].value;
    let d = document.forms["QUIZ1"]["kelurahan"].value;
    let e = document.forms["QUIZ1"]["kecamatan"].value;
    let f = document.forms["QUIZ1"]["no_hp"].value;
    let g = document.forms["QUIZ1"]["Upload_ktp"].value;

    if (a == "" || b == "" || c == "" || d == "" || e == "" || f == "" || g == "") {
        alert("Masih Ada Yang Kosong!");
        return false;
    }
}