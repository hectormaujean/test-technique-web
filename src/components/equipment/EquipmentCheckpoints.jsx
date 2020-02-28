import React from 'react';

import styled from 'styled-components';
import { Icon, List, Message, Checkbox, Modal, Image } from 'semantic-ui-react';

const CustomList = styled(List)`
    margin: 0 auto !important;
    max-width: 900px;
`;

const CustomMessage = styled(Message)`
    margin: 15px 20px !important;
`;

const CustomContent = styled(Message.Content)`
    display: flex;
    align-items: center;
`;

const CustomCheckbox = styled(Checkbox)`
    margin-right: 15px;
`;

const Fault = styled.div`
    color: #db2828;
    margin-top: 5px;
`;

const Recommandation = styled.div`
    span {
        text-decoration: underline;
    }
`;

const CustomIcon = styled(Icon)`
    margin-left: auto !important;
`;

const CustomImage = styled(Image)`
    margin: 0 auto;
`;

const EquipmentCheckpoints = ({
    checkpoints
}) => (
    <CustomList>
        {checkpoints.map(checkpoint => (
            <CustomMessage key={checkpoint.key}>
                {/* <Image src={checkpoint.photo} /> */}
                <CustomContent>
                    <CustomCheckbox />
                    <div>
                        <Message.Header>{checkpoint.name}</Message.Header>
                        {checkpoint.fault && <Fault>{checkpoint.fault}</Fault>}
                        {checkpoint.fault && 
                            <Recommandation>
                                <span>Recommendation:</span>
                                {' ' + checkpoint.recommandation}
                            </Recommandation>
                        }
                    </div>
                    {checkpoint.photo && (
                        <Modal size="mini" trigger={<CustomIcon size="large" name="file image outline" />}>
                            <Modal.Content image>
                                <CustomImage size='medium' src={checkpoint.photo} />
                            </Modal.Content>
                        </Modal>
                    )}
                    
				</CustomContent>
            </CustomMessage>
        ))}
    </CustomList>
);

export default EquipmentCheckpoints;