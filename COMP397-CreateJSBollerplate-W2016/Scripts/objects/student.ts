module objects {
    export class Student extends Person {
        //private instance variables +++++++++++++++++++++
        private _studentNumber: number;

        //constructor ++++++++++++++++++++++++++++++++++++

        constructor(name: string, studentNumber: number) {
            super(name);
            this._studentNumber = studentNumber;
        }

        //public methods +++++++++++++++++++++++++++++++++
        public studies(): void {
            console.log(this._name + " is studying");
        }
    }
}