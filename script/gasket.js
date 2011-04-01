/**
 * User: kaede
 */

function Gasket(w,h,l){
    this.stageWidth = w;
    this.stageHeight = h;
    this.L = l;
    this.init();
}
Gasket.prototype = {

    stageWidth:0,
    stageHeight:0,
    L:200,//三角形の一辺の長さ
    B:null,//基準点
    t:null,//基準となる正三角形の配列
    m:null,

    init:function(){
        this.B = new Point(this.stageWidth/2,this.stageHeight/2);
        var seed = new Point(this.stageWidth*Math.random(),this.stageHeight*Math.random());
        this.t = this.getTrianglePoints(this.B,this.L);
        this.m = this.getMidpoint(seed,this.getRandomBasePoint());
    },
    update:function(){
        return this.m = this.getMidpoint(this.m,this.getRandomBasePoint());
    },
    getRandomBasePoint:function(){
        return this.t[Math.floor(this.t.length*Math.random())];
    },
    getTrianglePoints:function(b,l){
        return [
            new Point(b.x,b.y-(this.L/2)),
            new Point(b.x-(this.L/2),b.y+(this.L/2)),
            new Point(b.x+(this.L/2),b.y+(this.L/2))
        ]
    },
    getMidpoint:function (p1,p2){
        return new Point((p1.x+p2.x)/2,(p1.y+p2.y)/2);
    }
};


function Point(x,y){
    this.x = x;
    this.y =  y;
}

Point.prototype = {
    x:0,
    y:0
};
