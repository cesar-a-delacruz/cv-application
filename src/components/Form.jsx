import * as _ from 'lodash';
export default function Form({info}) {
    return (
        <form>
            {Object.keys(info).map(infoItem => {
                return (
                <div key={infoItem}>
                    <label htmlFor={_.kebabCase(infoItem)}>{_.startCase(infoItem)}</label>
                    <input type="text" id={_.kebabCase(infoItem)} />
                    <br/>
                </div>
                )
            })}
            <button type='submit'>Save</button>
        </form>
    )
}