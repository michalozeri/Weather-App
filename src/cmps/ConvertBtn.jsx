import { useSelector, useDispatch } from 'react-redux'

export function ConvertBtn() {

    let { isConverted } = useSelector(state => state.weatherModule)
    const dispatch = useDispatch()

    function onSetIsConverted() {
        isConverted = !isConverted
        dispatch({ type: 'SET_IS_CONVERTED', isConverted })
    }

    return (
        <section className="convert-btn">
            <button onClick={onSetIsConverted}>{isConverted? 'Convert to Fahrenheit': 'Convert to Celsius'}</button>
        </section>
    )
}