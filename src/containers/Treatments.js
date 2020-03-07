import React, { Component } from "react";
import TreatmentsDesktop from '../components/Treatments/Treatments_Desktop';
import { styles } from './styles/Treatments.styles';

class Treatments extends Component {
  render() {
    return (
      <div style={styles.main}>
        <TreatmentsDesktop />
      </div>
    )
  }
}

export default Treatments;
