import React from 'react'
import '../styles/Movie.css'

function Movie({coverimage,title,year,genres,summary}) { //구조분해할당
  return (
    <div className='movie'>
      <img src={coverimage} alt={title} title={title}/>
      <div className ='movie_data'>
        <h3 className='movie_title'>{title}</h3>
        <h4 className='movie_year'>{year}</h4>
        <ul className='movie_genres'>
          {genres.map((genre,index)=>(
            <li className='movie_genre' key={index}>{genre}</li>
          ))
          }
        </ul>
        <p className='movie_summary'>{summary.slice(0,180)}...</p>
        {/* 글자추출 */}
      </div>
    </div>
  )
}

export default Movie