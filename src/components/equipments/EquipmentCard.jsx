import React from 'react';

import { Card, Image, Icon } from 'semantic-ui-react';
import styled from 'styled-components';

const CardImage = styled(Image)`
    flex-grow: 1 !important;
`;

const CustomCardContent = styled(Card.Content)`
    flex-grow: 0 !important;
`;

const EquipmentCard = ({ equipment, handleClick }) => (
    <Card raised onClick={handleClick} equipment={equipment}>
        <CardImage src={equipment.photo} />
        <CustomCardContent>
            <Card.Header>{equipment.name}</Card.Header>
            <Card.Meta>
                {equipment.domain}
            </Card.Meta>
        </CustomCardContent>
        <CustomCardContent>
            <div>
                <Icon name="times circle outline" />
                {equipment.nbFaults} défauts
            </div>
        </CustomCardContent>
    </Card>
);

export default EquipmentCard;