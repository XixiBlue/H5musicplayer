//播放列表模块
(function($,root){
    var $playList = $('<div class="play-list">'+
                    '<div class="head">播放列表</div>'+
                    '<ul class="play-list-wrap"></ul>'+
                    '<div class="close-btn">关闭<div>'
                    +'</div>');
    var $scope = $(docuemnt.body);
    function render(data){
        var html = '';
        for(var i = 0; i < data.length; i++){
            html += '<li><h3>'+data[i].song+'-<span>'+data[i].singer+'</span></h3></li>';
        }
        $playList.find('play-list-wrap').html(html);
        $scope.append('$playList');
    }
    root.playList = {
        render: render
    }
}(window.Zepto, window.player||(window.player={})))