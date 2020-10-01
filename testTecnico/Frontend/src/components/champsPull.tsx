import React, { FC } from 'react';
import { Media,Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteChampion } from '../store/actions';

const champsCompomentPull: FC<any> = (props:any) => {
    const {champData, action } = props;
    return (
        <>
        <Media>
            <img
                width={64}
                height={64}
                className="mr-3"
                src={"http://ddragon.leagueoflegends.com/cdn/10.20.1/img/champion/"+champData.name+".png"}
                alt="Generic placeholder"
            />
            <Media.Body>
                <h5>{champData.name}</h5>
                <p>
                    {champData.blurb }
                </p>
                <Button variant="danger" size="sm" active 
                onClick={ () => action.deleteChampion(champData._id) }>
                    eliminar del championPull
                </Button>
            </Media.Body>
        </Media>
        </>
    );
};

const mapStateToProps = ({ championPull }: any) => ({ championPull })

const mapDispatchToProps = (dispatch: any) => {
    const actions = {
        deleteChampion
    }

return {
    action: bindActionCreators(actions, dispatch)
}
}

export default connect(mapStateToProps, mapDispatchToProps)(champsCompomentPull);
