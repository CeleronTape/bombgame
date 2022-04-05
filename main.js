$(function(){

    var btn_number = [];
    var click_number = 0;
    var i = 0;
    var correct_number = 0;
    var n = 0;

    $(".ok_btn").attr('disabled', true);
    $(".hide").hide()
    $('.active').hide();
    $('.final_btn').hide();
    $('.final_btn0').hide();

    var arr = [1,2,3,4,5,6,7,8,9];
    var a = arr.length;
 
//シャッフルアルゴリズム
while (a) {
    var j = Math.floor( Math.random() * a );
    var t = arr[--a];
    arr[a] = arr[j];
    arr[j] = t;
}


    $('#btn1').click(function(){
        btn_number[i] = 1;
        click_number++;
        i++;
        $("#btn1").attr('disabled', true);
        $('#btn1').css('background-color','red');
    });
    $('#btn2').click(function(){
        btn_number[i] = 2;
        click_number++;
        i++;
        $("3btn2").attr('disabled', true);
        $('#btn2').css('background-color','red');
    });
    $('#btn3').click(function(){
        btn_number[i] = 3;
        click_number++;
        i++;
        $("#btn3").attr('disabled', true);
        $('#btn3').css('background-color','red');
    });
    $('#btn4').click(function(){
        btn_number[i] = 4;
        click_number++;
        i++;
        $("#btn4").attr('disabled', true);
        $('#btn4').css('background-color','red');
    });
    $('#btn5').click(function(){
        btn_number[i] = 5;
        click_number++;
        i++;
        $("#btn5").attr('disabled', true);
        $('#btn5').css('background-color','red');
    });
    $('#btn6').click(function(){
        btn_number[i] = 6;
        click_number++;
        i++;
        $("#btn6").attr('disabled', true);
        $('#btn6').css('background-color','red');
    });
    $('#btn7').click(function(){
        btn_number[i] = 7;
        click_number++;
        i++;
        $("#btn7").attr('disabled', true);
        $('#btn7').css('background-color','red');
    });
    $('#btn8').click(function(){
        btn_number[i] = 8;
        click_number++;
        i++;
        $("#btn8").attr('disabled', true);
        $('#btn8').css('background-color','red');
    });
    $('#btn9').click(function(){
        btn_number[i] = 9;
        click_number++;
        i++;
        $("#btn9").attr('disabled', true);
        $('#btn9').css('background-color','red');
    });

    $('.clear_btn').click(function(){
        btn_number[i] = [];
        click_number = 0;
        i = 0;
        $(".ok_btn").attr('disabled', true);
        $(".tenkey_btn").attr('disabled', false);
        $('.tenkey_btn').css('background-color','#F0F0F0');
        $('.tenkey_btn').css('border-width','0.4px');
    });

    $('.tenkey_btn').click(function(){
        if(click_number === 3){
            $(".tenkey_btn").attr('disabled', true);
            $(".ok_btn").attr('disabled', false);
            for(var i=0; i<3 ; i++){
                //console.log(btn_number[i]);
                console.log(arr[i]);
            }
        }
    });

    $('.ok_btn').click(function(){
        do{
            if(btn_number[n]==arr[0] || btn_number[n] == arr[1] ||btn_number[n]==arr[2]){
                correct_number++;
                console.log('a');
            }
            n++;
            console.log('b');
        }while(n < 3);

        if(correct_number == 3){
            $('.tenkey_btn').css('background-color','red');
            $('.hide').show();
            $('.final_btn').show();
            console.log('c');
        }else{
            $('.correct_'+correct_number).show();
            $('.final_btn0').show();
            console.log('d');
            btn_number[i] = [];
            click_number = 0;
            i = 0;
            n = 0;
            correct_number = 0;
            $(".ok_btn").attr('disabled', true);
            $(".tenkey_btn").attr('disabled', false);
            $('.tenkey_btn').css('background-color','#F0F0F0');
            $('.tenkey_btn').css('border-width','0.4px');
        }
        
    });

    $('.final').click(function(){
        btn_number[i] = [];
        click_number = 0;
        i = 0;
        n = 0;
        $('.hide').hide();
        $('.active').hide();
        $('.final_btn0').hide();
        $('.final_btn').hide();
        $(".ok_btn").attr('disabled', true);
        $(".tenkey_btn").attr('disabled', false);
        $('.tenkey_btn').css('background-color','#F0F0F0');
        $('.tenkey_btn').css('border-width','0.4px');
        correct_number = 0;
    });
});
