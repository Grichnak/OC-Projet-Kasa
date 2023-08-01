import './card.scss'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function Card({cardId, title, cover}) {
    return (
        <Link to={`/accomodation/${cardId}`} className="card">
            <img src={cover} alt="accomodation"/>
            <span className='cardTitle'>{title}</span>
        </Link>
    )
}

Card.propTypes = {
    cardId: PropTypes.string,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string,
}
