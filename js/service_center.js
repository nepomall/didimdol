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

    function faqJs(){

        // 어코디언
        const accTitle = $('.faq_title');

        accTitle.click(function(){
            if($(this).hasClass('active')){
                $(this).removeClass('active');
                $(this).closest(".accordion").find('.faq_answer').slideUp(300);
            }else{
                $(this).addClass('active');
                $(this).closest(".accordion").find('.faq_answer').slideDown(300);
            };
        });

        // 텝
        $('.service_page.faq .content').hide();
        $('.service_page.faq .content').eq(0).show();

        $('.service_page.faq .tab').click(function(){
            let idx = $(this).index();
            console.log(idx);

            $('.service_page.faq .tab').removeClass('active');
            $(this).addClass('active');
            $('.service_page.faq .content').hide();
            $('.service_page.faq .content').eq(idx).show();
        });
    }
    faqJs();

    function editModalJs(){

        const btn = {
            cancel : $('.service_page .cancel_btn'),
            regist : $('.service_page .regist_btn'),
            delete : $('.service_page.data.detail .delete_btn')
        };

        const modal = {
            cancel : $('.cancel_modal'),
            regist : $('.registComplete_modal'),
            delete : $('.delete_modal')
        };

        btn.cancel.click(function(){
            modal.cancel.show();
            scrollOff();
        });

        btn.regist.click(function(){
            modal.regist.show();
            scrollOff();
        });

        btn.delete.click(function(){
            modal.delete.show();
            scrollOff();
        });
    }
    editModalJs();


});