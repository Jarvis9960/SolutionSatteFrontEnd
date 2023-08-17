import React from 'react'

const Creditcard = () => {
  return (
    <div>
     <div className="my-5 container mx-auto">
    {/* <img className="w-6/12 mx-80 xxs:mx-10" scr=""/><br/> */}
     <h2 className="font-extrabold text-center my-5">
        	Credit Card
        </h2>
    <h2 className="font-extrabold ">
        These document are required for	Credit Card:
        </h2><br/>
       
        <ul class="list-disc leading-loose ">
          <li>Aadhar Card</li>
        <li>Pan card</li>
         <li>3 month salary slip</li>
         <li>	6 month bank statement</li>
         <li>	Form 16</li>
        </ul>
      </div>
    </div>
  )
}

export default Creditcard