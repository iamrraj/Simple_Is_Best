import React from 'react';

// import {Link} from 'react-router';
// import { Col } from 'react-bootstrap';
// import styled from 'styled-components';
const POSTER_PATH = 'http://image.tmdb.org/t/p/original';

export default function CastList({movie}) {
  // const StyledLink = styled(Link)`
  //   &:hover {
  //     text-decoration:none;
  //   }
  // `;

  
    var casts = movie.credits.cast.map(function(castt) {
      if(castt.profile_path != null) {
        return(
          <div class="col-sm-2" key={castt.id} style={{marginTop: "15px"}}>
          <div class="card">
          <img src={
            castt.profile_path ?
            `${POSTER_PATH}${castt.profile_path}`
            :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW4I8WjSih2pBUuErcVPFj7G_Zn2xvNVWqvlMvHtb3M1JOtJUU"
          } alt={castt.name} style={{ height:"210px"}}  class="card-img-top ig image"  />
              <div class="middle">
                <p className="c">{castt.name }</p>
                <p className="c">{castt.gender==1?'Female':'Male'}</p>
                <p className="c">{ castt.character }</p>
              </div>
          </div>
      </div>
        );
     }
    });

    return(
      <div>
        <h3>Casts</h3>
        {casts}
      </div>
    );
}
