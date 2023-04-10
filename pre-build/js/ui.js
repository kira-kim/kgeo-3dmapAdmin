$(document).ready(function(){

    // a, button태그 title 속성 비어있을때 작성된text로 title 생성
    $('a, .btn').each(function(){
        let Tag = $(this);
        let attr = Tag.text();
        if ($(this).is('[title]')) {
        } else {
            Tag.attr("title",attr);
        }
    });

    // 탭
    $('.tabList > li').on('click',function(){
        listIdx = $(this).index();
        var $this = $(this);
        var $tabBox = $this.closest('.tabCont');

        $this.addClass('active');
        $this.siblings('.active').removeClass('active');

        $tabBox.find('.tabBox > div.active').removeClass('active');
        $tabBox.find('.tabBox > div').eq(listIdx).addClass('active');
    });

    // 팝업 드래그
    $('.popup').draggable({
        cancel: '.popupCont',
        containment: "window"
    });

    //팝업 닫기
    $('.popup .cloBtn').on('click',function(){
        $(this).closest('.popup').hide();
    });

    // 눈 꺼켜
    $('.depsSwitch').on('click',function(){
        if($(this).hasClass('active')){
            $(this).removeClass('active')
        }else{
            $(this).addClass('active')
        }
    });

    // 플마 제어
    $('.depsCon').on('click',function(){
        if($(this).hasClass('active')){
            $(this).removeClass('active')
        }else{
            $(this).addClass('active')
        }
    });

    // 초기설정 팝업 slideup
    $('.layerDep li p').on('click', function(){
		$(this).removeAttr('href');
		var element = $(this).closest('li');
		if (element.hasClass('open')) {
			element.removeClass('open');
			element.find('li').removeClass('open');
			element.find('ul').slideUp(200);
		}
		else {
			element.addClass('open');
			element.children('ul').slideDown(200);
			// element.siblings('li').children('ul').slideUp(200);
			// element.siblings('li').removeClass('open');
			// element.siblings('li').find('li').removeClass('open');
			// element.siblings('li').find('ul').slideUp(200);
		}
	});

});
