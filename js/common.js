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

    // 모달 닫기 스크립트------
    const modalWrap = document.querySelectorAll('.modal_wrap');
    modalWrap.forEach((item) => {
        const closeBtn = item.querySelectorAll('.close_btn');
    
        closeBtn.forEach((items) => {
            items.addEventListener('click', () => {
                $(item).hide();
                scrollOn();
            });
        });
    });

    // 서브페이지 선택
    $('.choice_wrap .choice_btn').click(function(){
        if($(this).hasClass('active')){
            $(this).removeClass('active');
        }else{
            $(this).closest('.choice_box').find('.choice_btn').removeClass('active');
            $(this).addClass('active');
        };
    });

    // 사이드메뉴
    function sideMenuJs(){

        const normalGnb = $('.side_gnb>li');
        const toolBtn = $('.side_gnb .tool');

        // 기본gnb 호버
        normalGnb.on('mouseover', function(){
            const stopHover = $(this).hasClass('clicked');
            if(!stopHover){
                $(this).addClass('hover');
            };
        });

        normalGnb.on('mouseout', function(){
            $(this).removeClass('hover');
        });

        // 수업도구 클릭
        toolBtn.click(function(){
            if($(this).hasClass('clicked')){
                $(this).removeClass('clicked');
            }else{
                $(this).addClass('clicked');
                $(this).removeClass('hover');
            }
        });

        $(document).mouseup(function (e) {
            if (toolBtn.has(e.target).length === 0) {
                toolBtn.removeClass('clicked');
            };
        });

        // 상단이동
        $('.side_menu .top_btn').click(function() {
            $('html, body').animate({scrollTop : 0}, 400);
            return false;
        });

        // 사이드버튼 열기
        const sideMenu = $('.side_menu');
        const openBtn = $('.open_btn');

        openBtn.click(function(){
            if(sideMenu.hasClass('open')){
                sideMenu.removeClass('open');
                sideMenu.addClass('normal');
            }else if(sideMenu.hasClass('normal')){
                sideMenu.removeClass('normal');
                sideMenu.addClass('open');
            };
            
            $('.top_btn').css('opacity','0');
            $('.login_part').css('opacity','0');
            $('.side_gnb').css('opacity','0');
            setTimeout(function(){
                $('.side_gnb').css('opacity','1');
                $('.login_part').css('opacity','1');
                $('.top_btn').css('opacity','1');
            }, 800);
        });

        // 수업도구 버튼 페이지 이동 스크립트
        let fileName = document.URL.split("/");
        let file = [fileName[fileName.length - 2], fileName[fileName.length - 1]];
        let fileRoute = [
        "classPlus_data",
        "d_quiz",
        "default",
        "digitalClass_data",
        "evaluation_data",
        "share",
        "sign_inup",
        ];
        let dot = fileRoute.includes(file[0]) ? "../" : "";
        
        $('.side_gnb .tool').click(function(){
            if(!sideMenu.hasClass('normal')){
                alert('이동가능');
                location.href= dot+'index.html';
            };
        });

    }
    sideMenuJs();

    function newSelectBox(){

        $(".custom_select").each(function () {
            let classes = $(this).attr("class"),
                id = $(this).attr("id"),
                name = $(this).attr("name");
            let template = '<div class="' + classes + '">';
            template +=
                '<span class="custom_select_trigger">' +
                $(this).attr("placeholder") +
                "</span>";
            template += '<div class="custom_options">';
            $(this)
                .find("option")
                .each(function () {
                    template +=
                        '<span class="custom_option ' +
                        $(this).attr("class") +
                        '" data-value="' +
                        $(this).attr("value") +
                        '">' +
                        $(this).html() +
                        "</span>";
                });
            template += "</div></div>";

            $(this).wrap('<div class="custom_select_wrapper"></div>');
            $(this).hide();
            $(this).after(template);
        });

        $(".custom_select_trigger").on("click", function () {

            const wrap = $(this).parent('.custom_select');
            $('.custom_select').not(wrap).removeClass('opened');

            $("html").one("click", function () {
                $(".custom_select").removeClass("opened");
            });

            $(this)
                .parents(".custom_select")
                .toggleClass("opened");

            event.stopPropagation();
        });

        $(".custom_option").on("click", function () {
            $(this)
                .parents(".custom_select_wrapper")
                .find("select")
                .val($(this).data("value"));
            $(this)
                .parents(".custom_select_wrapper")
                .addClass("valueOn");
            $(this)
                .parents(".custom_options")
                .find(".custom_option")
                .removeClass("selection");
            $(this).addClass("selection");
            $(this)
                .parents(".custom_select")
                .removeClass("opened");
            $(this)
                .parents(".custom_select")
                .find(".custom_select_trigger")
                .text($(this).text());
        });

    }
    newSelectBox();

});