// export const PORT = isNaN(process.env.PORT) ? 3000:
// parseInt(process.env.PORT);// we work here manually but below is through zod

import {z, ZodError} from "zod";

// const ageSchema =  z.number().min(18).max(100).int();
// const userAge = 18;
// //const parseUserAge = ageSchema.parse(userAge);
// const {data, error, success} = ageSchema.safeParse(userAge);
// console.log(success);

// whenever we use parse() method it throws an exception
// try{
//     const parUserAge = ageSchema.parse(userAge);
//    console.log(parUserAge);

// }catch(error){
//     // instance is a javascript operator used to check if an object is 
//     // instance of a specific class or constructor.
//     if(error instanceof ZodError)
//         console.log(error.issues[0].message);
//     else{
//         console.log("Unexpected error: ", error);
//     }
// }

const portSchema = z.coerce.number().min(1).max(65535).default(3000);
 export const PORT = portSchema.parse(process.env.PORT)