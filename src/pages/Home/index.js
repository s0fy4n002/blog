import {Button, BlogItem, Gap} from '../../components'
import { useHistory } from 'react-router-dom';
import './home.scss';
import { useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Axios from 'axios';

const Home = () => {
    const [counter, setCounter] = useState(1)
    const {dataBlog, totalData, currentPage, perPage} = useSelector(state => state)
    const totalPage = Math.ceil(totalData / perPage)
    
    const dispatch = useDispatch()
    function previous(){
        if( counter > 1){
            setCounter(counter -1)
            return null
        }
        return null
    }
    function next(){
        if(counter < totalPage ){
            setCounter(counter + 1)
            return null
        }
        return null
    }
    useEffect(() => {
        Axios.get(`https://yayanblog.herokuapp.com/post?page=${counter}`)
        .then(result => {
            
            dispatch({
                type: 'UPDATE_DATA_BLOG', 
                payload: result.data.data, 
                totalData: result.data.total_data,
                currentPage: result.data.current_page,
                perPage: result.data.per_page
            })
        })
        .catch(err => {
            console.log(err);
        })
    },[dispatch, counter])
    const history = useHistory();
    if(dataBlog){
        return (
            <div className="home-page-wrapper">
                <div className="create-wrapper">
                    <div className="btnCreateBlog">
                        <Button title="create blog" className="createBlog" onClick={ () => history.push('/create-blog')} />
                        
                    </div>
                    <Gap height={20}/>
                    <div className="content-wrapper">
                        {
                            dataBlog && dataBlog.map( blog => {
                                return <BlogItem 
                                        key={blog._id} 
                                        _id={blog._id}
                                        title={blog.title} 
                                        content={blog.content} 
                                        image={blog.image} 
                                        date={blog.createdAt} 
                                        author={blog.author.nama} />
                            })
                        }
                    </div>
                    <div className="pagination">
                        <Button onClick={previous} className="prevBtn" title="Previous" />
                        <Gap width={20}/>
                        <p>{currentPage} / {totalPage}</p>
                        <Button onClick={next} className="nextBtn" title="Next" />
                    </div>
                    <Gap height={30}/>
                </div>
            </div>
        )
    }
    return <p>Loading....</p>
}

export default Home
