$(document).ready(function(){

    //메인슬라이드
    function mainSliderJs(){

        //프로그래스
        const progressBar = document.querySelector(".main_slider .progress");
        progressBar.addEventListener("animationend", myEndFunction);
        function myEndFunction() {
            mainSwiper.slideNext();
            progressBar.style.animation = "none";
            void progressBar.offsetWidth;
            progressBar.style.animation = null;
        }

        //슬라이드
        let last = $('.swiper-slide').length;
        let mainSwiper = new Swiper(".main_slider", {
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            loop:true,
            speed: 1000,
            // touchRatio: 0,
            on:{
                activeIndexChange: function(){
                    //프로그래스
                    progressBar.style.animation = "none";
                    void progressBar.offsetWidth;
                    progressBar.style.animation = null;

                    //페이지 숫자 출력
                    let nowIndex = this.realIndex + 1;
                    let afterIndex = nowIndex + 1;
                    console.log(nowIndex, afterIndex, last);

                    $('.page_num .now').text(nowIndex);
                    if(last == nowIndex){
                        $('.page_num .after').text("1");
                    }else{
                        $('.page_num .after').text(afterIndex);
                    };
                }
            },
        });

        //자동재생 컨트롤
        $('.main_slider .autoplay').click(function(){
            if($(this).hasClass('play')){
                $(this).removeClass('play');
                $(this).css('background','url(../img/icon/icon_slide_play.svg) no-repeat center center / contain');
                progressBar.style.animationPlayState = "paused";
                mainSwiper.autoplay.stop();
            }else{
                $(this).addClass('play');
                $(this).css('background','url(../img/icon/icon_stop.svg) no-repeat center center / contain');
                progressBar.style.animationPlayState = "running";
                mainSwiper.autoplay.start();
            };
        });

    }
    mainSliderJs();

    // 비디오 스크립트
    function scienceVideo(){

        const video = document.querySelector('.science_video');
        const option = {
            btn : document.querySelector('.play_btn'),
            scrBg : document.querySelector('.play_bg'),
        };
        
        // 비디오 재생
        option.btn.addEventListener('click', () => {
            video.play();
            option.btn.classList.add('play');
            option.scrBg.classList.add('play');
        });

        // 비디오 정지
        video.addEventListener('click', () => {
            video.pause();
            option.btn.classList.remove('play');
            option.scrBg.classList.remove('play');
        });

        // 비디오 끝
        video.addEventListener('ended', () => {
            option.scrBg.classList.remove('play');
            option.btn.classList.remove('play');
        });

    }
    scienceVideo();

});