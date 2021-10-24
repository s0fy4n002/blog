import {Input, Button, Upload, Gap, TextArea} from '../../components'
import { useHistory} from 'react-router-dom';
import {useState} from 'react';
import './createBlog.scss';
import axios from 'axios';
const CreateBlog = () => {
    
    const history = useHistory();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState('');
    const [imagePreview, setImagePreview] = useState(null)
    
    const onSubmit = ()=>{
        let data = new FormData()
        data.append('title',title)
        data.append('content',content)
        data.append('image', image)
        axios.post("https://yayanblog.herokuapp.com/", data, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        .then(res=>{
            setTitle('')
            setContent('')
            setImage('')
            setImagePreview('')
            // history.push('/')
        })
        .catch(err=>console.log('gagal! : ', err))
    }
    const OnImageUpload = (e)=>{
        
        const file = e.target.files[0]
        setImage(file)
        setImagePreview(URL.createObjectURL(file))
    }
    

    
    
    return (
        <div className="area-create-blog">
            <p className="blog-title">create new Blok Page</p>
            <Input label="Post Title" onChange={(e)=> setTitle(e.target.value)} value={title} />
            <Upload onChange={(e) => OnImageUpload(e)} img={imagePreview} />
            <TextArea onChange={(e)=> setContent(e.target.value)} value={content}/>
            <div className="area-button-save">
                <Button title="Kembali" className="button kembali" onClick={()=> history.push('/')}/>
                <Button title="Simpan" className="button save" onClick={onSubmit}/>
            </div>
            <Gap height={20} />
        </div>
        
        
    )
}

export default CreateBlog
