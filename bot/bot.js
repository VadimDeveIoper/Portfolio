const token = '7682069798:AAFizix6yiASx3Na9oUK5n3byDu2PNVWiLs'
const chat_id = 1888235779;
const API_URL =`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=<message>`
const sendBtn = document.getElementById('bot_send')

function sendMessage(){
  const user = {
    user:document.querySelector('#user_name').value,
    number:document.querySelector('#user_number').value,
    message:document.querySelector('#user_msg').value
  }

    let message = `Name ${user.name} Number: ${user.number} Message: ${user.message}`;
    let url = API_URL.replace('<message>', message);

    fetch(url)
    .then(response => response.json())
    .then(data  => {
        console.log(data);
    })
    .catch(err => console.log('Произошла ошибка: ', err));
   
}


sendBtn.addEventListener('click', sendMessage)