import React from 'react';

import { database } from './../services/firebase';

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
                database.ref("Equipments/").orderByChild('name').on("value", snapshot => {
                    let equipments = [];
                    snapshot.forEach((child) => {
                        equipments.push(
                            { ...child.val(), key: child.key }
                        );
                    })
                    this.setState({ loading: false, equipments }, () => console.log(this.state.equipments));
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
                            <div>
                                {equipments && equipments.map(equipment => (
                                    <p key={equipment.key}>{equipment.name}</p>
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>
        )
    }
}

export default EquipmentsContainer;