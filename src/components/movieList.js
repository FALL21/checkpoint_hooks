import React from "react";

function MovieList() {
    const data = require('../datas.json');
    const movies = data.item;

    return (
        <>
        <div className="Lfilms">
             <h1>Liste des films</h1>
                {movies.map((movie) => {
                    return(
                        <div key={movie.id}>
                            <h5 className="card-title">{movie.title}</h5>
                        </div>)
                    })
            }
            </div>
           
        </>
    );
}
export default MovieList; 