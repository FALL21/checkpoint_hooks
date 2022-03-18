
import { Rating } from 'react-simple-star-rating'
import React, { useState } from "react";
import '.././App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function MovieCard() {
    const data = require('../datas.json');
    const movies = data.item;
    const[titleSearch, setTitleSearch]= useState("");
    const[rateSearch, setRateSearch]= useState("");

    var moviesFiltredTitle=movies.filter(item=>item.title.toLocaleLowerCase().includes(titleSearch.toLocaleLowerCase()));
    var moviesFiltredRate=movies.filter(item=>item.rate===parseInt(rateSearch))

    return (
        <>
        <input type="text" id="nameFiltred" placeholder="Name filtred" onChange={e=>{setTitleSearch(e.target.value)}} style={{marginLeft:"35%"}}/><br/><br/>
        <input type="number" id="rateFiltred" max="5" min="0" placeholder="nombre filtré" onChange={e=>{setRateSearch(e.target.value)}} style={{marginLeft:"35%",width:"10%"}}/><br/><br/>
        <div className="gridMovie">
            <div className="movieCard">
            {(titleSearch&&rateSearch==="")?
                    (moviesFiltredTitle.map((movie) => {
                        return ( 
                            <div className="card" style={{width: '16rem'}} key={movie.id}>
                                <img src={movie.PosterURL} className="card-img-top" alt="moviePoster" />
                                <div className="card-body">
                                    <h5 className="card-title">{movie.title}</h5>
                                    <p className="card-text">{movie.description}</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><Rating ratingValue={movie.rate} /></li>
                                </ul>
                            </div>
                            )
                        })
                    ):
                    (rateSearch!=="")?
                        (moviesFiltredRate.map((movie) => {
                            return ( 
                                <div className="card" style={{width: '16rem'}} key={movie.id}>
                                    <img src={movie.PosterURL} className="card-img-top" alt="moviePoster" />
                                    <div className="card-body">
                                        <h5 className="card-title">{movie.title}</h5>
                                        <p className="card-text">{movie.description}</p>
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item"><Rating ratingValue={movie.rate} /></li>
                                    </ul>
                                </div>
                                )
                            }
                            )
                        ):
                        (moviesFiltredTitle.map((movie) => {
                            return ( 
                                <div className="card" style={{width: '16rem'}} key={movie.id}>
                                    <img src={movie.PosterURL} className="card-img-top" alt="moviePoster" />
                                    <div className="card-body">
                                        <h5 className="card-title">{movie.title}</h5>
                                        <p className="card-text">{movie.description}</p>
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item"><Rating ratingValue={movie.rate} /></li>
                                    </ul>
                                </div>
                                )
                            })
                        )
            }
            </div>    
        </div>
        </>
       
        );
}
export default MovieCard;