import { BUY_CAKE } from "./cakeTypes";

export const buyCake=(number = 1)=>{
    return{
        type:BUY_CAKE,
        payload:number
    }
}

// export const buyCakeWithPayload=(number)=>{
//     return{
//         type:BUY_CAKE,
//         payload:number
//     }
// }