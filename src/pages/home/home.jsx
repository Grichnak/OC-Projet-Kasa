import './home.scss';
import Banner from "../../components/banner/Banner"
import Card from '../../components/card/Card'
import imgBannerHome from '../../assets/banner-falaises.png'
import logement from '../../data/logements.json'

export function HomePage() {
	return (
        <div className='Home'>
        <Banner image = {imgBannerHome} title = "Chez vous, partout et ailleurs" imageClassName="home-banner-img" banner ="home-banner" alt ="paysage de falaises sur un littoral " />
        <section className='container-cards'>
        {logement.map((logement)=> (
            <Card key={logement.id} id={logement.id} title={logement.title} cover={logement.cover} />
        ))}
        </section>
        </div>
	)
	
	
}