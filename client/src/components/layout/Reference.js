import React from 'react'
import '../../Reference.css'

const Reference = () => {

    return (
        <div>
            
            <div className="gallery">
                <a target="_blank" >
                    <img src="/images/svi.jpg" width="600" height="400" />
                </a>
               
                <div className="desc">PREDSTAVLJAMO VAM NEKE OD NAJUSPEŠNIJIH SPORTISTA SRBIJE I SVETA KOJI SA PONOSOM PREDSTAVLJAJU BREND UNIT SPORT.</div>
            </div>

            <div className="gallery">
                <a target="_blank" >
                    <img src="/images/spanovic.jpg"  width="600" height="400" />
                </a> 
                <a target="_blank">
                    <img src="/images/goranivana.jpg"  width="600" height="400" />
                </a>
                <div className="desc">IVANA ŠPANOVIĆ I GORAN OBRADOVIĆ</div>
            </div>
            
            
            <div className="gallery">
                <a target="_blank">
                    <img src="/images/asmir.jpg"  width="600" height="400" />
                </a>
                <div className="desc">ASMIR KOLŠINAC</div>
            </div>

            <div className="gallery">
                <a target="_blank">
                    <img src="/images/strongman.jpg"  width="600" height="400" />
                </a>
                <div className="desc">STRONGMAN</div>
            </div>

            <div className="gallery">
                <a target="_blank">
                    <img src="/images/vosa.jpg" width="600" height="400" />
                </a>
                <div className="desc">ODBOJKAŠKI KLUB VOJVODINA</div>
            </div>
            
        </div>

    )
}

export default Reference
