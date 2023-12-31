import './collapse.scss'
import { useState } from "react"
import PropTypes from 'prop-types'
import Arrow from "../../assets/Vector.png"

const Collapse = ({ title, content }) => { //Cette ligne définit une fonction fléchée (arrow function) appelée Collapse qui prend deux propriétés (title et description) en tant que paramètres. Ce composant sera utilisé pour afficher un collapse avec un titre et une description.
  const [isOpen, setIsOpen] = useState(false); //Cette ligne utilise le hook useState de React pour créer une variable d'état isOpen et une fonction setIsOpen pour la mettre à jour. L'état initial de isOpen est défini sur false, ce qui signifie que le collapse est initialement fermé.

  const toggleCollapse = () => { //Cette ligne définit une fonction toggleCollapse qui est appelée lorsque l'utilisateur clique sur le titre du collapse. Elle inverse la valeur de isOpen en utilisant la fonction setIsOpen, c'est-à-dire qu'elle ouvre le collapse s'il est fermé et le ferme s'il est ouvert.
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div className='titreCollapse' onClick={toggleCollapse}>
        <h2>{title}</h2>
        <img className={`arrow ${isOpen ? 'arrow--open' : ''}`} src={Arrow} alt=""></img>
      </div>

      <ul className={isOpen ? 'descriptionCollapse' : 'descriptionCollapse_hidden'}>
        {Array.isArray(content) ? content.map((item, index) => {
          return (
            <li key={index}>{item}</li>
          )
        }) : content
        }
      </ul>

    </div>
  );
  // Lorsque l'utilisateur clique sur l'en-tête title, la fonction toggleCollapse est appelée.
  // la description est affichée seulement si isOpen est true, c'est-à-dire que le collapse est ouvert. Lorsque isOpen est false, le contenu du collapse est masqué.
};

export default Collapse;

Collapse.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.array.isRequired
  ]).isRequired,
}

    // Pas open, la classe arrow ne change pas, si collapse open, changer la classe arrow pour pas arrow et donc changer sens fleche