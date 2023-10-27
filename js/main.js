$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(xx) 90000-0000'
    }),
    $('#cpf').mask('000.000.000-00', {
        placeholder: '000.000.000-00'
    }),
    $('#cep').mask('00.000-000')


    $('.form').on('submit', function(e){
        e.preventDefault()
        
    })

    $('.form').validate({
        rules: {
            nome: {
                required: true,
            },
            email: {
                required: true,
                email: true,
            },
            telefone: {
                required: true,
            }
        },
        messages: {
            nome: 'Este campo é obrigatório',
            email: 'Email obrigatório',
            telefone: 'Telefone obrigatório',
            
        }
    })


})