(function() {
  // Periksa apakah situs Instagram telah diatur dalam bahasa Inggris sebelum menjalankan skrip ini
  if (document.documentElement.lang !== 'id') {
    console.warn("Peringatan: Silakan atur situs Instagram dalam bahasa Indonesia sebelum menjalankan skrip ini. Jika tidak, mungkin tidak akan berfungsi sebagaimana diharapkan.");
    return; // Hentikan eksekusi skrip
  }

  // Waktu tunda minimum dan maksimum (dalam detik) antara setiap tindakan suka
  const MIN_DELAY_SECONDS = 5;
  const MAX_DELAY_SECONDS = 10;
  var totalLikes = 0;

  // Fungsi untuk melakukan klik pada tombol suka
  function clickLikeElements(elements) {
    for (var i = 0; i < elements.length; i++) {
      elements[i].querySelector("div[role='button']").click();
      totalLikes++;
    }
  }

  // Fungsi utama untuk menyukai unggahan dengan penundaan acak
  function likePosts() {
    // Hasilkan penundaan acak antara tindakan
    var delayBetweenActions = Math.floor(Math.random() * (MAX_DELAY_SECONDS - MIN_DELAY_SECONDS + 1) + MIN_DELAY_SECONDS);

    // Pilih semua tombol suka di halaman
    var likeButtons = document.querySelectorAll('.xp7jhwk');

    // Filter elemen-elemen untuk menyimpan hanya yang memiliki aria-label="Suka"
    likeButtons = Array.from(likeButtons).filter(function(likeButton) {
      var svg = likeButton.querySelector('svg[aria-label="Suka"]');
      return svg !== null;
    });

    // Periksa jika tidak ada tombol suka yang tersisa untuk diklik
    if (likeButtons.length === 0) {
      console.log("Tidak ada tombol suka yang ditemukan. Keluar dari skrip.");
      return; // Hentikan eksekusi skrip
    }

    // Lakukan tindakan klik dengan penundaan acak
    clickLikeElements(likeButtons);

    // Catat total jumlah suka yang dilakukan
    console.log("Total Suka: " + totalLikes);

    // Gulir halaman sejauh 550 piksel
    window.scrollBy(0, 550);

    // Jadwalkan eksekusi berikutnya dengan penundaan acak
    setTimeout(likePosts, delayBetweenActions * 1000);
  }

  // Eksekusi awal dari fungsi utama
  likePosts();
})();
