import React ,{useEffect,useState}from 'react'
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import axios from "axios";
import { set } from 'react-hook-form';


function Selector({setEmployeeId}) {
    const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);
  const [employee, setEmployee] = useState(null);
  const [empId, setEmpId] = useState();
  const [data, setData] = useState([]);
 

  useEffect(() => {

    (async function() {
      await axios.get("https://api.solutionsathee.com/api/v1/crm/getallemployee").then((res) => {
      setData(res.data.fetchdata);
      setEmpId(res.data.fetchdata);
    });
  })();
  }, []);



    return (
      <div className="w-72 font-medium h-40 my-5">
        <div
          onClick={() => setOpen(!open)}
          className={`bg-white w-full p-2 flex items-center justify-between rounded ${
            !selected && "text-gray-700"
          }`}
        >
          {selected
            ? selected?.length > 25
              ? selected?.substring(0, 25) + "..."
              : selected
            : "Select Employee"}
          <BiChevronDown size={20} className={`${open && "rotate-180"}`} />
        </div>
        <ul
          className={`bg-white mt-2 overflow-y-scroll ${
            open ? "max-h-40" : "max-h-0"
          } `}
        >
          <div className="flex items-center px-2 sticky top-0 bg-white">
            <AiOutlineSearch size={18} className="text-gray-700" />
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value.toLowerCase())}
              placeholder="Enter Employee Name"
              className="placeholder:text-gray-700 p-2 outline-none"
            />
          </div>




{data.map((i) => (
          <li
            key={i._id}
            className={`p-2 text-sm hover:bg-sky-600 hover:text-white
            ${
              i?.first_name?.toLowerCase() === selected?.toLowerCase() &&
               "bg-sky-600 text-white"
            }
            ${
              i?.first_name?.toLowerCase().startsWith(inputValue)
                ? "block"
                : "hidden"
            }`}
            onClick={() => {
              if (i?.first_name?.toLowerCase() !== selected.toLowerCase()) {
                setSelected(i?.first_name);
                setEmployeeId(i._id)
                setOpen(false);
                setInputValue("");
              }
            }}
          >
            {i?.first_name}
          </li>
        ))}

</ul>


</div>

)
}

export default Selector