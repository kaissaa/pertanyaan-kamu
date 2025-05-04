const questions = [
    "Jika diberi pilihan untuk siapa saja di dunia, siapa yang ingin kamu jadikan tamu makan malam?",
    "Apakah kamu ingin menjadi terkenal? Dalam hal apa?",
    "Sebelum teleponan, kamu pernah gasi latihan dulu tentang apa yang akan pgn kmu bilang? Kenapa?",
    "Apa yang akan membuat hari kamu menjadi 'sempurna'?",
    "Kapan terakhir kali kamu bernyanyi untuk dirimu sendiri? Untuk orang lain?",
    "Jika kamu bisa hidup sampai usia 90 tahun dan mempertahankan baik pikiran atau tubuh seperti usia 30 tahun selama 60 tahun terakhir hidupmu, mana yang akan kamu pilih?",
    "Sebutkan tiga hal yang kamu kita tampaknya memiliki kesamaan.",
    "Untuk apa dalam hidupmu yang paling kamu syukuri?",
    "Luangkan empat menit untuk menceritakan cerita hidupmu kepada pasanganmu dengan detail sebanyak mungkin.",
    "Jika kamu bisa bangun besok dan memiliki satu kualitas atau kemampuan yang baru, apa yang akan kamu pilih?",
    "Jika bola kristal bisa memberitahumu kebenaran tentang dirimu, hidupmu, masa depan, atau hal lainnya, apa yang ingin kamu ketahui?",
    "Adakah sesuatu yang telah lama kamu impikan untuk dilakukan? Kenapa kamu belum melakukannya?",
    "Apa pencapaian terbesar dalam hidupmu?",
    "Apa yang paling kamu hargai dalam sebuah persahabatan?",
    "Apa kenangan yang paling berharga bagimu?",
    "Apa kenangan terburukmu?",
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
    "Pernah nggak kamu nyimpen sesuatu yang aku kasih atau aku bilang karena itu berarti banget buat kamu?",
    "Menurut kamu, perubahan apa yang paling kerasa antara kita dari awal kenal sampai sekarang?"
];

function generateQuestion() {
// Pilih pertanyaan secara acak dari array 'questions'
    const randomIndex = Math.floor(Math.random() * questions.length);
    const question = questions[randomIndex];
    // Menampilkan pertanyaan yang dipilih
    document.getElementById('questionDisplay').innerHTML = question;
}