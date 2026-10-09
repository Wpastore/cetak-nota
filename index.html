// Register Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}

// Buka Gambar yang Dibagikan dari Cache saat Halaman Dimuat
window.addEventListener('DOMContentLoaded', async () => {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('shared') === 'true') {
    const cache = await caches.open('shared-images');
    const response = await cache.match('shared-receipt');
    if (response) {
      const imageBlob = await response.blob();
      document.getElementById('previewImage').src = URL.createObjectURL(imageBlob);
    }
  }
  updateReceipt();
});

// Update Tampilan Struk secara Real-Time saat Input Diubah
function updateReceipt() {
  const merchant = document.getElementById('merchantName').value;
  const nominal = parseInt(document.getElementById('nominal').value) || 0;
  const admin = parseInt(document.getElementById('adminFee').value) || 0;
  const destination = document.getElementById('destination').value;
  const total = nominal + admin;

  const html = `
    <div style="text-align:center"><b>${merchant}</b></div>
    <div style="text-align:center">STRUK BUKTI TRANSFER</div>
    --------------------------------<br>
    Tujuan : ${destination}<br>
    --------------------------------<br>
    <div class="flex"><span>Nominal</span> <span>Rp${nominal.toLocaleString('id-ID')}</span></div>
    <div class="flex"><span>Biaya Admin</span> <span>Rp${admin.toLocaleString('id-ID')}</span></div>
    --------------------------------<br>
    <div class="flex"><b>TOTAL</b> <b>Rp${total.toLocaleString('id-ID')}</b></div>
    --------------------------------<br>
    <div style="text-align:center">Terima Kasih</div>
  `;
  document.getElementById('receiptText').innerHTML = html;
}

// Opsi 1: Cetak Menggunakan RawBT (Paling Praktis untuk Browser Mobile)
function printReceipt() {
  const merchant = document.getElementById('merchantName').value;
  const nominal = parseInt(document.getElementById('nominal').value) || 0;
  const admin = parseInt(document.getElementById('adminFee').value) || 0;
  const destination = document.getElementById('destination').value;
  const total = nominal + admin;

  // Format Teks Mentah (Max 32 karakter per baris untuk 58mm)
  const textToPrint = 
    `   ${merchant}\n` +
    `  STRUK BUKTI TRANSFER\n` +
    `--------------------------------\n` +
    `Tujuan : ${destination}\n` +
    `--------------------------------\n` +
    `Nominal   : Rp ${nominal.toLocaleString('id-ID')}\n` +
    `Admin     : Rp ${admin.toLocaleString('id-ID')}\n` +
    `--------------------------------\n` +
    `TOTAL     : Rp ${total.toLocaleString('id-ID')}\n` +
    `--------------------------------\n` +
    `        Terima Kasih\n\n\n`;

  // Mengirim ke aplikasi printer RawBT via URI Scheme
  const rawbtUrl = "intent:" + encodeURIComponent(textToPrint) + "#Intent;scheme=rawbt;package=ru.a404m.rawbt;end;";
  window.location.href = rawbtUrl;
}