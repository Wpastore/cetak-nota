self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Cek apakah URL berakhiran share-target (cocok untuk sub-folder)
  if (url.pathname.endsWith('share-target') && event.request.method === 'POST') {
    event.respondWith((async () => {
      const formData = await event.request.formData();
      const imageFile = formData.get('receipt_image');

      // Simpan file gambar ke Cache
      const cache = await caches.open('shared-images');
      await cache.put('shared-receipt', new Response(imageFile));

      // Redirect relatif terhadap scope repositori GitHub Pages
      const redirectUrl = new URL('index.html?shared=true', self.registration.scope);
      return Response.redirect(redirectUrl.href, 303);
    })());
  }
});
