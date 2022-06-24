import { Component } from "react";
import Card from "../card-component/card.component";
import './card-list.styles.css';

class CardList extends Component {
    render() {
        const { monsters } = this.props;

        return (
            <div className='card-list'>
                {monsters.map((monsterr) => {
                    // return <Card monster={monsterr} />;
                    return (
                        <div className='card-container' key={monsterr.id}>
                            <img alt={`Monster ${monsterr.name}`} src={`https://robohash.org/${monsterr.id}?set=set2&size=180x180`}/>
                            <h2>{monsterr.name}</h2>
                            <p>{monsterr.email}</p>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default CardList;