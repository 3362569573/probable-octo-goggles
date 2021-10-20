$(function () {
    // 点击qh 切换12345
    $('.qh>div').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
      $('.rule-bjz li').eq($(this).index()).show().siblings().hide();

    })

    // 首页头部点击切换到了相应的页面
    $('.head').click(function () {
        $('.bigbox').fadeOut();
        $('#layert').fadeIn();
        $('.box-rule').fadeIn();
    })
    // 点击规则弹成的x隐藏
    $('#rule-x').click(function () {
        $('#layert').fadeOut()
    })
    // 点击规则说明的返回首页
    $('.arrows').click(function () {
        $(this).fadeOut()
        $('.bigbox').fadeIn();
    })
    // 点击规则说明生成海报跳转到切换12345页面
    $('.poster').click(function () {
        $('.box-rule11').fadeOut();
        $('.zjx').fadeIn();
        $('.rule-bjz').addClass('active');
        $('.picture').addClass('active');
        $('.camera').show();
        $('.box-rule').removeClass("dn");
        $('.box-rule>div').removeClass("dn");
    })
    // 点击规则说明弹出规则
    $('.gzsm').click(function () {
        $('#layert').fadeIn()
    })
    // 点击相机触发input的点击事件
    $('.camera').click(function () {
        $('.file1').click();
    })
    // 点击input之后触发上传图片的函数
    $('.file1').change(function () {
        rmm();
    })

    // 上传图片的函数
    function rmm() {
        //获取用户上传的文件
        var files = $('.file1')[0].files
        //判断用户是否上传文件
        if (files.length <= 0) {
            return alert("请选择要上传的文件!");
        }
        //下面的操作 目的 : 将文件上传到服务器
        var fd = new FormData();
        fd.append('avatar', files[0]);
        $.ajax({
            type: 'post',
            url: 'http://www.liulongbin.top:3006/api/upload/avatar',
            data: fd,
            contentType: false,
            // 不对 FormData 中的数据进行 url 编码，而是将 FormData 数据原样发送到服务器
            processData: false,
            success: function (res) {
                if (res.status == 200) {
                    $('.picture-img').attr('src', 'http://www.liulongbin.top:3006' + res.url);
                } else {
                    console.log("添加文件失败!");
                }
            }
        })
    }

    // 获取元素
    var box = document.querySelector('.picture');
    var move = document.querySelector('.picture-img');

    var startY = 0;
    var startX = 0;
    var y = 0;
    var x = 0;
    // 给小盒子绑定touchstart事件
    move.addEventListener('touchstart', function (e) {
        console.log(22);
        startY = e.targetTouches[0].pageY;
        startX = e.targetTouches[0].pageX;
        x = this.offsetLeft;
        y = this.offsetTop;
    })
    // 给小盒子绑定touchmove事件
    move.addEventListener('touchmove', function (e) {
        console.log(11);
        var moveX = e.targetTouches[0].pageX - startX + x;
        var moveY = e.targetTouches[0].pageY - startY + y;
        if (moveX <= 0) {
            moveX = 0;
        }
        if (moveY <= 0) {
            moveY = 0;
        }
        if (moveX >= box.offsetWidth - move.offsetWidth) {
            moveX = box.offsetWidth - move.offsetWidth;
        }
        if (moveY >= box.offsetWidth - move.offsetHeight) {
            moveY = box.offsetWidth - move.offsetHeight;
        }
        // 最后给this也就是小盒子加上left 和top值
        this.style.left = moveX + 'px';
        this.style.top = moveY + 'px';
    })


    // 点击确认上传跳转到排行榜分享页面
    $('.affirm').click(function () {
        $('.rule-bjz').children().removeClass('animate')
        var files = $('.file1')[0].files
        // 判断用户有没有上传图片不然不让进入保存页
        if (files.length <= 0) {
            alert('请点击相机上传图片')
            return false
        }
        // 使用插件截图
        console.log(document.querySelector(".picture .active"));
        html2canvas(document.querySelector(".picture.active"), {
            useCORS: true,
        }).then(canvas => {

            // document.body.appendChild(canvas)
       
            $('.save-1 .picture').append(canvas);
            console.log(5456);
        });

        // html2canvas(document.querySelector(".rule-bjz"), {
        //     useCORS: true,
        // }).then(canvas => {
        //     // document.body.appendChild(canvas)
        //     $('.save-1').append(canvas);
        //     console.log(canvas);
        // });

        $('.box-rule').fadeOut();
        $('.save-1').fadeIn();
    })
    // 点击排行榜按钮跳转到排行榜页面
    $('.ranking').click(function () {
        $('.save-1').fadeOut();
        $('.phb').fadeIn();
    })
    // 点击排行榜的弹x隐藏弹
    $('.xx').click(function () {
        $('.phb-ball').fadeOut();
    })
    // 定义排行榜的数据
    var arr = [{
            img: 'img/head1.png',
            name: '微信昵称',
            champion: 'img/champion.png',
            figure: 128,
            heart: 'img/bloue-heart.png',
            heart1: 'img/love-heart.png',
        },
        {
            img: 'img/head2.png',
            name: '微信昵称',
            champion: 'img/champion2.png',
            figure: 105,
            heart: 'img/bloue-heart.png',
            heart1: 'img/love-heart.png',
        },
        {
            img: 'img/head3.png',
            name: '微信昵称',
            champion: 'img/champion3.png',
            figure: 96,
            heart: 'img/bloue-heart.png',
            heart1: 'img/love-heart.png',

        },
        {
            img: 'img/head4.png',
            name: '微信昵称',
            champion: 'img/champion.png',
            figure: 65,
            heart: 'img/bloue-heart.png',
            heart1: 'img/love-heart.png',
        },
        {
            img: 'img/head5.png',
            name: '微信昵称',
            champion: 'img/champion.png',
            figure: 52,
            heart: 'img/bloue-heart.png',
            heart1: 'img/love-heart.png',
        },
        {
            img: 'img/head6.png',
            name: '微信昵称',
            champion: 'img/champion.png',
            figure: 46,
            heart1: 'img/love-heart.png',
            heart: 'img/bloue-heart.png',
        },
    ]
    // 渲染排行榜的数据
    var rows = [];
    //循环数组 生成数据 添加到 dom 中
    $.each(arr, function (i, item) {
        rows.push(`<li>
        <img src="${item.img}" class="head1">
        <div class="wechat">${item.name}</div>
        <img src="${item.champion}" class="champion">
        <div class="figure">${item.figure}</div>
        <div class="love-heart">
        <img src="${item.heart1}" alt="">

        <img src="${item.heart}" alt="">
    </div>
    </li>`)
    });
    //把渲染好的li添加到ul里面
    $('.phb ul').empty().append(rows);
    // 点击排行榜的爱心添加类名和删除类名
    $('.phb ul li .love-heart:eq(0)').addClass('taxon');
    $('.love-heart').click(function () {
        // $(this).addClass('taxon')
        // 判断有没有这个类名
        var cmq2 = $(this).hasClass("taxon");
        if (cmq2) {
            $(this).removeClass('taxon')
        } else {
            $(this).addClass('taxon')
        }
        console.log(cmq2);
    })
})