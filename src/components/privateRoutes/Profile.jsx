import { useContext } from "react";
import { AuthContext } from "../../provider/ContextProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const { displayName, email } = user;
  return (
    <div className="text-xl font-bold border w-fit p-8 rounded-xl shadow-xl bg-slate-400 text-primary">
      <h3>name: Ahamed Noyon</h3>
      <p>
        <small>email:{email}</small>
      </p>
    </div>
  );
};

export default Profile;
