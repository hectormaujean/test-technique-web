import React from 'react';
import { database } from './../services/firebase';

import styled from 'styled-components';
import { Card } from 'semantic-ui-react';

import formatString from './../helpers/formatter';
import SearchBar from './../components/shared/SearchBar';
import EquipmentCard from './../components/EquipmentCard';

const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px 0 !important;
`;

class EquipmentsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            error: false,
            equipments: undefined,
            displayedEquipments: undefined,
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
                    this.setState({ loading: false, equipments, displayedEquipments: equipments });
                });
            } catch {
                this.setState({ loading: false, error: true });
            }
        })
    }

    handleSearchChange = (e) => {
        const { equipments } = this.state;
        const searchValue = formatString(e.target.value)
        if (searchValue.length) {
            const results = equipments.reduce((arr, equipment) => {
                const name = formatString(equipment.name);
                const domain = formatString(equipment.domain);

                return (name.includes(searchValue) || domain.includes(searchValue)) ? [...arr, {...equipment}] : arr
            }, []);
            this.setState({ displayedEquipments: results });
        } else {
            this.setState({ displayedEquipments: equipments });
        }
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
            displayedEquipments
        } = this.state;

        return (
            <div>
                <Header>
                    <h1>Équipements</h1>
                    <SearchBar onChange={this.handleSearchChange} />
                </Header>
                
                <div>
                    {loading ? (
                        <div>Loading</div>
                    ) : (
                        <div>
                            {error ? (
                                <div>Error</div>
                            ) : (
                                <Card.Group centered>
                                    {displayedEquipments && displayedEquipments.length ? displayedEquipments.map(equipment => (
                                        <EquipmentCard key={equipment.key} equipment={equipment} handleClick={this.handleCardClick} />
                                    )) : (
                                        <div>No results :(</div>
                                    )}
                                </Card.Group>
                            )}
                        </div>
                    )}
                </div>
            </div>
            
        )
    }
}

export default EquipmentsContainer;