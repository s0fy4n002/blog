import React, {useState, useEffect} from 'react'
import {Button, Gap} from '../../components'
import './detailBlog.scss'
import { useHistory, withRouter } from 'react-router-dom';
// import {useSelector} from 'react-redux';
import axios from 'axios';

const DetailBlog = (props) => {
    
    const history = useHistory();
    // const {dataBlog, totalData, currentPage, perPage} = useSelector(state => state)
    const id = props.match.params.id
    const [blog, setBlog] = useState({})
    useEffect(() => {
        axios.get(`https://yayanblog.herokuapp.com/post/${id}`)
        .then(result =>setBlog(result.data.data))
        .catch(error => console.log(error))
        
    }, [])
    
    
    if(blog.author){
        return (
            <div className="detail-blog-wrapper">
                <Button title="Kembali" className="kembali" onClick={()=> history.goBack()}/>
                <Gap height={10}/>
                <img className="img-cover" src={`https://yayanblog.herokuapp.com/${blog.image}`} alt="thumb" />
                <p className="blog-title">{blog.title}</p>
                <p className="blog-author">{blog.author.nama} - {blog.createdAt}</p>
                <p className="blog-body">{blog.content}</p>
            </div>
        )
    }
    return <p>Loading....</p>
}

export default withRouter(DetailBlog)
