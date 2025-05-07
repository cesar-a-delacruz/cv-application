import * as _ from 'lodash';
export default function Form({info, changeType}) {
    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            const inputs = document.querySelectorAll('input')
            let complete = true
            inputs.forEach(input => {
                if (!input.value) {
                    complete = false
                    return
                }
            });
            if (complete) changeType('description')
            else alert('You have empty fields.')
        }}
        >
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