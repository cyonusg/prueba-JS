import React, { FC } from 'react';
import { Media,Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addChamp } from '../store/actions';

const champAvaliable: FC<any> = (props:any) => {
    const {champData, action } = props;
    return (
        <>
        <Media>
            <img
            width={64}
            height={64}
            className="mr-3"
            src={"http://ddragon.leagueoflegends.com/cdn/10.20.1/img/champion/"+champData.image.full}
            alt="Generic placeholder"
            />
            <Media.Body>
                <h5>{champData.name}</h5>
                <p>
                    {champData.blurb }
                </p>
                <Button variant="primary" size="sm" active onClick={ () => action.addChamp(champData) }>
                    Agregar al Champions Pull
                </Button>
            </Media.Body>
            </Media>
        </>
      );
};

const mapStateToProps = ({ championPull }: any) => ({ championPull })

const mapDispatchToProps = (dispatch: any) => {
  const actions = {
    addChamp
  }

  return {
    action: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(champAvaliable);
