import React, { useState, useEffect } from "react";
import { useParams, useNavigate, NavLink } from "react-router-dom";
import axios from "axios";

export function SakkModositPage() {
  const navigate = useNavigate();
  const param = useParams();
  const id = param.SakkId;
  const [, setSakk] = useState({});
  const [modName, setModName] = useState("");
  const [modBirthDate, setModBirthDate] = useState("");
  const [modWorldChWon, setModWorldChWon] = useState("");
  const [modProfileUrl, setModProfileUrl] = useState("");
  const [modImageUrl, setModImageUrl] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`http://localhost:3001/chess/${id}`);
        const SakkData = response.data;
        setSakk(SakkData);
        setModName(SakkData.name);
        setModBirthDate(SakkData.birth_date);
        setModWorldChWon(SakkData.world_ch_won);
        setModProfileUrl(SakkData.profile_url);
        setModImageUrl(SakkData.image_url);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);

  const handleNameChange = (e) => {
    setModName(e.target.value);
  };

  const handleBirthDateChange = (e) => {
    setModBirthDate(e.target.value);
  };

  const handleWorldChWonChange = (e) => {
    setModWorldChWon(e.target.value);
  };

  const handleProfileUrlChange = (e) => {
    setModProfileUrl(e.target.value);
  };

  const handleImageUrlChange = (e) => {
    setModImageUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3001/chess/${id}`, {
        name: modName,
        birth_date: modBirthDate,
        world_ch_won: modWorldChWon,
        profile_url: modProfileUrl,
        image_url: modImageUrl,
      })
      .then(() => {
        navigate("/");
      })
      .catch(console.log);
  };

  return (
    <div style={{width:"50%", margin:"auto", borderRadius:"10px", marginTop:"40px", backgroundColor:"whitesmoke"}} className="p-5 text-center content bg-lavender">
      <h2>Bejegyzés módosítása</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group row pb-3">
          <label htmlFor="name" className="col-sm-3 col-form-label">
            Név:
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              id="name"
              value={modName}
              onChange={handleNameChange}
            />
          </div>
        </div>

        <div className="form-group row pb-3">
          <label htmlFor="birthDate" className="col-sm-3 col-form-label">
            Születési dátum:
          </label>
          <div className="col-sm-9">
            <input
              type="date"
              className="form-control"
              id="birthDate"
              value={modBirthDate}
              onChange={handleBirthDateChange}
            />
          </div>
        </div>

        <div className="form-group row pb-3">
          <label
            htmlFor="worldChWon"
            className="col-sm-3 col-form-label"
          >
            Világbajnoki címek száma:
          </label>
          <div className="col-sm-9">
            <input
              type="number"
              className="form-control"
              id="worldChWon"
              value={modWorldChWon}
              onChange={handleWorldChWonChange}
            />
          </div>
        </div>

        <div className="form-group row pb-3">
          <label
            htmlFor="profileUrl"
            className="col-sm-3 col-form-label"
          >
            Wikipédia profil URL:
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              id="profileUrl"
              value={modProfileUrl}
              onChange={handleProfileUrlChange}
            />
          </div>
        </div>

        <div className="form-group row pb-3">
          <label htmlFor="imageUrl" className="col-sm-3 col-form-label">
            Kép URL:
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              id="imageUrl"
              value={modImageUrl}
              onChange={handleImageUrlChange}
            />
          </div>
        </div>
        <NavLink to={"/"}>
            <button style={{ textDecoration: "none",border: "none",backgroundColor: "green", color: "black",margin : "10px", padding: "5px", borderRadius: "15px", fontWeight: "bold" }}>
                Mégsem
            </button>
        </NavLink>
        <button style={{border: "none", textDecoration: "none",backgroundColor: "yellow", color: "black",margin : "10px", padding: "5px", borderRadius: "15px", fontWeight: "bold" }} type="submit">
          Küldés
        </button>
      </form>
    </div>
  );
}