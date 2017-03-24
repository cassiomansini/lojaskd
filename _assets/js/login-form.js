$(function(){


    console.log('login-form.js init;');
    $("[name='numero_pedido']").mask('000000000');
    // $("[name='identificacao_cliente']").mask('000.000.000-00');

    var options =  {onKeyPress: function(cep, e, field, options){
      var masks = ['000.000.000-009', '00.000.000/0000-00'];
        mask = (cep.length>=15) ? masks[1] : masks[0];
      $("[name='identificacao_cliente']").mask(mask, options);
    }};

    $("[name='identificacao_cliente']").mask('000.000.000-009', options);

    $("form#login-form").submit(function(event){
        event.preventDefault();
        console.log('Login Submit');

        $('form#login-form .input-group').removeClass('error');

        var formData = {};
        $($("form#login-form").serializeArray()).each(function(index, obj){
            formData[obj.name] = obj.value;
        });
        console.log(formData);

        if (formData.numero_pedido.length < 9){
            console.error('numero pedido inválido');
            $("[name='numero_pedido']").focus().parent().addClass('error');
            return false;
        }else if (formData.identificacao_cliente.length < 14 || (formData.identificacao_cliente.length > 14 && formData.identificacao_cliente.length < 18)){
            console.error('identificação cliente irregular');
            $("[name='identificacao_cliente']").focus().parent().addClass('error');
            return false;
        }

        window.location = window.location.href + "/acompanhamento-pedido";
    });

});