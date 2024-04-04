import React from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

export function SakkCreatePage() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.elements.name.value,
      birth_date: e.target.elements.birth_date.value,
      world_ch_won: e.target.elements.world_ch_won.value,
      profile_url: e.target.elements.profile_url.value,
      image_url: e.target.elements.image_url.value,
    };

    try {
      await axios.post("http://localhost:3001/chess", formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-5 text-center content bg-whitesmoke">
      <h2>Új Sakkmester</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group row pb-3">
          <label className="col-sm-3 col-form-label">Név:</label>
        </div>
        <div>
          <input type="text" name="name" className="form-control" />
        </div>

        <div className="form-group row pb-3">
          <label className="col-sm-3 col-form-label">Születési dátum:</label>
        </div>
        <div>
          <input type="text" name="birth_date" className="form-control" />
        </div>

        <div className="form-group row pb-3">
          <label className="col-sm-3 col-form-label">Világbajnoksági győzelmek száma:</label>
        </div>
        <div>
          <input type="text" name="world_ch_won" className="form-control" />
        </div>

        <div className="form-group row pb-3">
          <label className="col-sm-3 col-form-label">Wikipédia profil link:</label>
        </div>
        <div>
          <input type="text" name="profile_url" className="form-control" />
        </div>

        <div className="form-group row pb-3">
          <label className="col-sm-3 col-form-label">Profil kép:</label>
        </div>
        <div>
          <input type="text" name="image_url" className="form-control" />
        </div>

        <button type="submit" className="btn btn-success">
          Küldés
        </button>
      </form>
    </div>
  );
}