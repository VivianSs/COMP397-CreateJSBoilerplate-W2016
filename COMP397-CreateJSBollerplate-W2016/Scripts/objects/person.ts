module objects {
   export class Person {

       //protected instance variables +++++++++++++++++++++
        protected _name: string;

        //constructor ++++++++++++++++++++++++++++++++++++
        constructor(name: string) {
            this._name = name;
        }

        //public methods +++++++++++++++++++++++++++++++++
        public speaks(): void {
            console.log(this._name + " says hello");
        }
    }
}

