export class Obstacle {
  constructor(ctx, canvas, dv, CANVAS_HEIGHT, img) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.y = [CANVAS_HEIGHT / 6, CANVAS_HEIGHT / 2, (CANVAS_HEIGHT / 6) * 5][
      Math.floor(Math.random() * 3)
    ] - 100; 
    this.x = this.canvas.width;
    this.speed = Math.floor(2 + Math.random() * dv); // Replace 2 with your game speed
    // this.frame = 0;
    this.width = 60;
    this.img = img;
  }

  draw() {
    // this.ctx.beginPath();
    // this.ctx.arc(this.x, this.y, this.width / 2, 0, Math.PI * 2, false); // Draw a circle with a radius of 10
    // this.ctx.fillStyle = "red";
    // this.ctx.fill();
    // this.ctx.closePath();
    // this.x -= this.speed;

    // console.log(this.y;

    this.ctx.save();
    this.ctx.translate(this.x + this.width / 2, this.y + this.width / 2 );
    this.ctx.rotate((Math.PI / 180) * (this.x % 360));
    this.ctx.drawImage(
      this.img,
      -this.width / 2,
      -this.width / 2,
      this.width,
      this.width
    );
    this.ctx.restore();
    this.x -= this.speed;
  }
}
