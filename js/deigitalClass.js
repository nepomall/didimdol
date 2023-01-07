$(document).ready(function(){

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

    function socialPage(){

        // 체크박스 전체선택
        const allChk = $('#chkAll');
        const chk = $("input[name=chk]");

        allChk.click(function() {
            if(allChk.is(":checked")){
                chk.prop("checked", true);
            }else{
                chk.prop("checked", false);
            };
        });
        
        chk.click(function() {
            var total = $("input[name=chk]").length;
            var checked = $("input[name=chk]:checked").length;
            
            if(total != checked){
                allChk.prop("checked", false);
            }else{
                allChk.prop("checked", true);
            };
        });

        // 스크랩버튼 클릭
        const scrapBtn = $('.table_list .scrap_btn');
        const scrapModal = $('.scrap_modal');
        const modalBtn = $('.scrap_modal .confirm_btn');

        scrapBtn.click(function(){
            if($(this).hasClass('active')){
                $(this).removeClass('active');
            }else{
                $(this).addClass('click');
                scrapModal.show();
                scrollOff();
            };
        });

        modalBtn.click(function(){
            $(".scrap_btn.click").addClass('active');
            $(".scrap_btn.click").removeClass('click');
        });

    }
    socialPage();

    // 비디오 스크립트
    function videoJs(){

        // 비디오 모달
        $(document).on('click', '.deigitalClass_page.science .video_list li', function(){
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

            // function togglePlay(){
            //     if(video.paused){
            //         video.play();
            //         option.bg.classList.add('play');
            //     }else if(video.play){
            //         video.pause();
            //         option.bg.classList.remove('play');
            //     };
            // }

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