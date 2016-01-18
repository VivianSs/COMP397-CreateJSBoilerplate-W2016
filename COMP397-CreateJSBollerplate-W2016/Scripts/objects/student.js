var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var Student = (function (_super) {
        __extends(Student, _super);
        //constructor ++++++++++++++++++++++++++++++++++++
        function Student(name, studentNumber) {
            _super.call(this, name);
            this._studentNumber = studentNumber;
        }
        //public methods +++++++++++++++++++++++++++++++++
        Student.prototype.studies = function () {
            console.log(this._name + " is studying");
        };
        return Student;
    })(objects.Person);
    objects.Student = Student;
})(objects || (objects = {}));
//# sourceMappingURL=student.js.map