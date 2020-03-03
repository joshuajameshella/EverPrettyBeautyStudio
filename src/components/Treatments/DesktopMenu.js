import React, { Component } from "react";
import { styles } from './DesktopMenu.styles';


function MenuItem(props) {
  return (
    <div>
      <div style={styles.itemName}>{props.description}</div>
      <div style={styles.itemPrice}>{props.additional === "" ? `£${props.price}` : `${props.additional} £${props.price}`}</div>
      {props.subtitle === "" ? "" :
        <div style={styles.subTitle}>{props.subtitle}</div>
      }
    </div>
  );
}


class DesktopMenu extends Component {

  render() {
    return (
      <div style={styles.main}>

        <div style={styles.container}>
          <div style={styles.title}>Hands</div>
          <div style={styles.subTitleMain}>{'Our manicure treatment helps maintain healthy nails and skin as well as promote natural nail growth to ensure your nails and skil look their best at all times'}</div>
          <MenuItem description="CND Spa Manicure" additional="" price="25.00" subtitle="" />
          <MenuItem description="File & Polish" additional="" price="12.50" subtitle="" />

          <div style={{ position: 'relative', float: 'left', width: 100, marginTop: 20 }}></div>

          <div style={styles.title}>Feet</div>
          <div style={styles.subTitleMain}>{'Footlogix is the worlds first and only pediceutial foot care line offering innovative products that provide effective and transformational results for a veriety of skin and nail conditions'}</div>
          <MenuItem description="Footlogix Pedicure" additional="" price="25.00" subtitle="" />
          <MenuItem description="+ Gel Polish" additional="additional" price="10.00" subtitle="" />
          <MenuItem description="File & Polish" additional="" price="12.50" subtitle="" />

          <div style={{ position: 'relative', float: 'left', width: 100, marginTop: 20 }}></div>

          <div style={styles.title}>The Gel Bottle Inc</div>
          <div style={styles.subTitleMain}>{'A highly pigmented, chip resistant, 100% gel polish. The addition of builder gel is prefect for weak nails requiring extra strength and protection. We use a variety of different base and top coats to create a bespoke service that will allow your nails to grow and last up to 21 days'}</div>
          <MenuItem description="Fingers" additional="" price="25.00" subtitle="" />
          <MenuItem description="+ Builder Gel" additional="additional" price="5.00" subtitle="" />
          <MenuItem description="Toes" additional="" price="25.00" subtitle="" />
          <MenuItem description="Infils" additional="" price="30.00" subtitle="" />
          <MenuItem description="Soak Off Prior to re-application" additional="" price="5.00" subtitle="" />
          <MenuItem description="Soak Off & Tidy" additional="" price="10.00" subtitle="" />
        </div>

        <div style={styles.container}>
          <div style={styles.title}>Nail Art</div>
          <div style={styles.subTitleMain}>{'We use a wide range of glitters, foils, special effect gels and more to create beautiful nail designs'}</div>
          <MenuItem description="Nail Art - including French Polish" additional="per nail" price="0.50" subtitle="* complex nail designs will be at a further charge. Please contact us for a quote" />

          <div style={{ position: 'relative', float: 'left', width: 100, marginTop: 20 }}></div>

          <div style={styles.title}>Nail Repair</div>
          <div style={styles.subTitleMain}>{`Don't panic if you have a 'nail emergency'. We can fix it for a small charge`}</div>
          <MenuItem description="Silk Repair" additional="per nail" price="2.00" subtitle="To repair and hold small breaks" />
          <MenuItem description="Nail Extension" additional="per nail" price="5.00" subtitle="To add length to a broken nail" />

          <div style={{ position: 'relative', float: 'left', width: 100, marginTop: 20 }}></div>

          <div style={styles.title}>Spray Tans</div>
          <div style={styles.subTitleMain}>{`All our spray tans are carried out using the flawless Nouvatan, available in a wide range of shades to suit any skin tones, or for your special occasion. Nouvatan is created using the finest natural ingredients and is vegan friendly, parabbin free and alcohol free, leaving your skin glowing`}</div>
          <MenuItem description="Full Body Spray Tan" additional="" price="20.00" subtitle="" />

          <div style={{ position: 'relative', float: 'left', width: 100, marginTop: 40 }}></div>
        </div>

        <div style={styles.container}>
          <div style={styles.title}>Tinting</div>
          <div style={styles.subTitleMain}>{'A patch test is required at least 24h prior to an appointment'}</div>
          <MenuItem description="Eyebrow Tint" additional="" price="7.00" subtitle="" />
          <MenuItem description="Eyelash Tint" additional="" price="12.00" subtitle="" />
          <MenuItem description="Eyebrow & Eyelash Tint" additional="" price="16.00" subtitle="" />

          <div style={{ position: 'relative', float: 'left', width: 100, marginTop: 15 }}></div>

          <div style={styles.title}>Waxing</div>
          <div style={styles.subTitleMain}>{'All waxing treatments are performed using the superior Ashmira Botanica strip and non-strip waxes for a meticulous and comfortable result'}</div>
          <MenuItem description="Eyebrow Wax" additional="" price="7.00" subtitle="" />
          <MenuItem description="Lip or Chin Wax" additional="" price="7.00" subtitle="" />
          <MenuItem description="Lip & Chin Wax" additional="" price="12.00" subtitle="" />
          <MenuItem description="Underarm Wax" additional="" price="10.00" subtitle="" />
          <MenuItem description="Half Leg Wax" additional="" price="18.00" subtitle="" />
          <MenuItem description="Full Leg Wax" additional="" price="22.00" subtitle="" />
          <MenuItem description="Standard Bikini Wax" additional="" price="10.00" subtitle="- hair is removed up to the knicker line and crease of the leg" />
          <MenuItem description="Extended Bikini Wax" additional="" price="15.00" subtitle="- hair is removed further past the knicker line and crease of the leg" />
          <MenuItem description="Brazillian Wax" additional="" price="30.00" subtitle="- all hair is removed, leaving a small landing strip" />
          <MenuItem description="Hollywood Wax" additional="" price="30.00" subtitle="- all hair is removed" />
        </div>

        <div style={styles.footer}>
          <div style={styles.subTitleMain}>{`24 hours notice is required to cancel or re-schedule any appointment. Failure to give the required notice may result in a 50% charge of the total appointment cost. All 'no show' appointments will incur a cancellation fee of 100% of the total appointment cost`}</div>
        </div>


      </div>
    );
  }
}

export default DesktopMenu;
