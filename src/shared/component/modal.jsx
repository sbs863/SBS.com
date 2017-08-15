// @flow

import React from 'react'
import FontAwesome from 'react-fontawesome'

import { STATIC_PATH } from '../config'

const Modal = () =>

  <div>
    <div className="portfolio-modal modal fade" id="portfolioModal1" tabIndex="-1" role="dialog"
         aria-hidden="true" >
      <div className="modal-dialog" role="document" >
        <div className="modal-content" >
          <div className="close-modal" data-dismiss="modal" >
            <div className="lr" >
              <div className="rl" />
            </div>
          </div>
          <div className="container" >
            <div className="row" >
              <div className="col-lg-8 offset-lg-2" >
                <div className="modal-body" >
                  <h2>Project Title</h2>
                  <img
                    className="img img-centered"
                    src={`${STATIC_PATH}/images/logo.png`}
                    alt="project1"
                    style={{ height: '150px', width: '150px' }}
                  />
                  <p>Lucas ipsum dolor sit amet dug rahm braxant chirrpa vella letaki givin elomin
                    sanyassan squib. Naberrie nas gavyn garindan ikrit. Shado juvex boss anx gossam
                    boss jawa. Shado p&#39; w&#39; eck skywalker fosh whaladon. Naberrie needa moff
                    obi-wan.
                    Vratix gallia utapau mothma teneniel var vurk. Amidala jade conan whiphid lando
                    gavyn. Tono -1b cerea mustafar askajian psadan oppo cracken ubb. Choka sern
                    nagai vima-da-boda jabba yavin sneevel ponda ackbar. Moore hoth castell darth
                    dormé billaba amedda. Lars tyranus jerec solo needa.

                    Tibor anakin vor valorum wroonian. Dooku thennqora hutt finis dagobah muun san.
                    Chommell chewbacca disra jettster lando sith. Mustafar reach darth saesee zabrak
                    mas. Bimm droopy anakin ackbar. Til ken luuke c-3p0 opress. X1 tion mon isolder
                    illum nar hutta. Gonk thistleborn rotta dengar. Jagged maris nikto bardan.
                    Togruta zam tharen dormé unu jaina. Kowakian alderaan yavin dunhausen freedon
                    firmus yavin. Bail darth borsk ishi secura farlander chirrpa dodonna daala.
                    Antilles nadon wroonian anx darpa jar.</p>
                  <ul className="list-inline item-details" >
                    <li>Project:
                      <strong><a href="#github" >Repo Link</a>
                      </strong>
                    </li>
                    <li>Date:
                      <strong>MM/DD/YYYY
                      </strong>
                    </li>
                  </ul>
                  <button className="btn btn-inverse" type="button" data-dismiss="modal" >
                    <FontAwesome
                      name="times-rectangle-o"
                      size="lg"
                    /> Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="portfolio-modal modal fade" id="portfolioModal2" tabIndex="-1" role="dialog" aria-hidden="true" >
      <div className="modal-dialog" role="document" >
        <div className="modal-content" >
          <div className="close-modal" data-dismiss="modal" >
            <div className="lr" >
              <div className="rl" />
            </div>
          </div>
          <div className="container" >
            <div className="row" >
              <div className="col-lg-8 offset-lg-2" >
                <div className="modal-body" >
                  <h2>Project Title</h2>
                  <img
                    className="img img-centered"
                    src={`${STATIC_PATH}/images/logo.png`}
                    alt="project1"
                    style={{ height: '150px', width: '150px' }}
                  />
                  <p>2222</p>
                  <ul className="list-inline item-details" >
                    <li>Project:
                      <strong><a href="#github" >Repo Link</a>
                      </strong>
                    </li>
                    <li>Date:
                      <strong>MM/DD/YYYY
                      </strong>
                    </li>
                  </ul>
                  <button className="btn btn-inverse" type="button" data-dismiss="modal" >
                    <FontAwesome
                      name="times-rectangle-o"
                      size="lg"
                    /> Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

export default Modal
