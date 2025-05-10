import * as _ from 'lodash';
export default function Form({info, changeType}) {
    return (
        <form onSubmit={(e) => {
            changeInfo();
            e.preventDefault();
        }}>
            {Object.getOwnPropertyNames(info).map(infoItem => {
                return (
                <div key={infoItem}>
                    <label htmlFor={_.kebabCase(infoItem)}>{_.startCase(infoItem)}</label>
                    <input type="text" id={_.kebabCase(infoItem)} defaultValue={info[infoItem] ? info[infoItem] : ''} />
                    <br/>
                </div>
                );
            })}
            <button type='submit'>Save</button>
        </form>
    );

    function changeInfo() {
        const inputs = document.querySelectorAll('input');
        let complete = true;
        const info = {};
        inputs.forEach(input => {
            if (!input.value) {
                complete = false;
                return;
            }
            Object.defineProperty(info, _.camelCase(input.id), {value: input.value});
        });

        if (complete) changeType('description', info);
        else alert('You have empty fields.');
    }
}