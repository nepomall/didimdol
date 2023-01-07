$(document).ready(function () {

    // 단원명 텝
    function tabJs() {

        $(document).on('click', '.unit_tabs .tab', function () {
            $('.unit_tabs .tab').removeClass('active');
            $(this).addClass('active');
        });

        $(document).on('click', '.list_wrap .tab', function () {
            $('.list_wrap .tab').removeClass('active');
            $(this).addClass('active');
        });

        // 수업만들기 텝
        $('.list_wrap .content').hide();
        $('.list_wrap .content').eq(0).show();
        $(document).on('click', '.list_wrap .tab', function () {
            let idx = $(this).index();
            console.log(idx);

            $('.list_wrap .tab').removeClass('active');
            $(this).addClass('active');
            $('.list_wrap .content').hide();
            $('.list_wrap .content').eq(idx).show();
        });

    }
    tabJs();

    // 스크랩버튼 클릭
    function scrapJs() {

        const scrapBtn = $('.video_info .scrap');
        const scrapModal = $('.scrap_modal');
        const modalBtn = $('.scrap_modal .confirm_btn');

        scrapBtn.click(function () {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
            } else {
                $(this).addClass('click');
                scrapModal.show();
                scrollOff();
            };
        });

        modalBtn.click(function () {
            $(".scrap.click").addClass('active');
            $(".scrap.click").removeClass('click');
        });

    }
    scrapJs();

    // 비디오 스크립트
    function videoJs(){

        // 비디오 모달
        $(document).on('click', '.classPlus_data_page .video_play .somenail', function(){
            $('.video_modal').show();
            scrollOff();
        });

        $(document).on('click', '.classPlus_data_page .video_btn', function(){
            $('.video_modal').show();
            scrollOff();
        });

        const videoModal = document.querySelectorAll('.video_modal');
        
        videoModal.forEach((items) => {
            const video = items.querySelector('.science_video');
            const option = {
                btn : items.querySelector('.play_btn'),
                bg : items.querySelector('.play_bg')
            };

            video.addEventListener('ended', () =>{
                option.bg.classList.remove('play');
            });

            option.btn.addEventListener('click', () => {
                video.play();
                option.bg.classList.add('play');
            });

            video.addEventListener('pause', (event) => {
                console.log('멈춤');
                option.bg.classList.remove('play');
            });
            
        });

    }
    videoJs();

});