import formStyle from './Form.module.css'

const Form = () => {

    return (
        <div>
            <form className={formStyle.stForm}>
                <input className={formStyle.input} type="text"></input>
                <input className={formStyle.input} type="number" step="0.1"></input>
                <button className={formStyle.button} type="submit">create</button>
            </form>
        </div>
    )
}

export default Form;