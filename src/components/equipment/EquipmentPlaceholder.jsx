import React from 'react';

import { Card, Placeholder, List } from "semantic-ui-react";

const EquipmentPlaceholder = () => (
    <div style={{ paddingTop: "50px" }}>
        <Card.Group centered>
            <Card>
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
        </Card.Group>
    </div>
)

export default EquipmentPlaceholder;