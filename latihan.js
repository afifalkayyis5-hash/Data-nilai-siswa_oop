// // buat class siswa property nama,umur,kelas,jurusan
// // method perkenalan yang menampilkan nama,umur,kelas,jurusan
// class Siswa {
//     constructor(nama, umur, kelas, jurusan) {
//         this.nama = nama;
//         this.umur = umur;
//         this.kelas = kelas;
//         this.jurusan = jurusan;
//     }

//     perkenalan() {
//         console.log(`Nama: ${this.nama}`);
//         console.log(`Umur: ${this.umur}`);
//         console.log(`Kelas: ${this.kelas}`);
//         console.log(`Jurusan: ${this.jurusan}`);
//         console.log(`Halo, nama saya ${this.nama}, saya berumur ${this.umur} tahun, saya kelas ${this.kelas} jurusan ${this.jurusan}`);
//     }
// }

// const siswa1 = new Siswa("Alkayis", 16, "X", "Rekayasa Perangkat Lunak");
// siswa1.perkenalan();


// const siswa2 = new Siswa("APIP", 17, "X", "TKJ");
// siswa2.perkenalan();

class siswa {
    constructor(nama, nis, kelas, jurusan){
        this.nama = nama;
        this.nis = nis;
        this.kelas = kelas;
        this.jurusan = jurusan;

    };

    tampilkanData() {
        return `Nama : ${this.nama} - NIS : ${this.nis} - Kelas : ${this.kelas} - Jurusan : ${this.jurusan}`
    }
}

const form = document.getElementById("formInput")
const list = document.getElementById("listSiswa")


form.addEventListener("submit", (e)=> {
    e.preventDefault()
    const nama = document.getElementById("nama").value 
    const nis = Number(document.getElementById("nis").value)
    const kelas = document.getElementById("kelas").value
    const jurusan = document.getElementById("jurusan").value

    const siswaBaru = new siswa(nama, nis, kelas, jurusan)

    const li = document.createElement("li")
    li.textContent = siswaBaru.tampilkanData()

    list.appendChild(li)
})