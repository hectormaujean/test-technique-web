import React from 'react';
import { database } from './../services/firebase';

class EquipmentContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props.location.state,
            loading: false,
            error: false,
            checkpoints: undefined
        }
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        const { equipment } = this.state;
        this.setState({ loading: true }, () => {
            try {
                database.ref("Checkpoints/").on("value", snapshot => {
                    let checkpoints = [];
                    snapshot.forEach((child) => {
                        if (child.val().equipmentKey === equipment.key) {
                            checkpoints.push(
                                { ...child.val(), key: child.key }
                            );
                        }
                    })
                    this.setState({ loading: false, checkpoints }, () => console.log(this.state.checkpoints));
                });
            } catch {
                this.setState({ loading: false, error: true });
            }
        })
    }

    render() {
        const { equipment } = this.state;
        return (
            <div>{equipment.name}</div>
        )
    }
}

export default EquipmentContainer;