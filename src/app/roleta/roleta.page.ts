import { Component,
         ElementRef,
         ViewChild,
         OnInit
     	 } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-roleta',
  templateUrl: './roleta.page.html',
  styleUrls: ['./roleta.page.scss'],
})

export class RoletaPage {


   /**
     * 'plug into' DOM canvas element using @ViewChild
     */
   @ViewChild('canvas') canvasEl : ElementRef;



   /**
     * Reference Canvas object
     */
   	private _CANVAS  : any;



   /**
     * Reference the context for the Canvas element
     */
   	private _CONTEXT : any;

	public options: string[];
  	private valores: string[];

	private startAngle = 0;
	private arc: any
	private spinTimeout = null;

	private spinArcStart = 10;
	private spinTime = 0;
	private spinTimeTotal = 0;
	private spinAngleStart = 0;

	private ctx: any;

   constructor(public navCtrl: NavController)
   {

   }


   ngOnInit() {
    
   }



   /**
     * Detect if HTML5 Canvas is supported and, if so, configure the
     * canvas element accordingly
     *
     * @public
     * @method initialiseCanvas
     * @return {none}
     */
   initialiseCanvas() : void
   {
      if(this._CANVAS.getContext)
      {
         this.setupCanvas();
      }
   }




   /**
     * Create a triangle using canvas drawing API
     *
     * @public
     * @method drawTriangle
     * @return {none}
     */
   drawTriangle() : void
   {
      this.clearCanvas();
      this._CONTEXT.beginPath();
      this._CONTEXT.moveTo(this._CANVAS.width/2 - 100, this._CANVAS.height/2 + 100);
      this._CONTEXT.lineTo(this._CANVAS.width/2 + 100, this._CANVAS.height/2 + 100);
      this._CONTEXT.lineTo(this._CANVAS.width/2, this._CANVAS.height/2);
      this._CONTEXT.lineTo(this._CANVAS.width/2 -100, this._CANVAS.height/2 + 100);
      this._CONTEXT.lineWidth   = 1;
      this._CONTEXT.strokeStyle = '#333';
      this._CONTEXT.stroke();
   }




   /**
     * Configure the Canvas element
     *
     * @public
     * @method setupCanvas
     * @return {none}
     */
   setupCanvas() : void
   {
      this._CONTEXT = this._CANVAS.getContext('2d');
      this._CONTEXT.fillStyle = "#fff";
      this._CONTEXT.fillRect(0, 0, 500, 500);

   }




   /**
     * Reset the Canvas element/clear previous content
     *
     * @public
     * @method clearCanvas
     * @return {none}
     */
   clearCanvas() : void
   {
      this._CONTEXT.clearRect(0, 0, this._CANVAS.width, this._CANVAS.height);
      this.setupCanvas();
   }

   	

	byte2Hex(n) {
	  var nybHexString = "0123456789ABCDEF";
	  return String(nybHexString.substr((n >> 4) & 0x0F,1)) + nybHexString.substr(n & 0x0F,1);
	}

	RGB2Color(r,g,b) {
		return '#' + this.byte2Hex(r) + this.byte2Hex(g) + this.byte2Hex(b);
	}

	getColor(item, maxitem) {
	  var phase = 0;
	  var center = 128;
	  var width = 127;
	  var frequency = Math.PI*2/maxitem;
	  
	  var red   = Math.sin(frequency*item+2+phase) * width + center;
	  var green = Math.sin(frequency*item+0+phase) * width + center;
	  var blue  = Math.sin(frequency*item+4+phase) * width + center;
	  
	  return this.RGB2Color(red,green,blue);
	}

	drawRouletteWheel() {
	  var canvas = this._CANVAS
	  if (canvas.getContext) {
	    var outsideRadius = 120;
	    var textRadius = 100;
	    var insideRadius = 85;

	    this.ctx = canvas.getContext("2d");
	    this.ctx.clearRect(0,0,500,500);

	    this.ctx.strokeStyle = "black";
	    this.ctx.lineWidth = 2;

	    this.ctx.font = 'bold 12px Helvetica, Arial';

	    for(var i = 0; i < this.options.length; i++) {
	      var angle = this.startAngle + i * this.arc;
	      //ctx.fillStyle = colors[i];
	      this.ctx.fillStyle = this.getColor(i, this.options.length);

	      this.ctx.beginPath();
	      this.ctx.arc(180, 180, outsideRadius, angle, angle + this.arc, false);
	      this.ctx.arc(180, 180, insideRadius, angle + this.arc, angle, true);
	      this.ctx.stroke();
	      this.ctx.fill();

	      this.ctx.save();
	      this.ctx.shadowOffsetX = -1;
	      this.ctx.shadowOffsetY = -1;
	      this.ctx.shadowBlur    = 0;
	      this.ctx.shadowColor   = "rgb(220,220,220)";
	      this.ctx.fillStyle = "black";
	      this.ctx.translate(180 + Math.cos(angle + this.arc / 2) * textRadius, 
	                    180 + Math.sin(angle + this.arc / 2) * textRadius);
	      this.ctx.rotate(angle + this.arc / 2 + Math.PI / 2);
	      var text = this.options[i];
	      this.ctx.fillText(text, -this.ctx.measureText(text).width / 2, 0);
	      this.ctx.restore();
	    } 

	    //Arrow
	    this.ctx.fillStyle = "black";
	    this.ctx.beginPath();
	    this.ctx.moveTo(180 - 4, 180 - (outsideRadius + 5));
	    this.ctx.lineTo(180 + 4, 180 - (outsideRadius + 5));
	    this.ctx.lineTo(180 + 4, 180 - (outsideRadius - 5));
	    this.ctx.lineTo(180 + 9, 180 - (outsideRadius - 5));
	    this.ctx.lineTo(180 + 0, 180 - (outsideRadius - 13));
	    this.ctx.lineTo(180 - 9, 180 - (outsideRadius - 5));
	    this.ctx.lineTo(180 - 4, 180 - (outsideRadius - 5));
	    this.ctx.lineTo(180 - 4, 180 - (outsideRadius + 5));
	    this.ctx.fill();
	  }
	}

	spin() {
	  this.spinAngleStart = Math.random() * 10 + 10;
	  this.spinTime = 0;
	  this.spinTimeTotal = Math.random() * 3 + 4 * 1000;
	  this.rotateWheel();
	}

	rotateWheel() {
	  this.spinTime += 30;
	  if(this.spinTime >= this.spinTimeTotal) {
	    this.stopRotateWheel();
	    return;
	  }
	  var spinAngle = this.spinAngleStart - this.easeOut(this.spinTime, 0, this.spinAngleStart, this.spinTimeTotal);
	  this.startAngle += (spinAngle * Math.PI / 180);
	  this.drawRouletteWheel();
	  this.spinTimeout = setTimeout(()=>this.rotateWheel(), 30);
	}

	stopRotateWheel() {
	  clearTimeout(this.spinTimeout);
	  var degrees = this.startAngle * 180 / Math.PI + 90;
	  var arcd = this.arc * 180 / Math.PI;
	  var index = Math.floor((360 - degrees % 360) / arcd);
	  this.ctx.save();
	  this.ctx.font = 'bold 30px Helvetica, Arial';
	  var text = this.options[index]
	  this.ctx.fillText(text, 180 - this.ctx.measureText(text).width / 2, 350 + 10);
	  this.ctx.restore();
	}

	easeOut(t, b, c, d) {
	  var ts = (t/=d)*t;
	  var tc = ts*t;
	  return b+c*(tc + -3*ts + 3*t);
	}

  addValue(valores){
    this.options = valores.split(',');
    if(this.options){
      this.arc = Math.PI / (this.options.length / 2);
      this._CANVAS        = this.canvasEl.nativeElement;
      this._CANVAS.width    = 360;
      this._CANVAS.height   = 380;

      this.initialiseCanvas();
      this.drawRouletteWheel();
    }
  }

  deleteRoulete(){
    this.options = [];
    this.valores = [];
    this.clearCanvas();
  }

	


}
