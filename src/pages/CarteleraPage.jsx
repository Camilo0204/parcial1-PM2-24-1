// CarteleraPage.jsx
import React, { useState, useEffect } from 'react';
import { getNowPlayingMovies } from '../service/nowPlayingService';
import film2 from '../assets/film2.jpg'
const CarteleraPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getNowPlayingMovies(currentPage);
        setMovies(data.results);
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener las películas en cartelera:', error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [currentPage]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className="container">
      <center>
      <h1 className="mt-4 mb-4">Películas en Cartelera 🎦</h1>
      </center>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {movies.map((movie) => (
              <div key={movie.id} className="col">
                <div className="card h-100">
                  {movie.poster_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      className="card-img-top"
                      alt={movie.title}
                    />
                  ) : (
                    <div className="card-img-top bg-secondary text-white text-center d-flex align-items-center justify-content-center">
                      <p className="m-0">No hay imagen disponible</p>
                    </div>
                  )}
                  <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>
                    <p className="card-text">Fecha de estreno: {movie.release_date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4">
          <center>
            <button
              className="btn btn-primary me-2"
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              style= {{ fontSize: '1.5em' }} // Cambiar el tamaño del texto del botón
            >
              Anterior
            </button>
            <span className="align-middle">Página {currentPage}</span>
            <button 
              className="btn btn-primary ms-2" 
              onClick={handleNextPage}
              style= {{ fontSize: '1.5em' }} 
              >
              Siguiente
            </button>
            </center>
          </div>
          <footer>
          <br/>
          <img src={film2} width="1400" height="150" />
          <br />
           </footer>
        </>
      )}
    </div>
  );
};

export default CarteleraPage;

