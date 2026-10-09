self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Jika URL tujuan adalah /share-target (sesuai manifest)
  if (url.pathname === '/share-target' && event.request.method === 'POST') {
    event.respondWith((async () => {
      const formData = await event.request.formData();
      const imageFile = formData.get('receipt_image');

      // Simpan file gambar ke Cache
      const cache = await caches.open('shared-images');
      await cache.put('shared-receipt', new Response(imageFile));

      // Redirect ke halaman utama HTML untuk edit
      return Response.redirect('/index.html?shared=true', 303);
    })());
  }
});