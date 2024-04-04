import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export function SakkDeletePage() {
  const navigate = useNavigate();
  const param = useParams();
  const id = param.SakkId;
  const [Sakk, setSakk] = useState([]);
  const [isPending, setPending] = useState(false);

  useEffect(() => {
    setPending(true);

    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/chess/${id}`, {
        });

        setSakk(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setPending(false);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="p-5 m-auto text-center content bg-lavender">
      {isPending || !Sakk.id ? (
        <div className="spinner-border"></div>
      ) : (
        <div>
          <h2>Biztosan ki akarja törölni a bejegyzést?</h2>
          <div style={{backgroundColor:"whitesmoke"}} key={Sakk.id + 4} className='card col-sm-3 d-inline-block m-1 p-2'>
                <h5>{Sakk.name}</h5>
                <NavLink key={Sakk.id} to={"/Sakk/" + Sakk.id}>
                  <div className='card-body'>
                    <img
                      className='img-fluid'
                      style={{ maxHeight: 200 }}
                      alt="nincs kep"
                      src={Sakk.image_url ? Sakk.image_url : "https://via.placeholder.com/400x800"}
                    />
                  </div>
                </NavLink>
                <h5>Születési dátum: {Sakk.birth_date}</h5>
                <h5>Világbajnoksági győzelmek száma: {Sakk.world_ch_won}</h5>
                <a style={{ textDecoration: "none"}} href={Sakk.profile_url}>Tovább a wikipédiára</a>
                <br  />

            <form
                onSubmit={async (e) => {
                e.preventDefault();
                try {
                    const res = await axios.delete(`http://localhost:3001/chess/${id}`, {
                    });
                    if (res.status === 200) {
                    navigate("/");
                    }
                } catch (error) {
                    console.log(error);
                }
                }}
            >
                <div>
                <NavLink to={"/"}>
                    <button style={{border: "none", textDecoration: "none",backgroundColor: "green", color: "black",margin : "10px", padding: "5px", borderRadius: "15px", fontWeight: "bold" }}>
                        <i  className="bi bi-pencil-square mx-1">Mégsem</i>
                    </button>
                </NavLink>
                <button style={{border: "none", textDecoration: "none",backgroundColor: "red", color: "black",margin : "10px", padding: "5px", borderRadius: "15px", fontWeight: "bold" }}>
                    <i className="bi bi-trash3">Törlés</i>
                </button>
                </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}