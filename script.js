document.addEventListener('mousemove', function(e){
    var imagem = document.getElementById('cat');
    
    // atualiza a posição da imagem com a posição atual do mouse
    imagem.style.left = e.pageX + 'px';
    imagem.style.top = e.pageY + 'px';
  });

document.addEventListener('click', function(){
    var audio = document.getElementById('audio');
    audio.play();
});
  
document.addEventListener('DOMContentLoaded', function() {
  var abrirPopUp = document.getElementById('abrirPopUp');
  var formularioPopUp = document.getElementById('formularioPopUp');
  var fecharPopUp = document.getElementById('fecharPopUp');
  var enviarPopUp = document.getElementById('enviarPopUp')
  abrirPopUp.addEventListener('click', function() {
    formularioPopUp.style.display = 'block';
  });
  fecharPopUp.addEventListener('click', function() {
    formularioPopUp.style.display = 'none';
  });
  enviarPopUp.addEventListener('click', function() {
    formularioPopUp.style.display = 'none';
  });
}); 

function logar(){
  var senha = document.getElementById('senha').value;
  if (senha == "pfvcarlosbaiaomeadota"){
    var minhaImagem = document.getElementById('image');
    var footerBackground = document.getElementById('footer');
  minhaImagem.classList.add('image-visible');
  footerBackground.classList.add('background-footer')
} else {
  var minhaImagem = document.getElementById('image');
  minhaImagem.classList.remove('image-visible');
  alert('Senha errada burroide')
  }
}



