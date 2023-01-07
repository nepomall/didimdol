document.addEventListener('DOMContentLoaded', () => {
    
    // body 스크롤 막음
    function scrollOff() {
        $('body').addClass('scrollOff').on('scroll touchmove mousewheel', function (e) {
            e.stopPropagation();
        });
    };
    // body 스크롤 풀기
    function scrollOn() {
        $('body').removeClass('scrollOff').off('scroll touchmove mousewheel');
    };

    // 퀴즈만들기 step1 js
    function makeStepOne(){
        
        let emptyObj = {
            a : "",
            b : "",
            c : "",
            d : ""
        };

        const choice = {
            sub : $('.subject .choice'),
            grade : $('.grade .choice'),
            semester : $('.semester .choice')
        };

        const quizTitle = $('.quiz_title input');

        const next = {
            btn : $('.stepOne .next_btn'),
            modal : $('.essential_modal')
        };

        choice.sub.click(function(){
            emptyObj.a = $(this).data();
        });

        choice.grade.click(function(){
            emptyObj.b = $(this).data();
        });

        choice.semester.click(function(){
            emptyObj.c = $(this).data();
        });

        quizTitle.keyup(function(){
            emptyObj.d = quizTitle.val();
            console.log(emptyObj);
        })

        $('.option_box .choice').click(function(){
            $(this).closest('ul').find('.choice').removeClass('active');
            $(this).addClass('active');
            console.log(emptyObj);
        });

        next.btn.click(function(){
            if(emptyObj.a !== "" && emptyObj.b !== "" && emptyObj.c !== "" && emptyObj.d !== ""){
                location.href='d_quiz_make_stepTwo.html';
            }else{
                next.modal.show();
                scrollOff();
            };
        });

    }
    makeStepOne();

    // 퀴즈만들기 step2 js
    function makeStepTwo(){

        //텝
        $('.make_wrap .content').hide();
        $('.make_box').each(function(){
            $(this).find('.content').eq(0).show();
            $(this).find('.tab').eq(0).addClass("active");
        });

        $(document).on('click', '.make_wrap .tab', function(){
            // const changeModal = $('.typeChange_modal');
            // scrollOff();
            // const changeNow = $('.typeChange_modal .confirm_btn');
            // changeModal.show();
            let idx = $(this).index();
            console.log(idx);

            $(this).closest('.make_box').find('.tab').removeClass('active');
            $(this).addClass('active');
            $(this).closest('.make_box').find('.content').hide();
            $(this).closest('.make_box').find('.content').eq(idx).show();

            if(!$(this).hasClass('ox')){
                $(this).closest('.make_box').find('.question_wrap').css('border-radius','10px 10px 10px 10px');
            }else{
                $(this).closest('.make_box').find('.question_wrap').css('border-radius','0px 10px 10px 10px');
            };

            if($(this).hasClass('ox')){
                $(this).closest('.make_box').removeClass('short_answer');
                $(this).closest('.make_box').removeClass('shape');
                $(this).closest('.make_box').removeClass('matching');
                $(this).closest('.make_box').removeClass('multiple');
            };

            if($(this).hasClass('multiple')){
                $(this).closest('.make_box').removeClass('short_answer');
                $(this).closest('.make_box').removeClass('shape');
                $(this).closest('.make_box').removeClass('matching');
                $(this).closest('.make_box').addClass('multiple');
            };

            if($(this).hasClass('short_answer')){
                $(this).closest('.make_box').removeClass('shape');
                $(this).closest('.make_box').removeClass('matching');
                $(this).closest('.make_box').removeClass('multiple');
                $(this).closest('.make_box').addClass('short_answer');
            };

            if($(this).hasClass('shape')){
                $(this).closest('.make_box').removeClass('short_answer');
                $(this).closest('.make_box').removeClass('matching');
                $(this).closest('.make_box').removeClass('multiple');
                $(this).closest('.make_box').addClass('shape');
            };

            if($(this).hasClass('matching')){
                $(this).closest('.make_box').removeClass('short_answer');
                $(this).closest('.make_box').removeClass('shape');
                $(this).closest('.make_box').removeClass('multiple');
                $(this).closest('.make_box').addClass('matching');
            };

        });

        // 이전 단계 이동 모달
        const goBack = {
            btn : $('.goBack_btn'),
            modal : $('.goBack_modal')
        };

        goBack.btn.click(()=>{
            goBack.modal.show();
            scrollOff();
        });

        // 문제 삭제 모달
        const del = {
            btn : $('.make_box .delete_btn'),
            modal : $('.quizDelete_modal')
        };

        del.btn.click(()=>{
            del.modal.show();
            scrollOff();
        });
        
    }
    makeStepTwo();

    // 라이브러리 js
    function library(){

        // 문제 저장하기 모달
        const save = {
            btn : $('.library .save_btn'),
            modal : $('.saveComplete_modal')
        };

        save.btn.click(function(){
            save.modal.show();
            scrollOff();
        });

    }
    library();

    // 마이퀴즈 js
    function myQuiz(){

        // 텝
        $('.d_quiz_page.my .tab').click(function(){
            $('.d_quiz_page.my .tab').removeClass('active');
            $(this).addClass('active');
        });

        // 문제 삭제 모달
        const del = {
            btn : $('.my .delete_btn'),
            modal : $('.quizDelete_modal')
        };

        del.btn.click(()=>{
            del.modal.show();
            scrollOff();
        });

    }
    myQuiz();

    // 플레이모달 js
    function playModalJs(){

        // 모달 오픈
        const play = {
            btn : $('.play_btn'),
            modal : $('.play_modal.teacher.start')
        };

        play.btn.click(function(){
            play.modal.show();
            scrollOff();
        });

        // 매칭형 플레이 모달 슬라이드
        let sliderWrap = document.querySelectorAll('.example_box .slide_wrap');

        sliderWrap.forEach((item, idx) =>{
            let slide = item.querySelector('.example_slide');
            slide.classList.add('slider-' + idx);

            let exampleSwiper = new Swiper('.slider-' + idx + '.example_slide', {
                slidesPerView: 'auto',
                allowTouchMove: false,
                freeMode : true,
                mousewheel: true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
        });

        // 드래그 앤 드롭
        const dragAndDrops = document.querySelectorAll(".dragAndDrop");
        dragAndDrops.forEach((item) => {
            new Sortable(item, {
                group: "shared",
                animation: 150,
                ghostClass: "blue-background-class",
            });
        });

        const answerDrop = document.querySelectorAll('.play_page.student.matching .correct_box');
        answerDrop.forEach((items, idx) => {
            items.addEventListener('DOMNodeInserted', () => {
                items.classList.add('put');
            });

            items.addEventListener('DOMNodeRemoved', () => {
                let boxNum = items.querySelectorAll('.put span').length;
                let zero = boxNum - 1;
                console.log(boxNum);
                if(zero === 0){
                    items.classList.remove('put');
                }
            });
        });



        // 선생님화면 플레이 완료 모달 레이아웃 변경
        const king = {
            medal : $(".play_page.complete .medal_box"),
            list : $(".play_page.complete .quiz_king"),
            btn : $('.play_page.complete .open_btn'),
            chk : $('.play_page.complete .confirm_box'),
            txt : $('.play_page.complete .last_comment'),
            btnWrap : $('.play_page.complete .button_wrap')
        };

        king.btn.click(function(){
            king.medal.css('display','none');
            king.btn.css('display','none');
            king.list.css('display','block');
            king.chk.css('display','flex');
            king.txt.addClass('active');
            king.btnWrap.addClass('active');
        });
        
        // 선생님화면 문항별 오답률 모달
        const rate = {
            btn : $('.play_page.complete .confirm_btn'),
            modal : $('.answer_rate_modal')
        };

        rate.btn.click(function(){
            rate.modal.show();
            scrollOff();
        });

        // 학생화면 ox
        $(document).on('click', '.play_page.student.ox .question .icon_box', function(){
            $('.play_page.student.ox .question .icon_box').removeClass('correct');
            $(this).addClass('correct');
            centerBtn.attr('disabled', false);
        });

        // 학생화면 선다형 보기 선택
        const exampleBox = document.querySelectorAll('.play_page.student.multiple .example_list');
        exampleBox.forEach((items, idx) => {
            const exampleList = items.querySelectorAll('li');
            exampleList.forEach((item, index) => {
                item.addEventListener('click', () => {
                    if(item.classList.contains('correct')){
                        item.classList.remove('correct');
                    }else{
                        item.classList.add('correct');
                    };

                    let choiceLi = items.querySelectorAll('.correct');
                    let num = choiceLi.length;
                    console.log(num);
                    if(num > 0){
                        centerBtn.attr('disabled', false);
                    }else{
                        centerBtn.attr('disabled', true);
                    };
                });
            });
        });

        // 학생화면 단답, 초성형 정답입력
        const studentShort = document.querySelectorAll('.play_page.student');
        studentShort.forEach((modal) => {
            const answerInput = modal.querySelectorAll('.answer_box input');
            const submitBtn = modal.querySelector('.submit_btn');

            answerInput.forEach((items) => {
                items.addEventListener('keyup', e => {
                    if(!!e.target.value > 0){
                        submitBtn.disabled = false;
                    }else{
                        submitBtn.disabled = true;
                    }
                });
            });
        });

        // 학생화면 플레이 준비 레이아웃 변경
        const readyBtn = $('.play_page.student .ready_btn');
        const centerBtn = $('.play_page.student .center_btn');
        const nickName = document.querySelector('.play_page.student .prepare_box input');
        let nameValue = "";

        nickName.addEventListener('keyup', e => {
            if(!!e.target.value > 0){
                nameValue = nickName.value;
                console.log(nameValue);
                readyBtn.attr('disabled', false);
            }else{
                readyBtn.attr('disabled', true);
            }
        });

        readyBtn.click(function(){
            readyBtn.css('display','none');
            $('.prepare_box.before').css('display','none');
            $('.prepare_box.after').css('display','block');
        });


    }
    playModalJs();
});
