var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Abstract Shape class
var Shape = /** @class */ (function () {
    function Shape() {
    }
    // Optional method that can be inherited as-is
    Shape.prototype.describe = function () {
        return "This is a shape with area ".concat(this.calculateArea(), " and perimeter ").concat(this.calculatePerimeter(), ".");
    };
    return Shape;
}());
// Circle class extending Shape
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(radius) {
        var _this = _super.call(this) || this;
        _this.radius = radius;
        return _this;
    }
    // Implementing the abstract method
    Circle.prototype.calculateArea = function () {
        return Math.PI * this.radius * this.radius;
    };
    Circle.prototype.calculatePerimeter = function () {
        return 2 * Math.PI * this.radius;
    };
    return Circle;
}(Shape));
// Rectangle class extending Shape
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(width, height) {
        var _this = _super.call(this) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    // Implementing the abstract method
    Rectangle.prototype.calculateArea = function () {
        return this.width * this.height;
    };
    Rectangle.prototype.calculatePerimeter = function () {
        return 2 * (this.width + this.height);
    };
    return Rectangle;
}(Shape));
// Square class extending Shape
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(side) {
        var _this = _super.call(this) || this;
        _this.side = side;
        return _this;
    }
    // Implementing the abstract method
    Square.prototype.calculateArea = function () {
        return this.side * this.side;
    };
    Square.prototype.calculatePerimeter = function () {
        return this.side * 4;
    };
    return Square;
}(Shape));
// Setup
var myCircle = new Circle(5);
console.log(myCircle.describe()); // This is a shape with area 78.54 and perimeter 31.42.
var myRectangle = new Rectangle(10, 5);
console.log("This shape area is: ".concat(myRectangle.calculateArea())); // This is a shape with area 50 and perimeter 30.
var mySquare = new Square(10);
console.log(mySquare.describe()); // This is a shape with area 100 and perimeter 40.
