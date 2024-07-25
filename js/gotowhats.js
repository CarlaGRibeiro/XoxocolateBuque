document.getElementById("submit-contato").addEventListener('click',()=>{

    let name= document.getElementById('nomeContato').value;
    let email=document.getElementById('email').value;
    let numeroTel=document.getElementById('numeroTel').value;
    let msg=document.getElementById('msg').value;

    let url= "https://api.whatsapp.com/send?phone=5521971810310&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20seus%20produtos. %0A"+"Nome: %20"+name +" E-mail:%20"+email+" Telefone:%20"+numeroTel+" Mensagem: "+ msg;
   
window.open(url);
 })

