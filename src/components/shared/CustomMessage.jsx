import React from 'react';

import { Message } from 'semantic-ui-react';
import styled from 'styled-components';

const StyledMessage = styled(Message)`
    max-width: fit-content;
    margin: 0 40px !important;
`;

const CustomMessage = ({
    type
}) => {
    switch (type) {
        case 'no-data':
            return (
                <StyledMessage
                    warning
                    icon='ban'
                    header='Aucun résultat pour cette recherche.'
                    content='Essayez avec d’autres termes ! La recherche fonctionne sur le nom et le domaine d’un équipement.'
                />
            )
        default:
            return (
                <StyledMessage
                    negative
                    icon='bug'
                    header='Quelque chose d’inattendu s’est produit'
                    content='Nos serveurs sont peut-être en maintenance ! Essayez de nouveau dans quelques minutes.'
                />
            )
    }
}

export default CustomMessage;