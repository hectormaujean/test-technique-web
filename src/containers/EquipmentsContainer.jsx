import React from 'react';
import { database } from './../services/firebase';

import { Card } from 'semantic-ui-react';

import EquipmentCard from './../components/EquipmentCard';

class EquipmentsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            error: false,
            equipments: undefined
        }
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        this.setState({ loading: true }, () => {
            try {
                database.ref("Equipments/").orderByChild('name').once("value", snapshot => {
                    let equipments = [];
                    snapshot.forEach((child) => {
                        equipments.push(
                            { ...child.val(), key: child.key }
                        );
                    })
                    this.setState({ loading: false, equipments });
                });
            } catch {
                this.setState({ loading: false, error: true });
            }
        })
    }

    handleCardClick = (e, { equipment }) => {
        const { history } = this.props;
        history.push({
            pathname: `/equipment/${equipment.key}`,
            state: { equipment: equipment }
        });
    }

    render() {
        const {
            loading,
            error,
            equipments
        } = this.state;

        return (
            <div>
                {loading ? (
                    <div>Loading</div>
                ) : (
                    <div>
                        {error ? (
                            <div>Error</div>
                        ) : (
                            <Card.Group centered>
                                {equipments && equipments.map(equipment => (
                                    <EquipmentCard key={equipment.key} equipment={equipment} handleClick={this.handleCardClick} />
                                ))}
                            </Card.Group>
                        )}
                    </div>
                )}
            </div>
        )
    }
}

export default EquipmentsContainer;