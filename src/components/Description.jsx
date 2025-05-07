import * as _ from 'lodash';
export default function Description({info}) {
    return (
        <div>
            {Object.keys(info).map(infoItem => {
                return (
                <div key={infoItem}>
                    <h3>{_.startCase(infoItem)}</h3>
                    <br/>
                    <p>{info[infoItem]}</p>
                    <br/>
                </div>
                )
            })}
            <button>Edit</button>
        </div>
    )
}