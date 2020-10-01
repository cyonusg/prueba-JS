import React, { FC,useEffect } from 'react';
import { RouteComponentProps} from '@reach/router';
import { connect } from 'react-redux';
import { getAllChamp, getAllChampPull, deleteChampion, addChamp } from '../../store/actions';
import { bindActionCreators } from 'redux';
import { Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ChampsAvaliable from '../../components/champsAvaliable';
import ChampsCompomentPull from '../../components/champsPull';

const Main: FC<RouteComponentProps> = ({ action,sourceChamp: {champs},championPull: {champsPull} }: any) => {
  useEffect(() => {
    if(!champs.length) {
      action.getAllChamp()
    }
    if(!champsPull.length) {
      action.getAllChampPull()
    }
  })

  return (
    <>
      <Container>
      <Row>
        <Col>
        <h2>Lista de Campeones Disponibles</h2>
        <ul className={'champs-avaliable'}>
        {
          champs.slice(0,60).map((champ: any) =>(
            <li key={champ.id} className={'pb-3 pt-3'}>
                <ChampsAvaliable champData={champ} />
            </li>))
        }
        </ul>
        </Col>
        <Col>
        <h2>Campeones Seleccionado para ranked</h2>
        
        <ul className={'champs-avaliable'}>
          {
            champsPull.map((champP: any) => (
                <li key={champP.id} className={'pb-3 pt-3'}>
                    <ChampsCompomentPull champData={champP} />
                </li>))
            }
        </ul>
        </Col>
      </Row>
      </Container>
      <div>
      </div>
      <ToastContainer />
    </>
  );
}

const mapStateToProps = ({sourceChamp, championPull }: any) => ({sourceChamp, championPull })

const mapDispatchToProps = (dispatch: any) => {
  const actions = {
    getAllChamp,
    getAllChampPull,
    deleteChampion,
    addChamp
  }

  return {
    action: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);

