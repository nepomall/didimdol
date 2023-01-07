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

    function editModalJs(){

        const btn = {
            cancel : $('.share_page.edit .cancel_btn'),
            regist : $('.share_page.edit .regist_btn'),
            delete : $('.share_page .delete_btn')
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