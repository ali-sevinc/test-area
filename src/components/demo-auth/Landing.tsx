import { useUser } from "./UserContext";

export default function Landing() {
  const { user } = useUser();

  if (!user) return null;

  return (
    <div className="max-w-2xl bg-stone-100 text-stone-700 flex flex-col gap-8 px-8 py-10 mx-auto mt-12 rounded-lg">
      <div className="flex items-center gap-8">
        <img
          src={user.image}
          className="w-24 border-4 rounded-full border-violet-500 p-2"
        />
        <div>
          <h2 className="text-xl flex items-center gap-2">
            <span>{user.firstName}</span>
            <span>{user.lastName}</span>
            {user.gender === "male" ? "👨" : "👩"}
          </h2>
          <p className="text-stone-600 text-sm">{user.email}</p>
        </div>
      </div>
      <table className="mx-auto bg-violet-200 rounded-sm">
        <thead>
          <tr className=" text-center divide-x-2">
            <th className="w-24">Age</th>
            <th className="w-24">Height</th>
            <th className="w-24">Weight</th>
            <th className="w-24">Hair</th>
            <th className="w-24">Blood</th>
          </tr>
        </thead>
        <tbody>
          <tr className="divide-x-2 text-center">
            <td>{user.age}</td>
            <td>{user.height}</td>
            <td>{user.weight}</td>
            <td>{user.hair.color}</td>
            <td>{user.bloodGroup}</td>
          </tr>
        </tbody>
      </table>

      <table className="table-auto w-[80%] mx-auto">
        <thead>
          <tr className="text-left">
            <th>Address</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {user.address.address} / {user.address.city}
            </td>
            <td>{user.phone}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
