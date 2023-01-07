$(document).ready(function(){
    
    // 비디오 스크립트
    function sciencePage(){

        // 비디오 모달
        $(document).on('click', '.my_page.scrap .video_list .somenail', function(){
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
    sciencePage();

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

});