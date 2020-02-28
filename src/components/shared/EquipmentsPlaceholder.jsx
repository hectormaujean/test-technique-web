import React from 'react';

import styled from 'styled-components';
import { Card, Placeholder } from 'semantic-ui-react';

const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px 0 !important;
`;

const renderCards = (amount) => {
    const cards = [];
    for (let i = 0; i < amount; i++) {
        cards.push(
            <Card key={i}>
                <Placeholder>
                  <Placeholder.Image square />
                </Placeholder>
                <Card.Content>
                    <Placeholder>
                        <Placeholder.Header>
                            <Placeholder.Line length='long' />
                            <Placeholder.Line length='very long' />
                        </Placeholder.Header>
                    </Placeholder>
                </Card.Content>
                <Card.Content extra>
                    <Placeholder>
                        <Placeholder.Line length='long' />
                    </Placeholder>
                </Card.Content>
            </Card>
        )
    }
    return cards;
}
const EquipmentsPlaceholder = () => (
    <div>
        <Header>
            <h1>Équipements</h1>
        </Header>
        <Card.Group centered>
            {renderCards(9)}
        </Card.Group>
    </div>
);

export default EquipmentsPlaceholder;