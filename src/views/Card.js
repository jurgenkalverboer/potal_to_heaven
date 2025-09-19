import "./Card.css"
import {Range} from "./Range"
import {Sword} from "./Sword";
import {LeftRight} from "./LeftRight";
import {UpDown} from "./UpDown";
import {Heart} from "./Heart";

export function Card({hero}) {
    function drawRange(range) {
        console.log(range)
        return <div>-X-<br></br>XXX</div>;
    }

    return (
        <div class="card">


            <div className="left-top">
                <div>{hero.velocity}</div>
                <div><i className="arrow up"/> {hero.up}</div>
                <div><i className="arrow left"/><i className="arrow right"/>{hero.lr}</div>
                <div><i className="heart"/>{hero.health}</div>
                <div>{hero.damage}</div>
                <Sword/>
                <LeftRight/>
                <UpDown/>
                <Heart/>

            </div>
            <div className="right-top">
                <div>{hero.name}</div>
                <div>IMAGE</div>
            </div>
            <Range range ={ hero.range}/>
            <div className="card-description">
                {hero.info}
            </div>


        </div>
    );
}