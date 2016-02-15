/*将大图自动转化成小图；imgSmall(name:文件夹名称,num:缩放比例)*/
var fs = require('fs')
var gm = require('gm');
var scan = require('./scan');
var path = require('path');
var imgs = scan.scan('img').filesList;

var imgSmall = function (name,num) {
    var dir = name;
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
    var imgTo2 = function(el,num){
        var name = el.substring(el.lastIndexOf("/"))
        gm(el).size(function(err,size){
            this.resize(size.width*num, size.height*num)
            this.write(dir+"/"+name, function (err) {
                if (!err) console.log(name+'*'+num+'small done');
            });

        });
    }
    imgs.forEach(function(el){
        imgTo2(el,num)
    })
}

imgSmall("img-s",0.5)
imgSmall("img-m",0.7)
imgSmall("img-m",0.7)