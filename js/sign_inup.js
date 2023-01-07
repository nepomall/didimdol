$(document).ready(function () {

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

    // 체크박스 전체선택
    function chkJs() {

        const allChk = $('#chkAll');
        const chk = $("input[name=chk]");

        allChk.click(function () {
            if (allChk.is(":checked")) {
                chk.prop("checked", true);
            } else {
                chk.prop("checked", false);
            };
        });

        chk.click(function () {
            var total = $("input[name=chk]").length;
            var checked = $("input[name=chk]:checked").length;

            if (total != checked) {
                allChk.prop("checked", false);
            } else {
                allChk.prop("checked", true);
            };
        });

    }
    chkJs();

    // 약관동의 어코디언
    function termAccrod(){

        $('.switch_btn').click(function(){
            if($(this).hasClass('active')){
                $(this).removeClass('active');
                $(this).closest('li').find('.term_text').slideUp(300);
            }else{
                $(this).addClass('active');
                $(this).closest('li').find('.term_text').slideDown(300);
            }
        });

    }
    termAccrod();

    // 교사인증 페이지
    function teacherVerify(){

        // 파일 업로드
        $("#document_file").on('change', function () {
            var fileName = $("#document_file").val();
            $(".documentChk_modal .upload_name").val(fileName);
        });

        // 서류인증 모달
        const documentChk = {
            btn : $(".sign_page.up.teacher .verify_box .document"),
            modal : $(".documentChk_modal")
        };

        documentChk.btn.click(function(){
            documentChk.modal.show();
            scrollOff();
        });

        // 다음에 인증 모달
        const nextChk = {
            btn : $(".sign_page.up.teacher .cancel_btn"),
            modal : $(".nextChk_modal")
        };

        nextChk.btn.click(function(){
            nextChk.modal.show();
            scrollOff();
        });

    }
    teacherVerify();
    
});