document.getElementById('input_name').addEventListener('blur',getName);

document.getElementById('input_zip').addEventListener('blur',getZip);
document.getElementById('input_email').addEventListener('blur',getEmail);
document.getElementById('input_phone').addEventListener('blur',getPhone);

function getName(){
const name=document.getElementById('input_name');

let re=/^[A-Za-z]{2,10}$/;
if(!re.test(name.value)){
name.classList.add('is-invalid');
}else{
  name.classList.remove('is-invalid');
}

}

function getZip(){
  const zip=document.getElementById('input_zip');
  
  let re=/([0-9]{5})[\-.][0-9]{4}$/;
  if(!re.test(zip.value)){
zip.classList.add('is-invalid');
  }else{
    zip.classList.remove('is-invalid');
  }
  
  }

  
function getEmail(){
  const email=document.getElementById('input_email');
  
  let re=/^([a-zA-Z 0-9]+)\@([a-z0-9]+)\.[a-z]{2,5}$/;
  if(!re.test(email.value)){
email.classList.add('is-invalid');
  }else{
    email.classList.remove('is-invalid');
  }
  
  }

  function getPhone(){
    const phone=document.getElementById('input_phone');
    
    let re=/^\(?\d{3}\)?[.-]\(?\d{3}\)?[.-]\(?\d{4}\)?$/
    if(!re.test(phone.value)){
  phone.classList.add('is-invalid');
    }else{
      phone.classList.remove('is-invalid');
    }
    
    }