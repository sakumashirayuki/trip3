import { connect } from "dva"

const Count = (props: any) => {
    const handleOnClick = () => {
        props.dispatch({
            type: "products/add",
        })
    }
    return (<div>
        <div>{props.products}</div>
        <div onClick={handleOnClick}>add more</div>
    </div>)
}

function mapStateToProps(state: number){
    return {
        products: state
    };
}

export default connect(mapStateToProps)(Count);