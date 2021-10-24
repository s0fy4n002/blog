import './link.scss'

const Link = ({title, onClick}) => {
    return (
        <div className="wrapper-link">
            <p className="link">{title}</p>
        </div>
    )
}

export default Link
