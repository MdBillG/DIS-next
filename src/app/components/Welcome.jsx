'use client'
import { formattedDate } from "../helpers/day"
const Welcome = () => {

    const staffName= "John Doe"
    const greeting = `Welcome ${staffName} !`
    const  date = new Date();
    const dayName=  new Intl.DateTimeFormat('en-US', { weekday: 'long'}).format(date)
    const monthName = new Intl.DateTimeFormat('en-US', { month: 'long'}).format(date)
    console.log("time",dayName,monthName)

    return (
        <div className="pl-3">
 <h1 className="font-bold text-2xl">{greeting}</h1>
 <h2 className="text-[0.875rem] ">
 Today is {formattedDate}
 </h2>
        </div>
       
    );
}

export default Welcome;