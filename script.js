const btnSubmit = document.querySelector('input[type="submit"]');
       
        const url = 'http://localhost:8083/Empresas/salvar';
        const form = document.getElementById('formulario');

        form.addEventListener('submit', 
            async function (event) {

                   event.preventDefault(); // Evita que o navegador envie um GET

const formData= new FormData(form);
console.log(formData);



            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(Object.fromEntries(formData))
            });

            if (response.ok) {
                alert('Registro inserido com sucesso!');
                console.log(response);
            } else {
                alert('Erro ao inserir registro!');
            }
        });

