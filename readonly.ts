type Person={
    readonly id:number,
    name:string,
    age:number,
}
const persons:Person={id:2, name:'sudhanshu', age:28}
//cannot assign because its a read only property
//persons.id=2