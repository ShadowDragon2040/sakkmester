import { useState, useEffect } from 'react';
import {NavLink} from "react-router-dom";
import axios from "axios";

export function SakkListPage() {
    const [Sakkk, setSakkk] = useState([]);
    const [isFetchPending, setFetchPending] = useState(false);
  
    useEffect(() => {
      setFetchPending(true);
  
      axios.get("http://localhost:3001/chess", {
      })
        .then((res) => setSakkk(res.data))
        .catch(console.log)
        .finally(() => {
          setFetchPending(false);
        });

    }, []);
  
    return (
      <div className='p-5 m-auto text-center content bg-ivory'>
        {isFetchPending ? (
          <div className='spinner-border'></div>
        ) : (
          <div>
            <h2>Sakk mesterek</h2>
            {Sakkk.map((Sakk) => (
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
                <div style={{ marginTop: "20px",marginBottom: "10px"}}>
                    <NavLink style={{ textDecoration: "none",backgroundColor: "yellow", color: "black",margin : "10px", padding: "5px", borderRadius: "15px", fontWeight: "bold" }} key={Sakk.id + 1} to={"/modositSakk/" + Sakk.id}>
                        <i  className="bi bi-pencil-square mx-1">Módosítás</i>
                    </NavLink>
                    <NavLink style={{ textDecoration: "none",backgroundColor: "red", color: "black",margin : "10px", padding: "5px", borderRadius: "15px", fontWeight: "bold" }} key={Sakk.id + 2} to={"/deleteSakk/" + Sakk.id}>
                        <i className="bi bi-trash3">Törlés</i>
                    </NavLink>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }