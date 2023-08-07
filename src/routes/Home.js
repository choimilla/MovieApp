import React, { Component } from 'react'
import axios from 'axios';
import Movie from '../components/Movie'
import '../styles/Home.css'

export class Home extends Component {
  state = {
    isLoading:true,
    movies:[]
  }

  getMovies= async()=>{
    const {data:{data:{movies}}}=await axios.get('https://yts-proxy.now.sh/list_movies.json?genre=animation&sort_by=like_count');
    console.log('movies',movies);
    this.setState({isLoading:false,movies}) //키:키값 이름이 동일하면 하나만써줘도됨 movies:movies > movies
  }

  componentDidMount(){ //영화 데이터 불러오기
    this.getMovies();
    // setTimeout(() => { // 6초 뒤에 state의 속성을 false로 바꾸기
    //   this.setState({isLoading:false})
    // },6000)
  }

  render() {
    const {isLoading,movies} = this.state // 구조분해할당
    return (
      <section className='container'>
      {isLoading ?
      <div className='loader'>
        <span className='loader_text'>Loading...</span>
      </div>
      :
      <div className='movies'>
        {movies.map((movie,index)=>(
          <Movie
          key={index}
          id={movie.id}
          coverimage={movie.medium_cover_image}
          title={movie.title}
          year={movie.year}
          summary={movie.summary}
          genres={movie.genres}
          />
      ))}
      </div>
      
      }
    </section>
    )
  }
}

export default Home