const questions = [
    "Kamu punya pengalaman yg memalukan gaa di hidup kamu?",
    "Apakah kamu ingin menjadi terkenal? Dalam hal apa?",
    "Sebelum teleponan, kamu pernah gasi latihan dulu tentang apa yang akan pgn kmu bilang? Kenapa?",
    "Apa yang akan membuat hari kamu menjadi 'sempurna'?",
    "Sebutkan tiga hal yang kamu kita tampaknya memiliki kesamaan.",
    "Luangkan empat menit untuk menceritakan cerita hidupmu kepada pasanganmu dengan detail sebanyak mungkin.",
    "Jika kamu bisa bangun besok dan memiliki satu kualitas atau kemampuan yang baru, apa yang akan kamu pilih?",
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

let usedQuestions = [];
let currentIndex = 0;

function generateQuestion() {
  const questionDisplay = document.getElementById('questionDisplay');
  const questionImage = document.getElementById('questionImage');
  const button = document.querySelector('button');

  if (currentIndex >= questions.length) {
    questionDisplay.innerHTML = "YEYYY pertanyaan udah selesaiii, semogaa kamu dan aku sama2 inget momen2 manis kita dluu, seruu kann rasanyaa, semogaa kita bisa jalanin hubungan inii sampe punya cicit2 gemeyy yaa sayangkuuu❤️❤️";
    questionImage.style.display = "none";
    button.disabled = true;
    button.style.backgroundColor = "#aaa";
    const audioContainer = document.getElementById('audioContainer');
    audioContainer.style.display = "block";
    return;
  }

  const question = questions[currentIndex];
  questionDisplay.innerHTML = question;

  const imageIndex = (currentIndex % 16) + 1;
  questionImage.src = `images/img${imageIndex}.jpg`;
  questionImage.style.display = "block";

  currentIndex++;
}