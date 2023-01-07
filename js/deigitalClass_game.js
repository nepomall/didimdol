$(document).ready(function(){

    function scrollOff() {
        $('body').addClass('scrollOff').on('scroll touchmove mousewheel', function (e) {
            e.stopPropagation();
        });
    };

    function gamePageJs(){

        // 게임 가이드 모달 열기,닫기
        $('.deigitalClass_game .help_btn').click(function(){
            $('.deigitalClass_game').addClass("guideShow");
        });

        $('.guide_close').click(function(){
            $('.deigitalClass_game').removeClass("guideShow");
        });

        // 힌트모달
        $(".deigitalClass_game .hint_btn").click(function(){
            $(".deigitalClass_game  .hint_box").show();
        });

        $(".deigitalClass_game .hint_box .close_btn").click(function(){
            $(".deigitalClass_game  .hint_box").hide();
        });

        // 도현변경 모달
        const change = {
            btn : $(".change_btn"),
            modal : $(".change_modal")
        };

        change.btn.click(function(){
            change.modal.show();
            scrollOff();
        });

        // 슬라이드
        let gameSwiper = new Swiper('.game_slide', {
            slidesPerView: 'auto',
            allowTouchMove: false,
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
        });

        const choiceSwiper = new Swiper('.choice_slide', {
            slidesPerView: 3,
            // slidesPerColumn: 2,
            // slidesPerGroup :2,
            grid:{
                rows:2
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });

        // 드래그 앤 드롭
        const dragAndDrops = document.querySelectorAll(".dragAndDrop");
        dragAndDrops.forEach((item) => {
            new Sortable(item, {
                group: "shared",
                animation: 150,
                ghostClass: "blue-background-class",
                draggable: ".canDrag"
            });
        });

        // 삭제 버튼
        $(document).on('click', '.swiper-slide .delete_btn', function(){
            const dragAdd = $(this).closest('.swiper-slide').addClass('canDrag');
            const removeBox = dragAdd.clone();
            $(this).closest('.swiper-slide').remove();
            removeBox.appendTo('.game_slide .swiper-wrapper');
            let boxNum = screen.childElementCount;

            if(boxNum == 0){
                document.querySelector('.game_place span').style.display = "block";
            };
            if(boxNum <= 1){
                document.querySelector('.bottom_area .compare_btn').disabled = true;
            };
            if(boxNum <= 2){
                $('.game_slide .swiper-slide').addClass('canDrag');
            };
        });

        // 구분선 텝
        $(".game_place .tab").click(function(){
            $(this).closest('.tabs').find('.tab').removeClass('active');
            $(this).addClass('active');
        });

        $(document).on("click", ".deigitalClass_game.gradeTwo.chess .card", function(){
            $(".game_place span").css('display','none');
            $(".game_place .board").css('display','block');
        });

        // 분수
        $(".deigitalClass_game .game_wrap .click_area li").click(function(){
            $('.deigitalClass_game .game_wrap .click_area li').removeClass('active');
            $(this).addClass('active');
        });

        // 평면도형 선택 탭
        const tabBtn = $('.tabs.change .tab');

        tabBtn.click(function(){
            tabBtn.removeClass('active');
            $(this).addClass('active');
        });

        // 평면도형 선택
        $(document).on('click', '.choice_slide .swiper-slide', function(){
            $('.choice_slide .swiper-slide').removeClass('active');
            $(this).addClass('active');
        });

        // 각기둥 텝
        const prismTab = $('.deigitalClass_game.gradeSix .tabs .tab');
        const switchTab = $('.switch .tab');
        prismTab.click(function(){
            prismTab.removeClass('active');
            $(this).addClass('active');
        });

        switchTab.click(function(){
            $(this).closest('.switch').find('.tab').removeClass('active');
            $(this).addClass('active');
        });
        
        const switchOn = $('.switch .on');
        switchOn.click(function(){
            $(this).closest('.switch_wrap').find('.on_info').fadeIn(200);

            setTimeout(function(){
                $('.on_info').fadeOut(200);
            }, 2000);
        });

        // 각기둥 전개도 레인지
        $('input[type=range]').on('input', function(){
            var val = $(this).val();
            $(this).css('background', 'linear-gradient(to right, #FF9D54 0%, #FF9D54 '+ val +'%, #FFE7D5 ' + val + '%, #FFE7D5 100%)');
        });

    }
    gamePageJs();

});