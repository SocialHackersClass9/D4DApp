import React, { useState } from "react";
import styled from "styled-components";
import "./sportParalympics.css";

const Styles = styled.div`
  padding: 10px;
`;

function SportParalymics() {
  const [readMore, setReadMore] = useState(false);
  const extraContent = (
    <div>
      <p className="extra-content text-justify">
        <br />Η Αντισφαίριση με αμαξίδιο είναι ένα δυναμικό άθλημα και έχει
        ιδιαίτερα υψηλή δημοτικότητα κατά τη διάρκεια των Παραολυμπιακών Αγώνων.
        Σε υψηλό αγωνιστικό επίπεδο απαιτείται υψηλή τεχνική κατάρτιση,
        εξαιρετική φυσική κατάσταση, ταχύτητα, αντανακλαστικά, θέληση και άριστη
        ψυχολογία. Η Αντισφαίριση με αμαξίδιο διεξάγεται μεταξύ δύο (απλό) ή
        τεσσάρων αθλητών ή αθλητριών (διπλό), που παρουσιάζουν μόνιμη κινητική
        αναπηρία, με απώλεια λειτουργικότητας σε ένα ή και τα δυο κάτω άκρα.
        Επίσης, δικαίωμα συμμετοχής έχουν, αλλά κατατάσσονται σε ξεχωριστό όμιλο
        (quad), αθλητές με τετραπληγία, οι οποίοι έχουν απώλεια κινητικότητας ή
        ακρωτηριασμό σε τουλάχιστον 3 από τα 4 άκρα. Βασικός σκοπός του
        παιχνιδιού είναι να χτυπηθεί η μπάλα από τη ρακέτα με τέτοιο τρόπο, ώστε
        να περάσει πάνω από το δίχτυ, να πέσει στο γήπεδο του αντιπάλου και να
        κερδιθεί ο πόντος. Ο νικητής ανακηρύσσεται στα δύο νικηφόρα «set» των
        έξι «games» το καθένα.
      </p>
    </div>
  );

  const linkName = readMore ? "Read less  " : " 1)Αντισφαίριση με αμαξίδιο... ";
  return (
    <React.Fragment>
      <h1 className="titleh1">PARALYMIC SPORTS</h1>

      {/* image part */}
      <div className="images">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSKtJJFvg8Q4qCfwajyb-kLtddWquz9r7nw3g&usqp=CAU"
          alt="sports"
        />
      </div>

      {/* history part */}
      <div className="row">
        <div
          className="history col-xs-10 col-sm-12 col-md-12"
          style={{ paddingBottom: "100px" }}
        >
          <h1>HISTORY OF PARALYMIC SPORTS</h1>

          <p className="text-justify">
            {" "}
            The first races for athletes with disabilities took place in 1948 in
            StokeMadville, England. On the day of the opening ceremony for the
            1948 Olympic Games in London, the StokeMadeville Games began and
            were instituted and the first wheelchair sports event took place.
            Four years later, athletes from the Netherlands took part in these
            games, giving birth to the international movement now known as the
            Paralympic Movement. The first Olympic Games for athletes with
            disabilities were organized in 1960 in Rome, after the Olympic Games
            in the same city. They are considered to be the first Paralympic
            Games. About 400 athletes from 23 countries participated in 8
            sports, 6 of which are still included in the program of the
            Paralympic Games (Archery, Swimming, Fencing, Basketball, Table
            Tennis, Athletics). Since then, the Paralympic Games are held every
            4 years, always in the same year as the Olympic Games. In 1976 in
            Toronto, other categories of disability were added and the idea of
            ​​merging different categories of athletes with disabilities for
            their participation in international sporting events was born. The
            same year saw the first Winter Paralympic Games in Sweden. The Seoul
            Paralympic Games (1988) also stood out from the fact that the
            Olympic and Paralympic Games were hosted in the same country, in the
            same city and the same facilities as the Olympic Games were used.
            Since then, the Paralympic Games have always been held in the same
            city as the Olympic Games. Since 1960, twelve (12) Summer Paralympic
            Games and nine (9) Winter Games have been organized. The Paralympic
            Games have now become the second largest sporting event after the
            Olympics. Greek athletes have been participating in the Paralympic
            Games since 1976. Since 1988, Greece has been participating in the
            Games with official National Missions. All these years, the Greek
            athletes achieved good performance and won many medals. The first
            participation of a Greek Athlete in the Winter Paralympic Games took
            place in 2002 in Salt Lake City. The Torino Paralympic Games in 2006
            were the second Winter Paralympic Games in which a Greek Mission
            participated. The Vancouver Paralympic Winter Games are the third
            Winter Games that Greece will participate with the participation of
            the first athlete.
          </p>

          <hr style={{ paddingTop: "1px", borderTop: "1px solid black" }}></hr>
        </div>
      </div>

      {/* ///////////////////////////////////////////////// */}

      <div className="row1">
        <div className="history col-xs-10 col-sm-10 col-md-10">
          <h1>SUMMER PARALYMPIC SPORTS </h1>
          <p className="text-justify">
            The competition program of the Summer Paralympic Games now includes
            22 summer sports. Eighteen of them are common to the Olympics and
            the other four are exclusively Paralympic. These are Botsia, Golf,
            Weightlifting and Wheelchair Rugby. The sport of 5x5 Football was
            added to the Athens Games, while in Beijing for the first time
            athletes competed in Rowing. Canoe and Triathlon were added to the
            Rio Games. The records set at the Paralympic Games can be compared
            to the records of the Olympic athletes (such as in the men's 100m in
            Track and Field) and in some cases (such as in weightlifting) the
            Paralympic records surpass those of athletes without disabilities.
            In some sports athletes from all or most categories of disability
            participate, while in others from only one category. In detail, the
            Paralympic sports are
          </p>
          {/* <h2 className="summer">Paralympic Games sports details</h2> */}
          <br />
          <div className="App">
            <a
              className="read-more-link"
              onClick={() => {
                setReadMore(!readMore);
              }}
            >
              <h3>{linkName}</h3>
            </a>
            {readMore && extraContent}
            <hr
              style={{ paddingTop: "50px", borderTop: "1px solid black" }}
            ></hr>
          </div>
        </div>
      </div>

      {/* ///////////////////////////////////////////////// */}

      {/* <div className="row">
          <div
            className="history col-xs-8 col-sm-8 col-md-8 pr-20px"
            style={{ paddingBottom: "100px" }}
          >
            <h1 className="summer">WINTER PAR:SPORTS </h1>
            <br />
            <p className="summer">Paralympic winter sports details</p>
            <br />
            <hr
              style={{ paddingTop: "50px", borderTop: "1px solid black" }}
            ></hr>
          </div>
        </div> */}
    </React.Fragment>
  );
}

export default SportParalymics;
