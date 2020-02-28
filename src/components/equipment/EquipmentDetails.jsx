import React from 'react';

import styled from 'styled-components';
import { Item, Icon } from 'semantic-ui-react';

const CustomExtra = styled(Item.Extra)`
    color: #4183c4 !important;
`;

const CustomItem = styled(Item)`
    max-width: fit-content;
    margin: 40px auto !important;
    padding: 15px 20px !important;
    border: 1px solid rgba(34,36,38,.15) !important;
    border-radius: 4px !important;
`;

const EquipmentDetails = ({
    equipment
}) => (
    <Item.Group>
        <CustomItem>
            <Item.Image size="medium" src={equipment.photo} />
            <Item.Content verticalAlign="middle">
                <Item.Header as='h1'>{equipment.name}</Item.Header>
                <Item.Meta>{equipment.domain}</Item.Meta>
                <Item.Description>
                    {equipment.brand && <p>Marque: {equipment.brand}</p>}
                    {equipment.model && <p>Modèle: {equipment.model}</p>}
                    {equipment.serialNumber && <p>Numéro de série: {equipment.serialNumber}</p>}
                    {equipment.building && <p>Bâtiment: {equipment.building}</p>}
                    {equipment.local && <p>Pièce: {equipment.local}</p>}
                    {equipment.quantity && <p>Quantité: {equipment.quantity}</p>}
                    {equipment.status && <p>Statut: {equipment.status}</p>}
                </Item.Description>
                <CustomExtra>
                    <Icon name="times circle outline" />
                    {equipment.nbFaults} défauts
                </CustomExtra>
            </Item.Content>
        </CustomItem>
    </Item.Group>
);

export default EquipmentDetails;