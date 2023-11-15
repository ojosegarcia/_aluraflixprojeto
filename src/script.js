var listaFilmes = ["https://upload.wikimedia.org/wikipedia/pt/c/c0/La_La_Land_%28filme%29.png", "https://www.vitrinefilmes.com.br/wp-content/uploads/2020/10/Roma-e1602691868664.jpg","https://img.elo7.com.br/product/original/26925F8/big-poster-filme-rei-leao-1994-lo04-tamanho-90x60-cm-rei-leao-disney.jpg","https://play-lh.googleusercontent.com/FCRZ_L29wbgG-cjmqjmQunslNCK15isANjQHjoyMmVn0t0mUaW6FS7zoIV2Wk2wscMEVxj1f92YvWVq170g","https://br.web.img3.acsta.net/pictures/19/04/26/17/30/2428965.jpg"];


for(var i=0; i< listaFilmes.length; i=i++){
    document.write ('<image src='+ listaFilmes[i++] + '>');
}

