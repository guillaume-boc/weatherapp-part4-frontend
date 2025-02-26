// Insert your code here
document.getElementById('register').addEventListener('click', async () => {

    
        const name = document.getElementById('registerName').value;
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;
        console.log('name =>', name);
        console.log('email =>', email);
        console.log('password =>', password);

        const reponse = await (await fetch('https://weatherapp-part4-backend-tmjj.vercel.app/users/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password
            })

        })).json()

        if (reponse) {
            window.location.assign('index.html')
        } else {
            console.log("no sign up");
        }

        console.log("reponse=>", reponse)
    

})

document.getElementById('connection').addEventListener('click', async () => {
    
        const email = document.getElementById('connectionEmail').value;
        const password = document.getElementById('connectionPassword').value;
        console.log('email =>', email);
        console.log('password =>', password);

        const reponse = await (await fetch('https://weatherapp-part4-backend-tmjj.vercel.app/users/signin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({

                email: email,
                password: password
            })

        })).json()

        if (reponse) {
            window.location.assign('index.html')
        } else {
            console.log("no sign up");
        }

        console.log("reponse=>", reponse)
    

})