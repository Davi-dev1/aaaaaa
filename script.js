const btnSubmit = document.querySelector('input[type="submit"]');
       
        const url = 'http://localhost:8083/Empresas/salvar';
        const form = document.getElementById('formulario');

        form.addEventListener('submit', 
            async function (event) {

                   event.preventDefault(); // Evita que o navegador envie um GET

const formData= new FormData(form);
console.log(formData);
const data={
razaoSocial:formData.get('razaoSocial'),
emailDaEmpresa: formData.get('emailDaEmpresa'),
CNPJDaEmpresa:formData.get('CNPJDaEmpresa'),
SenhaDaEmpresa:formData.get( 'SenhaDaEmpresa'),
TelefoneDaEmpresa:formData.get('TelefoneDaEmpresa'),
EnderecoDaEmpresa:formData.get('EnderecoDaEmpresa'),
CapitalSocial:formData.get('CapitalSocial')
};


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

