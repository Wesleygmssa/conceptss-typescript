import { Request, Response } from 'express';
import createUser from './services/CreateUser';


//string, number, bollean, objectm array
//interface

export function helloWorld(request: Request, response: Response) {
    const user = createUser({
        email: 'guerra',
        password: '123355',
        techs: [
            'node.js',
            'ReactJS',
            'REact Native',
            { title: 'JavaScript', experience: 100 },

        ]
    });

    console.log(user.email)
    return response.json({ message: 'Hello World' });
}