$(document).ready(function(){

    function scrollOff() {
        $('body').addClass('scrollOff').on('scroll touchmove mousewheel', function (e) {
            e.stopPropagation();
        });
    };

    function timerJs(){
    
        // 타이머 숫자 증가
        function twolength(n) {
            return (n < 10 ? '0' : '') + n
        };

        const addTime = $('.time_btn');
        const startBtn = $('.start_btn');
        const endModal = $('.timerEnd_modal');
        let time = 0;
        let cron;
        addTime.click(function(){

            if(time < 5700){
                if($(this).hasClass('thirtySec')){
                    time +=30;
                    let min = parseInt(time/60);
                    let sec = time%60;
    
                    $('#minute').val(twolength(min));
                    $('#second').val(twolength(sec));
                    console.log(time, min, sec);
                };
    
                if($(this).hasClass('oneMin')){
                    time +=60;
                    let min = parseInt(time/60);
                    let sec = time%60;
    
                    $('#minute').val(twolength(min));
                    $('#second').val(twolength(sec));
                    console.log(time, min, sec);
                };
    
                if($(this).hasClass('threeMin')){
                    time +=180;
                    let min = parseInt(time/60);
                    let sec = time%60;
    
                    $('#minute').val(twolength(min));
                    $('#second').val(twolength(sec));
                    console.log(time, min, sec);
                };
    
                if($(this).hasClass('fiveMin')){
                    time +=300;
                    let min = parseInt(time/60);
                    let sec = time%60;

                    $('#minute').val(twolength(min));
                    $('#second').val(twolength(sec));
                    console.log(time, min, sec);
                };
            }else if(time > 5700){
                time = 5700;
                let min = parseInt(time/60);
                let sec = time%60;
    
                $('#minute').val(twolength(min));
                $('#second').val(twolength(sec));
                console.log(time, min, sec);
            };

        });

        // 시작하기, 일시중지 버튼 클릭
        startBtn.click(function(){
            if($(this).hasClass('stop')){
                $(this).removeClass('stop');
                $(this).text('시작');
                clearInterval(cron);
            }else{
                $(this).addClass('stop');
                $(this).text('일시정지');

                const minVal = parseInt($('#minute').val()*60);
                const secVal = Number($('#second').val());
                time = minVal + secVal;
                cron = setInterval(updateTimer, 1000);
            }
        });
        
        // 타이머
        function updateTimer(){
            time--;
            let min = parseInt(time/60);
            let sec = time%60;
            $('#minute').val(twolength(min));
            $('#second').val(twolength(sec));
            console.log(time, min, sec);
            if(time < 1){
                clearInterval(cron);
                $(".start_btn").removeClass('stop');
                $(".start_btn").text('시작');
                endModal.show();
                scrollOff();
            };
        };

        // 초기화
        const resetBtn = $(".reset_btn");
        resetBtn.click(function(){
            time = 0;
            let min = parseInt(time/60);
            let sec = time%60;
            $('#minute').val(twolength(min));
            $('#second').val(twolength(sec));
            $(".start_btn").removeClass('stop');
            $(".start_btn").text('시작');
            clearInterval(cron);
        });



    }
    timerJs();

    function stopWatchJs(){



    }
    stopWatchJs();

    function pickNumJs(){

        const pickBtn = $('.tool_page.picknum .pick_btn');
        const reBtn = $('.tool_page.picknum .repick_btn');

        pickBtn.click(function(){
            $('.tool_page .bg').css('display', 'none');
            $('.tool_page .before_pick').css('display','none');
            $('.tool_page .after_pick').css('display','block');
        });
        
        reBtn.click(function(){
            $('.tool_page .bg').css('display', 'block');
            $('.tool_page .before_pick').css('display','block');
            $('.tool_page .after_pick').css('display','none');
        });
    }
    pickNumJs();

    $('.tool_page.ladder .reselt_btn').click(function(){
        $('.group_modal').show();
        scrollOff();
    });

    function selectBox(){
        const selectBox = $('.select_box');
        const selectList = $('.select_box ul');
        const selectClick = $('.select_box li');
        // 셀렉트박스 오픈
        $(document).on('click', '.select_box', function(){
            if($(this).hasClass('open')){
                $(this).removeClass('open');
                $(this).find(selectList).hide();
            }else{
                selectList.hide();
                selectBox.removeClass('open');
                $(this).addClass('open');
                $(this).find(selectList).show();
            };
        });

        // 셀렉트 리스트 클릭
        $(document).on('click', '.select_box li', function(){
          const selectData = $(this).html();
            if($(this).hasClass('select')){
                $(this).removeClass('select');
            }else{
                selectClick.removeClass('select');
                $(this).addClass('select');
                $(this).closest('.select_box').find('.selected').val(selectData);
                $(this).closest('.select_box').find('.selected').html(selectData);
            };
        });
        
        // 외부 영역 클릭
        $(document).mouseup(function (e) {
            if ($('.select_box').has(e.target).length === 0) {
                selectList.stop().hide();
                $('.select_box').removeClass('open');
            };
        });
    }
    selectBox();

    function boardJs(){

        // 캔버스 설정
        const canvas = document.getElementById('canvas');
        const colorBtn = document.querySelectorAll('.select_box.color li');
        canvas.width = window.innerWidth -0;
        canvas.height =707;

        let context = canvas.getContext("2d");
        let start_background_color ="#007D67";
        context.fillStyle = start_background_color;
        context.fillRect(0,0,canvas.width, canvas.height);

        // 펜설정, 컬러 굵기 
        let draw_color ="#fff";
        let draw_width = "5";
        let is_drawing = false;

        // 이전으로 돌리기 // 빈배열을 만든다.
        let restore_array =[];
        let index = -1;

        // 컬러변경
        // function change_color(element){
        //     draw_color = element.style.background;
        // }

        const colors = document.querySelectorAll('.select_box.color li .circle');

        function handColor(event){
            const color = event.target.style.background;
            draw_color = color;
        }

        Array.from(colors).forEach(color =>{
            color.addEventListener('click', handColor);
        });

        canvas.addEventListener("touchstart",start, false);
        canvas.addEventListener("touchmove",draw, false);
        canvas.addEventListener("mousedown",start, false);
        canvas.addEventListener("mousemove",draw, false);

        canvas.addEventListener("touchend",stop, false);
        canvas.addEventListener("mouseup",stop, false);
        canvas.addEventListener("mouseout",stop, false);

        // 이미지 그리는 부분
        function start(event){
            is_drawing = true;
            context.beginPath();
            context.moveTo(event.clientX - canvas.offsetLeft,
                        event.clientY - canvas.offsetTop);
            event.preventDefault();

            // 이전것 저장해두기 // 이벤트가 마우스아웃이 아닐때 마우스가 안에 있을때 위치값 저장.
            if(event.type != 'mouseout'){
                restore_array.push(context.getImageData(0,0,canvas.width, canvas.height));
                index += 1;
            }
            console.log(restore_array);
        };

        function draw(event){
            if(is_drawing){
                context.lineTo(event.clientX - canvas.offsetLeft,
                            event.clientY - canvas.offsetTop);
                context.strokeStyle = draw_color;
                context.lineWidth =draw_width;
                context.lineCap ="round";
                context.lineJoin ="round";
                context.stroke();
            }
        };
        
        function stop(event){
            if (is_drawing){
                context.stroke();
                context.closePath();
                is_drawing =false;
            }
            event.preventDefault();
        };

    }
    boardJs();
});