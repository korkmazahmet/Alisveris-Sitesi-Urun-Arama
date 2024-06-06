let urunler = {
    data:[{
        urunIsim: "Normal Beyaz T-shirt",
        kategori: "Ust-Giyim",
        fiyat: "30 TL",
        image: "tshirt.jpg",
    },
    {
        urunIsim: "Kisa Etek",
        kategori: "Alt-Giyim",
        fiyat: "60 TL",
        image: "skirt.webp",
    },
    {
        urunIsim: "Spor Akilli Saat",
        kategori: "Saat",
        fiyat: "80 TL",
        image: "watch.png",
    },

    {
        urunIsim: "Spor Akilli Saat Beyaz",
        kategori: "Saat",
        fiyat: "90 TL",
        image: "watch2.png",
    },
    {
        urunIsim: "Crop Bluz",
        kategori: "Ust-Giyim",
        fiyat: "30 TL",
        image: "crop.webp",
    },
    {
        urunIsim: "Siyah Ceket",
        kategori: "Ceket",
        fiyat: "100 TL",
        image: "blackcekets.webp",
    },
    {
        urunIsim: "Pembe Pijama",
        kategori: "Alt-Giyim",
        fiyat: "100 TL",
        image: "pinkpants.webp",
    },
    {
        urunIsim: "Kahverengi Erkek Ceketi",
        kategori: "Ceket",
        fiyat: "120 TL",
        image: "browncekets.jpg",
    },
    {
        urunIsim: "Gri Pantolon",
        kategori: "Alt-Giyim",
        fiyat: "140 TL",
        image: "greenpants.jpeg",
    },

],
};

for(let i of urunler.data) {
    // Kart Oluştur
    let kart = document.createElement("div");
    //Kart kategoriye sahip olmalı ve öncelikli olarak gizli kalmalı
    kart.classList.add("kart", i.kategori , "gizle");
    // image div i
    let imgKutusu = document.createElement("div");
    imgKutusu.classList.add("image-kutusu");
    // img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgKutusu.appendChild(image);
    kart.appendChild(imgKutusu);
       // kutu
    let kutu = document.createElement("div");
    kutu.classList.add("kutu");
     
    // Ürün ismi
      
    
    let name = document.createElement("h5");
       name.classList.add("urun-isim");
       name.innerText = i.urunIsim.toUpperCase();
       kutu.appendChild(name);
        
       //fiyat
        let fiyat = document.createElement("h6");
        fiyat.innerText = i.fiyat;
        kutu.appendChild(fiyat);


        kart.appendChild(kutu);
    
    document.getElementById("urunler").appendChild(kart);
       
}

function UrunFiltresi(deger){
    let buttons = document.querySelectorAll(".buton-deger");
    buttons.forEach(button => {
       if(deger.toUpperCase() == button.innerText.toUpperCase()){
          button.classList.add("active");
       }else {
         button.classList.remove("active");
       }

    });

    // bütün kartları seç 
    let elements = document.querySelectorAll(".kart");
     
    // Tüm Kartlar Arasında Geçiş yap
    elements.forEach((element) => {
      //Hepsi'ne tıklandığında tüm kartları gösterme
        if(deger == "Hepsi") {
            element.classList.remove("gizle");
        }  else  {
              if(element.classList.contains(deger)) {
              element.classList.remove("gizle");
              } else {
                element.classList.add("gizle");
              }
        }
    });

}   
document.getElementById("ara").addEventListener
 ("click", () => {
   let searchInput = document.getElementById("aramacubuk").value.toUpperCase();
   let elements = document.querySelectorAll(".urun-isim");
   let Kartlar = document.querySelectorAll(".kart");
   console.log(searchInput);
  elements.forEach((element,index) => {
     if(element.innerText.includes(searchInput)) {
        Kartlar[index].classList.remove("gizle");
     } else {
        Kartlar[index].classList.add("gizle");
     }
  });
});
//Initially display all products

window.onload = () => {
    UrunFiltresi('Hepsi');
};