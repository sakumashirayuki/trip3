import { connect } from 'umi';

const Users = (props: any) => {
    return <div>users{props.users}</div>
}

const mapStateToProps = (state: any) => {
    const { users } = state;
    return { users };
    // transmit the data of state to the component
}

export default connect(mapStateToProps)(Users); 