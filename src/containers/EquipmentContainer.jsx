import React from 'react';
import { database } from './../services/firebase';

import CustomMessage from './../components/shared/CustomMessage';
import EquipmentPlaceholder from '../components/equipment/EquipmentPlaceholder';
import EquipmentDetails from '../components/equipment/EquipmentDetails';
import EquipmentCheckpoints from '../components/equipment/EquipmentCheckpoints';

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
                    this.setState({ loading: false, checkpoints });
                });
            } catch {
                this.setState({ loading: false, error: true });
            }
        })
    }

    render() {
        const {
            loading,
            error,
            equipment,
            checkpoints
        } = this.state;

        return (
            <div>
                {loading ? (
                    <EquipmentPlaceholder />
                ) : (
                    <div>
                        {error ? (
                            <CustomMessage />
                        ) : (
                            <div>
                                <EquipmentDetails equipment={equipment} />
                                {checkpoints && (
                                    <EquipmentCheckpoints checkpoints={checkpoints} />
                                )}
                            </div>
                        )}
                    </div>
                )}
            </div>
        )
    }
}

export default EquipmentContainer;