const questions = [
    "Jika diberi pilihan untuk siapa saja di dunia, siapa yang ingin kamu jadikan tamu makan malam?",
    "Apakah kamu ingin menjadi terkenal? Dalam hal apa?",
    "Sebelum teleponan, kamu pernah gasi latihan dulu tentang apa yang akan pgn kmu bilang? Kenapa?",
    "Apa yang akan membuat hari kamu menjadi 'sempurna'?",
    "Kapan terakhir kali kamu bernyanyi untuk dirimu sendiri? Untuk orang lain?",
    "Jika kamu bisa hidup sampai usia 90 tahun dan mempertahankan baik pikiran atau tubuh seperti usia 30 tahun selama 60 tahun terakhir hidupmu, mana yang akan kamu pilih?",
    "Sebutkan tiga hal yang kamu kita tampaknya memiliki kesamaan.",
    "Luangkan empat menit untuk menceritakan cerita hidupmu kepada pasanganmu dengan detail sebanyak mungkin.",
    "Jika kamu bisa bangun besok dan memiliki satu kualitas atau kemampuan yang baru, apa yang akan kamu pilih?",
    "Jika bola kristal bisa memberitahumu kebenaran tentang dirimu, hidupmu, masa depan, atau hal lainnya, apa yang ingin kamu ketahui?",
    "Adakah sesuatu yang telah lama kamu impikan untuk dilakukan? Kenapa kamu belum melakukannya?",
    "Apa pencapaian terbesar dalam hidupmu?",
    "Apa yang paling kamu hargai dalam sebuah persahabatan?",
    "Apa kenangan yang paling berharga bagimu?",
    "Apa arti persahabatan bagimu?",
    "Bergiliran berbagi sesuatu yang kamu anggap sebagai karakter positif dari pasanganmu. Bagikan total lima hal.",
    "Ingat nggak pertama kali kita ngobrol panjang itu tentang apa?",
    "Apa momen paling konyol yang pernah kita alami bareng dan kamu masih inget sampai sekarang?",
    "Menurut kamu, kapan kita paling sering ketawa bareng dan kenapa?",
    "Pernah nggak kamu kangen banget sama masa-masa awal kita dekat? Kalau iya, bagian mana yang paling kamu kangenin?",
    "Apa hal kecil yang dulu sering kita lakuin bareng tapi sekarang udah jarang banget?",
    "Kalau kita bisa ngulang satu hari dari hubungan kita, kamu mau ngulang hari yang mana dan kenapa?",
    "Apa kenangan paling random tapi paling bikin kamu senyum kalau inget aku?",
    "Waktu kita pertama kali jalan bareng, apa hal yang paling kamu perhatiin dari aku?",
];

let questionIndex = 0;

function generateQuestion() {
    if (questionIndex < questions.length) {
        const question = questions[questionIndex];
        document.getElementById('questionDisplay').innerHTML = question;
        questionIndex++;

        // Menampilkan gambar setelah pertanyaan
        const imagesContainer = document.querySelector('.images-container');
        imagesContainer.style.display = "block"; // Menampilkan bagian gambar
    } else {
        // Jika sudah 24 pertanyaan
        document.getElementById('questionDisplay').innerHTML = "YEYYY pertanyaan udah selesaiii, semogaa kamu dan aku sama2 inget momen2 manis kita dluu, seruu kann rasanyaa, semogaa kita bisa jalanin hubungan inii sampe punya cicit2 gemeyy yaa sayangkuuu❤️❤️";
        // Disable tombol agar tidak bisa generate lagi
        document.getElementById('generateBtn').disabled = true;
    }
}