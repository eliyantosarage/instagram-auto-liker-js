(function() {
  // Periksa bahwa situs Instagram diatur dalam bahasa Indonesia sebelum menjalankan skrip
  if (document.documentElement.lang !== 'id') {
    console.warn("Peringatan: Harap atur situs Instagram ke bahasa Indonesia sebelum menjalankan skrip ini. Jika tidak, mungkin tidak berfungsi sebagaimana diharapkan.");
    return; // Hentikan eksekusi skrip
  }

  // Waktu tunda minimum dan maksimum (dalam detik) antara suka
  const MIN_DELAY_SECONDS = 7; // Atur minimal delay
  const MAX_DELAY_SECONDS = 15; // Atur maksimal delay
  var totalLikes = 0;

  // Fungsi untuk melakukan tindakan suka dan navigasi ke unggahan berikutnya
  function sukaDanNavigasi() {
    // Hasilkan tundaan acak antara tindakan
    var tundaanAntaraTindakan = Math.floor(Math.random() * (MAX_DELAY_SECONDS - MIN_DELAY_SECONDS + 1) + MIN_DELAY_SECONDS);

    // Pilih tombol suka untuk unggahan saat ini
    var tombolSuka = document.querySelector('._aamw div[role="button"]');
    
    // Pilih tombol "Berikutnya" untuk navigasi ke unggahan berikutnya
    var tombolBerikutnya = document.querySelector('._aaqg button');

    // Periksa apakah kedua tombol tersebut ditemukan
    if (tombolSuka && tombolBerikutnya) {
      // Periksa apakah unggahan tersebut sudah disukai sebelumnya
      var svgAriaLabel = tombolSuka.querySelector('svg[aria-label="Suka"]');
      if (svgAriaLabel && svgAriaLabel.getAttribute('aria-label') === 'Suka') {
        // Lakukan tindakan suka
        tombolSuka.click();
        totalLikes++;

        // Navigasi ke unggahan berikutnya
        tombolBerikutnya.click();

        // Catat total jumlah suka yang dilakukan
        console.log("Total Suka: " + totalLikes);

        // Hasilkan tundaan acak sebelum memproses unggahan berikutnya
        var rand = Math.floor(Math.random() * (MAX_DELAY_SECONDS - MIN_DELAY_SECONDS + 1) + MIN_DELAY_SECONDS);
        console.log('Menunggu selama ' + rand + ' detik sebelum unggahan berikutnya.');

        // Jadwalkan eksekusi berikutnya dengan tundaan acak
        setTimeout(sukaDanNavigasi, rand * 1000);
      } else {
        // Unggahan sudah disukai sebelumnya, pindah ke unggahan berikutnya
        tombolBerikutnya.click();

        // Catat pesan kesalahan
        console.error("Unggahan ini sudah disukai sebelumnya. Pindah ke unggahan berikutnya.");

        // Hasilkan tundaan acak sebelum memproses unggahan berikutnya
        var rand = Math.floor(Math.random() * (MAX_DELAY_SECONDS - MIN_DELAY_SECONDS + 1) + MIN_DELAY_SECONDS);
        console.log('Menunggu selama ' + rand + ' detik sebelum unggahan berikutnya.');

        // Jadwalkan eksekusi berikutnya dengan tundaan acak
        setTimeout(sukaDanNavigasi, rand * 1000);
      }
    } else {
      console.log("Tombol Suka atau Tombol Berikutnya tidak ditemukan. Keluar dari skrip.");
    }
  }

  // Eksekusi awal fungsi utama
  sukaDanNavigasi();
})();
