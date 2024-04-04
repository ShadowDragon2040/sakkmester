import { useState,useEffect } from "react";
import { useParams,NavLink } from "react-router-dom";
import axios from "axios";

export function SakkSinglePage() {
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
      <div className="p-5 m-auto text-center content">
        {isPending || !Sakk.id ? (
          <div className="spinner-border"></div>
        ) : (
          <div>
            <div style={{width: "50%", margin: "auto", backgroundColor:"whitesmoke"}} className="card p-3">
              <div className="card-body">
                <h5 className="card-title">{Sakk.name}</h5>
                <NavLink to={"/"}>
                  <img
                    className="img-fluid rounded"
                    style={{ maxHeight: 500 }}
                    alt="nincs kep"
                    src={Sakk.image_url ? Sakk.image_url : "http://via.placeholder.com/400x800"}
                  />
                </NavLink>
              </div>
                <h5>Születési dátum: {Sakk.birth_date}</h5>
                <h5>Világbajnoksági győzelmek száma: {Sakk.world_ch_won}</h5>
                <a style={{ textDecoration: "none"}} href={Sakk.profile_url}>Tovább a wikipédiára</a>
            </div>
          </div>
        )}
      </div>
    );
  }