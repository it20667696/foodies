import NavBar from "../NavBar/NavBar";
import "./UserProfile.css";
import Share from "./Share";
import Sidebar from "./Sidebar";
import Profile from "../../images/Profile.jpg";
import CoverPic from "../../images/FoodCover.jpg";
import friend1 from "../../images/friend1.jpg";
import friend2 from "../../images/friend2.jpg";
import SettingsIcon from "@mui/icons-material/Settings";
import { useEffect, useState } from "react";
import axios from "axios";

export default function UserProfile() {
  const [userData, setUserData] = useState({});

  // useEffect(() => {
  // axios
  //   .get("http://localhost:8183/users/${id}")
  //   .then((response) => {
  //     setUserData(response.data);
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });
  // }, []);

  useEffect(() => {
    const token = localStorage.getItem("token"); // get JWT token from local storage

    axios
      .get("http://localhost:8183/users/114", {
        headers: {
          Authorization: `Bearer ${token}`, // include JWT token in headers
        },
      })
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <NavBar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img className="profileCoverImg" src={CoverPic} alt="" />
              <img className="profileUserImg" src={Profile} alt="" />
            </div>
            <div className="profileInfo">
              <h3>Elon Musk</h3>
            </div>
            <div className="profileSetting">
              <SettingsIcon />
            </div>
          </div>
          <div>
            <Share />
          </div>
          <div>
            <h4 className="rightbarTitle">User information</h4>
            <div className="userAllInfo">
              <div className="rightbarInfo">
                <div className="rightbarInfoItem">
                  <span className="rightbarInfoKey">First Name:</span>
                  <span className="rightbarInfoValue">{userData.userName}</span>
                </div>
                <div className="rightbarInfoItem">
                  <span className="rightbarInfoKey">Last Name:</span>
                  <span className="rightbarInfoValue">Musk</span>
                </div>
              </div>
              <div className="rightbarInfo">
                <div className="rightbarInfoItem">
                  <span className="rightbarInfoKey">Date Of Birth:</span>
                  <span className="rightbarInfoValue">1970/08/22</span>
                </div>
                <div className="rightbarInfoItem">
                  <span className="rightbarInfoKey">Relationship:</span>
                  <span className="rightbarInfoValue">Married</span>
                </div>
              </div>
              <div className="rightbarInfo">
                <div className="rightbarInfoItem">
                  <span className="rightbarInfoKey">Email:</span>
                  <span className="rightbarInfoValue">{userData.name}</span>
                </div>
                <div className="rightbarInfoItem">
                  <span className="rightbarInfoKey">Phone:</span>
                  <span className="rightbarInfoValue">+16383538354</span>
                </div>
              </div>
              <div className="rightbarInfo">
                <div className="rightbarInfoItem">
                  <span className="rightbarInfoKey">Country:</span>
                  <span className="rightbarInfoValue">USA</span>
                </div>
                <div className="rightbarInfoItem">
                  <span className="rightbarInfoKey">State:</span>
                  <span className="rightbarInfoValue">Texas</span>
                </div>
                <div className="rightbarInfoItem">
                  <span className="rightbarInfoKey">City:</span>
                  <span className="rightbarInfoValue">Austin</span>
                </div>
              </div>
            </div>
            <h4 className="rightbarTitle">User friends</h4>
            <div className="rightbarFollowings">
              <div className="rightbarFollowing">
                <img src={friend1} alt="" className="rightbarFollowingImg" />
                <span className="rightbarFollowingName">John Carter</span>
              </div>
              <div className="rightbarFollowing">
                <img src={friend2} alt="" className="rightbarFollowingImg" />
                <span className="rightbarFollowingName">Jeff Boss</span>
              </div>
              <div className="rightbarFollowing">
                <img src={friend1} alt="" className="rightbarFollowingImg" />
                <span className="rightbarFollowingName">Andrew Tate</span>
              </div>
              <div className="rightbarFollowing">
                <img src={friend2} alt="" className="rightbarFollowingImg" />
                <span className="rightbarFollowingName">John Voke</span>
              </div>
              <div className="rightbarFollowing">
                <img src={friend1} alt="" className="rightbarFollowingImg" />
                <span className="rightbarFollowingName">John Carter</span>
              </div>
              <div className="rightbarFollowing">
                <img src={friend2} alt="" className="rightbarFollowingImg" />
                <span className="rightbarFollowingName">Carter Joze</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
