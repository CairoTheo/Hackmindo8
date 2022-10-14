const barang = [
    {  nama: 'Indomie Kari Ayam', tipe: 'Makanan', stock: 10, image: 'Images/indomieKariAyam.png', harga: 4000 },    
    {  nama: 'Indomie Soto Mie', tipe: 'Makanan', stock: 10, image: 'Images/indomieSotoMie.png', harga: 4000 },    
    {  nama: 'Indomie Goreng', tipe: 'Makanan', stock: 10, image: 'Images/indomieGoreng', harga: 3100 },
    {  nama: 'Indomie Ayam Bawang', tipe: 'Makanan', stock: 10, image: 'Images/indomieAyamBawang', harga: 4000 },
    {  nama: 'Es Teh', tipe: 'Minuman', stock: 10, image: 'Images/EsTeh', harga: 5000 },
    {  nama: 'Es Jeruk', tipe: 'Minuman', stock: 10, image: 'Images/EsJeruk', harga: 5000 },
  ]

  let beli = document.createElement('button')

  let index = 0

  let baris = 0
  let kolom = 0
  let colLastRow = 0

  if (data.length > 5) {
    jumlahRow = Math.ceil(data.length / 5)
    jumlahCol = 5
    colLastRow = data.length % 5
} else {
    jumlahRow = 1
    jumlahCol = data.length
}

  for (let j = 1; j <= jumlahRow; j++) {
    let row = document.createElement("div") //Membuat baris baru
    // row.classList.add("data1") //menambahkan kelas untuk div (supaya ada cssnya)

    if (j === baris && colLastRow !== 0) {
        jumlahCol = colLastRow
    }

    for (let i = 1; i <= jumlahCol; i++) {
       
        //bikin div baru dengan kelas carddara
        let card = document.createElement("div")
        card.classList.add("carddata")

        //bikin image produk
        let img = document.createElement('img')
        img.src = data[index].image
        img.width = "100"
        img.height = "150"
        img.style.objectFit = "cover"
        card.appendChild(img)

        //bikin nama produk
        let nama = document.createElement('p')
        nama.innerHTML = `<b>${data[index].nama}</b>`
        card.appendChild(nama)

        //bikin harga produk
        let harga = document.createElement('p')
        harga.innerHTML = `Rp.${data[index].harga.toLocaleString()},-`
        card.appendChild(harga)

        //bikin stock
        let stock = document.createElement('p')
        stock.innerHTML = `Stock: ${data[index].stock}`
        if(data[index].stock<5){
            stock.style.color = 'red'
        }else{
            stock.style.color = 'darkgreen'
        }
        card.appendChild(stock)

        //bikin tombol beli
        let beli = document.createElement('button')
        beli.innerHTML = "Beli"
        beli.classList.add("button")
        let idBarang = data[index].id
        beli.onclick = function(){
            for (let j = 0; j < barang.length; j++) {    
                if (idBarang === barang[j].id && barang[j].stock > 0) {
                    
                    cart.push({
                        id: barang[j].id,
                        Nama: barang[j].nama,
                        Harga: barang[j].harga,
                        
                    })

                    barang[j].stock--


                    console.log(barang)

                    tampilkanProduk()

                    alert("Barang berhasil ditambahkan ke cart");
                }else if(idBarang === barang[j].id && barang[j].stock === 0){
                    alert("Maaf Stock Habis :(");
                }
            }

            
        }
        
        card.appendChild(beli)

        //masukkan card ke row
        row.appendChild(card)

        index++
    }

    dataBarang.appendChild(row)

}
}


  beli.onclick = function(index){
    for (let j = 0; j < barang.length; j++) {

        if (Barang === barang[j].id && barang[j].stock > 0) {
            
            cart.push({
                id: barang[j].id,
                Nama: barang[j].nama,
                Harga: barang[j].harga,
                
            })

            barang[j].stock--


            console.log(barang)

            tampilkanProduk()

            alert("Barang berhasil ditambahkan ke cart");
        }else if(idBarang === barang[j].id && barang[j].stock === 0){
            alert("Maaf Stock Habis :(");
        }
    }

    
}