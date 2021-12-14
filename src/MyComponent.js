import PropTypes from 'prop-types';

const MyComponent = ({name, childeren}) => {
    return <div>안녕하세요 제 이름은 {name} 입니다. <br />
    childeren 값은 {childeren} 입니다.
    </div>
}

MyComponent.defaultProps = {
    name : '기본 이름'
}

MyComponent.propTypes = {
    name: PropTypes.string,
    favoriteNumber : PropTypes.number.isRequired
}

export default MyComponent
