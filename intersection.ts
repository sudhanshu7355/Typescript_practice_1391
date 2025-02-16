type person={
    name:string,
    age:number,

}
type personwithId=person & {id:string}
const person:personwithId={id:'sud',name:'hello',age:28}