import PropTypes from 'prop-types';

const TextInput = ({ text }) => {
    return (
        <div>
            <input className={'textInput'} value={ text } />
        </div>
    )
}


TextInput.defaultProps = {
    color: 'black',
}

TextInput.propTypes = {
    text: PropTypes.string,
}

export default TextInput