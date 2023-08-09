import React, {Fragment} from "react";

import PageComponent from "../PageComponent/PageComponent";
import "./PlasticDetection.css";

function PlasticDetection() {

return (
  <Fragment>
    <PageComponent title="This is the first page" subtitle="Of this fancy scroll thing"
      background="http://www.hdwallpaperspulse.com/wp-content/uploads/2017/03/28/awesome-railway-road-image.jpg" />
    <PageComponent title="This is the second page" subtitle="Of this nifty scroll thingie"
      background="http://sfwallpaper.com/images/background-images-hd-18.jpg" />
    <PageComponent title="This is the third page" subtitle="Of this dope ass scroll shit"
      background="http://sfwallpaper.com/images/cool-background-picture-20.jpg" />
  </Fragment>
  )
}

export default PlasticDetection;
