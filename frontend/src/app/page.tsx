"use client";
import { useSelector, useDispatch } from "react-redux";
import { useLogoutMutation } from "../redux/slices/auth/UsersAPISlice";
import { logout } from "../redux/slices/auth/AuthSlice";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Marquee from "@/components/Marquee";
import axios from "axios";
import MarqueeLogos from "@/components/Logos";
import FooterHome from "@/components/UI/FooterHome/FooterHome";

export default function Page() {
  const { userInfo } = useSelector((state: any) => state.auth);

  const dispatch = useDispatch();
  const router = useRouter();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall({}).unwrap();
      dispatch(logout({}));
      router.push("/login");
    } catch (err) {
      console.error(err);
    }
  };
  const subscribe = async () => {
    const res = await axios.post("http://localhost:4000/api/payment/subscribe");
    console.log(res);
    window.location.href = res.data.sessionId;
  };

  return (
    <>
      <Navbar />
      <div className="h-screen">
        {userInfo ? (
          <div className="flex items-center">
            <p className="mr-2">{userInfo.name}</p>
            <button onClick={logoutHandler}>Logout</button>
          </div>
        ) : (
          <button onClick={() => router.push("/login")}>Login</button>
        )}
      </div>
      <button onClick={subscribe}>Subscribe</button>
      <MarqueeLogos />
      <FooterHome />
    </>
  );
}
