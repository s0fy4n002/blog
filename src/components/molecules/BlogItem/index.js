import './blogItem.scss';
import { Button, Gap} from "../../../components"
import React from 'react';
import { useHistory } from "react-router-dom";


const BlogItem = (props) => {
    const history = useHistory();    
    const {title, content, _id, image, author, date} = props
    
    return (
        <div className="blog-item">
            
            <img className="image-thumb" src={`https://yayanblog.herokuapp.com/${image}`} onClick={()=>history.push(`/detail-blog/${_id}`)} alt="post"/>
            <div className="content-detail">
                <p className="title" onClick={()=>history.push(`/detail-blog/${_id}`)}>{title}</p>
                <p className="author">{author} - {date}</p>
                <p className="body" onClick={()=>history.push(`/detail-blog/${_id}`)}>{content}</p>
                <Gap height={20} />
                <Button title="View Blog" onClick={()=>history.push(`/detail-blog/${_id}`)} className="viewBlog" />
            </div>
        </div>
    )
}

export default BlogItem
