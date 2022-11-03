function tombol() {
    // 
    const bp = document.getElementById('title');
    bp.innerHTML = 'TRAVELLING AROUND THE WORLD';

    const area = document.getElementById('area');
    area.innerHTML = 'INI BLOG TENTANG TRAVELING';

    const elemenP = document.createElement('h3'); 
    const teksElementP = document.createTextNode('Saat ini saya sedang berada di Sliema, Malta setelah sebelumnya traveling keliling dunia dari Bali ke Atena (Yunani), Warsaw dan Krakow (Poland), Dublin (Irlandia) dan terakhir Utrecht dan Amsterdam (Belanda). Perjalanan tersebut saya mulai dari tanggal 13 Desember yang lalu. Artinya Malta adalah negara ke 5 yang saya kunjungi dalam 3 minggu. ')
       elemenP.appendChild(teksElementP); 

    const cetak = document.getElementById('body'); 

    cetak.appendChild(elemenP);
}