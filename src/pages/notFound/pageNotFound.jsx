import './pageNotFound.scss'
import { Link } from 'react-router-dom'

function PageNotFound() {
    return (
        <div className='error'>
            <span>404</span>
            <h1>Oups! La page que vous demandez n&apos;existe pas.</h1>
            <Link className="errorLink" to="/">Retourner sur la page d&apos;accueil</Link>
        </div>
    )
}
 
export default PageNotFound
