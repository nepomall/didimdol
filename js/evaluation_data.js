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

    // 평가자료 어코디언
    function accordJs(){

        $(document).on('click', '.accordion_wrap .subject_title', function(){
            if($(this).hasClass('active')){
                $(this).removeClass('active');
                $(this).closest('li').find('.sec_depth').slideUp(300);
            }else{
                $('.accordion_wrap .sec_depth').slideUp(300);
                $('.accordion_wrap .subject_title').removeClass('active');
                $(this).addClass('active');
                $(this).closest('li').find('.sec_depth').slideDown(300);
            };
        });
    
        $(document).on('click', '.accordion_wrap .sec_depth li', function(){
            $('.accordion_wrap .sec_depth li').removeClass('active');
            $(this).addClass('active');
        });

    }
    accordJs();

    // 단원명 텝
    function tabJs(){

        $(document).on('click','.unit_tabs .tab', function(){
            $('.unit_tabs .tab').removeClass('active');
            $(this).addClass('active');
        });
        
    }
    tabJs();
    
    // 오류 신고
    function erroDeclaration(){

        // 모달 열기
        const error = {
            btn : $('.evaluation_data_page .error_btn'),
            modal : $('.errorModify_modal')
        };
    
        error.btn.click(function(){
            error.modal.show();
            scrollOff();
        });

        // 모달 등록버튼 활성화
        // let obj = {
        //     a : "",
        //     b : "",
        //     c : "",
        //     d : "",
        //     e : "",
        // };

    }
    erroDeclaration();

    // 스크랩버튼 클릭
    function scrapJs(){

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
    scrapJs();

    // 체크박스 전체선택
    function chkJs(){

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

    }
    chkJs();

    // 문제은행
    function problemBank(){

        // 팁모달
        $(".problem_bank_page .tip_btn").click(function(){
            $(".problem_bank_page").addClass('tipshow');
        });

        $(".problem_bank_page .tip_close").click(function(){
            $(".problem_bank_page").removeClass('tipshow');
        });

        // 문제 불러오기 모달
        const load = {
            btn : $(".problem_bank_page .load_btn"),
            modal : $(".problemLoad_modal")
        };

        load.btn.click(function(){
            load.modal.show();
            scrollOff();
        });

        const choiceBtn = $(".problemLoad_modal .tab");

        choiceBtn.click(function(){
            $(this).toggleClass('active');
        });

    }
    problemBank();
});