/* 
name, emai, senha
*/
interface TechObject {
    title: string,
    experience: number,

}

interface CreateUserData {
    name?: string;
    email: string;
    password: string | boolean,
    techs: Array<string | TechObject>
}

export default function creatUser({name ="", email, password}:CreateUserData){
    const user ={
        name,
        email,
        password,
    }

 return user
}