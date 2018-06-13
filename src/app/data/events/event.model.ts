export class Event {
    id: number;
    name: string;
    date : Date;
    price : number;
    location : {}

    constructor(id: number, name: string, date : Date, price: number, location : {}) {
        this.id = id;
        this.name = name
        this.date = date;
        this.price = price;
        this.location = location;
    }
}
