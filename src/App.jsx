import { data } from "autoprefixer";
import { useEffect, useState } from "react";

function App() {
  const Pension = [
    {name : "Ade", pensionId : "24465", status : false},
    {name : "Dayo", pensionId : "20908", status : true},
    {name : "Bola", pensionId : "28885", status : false},
    {name : "Akin", pensionId : "39802", status : true},
    {name : "Zed", pensionId : "30918", status : true}
  ];

  const [name, setName] = useState("")
  useEffect(()=>{
    fetch('#').then(()=>Response.json()).then(()=>setName(data))
  })

  return (
    <>
      <div className="justify-center items-center bg-slate-300">
        <h1 className="text-center font-semibold text-7xl">Pension Authentication portal</h1>
        <table className="table-auto border-separate border-spacing-[80px] text-center text-[35px] p-6 mx-auto">
          <thead>
            <tr>
              <th className="border border-black p-2 rounded-md">Name</th>
              <th className="border border-black p-2 rounded-md">Pension Id</th>
              <th className="border border-black p-2 rounded-md">Status</th>
            </tr>
          </thead>
          <tbody>
            {Pension.map((pen, index) => (
              <tr key={index}>
                <td className="border border-black p-2 rounded-md">{pen.name}</td>
                <td className="border border-black p-2 rounded-md">{pen.pensionId}</td>
                <td className={`border p-2 rounded-md text-white ${pen.status === true ? "bg-green-600" : "bg-red-600"}`}>{pen.status === true ? "Verified" : "Unverified"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
