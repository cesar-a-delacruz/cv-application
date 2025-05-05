import * as _ from 'lodash';
export default function Content({info}) {
    return (
        <div className="content">
            <form>
                {Object.keys(info).map(infoItem => {
                    return (
                    <>
                        <label for={_.kebabCase(infoItem)}>{_.startCase(infoItem)}</label>
                        <input type="text" id={_.kebabCase(infoItem)} />
                        <br/>
                    </>
                    )
                })}
                <button type='submit'>Save</button>
            </form>
        </div>
    )
}