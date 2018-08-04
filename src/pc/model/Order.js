export default class Order{
    constructor(id,carNo,type,status,action){
        this.id = id;
        this.carNo = carNo;
        this.type = type;
        this.status =status;
        this.action=action;
    }
}