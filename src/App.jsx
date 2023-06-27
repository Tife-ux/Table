import { useEffect, useState } from "react";

function App() {
  const [names, setName] = useState([]);

  useEffect(() => {
    fetch('http://18.220.15.243:8085/fetch-authentication-status')
      .then((resp) => resp.json())
      .then((data) => setName(data.response))
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
    <>
      <div className="justify-center items-center bg-slate-300">
        <h1 className="text-center font-semibold text-7xl">Pension Authentication portal</h1>
        <table className="table-auto border-separate border-spacing-[80px] text-center text-[35px] p-7 mx-auto">
          <thead>
            <tr>
              <th className="border border-black p-2 rounded-md">Id</th>
              <th className="border border-black p-2 rounded-md">Name</th>
              <th className="border border-black p-2 rounded-md">Pension Id</th>
              <th className="border border-black p-2 rounded-md">Status</th>
            </tr>
          </thead>

          <tbody>
            {names.map((name, index) => (
              <tr key={index}>
                <td className="border border-black p-2 rounded-md">{name.id}</td>
                <td className="border border-black p-2 rounded-md">{name.name}</td>
                <td className="border border-black p-2 rounded-md">{name.pensionID}</td>
                <td
                  className={`border p-2 rounded-md text-white ${
                    name.status === true ? "bg-green-600" : "bg-red-600"
                  }`}
                >
                  {name.status === true ? "Verified" : "Unverified"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-center items-center">
          <button className="bg-green-500  h-20 w-[300px] text-[30px] text-white rounded-xl">
            Check Pension Status
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
