export const Output = ({ className , value=''}) => {
    return (
        <>
        <input type="text"  autofocus className={className} value={value} placeholder="0"/>
        </>
    )
}