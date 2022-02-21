interface Coordinates {
    topLeft?: {
      x: number,
      y: number
    },
    bottomRight?: {
      x: number,
      y: number
    },
    center?: {
      x: number,
      y: number
    }
  }
  
  abstract class MyGraphicsPrimitive2D implements Coordinates {
    topLeft: {
      x: number,
      y: number
    };
    bottomRight: {
      x: number,
      y: number
    };
  
    constructor(
      topLeftX: number,
      topLeftY: number,
      bottomRightX: number,
      bottomRightY: number
    ) {
      this.topLeft.x = topLeftX;
      this.topLeft.y = topLeftY;
      this.bottomRight.x = bottomRightX;
      this.bottomRight.y = bottomRightY;
    }
  
    Crd(amount: number, direction: 'top' | 'bottom' | 'left' | 'right'): void {
      switch (direction) {
      case 'top':
        this.topLeft.y += amount;
        this.bottomRight.y += amount;
        break;
      case 'bottom':
        this.topLeft.y -= amount;
        this.bottomRight.y -= amount;
        break;
      case 'left':
        this.topLeft.x -= amount;
        this.bottomRight.x -= amount;
        break;
      case 'right':
      default:
        this.topLeft.x += amount;
        this.bottomRight.x += amount;
        break;
      }
    }
  }
  
  abstract class MyAreaPrimitive2D extends MyGraphicsPrimitive2D {
    constructor(
      topLeftX: number,
      topLeftY: number,
      bottomRightX: number,
      bottomRightY: number
    ) {
      super(topLeftX, topLeftY, bottomRightX, bottomRightY);
    }
  
    abstract Area(): number;
  }
  
  class MyCircle extends MyAreaPrimitive2D implements Coordinates {
    center: {
      x: number,
      y: number
    };
    radius: number;
  
    constructor(
      topLeftX: number,
      topLeftY: number,
      bottomRightX: number,
      bottomRightY: number,
    ) {
      super(topLeftX, topLeftY, bottomRightX, bottomRightY);
      this.center.x = (this.topLeft.x + this.bottomRight.x) / 2; 
      this.center.y = (this.topLeft.y + this.bottomRight.y) / 2;
      this.radius = this._Radius();
    }
  
   
    private _Radius(): number {
      const xLength = this.bottomRight.x - this.topLeft.x; 
      const yLength = this.topLeft.y - this.bottomRight.y;
      return (xLength >= yLength ? yLength / 2 : xLength / 2);
    }
  
    Area(): number {
      return Math.PI * Math.pow(this.radius, 2);
    }
  }
  
  class MyRectangle extends MyAreaPrimitive2D {
    constructor(
      topLeftX: number,
      topLeftY: number,
      bottomRightX: number,
      bottomRightY: number
    ) {
      super(topLeftX, topLeftY, bottomRightX, bottomRightY);
    }

    Area(): number {
      return this.Height() * this.Width();
    }
  
    Height(): number {
      return this.topLeft.y - this.bottomRight.y;
    }
  
    Width(): number {
      return this.bottomRight.x - this.topLeft.x;
    }
  
    
  } 