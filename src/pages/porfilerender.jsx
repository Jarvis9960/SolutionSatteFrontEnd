{/* detail POP-UP */}
{view ? (
    <>
      <div className="bg-gradient-to-br from-violet-600 via-violet-400 to-gray-600 h-11/12 w-11/12 z-20 absolute top-24 left-10 rounded-2xl">
        <div className="grid grid-rows-2 pt-8 pl-10 h-full ">
          <div className="backdrop-blur-md grid gap-24 grid-cols-2">
            <div className="grid gap-4 grid-cols-2">
              <img className="rounded-xl " src={url} alt="Profile"></img>
              <div>
                <h3 className="font-bold text-2xl uppercase"></h3>
                <p className="font-bold uppercase"> </p>
                <p className="font-semibold"> </p>
                
                <p className="font-semibold">{}</p>
              </div>
            </div>
            <div className=" pl-3 h-44">
              <p className="font-semibold">Email: {}</p>
              
              <p className="font-semibold">Address: {}</p>
              <p className="font-semibold">Gender: {}</p>
              <p className="font-semibold">Aadhar No: {}</p>
              <p className="font-semibold">Report to: {}</p>
            </div>
          </div>
          <div className="backdrop-blur-md extra-information-div -mt-4 pb-4 grid grid-rows-2 grid-cols-2">
            <div className="">
              <h5 className="font-bold text-2xl uppercase">
                Personal information
              </h5>
              <div className="grid grid-cols-2">
                <div>
                  <p className="font-semibold">Nationality:</p>
                  <p className="font-semibold">Religion:</p>
                  <p className="font-semibold">Marital Status:</p>
                </div>
                <div className="">
                  <p className="font-semibold">{}</p>
                  <p className="font-semibold">{}</p>
                  <p className="font-semibold">{}</p>
                </div>
              </div>
            </div>
            <div className="">
              <h5 className="font-bold text-2xl uppercase">
                Emergency Contacts
              </h5>
              <div className="grid grid-cols-2">
                <div>
                  <p className="font-semibold">Name</p>
                  <p className="font-semibold">Relationship</p>
                  <p className="font-semibold">Phone</p>
                </div>
                <div className="">
                  <p className="font-semibold">{}</p>
                  <p className="font-semibold">{}</p>
                  <p className="font-semibold">{}</p>
                </div>
              </div>
            </div>
            <div className="">
              <h5 className="font-bold text-2xl uppercase">
                Bank information
              </h5>
              <div className="grid grid-cols-2">
                <div>
                  <p className="font-semibold">Account Holder Name</p>
                  <p className="font-semibold">Bank Account No</p>
                  <p className="font-semibold">IFSC Code</p>
                  <p className="font-semibold">Pan Number</p>
                </div>
                <div className="">
                  <p className="font-semibold">{}</p>
                  <p className="font-semibold">{}</p>
                  <p className="font-semibold">{}</p>
                  <p className="font-semibold">{}</p>
                </div>
              </div>
            </div>
            <div>
              <button
                onClick={() => {
                  setview(false);
                }}
                className="rounded-full bg-cyan-300 p-3 text-white font-semibold"
              >
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <></>
  )}
  {/* Above Code is for POP_UP */}