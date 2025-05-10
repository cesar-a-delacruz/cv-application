import * as _ from 'lodash';
export default function Description({info, changeType}) {
    return (
        <div>
            {Object.getOwnPropertyNames(info).map(infoItem => {
                return (
                <div key={infoItem}>
                    <h3>{_.startCase(infoItem)}</h3>
                    <br/>
                    <p>{info[infoItem]}</p>
                    <br/>
                </div>
                );
            })}
            <button onClick={(e) => {
                changeType('form');
            }}>
                Edit
            </button>
        </div>
    )
}