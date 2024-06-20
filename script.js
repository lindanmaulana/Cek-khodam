    let namaUser = document.getElementById("nama-user");
    let jenisKhodam = document.getElementById("jenis-khodam");
    let diriUser = document.getElementById("diri-user")
    let btnCek = document.getElementById("btn-cek")
    let hasilNumber;


    function cekNilai() {
        if(namaUser.value.trim() === "") {
            btnCek.disabled = true 
        }else {
            btnCek.disabled = false
        }
    }

    namaUser.addEventListener('input', cekNilai)
    cekNilai()

    function cekKhodam() {
    hasilNumber = Math.floor(Math.random() * 50) + 1;
    diriUser.textContent = namaUser.value
    khodam();
    }

    let namaKhodam = [
        { id: 1, nama: "Maung kidul" },
        { id: 2, nama: "Sangsklek" },
        { id: 3, nama: "Jubir" },
        { id: 4, nama: "Sanadmlu kaler" },
        { id: 5, nama: "Maung Bodas" },
        { id: 6, nama: "Belek" },
        { id: 7, nama: "Rogoh" },
        { id: 8, nama: "Kangklek" },
        { id: 9, nama: "Munjad" },
        { id: 10, nama: "Robguh" },
        { id: 11, nama: "Jaka Tarub" },
        { id: 12, nama: "Wira Surya" },
        { id: 13, nama: "Angga Putra" },
        { id: 14, nama: "Sinta Dewi" },
        { id: 15, nama: "Giri Wisesa" },
        { id: 16, nama: "Bima Sakti" },
        { id: 17, nama: "Arjuna Jati" },
        { id: 18, nama: "Banyu Langit" },
        { id: 19, nama: "Rama Wijaya" },
        { id: 20, nama: "Srikandi" },
        { id: 21, nama: "Dewi Anjani" },
        { id: 22, nama: "Raden Wijaya" },
        { id: 23, nama: "Kala Geni" },
        { id: 24, nama: "Putri Gunung" },
        { id: 25, nama: "Banyu Asmara" },
        { id: 26, nama: "Mega Mendung" },
        { id: 27, nama: "Kala Bumi" },
        { id: 28, nama: "Dewi Lestari" },
        { id: 29, nama: "Raden Panca" },
        { id: 30, nama: "Satria Agung" },
        { id: 31, nama: "Rara Mendut" },
        { id: 32, nama: "Si Pitung" },
        { id: 33, nama: "Ki Joko Bodo" },
        { id: 34, nama: "Panji Tengkorak" },
        { id: 35, nama: "Mbah Marijan" },
        { id: 36, nama: "Singa Laut" },
        { id: 37, nama: "Angga Jaya" },
        { id: 38, nama: "Dewi Sri" },
        { id: 39, nama: "Raden Prabu" },
        { id: 40, nama: "Dewi Sartika" },
        { id: 41, nama: "Pandawa Lima" },
        { id: 42, nama: "Raden Senopati" },
        { id: 43, nama: "Gatot Kaca" },
        { id: 44, nama: "Srikandi Ratu" },
        { id: 45, nama: "Sang Surya" },
        { id: 46, nama: "Kyai Ageng" },
        { id: 47, nama: "Putri Malam" },
        { id: 48, nama: "Satria Geni" },
        { id: 49, nama: "Dewi Ayu" },
        { id: 50, nama: "Raja Langit" }
    ];
    

    function khodam() {
    jenisKhodam.textContent = "Loading....";
    namaKhodam.map((data) => {
        switch (hasilNumber) {
        case data.id:
            setTimeout(() => {
            jenisKhodam.textContent = data.nama;
            }, 1000);
            break;
        }
    });
    }
