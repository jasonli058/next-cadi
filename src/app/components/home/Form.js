"use client"

const Form = () => {
  return ( 
    <>
    <div className="flex justify-center lg:justify-start flex-shrink-0 lg:w-80 w-full justify-left flex lg:mt-20 mb-10">
      <form className="space-y-4">
        <div> 
          <label className=" flex block text-sm font-medium text-gray-700 mb-2">
            First Name:
          </label>
          <input 
          type="text"
          className="border border-gray-300 rounded-xl" 
          />
        </div>
        <div>
          <label className=" flex block text-sm font-medium text-gray-700 mb-2">
            Last Name:
          </label>
          <input 
          type="text"
          className="border border-gray-300 rounded-xl"
          />
        </div>
        <div>
          <label className=" flex block text-sm font-medium text-gray-700 mb-2">
            Phone Number:
          </label>
          <input 
          type="text"
          className="border border-gray-300 rounded-xl" 
          />
        </div>
        <div>
          <label className=" flex block text-sm font-medium text-gray-700 mb-2">
            Email:
          </label>
          <input
          type="text"
          className="border border-gray-300 rounded-xl" 
          />
        </div>
        <div>
          <label className=" flex block text-sm font-medium text-gray-700 mb-2">
            Inquiry:
          </label>
          <textarea 
          className="border border-gray-300 rounded-xl"> </textarea>
        </div>
        <div>
          <button className="hover:bg-gray-200 hover:border-gray-200 hover:text-gray-700 bottom-4 lg:left-14 left-7 font-body font-semibold text-black border-[5px] border-r-[20px] border-l-[20px] border-gray-100 bg-gray-100 rounded-full ">
            Submit
          </button>
        </div>
      </form>
    </div>
    </>
   );
}
 
export default Form;