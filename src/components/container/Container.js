
export function Container (props) {
    return (
        <div className={props.className}>
            {props.children}
        </div>
    )
}