function closePopup() {
    document.getElementById("popup").style.display = "none";
}

window.onload = function() {
    document.getElementById("popup").style.display = "flex";
    setTimeout(closePopup, 3500); // Pop-up akan hilang setelah 5 detik
};

document.addEventListener("DOMContentLoaded", function () {
    const newsContainer = document.getElementById("news-container");

    // Data berita (bisa diganti dengan fetch dari JSON atau database)
    const newsData = [
        {
            title: "Rumah Warga di Desa Kertamulya Roboh Akibat Hujan Deras dan Angin Kencang",
            date: "29 Januari 2025",
            summary: "Sebuah rumah milik warga di Desa Kertamulya, Kecamatan Pedes, Kabupaten Karawang mengalami kerusakan parah akibat hujan deras yang mengguyur selama beberapa hari terakhir.",
            image: "pb/b1.jpeg", // Pastikan path benar dan file ada
            content: `Kertamulya, 29 Januari 2025 – Sebuah rumah milik warga di Desa Kertamulya, Kecamatan Pedes, Kabupaten Karawang mengalami kerusakan parah akibat hujan deras yang mengguyur selama beberapa hari terakhir, disertai angin kencang yang sesekali menerjang wilayah tersebut.
Menurut warga sekitar, rumah tersebut memang sudah cukup lama berdiri dengan kondisi bangunan yang mulai rapuh karena termakan usia. Hujan yang turun terus-menerus memperburuk keadaan, menyebabkan dinding mengalami retak yang semakin melebar hingga akhirnya sebagian besar atap rumah roboh.
"Kami sudah khawatir dari beberapa hari lalu karena hujan turun terus tanpa henti. Angin yang datang sesekali juga membuat kondisi rumah makin goyah. Akhirnya tadi siang rumah ini ambruk sebagian," ujar salah seorang tetangga korban. Beruntung, tidak ada korban jiwa dalam kejadian ini. Namun, pemilik rumah harus mengungsi sementara waktu ke rumah saudara terdekat karena kondisi rumah yang sudah tidak layak huni.
Pemerintah desa dan warga sekitar segera memberikan bantuan dengan membersihkan puing-puing serta menyediakan tempat tinggal sementara bagi keluarga terdampak. Selain itu, pihak desa juga akan mengupayakan bantuan dari dinas terkait untuk membantu perbaikan rumah korban.'Kami akan segera berkoordinasi dengan pihak terkait untuk memberikan bantuan kepada keluarga yang terkena musibah ini. 
"Semoga ada solusi cepat agar mereka bisa kembali tinggal dengan aman," ungkap Kepala Desa Kertamulya. Bencana ini menjadi peringatan bagi warga untuk lebih waspada terhadap kondisi cuaca ekstrem, terutama bagi rumah-rumah dengan struktur bangunan yang sudah tua. Masyarakat diimbau untuk melakukan pengecekan berkala terhadap kondisi rumah dan segera melakukan perbaikan jika ditemukan tanda-tanda 
kerusakan guna mencegah kejadian serupa di masa mendatang.
(Reporter KKN Desa Kertamulya)"`
        },
        {
            title: "Mahasiswa KKN Universitas Singaperbangsa Karawang Berdayakan Warga Desa Kertamulya dengan Pelatihan Pembuatan Arang Briket dari Sekam Padi",
            date: "31 Januari 2025",
            summary: "Mahasiswa Kuliah Kerja Nyata (KKN) dari Universitas Singaperbangsa Karawang (Unsika) melaksanakan program kerja berbasis pemberdayaan masyarakat di Desa Kertamulya. Salah satu kegiatan yang mereka lakukan adalah pelatihan pembuatan arang briket dari sekam padi.",
            image: "pb/b2.jpeg",
            content: `Mahasiswa Kuliah Kerja Nyata (KKN) dari Universitas Singaperbangsa Karawang (Unsika) melaksanakan program kerja berbasis pemberdayaan masyarakat di Desa Kertamulya. Salah satu kegiatan unggulan yang mereka lakukan adalah pelatihan pembuatan arang briket dari sekam padi, yang bertujuan untuk memanfaatkan limbah pertanian menjadi produk bernilai guna dan ramah lingkungan.
Pelatihan ini diikuti oleh sejumlah warga Desa Kertamulya, khususnya kelompok pemuda dan ibu rumah tangga yang ingin belajar bagaimana memanfaatkan limbah pertanian. Sekam padi dipilih sebagai bahan dasar pembuatan arang briket karena ketersediaannya melimpah di desa ini yang dikenal sebagai daerah agraris dengan hasil pertanian yang cukup besar.
Salah seorang mahasiswa KKN yang terlibat dalam kegiatan ini menjelaskan, “Kami ingin membantu warga untuk melihat potensi dari limbah sekam padi yang selama ini hanya dibuang atau dibakar. Dengan mengolahnya menjadi arang briket, limbah tersebut bisa menjadi sumber energi alternatif yang bermanfaat.”`
        }
    ];

    // Debugging: Cek path gambar
    console.log("Path gambar pertama:", newsData[0].image);

    // Menampilkan berita
    newsData.forEach((news, index) => {
        const newsCard = document.createElement("div");
        newsCard.classList.add("col-md-6", "mb-4");

        newsCard.innerHTML = `
            <div class="card shadow">
                <img src="${news.image}" class="card-img-top news-image" alt="Berita ${index + 1}">
                <div class="card-body">
                    <h5 class="card-title">${news.title}</h5>
                    <p class="text-muted">${news.date}</p>
                    <p class="card-text">${news.summary}</p>
                    <button class="btn btn-primary" onclick="showNews(${index})">Baca Selengkapnya</button>
                </div>
            </div>
        `;

        newsContainer.appendChild(newsCard);
    });

    // Fungsi untuk menampilkan berita lengkap dalam alert
    window.showNews = function (index) {
        alert(newsData[index].title + "\n\n" + newsData[index].content);
    };
});


