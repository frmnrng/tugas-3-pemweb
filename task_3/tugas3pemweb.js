function tombol() {
    // 
    const bp = document.getElementById('title');
    bp.innerHTML = 'TRAVELLING AROUND THE WORLD';

    const area = document.getElementById('area');
    area.innerHTML = 'INI BLOG TENTANG TRAVELING';

    const elemenP = document.createElement('h3'); 
    const teksElementP = document.createTextNode('Traveling merupakan kegiatan yang menyenangkan dan hampir setiap orang pasti ingin melakukannya. Hal tersebut tidak mengherankan mengingat traveling dianggap bisa menghilangkan stres dan mengembalikan mood menjadi positif.')
       elemenP.appendChild(teksElementP); 

    const cetak = document.getElementById('body'); 

    cetak.appendChild(elemenP);
}
