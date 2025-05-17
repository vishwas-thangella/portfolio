export default function Button(props) {
    return (
        <div className="App">
            <a href={`${props.url ? props.url : "#"}`}>
                <button
                    className={`button--toggle button--toggled`}
                >
                    <div className="button--text flex flex-row items-center gap-3"> <i className={`${props.icon}`}></i>{props.title}</div>
                    <div className="animating">
                        <div className="innerAnimating"></div>
                    </div>
                </button>
            </a>
        </div>
    );
}
