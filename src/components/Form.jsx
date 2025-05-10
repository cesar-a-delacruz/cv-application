import * as _ from 'lodash';
export default function Form({info,  changeType, changeContent}) {
    return (
        <form onSubmit={(e) => {
            const inputs = document.querySelectorAll('input')
            let complete = true
            const newInfo = {}
            inputs.forEach(input => {
                if (!input.value) {
                    complete = false
                    return
                }
                Object.defineProperty(newInfo, _.camelCase(input.id), {value: input.value})
            });
            if (complete) {
                changeType('description')
                changeContent(undefined, newInfo)
            }
            else alert('You have empty fields.');
            e.preventDefault()
        }}
        >
            {Object.getOwnPropertyNames(info).map(infoItem => {
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