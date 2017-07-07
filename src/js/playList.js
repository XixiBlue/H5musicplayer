//播放列表模块
(function($,root){
    var $playList = $('<div class="play-list">'+
                    '<div class="head">播放列表</div>'+
                    '<ul class="play-list-wrap"></ul>'+
                    '<div class="close-btn">关闭<div>'
                    +'</div>');
    var $scope = $(document.body);
    var controlManager;
    function render(data){
        var html = '';
        var len = data.length;
        for(var i = 0; i < len; i++){
            html += '<li><h3>'+data[i].song+'-<span>'+data[i].singer+'</span></h3></li>';
        }
        $playList.find('.play-list-wrap').html(html);
        $scope.append($playList);
        bindEvent();
    }
    //绑定事件
    function bindEvent(){
        $playList.find('.close-btn').on('click',function(){
            $playList.removeClass('show');
        })
        $playList.find('ul li').on('click', function (){
             var index = $(this).index();
             controlManager.index = index;
             $scope.trigger('play:change', [index, true]);
             singSong(index);
             $scope.find('.play-btn').addClass('playing');
             setTimeout(function() {
                 $playList.removeClass('show');
             }, 500);
        })
    }
    //标记歌曲
    function singSong(index){
        $playList.find('li').removeClass('playing');
        $playList.find('li').eq(index).addClass('playing');
    }
    //显示播放列表
    function show(control){
        controlManager = control;
        var index = controlManager.index;
        singSong(index);
        $playList.addClass('show');
    }
    root.playList = {
        render: render,
        show: show,
        singSong: singSong
    }
}(window.Zepto, window.player||(window.player={})))