import React, { Component } from "react";
import Paper from '@material-ui/core/Paper';
import { styles } from './Treatments.styles';


function MenuItem(props) {
  return (
    <div>
      <div style={styles.itemName}>{props.description}</div>
      {props.price === "" ?
        ""
        :
        <div style={styles.itemPrice}>{props.additional === "" ? `£${props.price}` : `${props.additional} £${props.price}`}</div>
      }
      {props.subtitle === "" ? "" :
        <div style={styles.subTitle}>{props.subtitle}</div>
      }
    </div>
  );
}

function MenuContainer(props) {
  return (
    <div style={props.width < 900 ? styles.treatmentContainerFull : styles.treatmentContainerSplit}>
      <div style={styles.title}>{props.title}</div>
      <div style={styles.subTitleMain}>{props.subtitle}</div>
      {props.treatments}
    </div>
  );
}


export default class Treatments_Desktop extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      width: 0,
      buttonActive: false,
    });
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth });
  }

  render() {
    return (
      <Paper style={styles.main}>

        <div style={this.state.width < 900 ? styles.headerMobile : styles.headerDesktop}>Treatments List</div>

        <MenuContainer
          width={this.state.width}
          title="Hands"
          subtitle="Our manicure treatment helps maintain healthy nails and skin as well as promote natural nail growth to ensure your nails and skil look their best at all times"
          treatments={
            <div>
              <MenuItem description="CND Spa Manicure" additional="" price="" subtitle="" />
              <MenuItem description="File & Polish" additional="" price="" subtitle="" />
            </div>
          }
        />

        <MenuContainer
          width={this.state.width}
          title="Feet"
          subtitle="Footlogix is the worlds first and only pediceutial foot care line offering innovative products that provide effective and transformational results for a veriety of skin and nail conditions"
          treatments={
            <div>
              <MenuItem description="Footlogix Pedicure" additional="" price="" subtitle="" />
              <MenuItem description="+ Gel Polish" additional="additional" price="" subtitle="" />
              <MenuItem description="File & Polish" additional="" price="" subtitle="" />
            </div>
          }
        />

        <MenuContainer
          width={this.state.width}
          title="The Gel Bottle Inc"
          subtitle="A highly pigmented, chip resistant, 100% gel polish. The addition of builder gel is prefect for weak nails requiring extra strength and protection. We use a variety of different base and top coats to create a bespoke service that will allow your nails to grow and last up to 21 days"
          treatments={
            <div>
              <MenuItem description="Fingers" additional="" price="" subtitle="" />
              <MenuItem description="+ Builder Gel" additional="additional" price="" subtitle="" />
              <MenuItem description="Toes" additional="" price="" subtitle="" />
              <MenuItem description="Infils" additional="" price="" subtitle="" />
              <MenuItem description="Soak Off Prior to re-application" additional="" price="" subtitle="" />
              <MenuItem description="Soak Off & Tidy" additional="" price="" subtitle="" />
            </div>
          }
        />

        <MenuContainer
          width={this.state.width}
          title="Nail Art"
          subtitle="We use a wide range of glitters, foils, special effect gels and more to create beautiful nail designs"
          treatments={
            <MenuItem description="Nail Art - including French Polish" additional="per nail" price="" subtitle="* complex nail designs will be at a further charge. Please contact us for a quote" />
          }
        />

        <MenuContainer
          width={this.state.width}
          title="Nail Repair"
          subtitle={`Don't panic if you have a 'nail emergency'. We can fix it for a small charge`}
          treatments={
            <div>
              <MenuItem description="Silk Repair" additional="per nail" price="" subtitle="To repair and hold small breaks" />
              <MenuItem description="Nail Extension" additional="per nail" price="" subtitle="To add length to a broken nail" />
            </div>
          }
        />

        <MenuContainer
          width={this.state.width}
          title="Spray Tans"
          subtitle="All our spray tans are carried out using the flawless Nouvatan, available in a wide range of shades to suit any skin tones, or for your special occasion. Nouvatan is created using the finest natural ingredients and is vegan friendly, parabbin free and alcohol free, leaving your skin glowing"
          treatments={
            <MenuItem description="Full Body Spray Tan" additional="" price="" subtitle="" />
          }
        />

        <MenuContainer
          width={this.state.width}
          title="Eyes"
          subtitle="A patch test is required at least 24h prior to an appointment"
          treatments={
            <div>
              <MenuItem description="Eyebrow Tint" additional="" price="" subtitle="" />
              <MenuItem description="Eyelash Tint" additional="" price="" subtitle="" />
              <MenuItem description="Eyebrow & Eyelash Tint" additional="" price="" subtitle="" />
              <MenuItem description="LVL Lashes" additional="" price="" subtitle="" />
            </div>
          }
        />

        <MenuContainer
          width={this.state.width}
          title="Waxing"
          subtitle="All waxing treatments are performed using the superior Ashmira Botanica strip and non-strip waxes for a meticulous and comfortable result"
          treatments={
            <div>
              <MenuItem description="Eyebrow Wax" additional="" price="" subtitle="" />
              <MenuItem description="Lip or Chin Wax" additional="" price="" subtitle="" />
              <MenuItem description="Lip & Chin Wax" additional="" price="" subtitle="" />
              <MenuItem description="Underarm Wax" additional="" price="" subtitle="" />
              <MenuItem description="Half Leg Wax" additional="" price="" subtitle="" />
              <MenuItem description="Full Leg Wax" additional="" price="" subtitle="" />
              <MenuItem description="Standard Bikini Wax" additional="" price="" subtitle="- hair is removed up to the knicker line and crease of the leg" />
              <MenuItem description="Extended Bikini Wax" additional="" price="" subtitle="- hair is removed further past the knicker line and crease of the leg" />
              <MenuItem description="Brazillian Wax" additional="" price="" subtitle="- all hair is removed, leaving a small landing strip" />
              <MenuItem description="Hollywood Wax" additional="" price="" subtitle="- all hair is removed" />
            </div>
          }
        />

        <MenuContainer
          width={this.state.width}
          title="Cancelation Policy"
          subtitle="24 hours notice is required to cancel or re-schedule any appointment. Failure to give the required notice may result in a 50% charge of the total appointment cost. All 'no show' appointments will incur a cancellation fee of 100% of the total appointment cost"
        />

      </Paper>
    );
  }
}
