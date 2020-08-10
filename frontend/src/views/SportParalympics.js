import React, { useState } from "react";
import styled from "styled-components";
import "./sportParalympics.css";
import Para from '..//assets/para.png';
const Styles = styled.div`
  padding: 10px;
`;

function SportParalymics() {
  const [readMore1, setReadMore1] = useState(false);
  const [readMore2, setReadMore2] = useState(false);
  const [readMore3, setReadMore3] = useState(false);
  const [readMore4, setReadMore4] = useState(false);
  const [readMore5, setReadMore5] = useState(false);
  const [readMore6, setReadMore6] = useState(false);
  const [readMore7, setReadMore7] = useState(false);
  const [readMore8, setReadMore8] = useState(false);
  const [readMore9, setReadMore9] = useState(false);
  const [readMore10, setReadMore10] = useState(false);
  const [readMore11, setReadMore11] = useState(false);
  const [readMore12, setReadMore12] = useState(false);
  const [readMore13, setReadMore13] = useState(false);
  const [readMore14, setReadMore14] = useState(false);
  const [readMore15, setReadMore15] = useState(false);
  const [readMore16, setReadMore16] = useState(false);
  const [readMore17, setReadMore17] = useState(false);
  const [readMore18, setReadMore18] = useState(false);
  const [readMore19, setReadMore19] = useState(false);
  const [readMore20, setReadMore20] = useState(false);
  const [readMore21, setReadMore21] = useState(false);
  const [readMore22, setReadMore22] = useState(false);

  const extraContent1 = (
    <div>
      <p className="extra-content text-justify">
      <br /> Wheelchair tennis is a dynamic sport and it has
        particularly high popularity during the Paralympic Games.
        High technical level requires high technical training,
        Excellent physical condition, speed, reflexes, willpower and excellent
        psychology. Wheelchair Tennis is played between two (simple) or
        four athletes (double), showing permanent kinetics
        disability, with loss of function in one or both lower extremities.
        They also have the right to participate, but are classified in a separate group
        (quad), athletes with quadriplegia who have lost mobility or
        amputation at least 3 of the 4 limbs. Its main purpose
        game is to hit the ball from the racket in such a way that
        to go over the net, to fall on the opponent's court and to
        earn the point. The winner is announced in their two winning "sets"
        six "games" each.
      </p>

      <hr style={{ paddingTop: "50px", borderTop: "1px solid black" }}></hr>
    </div>
  );

  const extraContent2 = (
    <div>
      <p className="extra-content text-justify">
      <br /> Bench Weightlifting is considered the sport of the strong. The History
        has however shown that the strength of the athlete must be accompanied by
        proper tactics and the guidance of a worthy coach. In her sport
        ‘Weightlifting on a bench, athletes compete from supine
        position (back) on a specially designed bench. The official assistants
        of an athlete give the bar to the competitor, at the height of the stretches
        in his hands. The athlete should complete the within two minutes
        attempt by making the following moves: lower the bar to
        chest, keep it for a short time still and in
        then push it upwards to the full extent of the arms.
        The races are organized for men and women who compete in
        specific categories, according to their body weight.
      </p>
      <hr style={{ paddingTop: "50px", borderTop: "1px solid black" }}></hr>
    </div>
  );

  const extraContent3 = (
    <div>
      <p className="extra-content text-justify">
      <br />
        Golf is an exclusively Paralympic sport. It's about
        team sport, in which only blind athletes or athletes with
        reduced vision. Players to meet the high level
        competition must have high technique, strength, speed,
        fast reaction, teamwork, flexibility and good sense of space. In
        Leisure level can be practiced by everyone regardless of age,
        physical condition or degree of vision loss. Golf is played in
        indoor volleyball court. It is played by men and women and each
        The team consists of three key players and three substitutes.
        The object of the game is for one team to roll the ball by hand
        to the opposing side and score goals while the opposing players
        they try to repel it with any part of their body.
        The winner is the team that will score the most goals. THE
        Duration of the match is two halves of ten minutes.
      </p>
      <hr style={{ paddingTop: "50px", borderTop: "1px solid black" }}></hr>
    </div>
  );

  const extraContent4 = (
    <div>
      <p className="extra-content text-justify">
      <br /> Speed ​​and quick reactions are the two main ones
        characteristics of Table Tennis athletes.
        Each match consists of five sets. The winner of each set is
        athlete, athlete or team that will score first 11 points. THE
        Table Tennis at the Paralympic Games presents
        minimal differences with the respective sport at the Olympics.
        Only a few modifications have been made to the athletes
        use a wheelchair. Athletes with cerebral palsy participate,
        spinal cord injury and athletes with amputation or other motor skills
        restrictions. Athletes compete in wheelchairs or standing and
        are classified into 10 categories based on the mobility restrictions that
        present.
      </p>
      <hr style={{ paddingTop: "50px", borderTop: "1px solid black" }}></hr>
    </div>
  );

  const extraContent5 = (
    <div>
      <p className="extra-content text-justify">
      <br /> Horseback riding, one of the most impressive sports of the Paralympics
         Games, helps to restore and improve motor skills
         of the people who deal with it. The application of the same rules
         evaluation and grading of men and women, as well as the
         reward not only the horseman or the amazon but also the horse, the
         make it unique as a sport. The horseman or the amazon and the horse
         are considered a group.
      </p>
      <hr style={{ paddingTop: "50px", borderTop: "1px solid black" }}></hr>
    </div>
  );

  const extraContent6 = (
    <div>
      <p className="extra-content text-justify">
      <br /> Sailing is on the list of sports with the most
        ardent fans. It is one of the few sports in which age
        of athletes is not a determining factor in their performance,
        as the experience, gained over the years, covers the
        reduced physical endurance. Sailing competitions are held in water
        athletics. They are marked with buoys, which delimit them
        routes, which must be completed by the competitors. During
        Sailing Games at the Paralympic Games athletes and
        female athletes compete in Sonar, 2.4mR and SKUD 18 boats
        are called to face not only their opponents, but also the
        unpredictable weather phenomena. They participate in the Paralympic Games
        sailors with reduced vision or blind, as well as sailors with
        physical disability.
      </p>
      <hr style={{ paddingTop: "50px", borderTop: "1px solid black" }}></hr>
    </div>
  );

  const extraContent7 = (
    <div>
      <p className="extra-content text-justify">
      <br /> Wheelchair Basketball is one of the most spectacular and
        popular sports of the Paralympic Games. Distinguished for the unique
        of style, the fast flow of the match and the constant alternation of phases with
        continuous attacks and "man to man" defenses. In Basketball with
        Each team wheelchair consists of five players, who play
        inside the field and seven substitutes. Changes are made
        during holidays in the race. The purpose of each group is on the one hand to
        scores in the opponents basket and on the other hand to block the opponent
        team from scoring. The winner is the team that at the end
        match has scored the most points. Basketball with
        wheelchair at the Paralympic Games and Basketball at
        Olympic Games show little difference in form
        and the dimensions of the stadium, the fixed equipment and their
        regulations. Their main difference lies in the use of the wheelchair, the
        which the athlete is called upon to use with ease
        in order to achieve his racing goals. In
        Wheelchair basketball involves men and women with an injury
        spinal cord, amputation, cerebral palsy or other motor
        disabilities.
      </p>
      <hr style={{ paddingTop: "50px", borderTop: "1px solid black" }}></hr>
    </div>
  );

  const extraContent8 = (
    <div>
      <p className="extra-content text-justify">
      Swimming started as a rehabilitation activity and
        entertainment, but quickly became one of the most popular sports
        for people with disabilities. Athletes also participate in the Swimming competitions
        female athletes with: motor disabilities and with total or partial loss of vision.
        Blind athletes and athletes with visual impairment, depending on
        degree of visual loss are classified into the following categories:
        S11-SB11-SM11, S12-SB12-SM12 and S13-SB13-SM13. To swimmers with
        mobility disabilities the classification into categories is relatively more
        complication. Depending on the type of disability, the degree of muscle is examined
        force, the coordination of movements or the range of motion and, in
        then, the functional capacity and the
        restriction of movements in different swimming styles. After the above
        assessment athletes are classified in one of the {""}
        <li>
          {""}
          10 categories, S1-S10, for freestyle, supine and butterfly {""}
        </li>
        <li> 8 for front, SB2-SB9 </li> {""}
        <li> 8 for mixed atomic, SM3-SM10 </li>
        The greater the mobility of a swimmer
        the category in which it will be included is also higher. A swimmer
        can have one category for a swimming style and different
        for another, e.g. be S5 in the free, SB4 or SB3 in the front and
        SM5 or SM4 in mixed atomic. With this classification system, in each
        category includes swimmers with different disabilities as long as,
        functionally, have similar or approximately identical capabilities.
      </p>
      <hr style={{ paddingTop: "50px", borderTop: "1px solid black" }}></hr>
    </div>
  );

  const extraContent9 = (
    <div>
      <p className="extra-content text-justify">
      <br />
        Botsia is a competitive sport, which takes place between
        two athletes, pairs or teams of three people each. In the days
        In our country, Botsia is a sport for people with cerebral palsy or other
        wheelchair accessible using both wheelchairs
        leisure activity as well as on a competitive level. The sport requires
        self-concentration, coordination, ability to control muscles, accuracy,
        teamwork, collaboration and strategy. The matches are held indoors
        space, in which special lines are drawn delimiting it
        playing field. The goal of the players is to promote the leather ones
        their red or blue balls as close as possible to a white one
        target ball, called "jack". The order of the players is determined by
        draw. The athlete or team that wins the draw is eligible
        to choose whether to fight with the red or blue balls. The first
        Round starts with the player who will play with the red balls, the
        who throws first the white and then a red ball. THE
        promotion of the ball can be done by hand, foot or with
        help of a device when players show very large kinetic
        restriction in the upper and lower extremities. Then the opponents throw them
        their balls, trying to reach the target ball. At the end of each
        rounds are measured by the referee the closest distances to the goal
        and the score is collected to determine the winner.
      </p>
      <hr style={{ paddingTop: "50px", borderTop: "1px solid black" }}></hr>
    </div>
  );

  const extraContent10 = (
    <div>
      <p className="extra-content text-justify">
      <br /> Wheelchair Fencing is a sport of high demands
        adaptation, organization and patience. Inventiveness combined with
        Long hours of exercise and training are basic supplies for every athlete
        of Fencing. Athletes with mobility disabilities participate in Fencing,
        who fight in a wheelchair. During a race
        Fencing, wheelchairs are fixed to the ground, allowing
        nevertheless to the athlete to perform fast
        alternating movements. The sport is governed by its rules
        International Fencing Federation and the International Fencing Committee
        Paralympic Committee. In the program of the Paralympic Games
        includes five Fencing competitions, which are held individually
        and in groups:
        <li>
          {""}
          Men exercises sword (men flirt). Category A and category B 
        </li>
        <li>
          {""}
          Woman exercises sword (woman flirting). Category A and category B 
        </li>
        <li>
          {""}
          Men's duel sword (for men). Category A and category B 
        </li>
        <li>
          {""}
          Women's duel sword (for women). Category A and category B {""}
        </li>
        <li> Men's Swords (Men's Samps). Category A and Category B </li>
      </p>
      <hr style={{ paddingTop: "50px", borderTop: "1px solid black" }}></hr>
    </div>
  );

  const extraContent11 = (
    <div>
      <p className="extra-content text-justify">
      <br /> Seated Athletes Volleyball made its appearance in 1956
        and is one of the most important team sports for athletes with
        disability. The differences between Paralympic and Olympic Volleyball
        are minimal. Specifically, in Seated Volleyball, the dimensions
        of the field are smaller, the net (net) is placed at a lower
        height while athletes compete sitting. <br />
        The sport requires intensity, competitiveness, cooperation and strategy from
        the participants. Athletes with motor skills have the right to participate
        disabilities (mutilation or other motor disability). In Volleyball
        athletes, although not classified as
        categories as in other sports, must meet its conditions
        minimum disability. Matches are held between two teams indoors
        stadium, in a field of dimensions of 10 x 6 meters. Every team
        consists of six key players, while the substitutes do not
        exceed six.
      </p>
      <hr style={{ paddingTop: "50px", borderTop: "1px solid black" }}></hr>
    </div>
  );

  const extraContent12 = (
    <div>
      <p className="extra-content text-justify">
      <br />
        The bicycle is one of the most popular means of transportation these days
        us. In addition, it is one of the most popular activities
        recreation for people of all ages. As a sport for people with disabilities
        began to develop by blind cyclists, who initially
        participated in races with a two-seater bicycle. Cycling in
        Paralympic Games include two competitions: Road Cycling
        and Track Cycling. Road Cycling races are held in
        public roads, while the Cycling Races are held in
        cycling track. Although the rules governing the sport are the same
        with those of the Olympic sport, in some cases
        bike conversions are allowed for specific athletes
        restrictions. Except for visually impaired or blind cyclists, they take
        part and cyclists with cerebral palsy, with spinal cord injury
        marrow, with amputation or other motor disability. The ranking of athletes
        in racing categories is done according to the degree of functionality
        based on the skills required for Cycling. The bicycles
        of athletes are adapted, where necessary, to their needs
        athletes.
      </p>
      <hr style={{ paddingTop: "50px", borderTop: "1px solid black" }}></hr>
    </div>
  );

  const extraContent13 = (
    <div>
      <p className="extra-content text-justify">
      <br />
        Football 5 × 5, which in Greece is also known by the name
        Blind football is a popular sport for blind athletes and
        athletes with reduced vision. Each football match is played by two
        teams of 10 athletes of which four blind athletes and one
        goalkeeper with reduced or normal vision are in the game
        space and five are alternates. A 5 × 5 football match has
        duration of 50 minutes and takes place in two halves of 25 minutes.
        A 10-minute break is inserted in between. The winner is announced the
        team that scores the most goals. Football 5 × 5 is held
        according to the rules of the International Football Association (FIFA)
        and the Football Committee of the International Sports Organization for the Blind
        (IBSA).
      </p>
      <hr style={{ paddingTop: "50px", borderTop: "1px solid black" }}></hr>
    </div>
  );

  const extraContent14 = (
    <div>
      <p className="extra-content text-justify">
      <br />
        Football is one of the most popular sports in the world and
        7 × 7 football is one of the most spectacular sports for athletes with
        kinetical disabilities. Starting in 1978, Football has 7 × 7
        spread to many countries, attracting more and more
        fans. Athletes with a stroke participate in 7 × 7 Football
        paralysis. Each football match is played by two teams of 12
        athletes of which seven, including the goalkeeper,
        are inside the field. A 7 × 7 Football match has
        duration 60 minutes and takes place in two halves of 30 minutes, with
        a break of 15 minutes. The team that achieves the most
        goals during the match is the winner. Football 7 × 7
        carried out in accordance with the regulations of the International Federation
        Football Association (FIFA) and the Football Committee of International Sports
        Cerebral Palsy Organization (CP-ISRA).
      </p>
      <hr style={{ paddingTop: "50px", borderTop: "1px solid black" }}></hr>
    </div>
  );

  const extraContent15 = (
    <div>
      <p className="extra-content text-justify">
      <br />
        Wheelchair rugby started in Canada in 1977. It is a relative
        new sport for athletes with disabilities but developing very fast
        rhythms around the world. Combines rhythm, speed,
        the skill and tactics of rugby and wheelchair basketball. THE
        match is played on a basketball court and the ball is used
        is a volleyball. Athletes with disabilities (mainly with
        quadriplegia) compete in mixed teams. Athletes submit to
        examination of the balance of mobility, its ability to handle
        ball as well as wheelchair handling and are classified in
        corresponding score. They are specially used
        modified racing wheelchairs that offer protection for them
        athletes and a particularly agile. They require constant support and
        repair during the race as they are strained
        from constant conflicts. The race consists of four seasons
        of eight minutes with a break in between. Each group is composed
        of four (4) players and eight substitutes. The goal of each team
        is to score by passing an athlete in a wheelchair in her possession
        ball (with both wheels) or passing by tripling the ball in
        athlete within the finish line of the opposing team. THE
        The team that scores the most goals wins.
      </p>
      <hr style={{ paddingTop: "50px", borderTop: "1px solid black" }}></hr>
    </div>
  );

  const extraContent16 = (
    <div>
      <p className="extra-content text-justify">
      <br /> Shooting is a technical sport, with great popularity
         worldwide. Requires good technical training as well as the ability to
         high degree of self-concentration. ‘Men and women of any age
         they can exercise, not only at the leisure level, but also at the level
         championship. Shooting competitions differ in distance,
         the type of target, the weapon, the attitude of the shooter, the number of
         shots and the time within which the shooter must fire the shots
         of.
      </p>
      <hr style={{ paddingTop: "50px", borderTop: "1px solid black" }}></hr>
    </div>
  );

  const extraContent17 = (
    <div>
      <p className="extra-content text-justify">
      <br /> Athletics is one of the most popular Paralympic sports.
        It was one of the sports included in the competition program
        of the first Paralympic Games in 1960, in Rome. Gathers the
        a larger number of athletes and includes the largest
        number of matches. Athletes also participate in the Paralympic Games
        female athletes with cerebral palsy, spinal cord injury, amputation
        or other motor disability, blind or visually impaired athletes In
        racing program includes road races, throws, jumps, o
        marathon and pentathlon. Athletes compete in a wheelchair or with
        use of intentions (artificial limbs) while blind athletes compete with
        assistant. Athletes are classified based on their type of disability into
        different categories:
        <li>
          {""}
          Athletes with cerebral palsy are classified in categories 32 to
          38. In categories 32 to 34, athletes compete with
          racing wheelchair, while in the categories from 35 to 38 compete
          standing ..
        </li>
        <li>
          {""}
          Athletes with spinal cord injury or other motor disability, except
          from cerebral palsy, are included, depending on their mobility
          profiles, in categories 51 to 54 for road racing and from
          51 to 58 for throwing matches. In these categories the athletes
          wheelchair racing.
        </li>
        <li>
          {""}
          Athletes with mutilation in one or more members, as well as athletes
          with another motor disability (les autres) struggling standing, belong
          in categories from 42 to 46 ..
        </li>
        <li>
          {""}
          Athletes blind or partially sighted are classified into three categories
          11, 12 and 13 ..
        </li>
        <li>
          Athletes with dwarfism due to achondroplasia compete only in throwing,
          in category 40.
        </li>
      </p>
      <hr style={{ paddingTop: "50px", borderTop: "1px solid black" }}></hr>
    </div>
  );

  const extraContent18 = (
    <div>
      <p className="extra-content text-justify">
      <br />
        Judo is a martial art, but its practice and methods
        based on courtesy. The athlete's victory is achieved when he retreats
        to the power of his opponent, adapts to it and uses it
        in his favor. The two athletes (judoka) wear one blue and the other
        another white uniform called and judogi and fighting for
        five minutes. The match is led by a central referee and two
        judges with equal opinion. Decisions are made by its rule
        majority and the result is given by the referee with characteristic
        hand gesture and shouting of degree or punishment. The referee
        announces the start of the race, after first allowing the athletes to
        come to contact. A Judo match ends directly in favor of the athlete,
        who will get the "Ippon" grade after making a successful one
        technique. In case Ippon is not achieved, the winner is the
        athlete, who has the highest value grade after the end of the year.
      </p>
      <hr style={{ paddingTop: "50px", borderTop: "1px solid black" }}></hr>
    </div>
  );

  const extraContent19 = (
    <div>
      <p className="extra-content text-justify">
      Archery, like most sports for people with
        disability, was originally used as a rehabilitation activity and
        entertainment. For the past 50 years, it has established itself as a sport, giving it
        opportunity for athletes to practice skill, accuracy,
        their strength and ability to concentrate. They participate in Archery
        athletes with motor disabilities (spinal cord injury,
        cerebral palsy, amputation and Les Autres). The athletes
        fall into three categories. Their purpose is to throw me
        precision arrows at a target diameter of 122 cm, which is located at
        distance 70 meters. Individuals are included in the competition program
        and team games.
      </p>
      <hr style={{ paddingTop: "50px", borderTop: "1px solid black" }}></hr>
    </div>
  );

  const extraContent20 = (
    <div>
      <p className="extra-content text-justify">
      Rowing is the sport added to the Paralympics
        program in 2005 and was organized for the first time at the Paralympic Games
        level at the Beijing Games in 2008. The International Federation
        Rowing (FISA) is the principle that develops the sport of Rowing
        for athletes with and without disabilities. Rowing is offered for athletes
        with disabilities who are classified according to their criteria
        classification regulations. For the
        conducting the sport the equipment is adapted to the athletes despite the
        sport to athletes.
      </p>
      <hr style={{ paddingTop: "50px", borderTop: "1px solid black" }}></hr>
    </div>
  );

  const extraContent21 = (
    <div>
      <p className="extra-content text-justify">
      <br />
        The triathlon will make its Paralympic debut at the Paralympics
        Rio de Janeiro Games in 2016. Athletes
        compete in three races: 750m swimming, then 20km
        cycling and 5km road. The vocal categories are based on
        type of disability. Athletes can use
        bicycle, handlebar or double bicycle (tandem) on its bicycle part
        race and also allowed athletes with paraplegia to
        use a racing wheelchair on the road track. The
        sport is developed in 37 countries, and 27 countries organized national
        championship within 2011.
      </p>
      <hr style={{ paddingTop: "50px", borderTop: "1px solid black" }}></hr>
    </div>
  );

  const extraContent22 = (
    <div>
      <p className="extra-content text-justify">
      The canoe will be included in the Paralympic program for the first time
        at the Rio de Janeiro Paralympic Games in 2016. <br />
        The sport is conducted as for athletes without disabilities giving it
        opportunity for athletes with varying degrees of disability to enjoy
        sport. <br />
        The classification system is based on
        functional ability of athletes on the ability to
        handle the paddle as well as the ability to stabilize the body
        them in the canoe. There are currently eight different competitions
        but as the sport develops can be taken into account and
        more about the Paralympic program.
      </p>
      <hr style={{ paddingTop: "50px", borderTop: "1px solid black" }}></hr>
    </div>
  );

  const linkName1 = readMore1
    ? "Read less  "
    : " 1) Wheelchair tennis ... ";

  const linkName2 = readMore2 ? "Read less  " : " 2) Weightlifting on a bench ... ";
  const linkName3 = readMore3 ? "Read less  " : " 3) Goalball ... ";

  const linkName4 = readMore4
    ? "Read less  "
    : " 4) Table Tennis ... ";

  const linkName5 = readMore5 ? "Read less  " : "5) Horse riding ...";

  const linkName6 = readMore6 ? "Read less  " : "6) Sailing ... ";

  const linkName7 = readMore7
    ? "Read less  "
    : " 7) Wheelchair basketball ...";

  const linkName8 = readMore8 ? "Read less  " : "8) Swimming ... ";

  const linkName9 = readMore9 ? " less  " : " 9) Boccia ...";

  const linkName10 = readMore10
    ? "Read Readless  "
    : " 10) Wheelchair fencing ... ";

  const linkName11 = readMore11
    ? "Read less  "
    : " 11) Volleyball (Seats) ...";

  const linkName12 = readMore12 ? "Read less  " : " 12) Cycling ... ";

  const linkName13 = readMore13 ? "Read less  " : "13) Football 5x5 ... ";

  const linkName14 = readMore14 ? "Read less  " : " 14) Football 7x7 ...";

  const linkName15 = readMore15 ? "Read less  " : "15) Wheelchair rugby ... ";

  const linkName16 = readMore16 ? "Read less  " : "16) Shooting ...";

  const linkName17 = readMore17 ? "Read less  " : "17) Track and field ... ";

  const linkName18 = readMore18 ? "Read less  " : "18) Judo ... ";

  const linkName19 = readMore19 ? "Read less  " : "19) Archery ... ";

  const linkName20 = readMore20
    ? "Read less  "
    : "20) Rowing (new sport in Beijing) ...";

  const linkName21 = readMore21
    ? "Read less  "
    : "21) Triathlon (new sport in Rio) ... ";

  const linkName22 = readMore22
    ? "Read less  "
    : "22) Canoe (new sport in Rio) ... ";

  return (
    <div className="sepNav">
      <h1 className="titleh1">PARALYMPICS SPORTS</h1>

      {/* image part */}
      <div className="images">
      <img src={Para} style={{ borderRadius: "20px" }} />

      </div>

      {/* history part */}
      <div className="row1">
        <div
          className="history col-xs-10 col-sm-8 col-md-10"
          style={{ paddingBottom: "100px" }}
        >
          <h1>HISTORY OF PARALYMPICS SPORTS</h1>

          <p className="text-justify">
            {" "}
            The Paralympic Games are the
            corresponding Olympic Games for athletes with motor, visual
            or mental disabilities. <br />
            The first races for athletes with disabilities took place in 1948 at
            StokeMadeville in England. On the day of the opening ceremony for them
            The 1948 London Olympics also began
            The StokeMadeville Games were instituted and the
            first sports event for wheelchair athletes.
            <br />
            Four years later, athletes from the Netherlands participated in
            these struggles and thus was born the international movement that is
            now known as the Paralympic Movement.
            <br />
            The first Olympic Games for athletes with disabilities
            were organized in 1960 in Rome, after the Olympic Games
            in the same city. They are considered to be the first Paralympic Games.
            About 400 athletes from 23 countries participated in 8 sports, 6 of them
            which are still included in the competition program of
            Paralympic Games (Archery, Swimming, Fencing,
            Basketball, Table Tennis, Track and Field).
            <br />
            Since then, the Paralympic Games have been held every 4 years, always
            the same year as the Olympic Games. In 1976 in Toronto,
            other categories of disability were added and the idea was born
            merging different categories of athletes with disabilities for
            their participation in international sporting events. The same year
            The first Winter Paralympic Games in Sweden took place.
            <br />
            The Seoul Paralympic Games (1988) also stood out from the
            fact that the Olympic and Paralympic Games were hosted
            in the same country, in the same city and used the same
            facilities with the Olympic Games. Since then, the Paralympics
            Games are always held in the same city as the Olympic Games.
            <br />
            Since 1960, twelve (12) Summer Paralympics have been organized
            Games and nine (9) Winter. The Paralympic Games have
            is now the second largest sporting event after them
            Olympic.
            <br />
            Greek athletes participate in the Paralympic Games since
            1976. Since 1988, Greece participates in the Games with official
            National Missions. All these years, the Greek athletes have succeeded
            good performance and won many medals.
            <br /> The first participation of a Greek Athlete in Winter Paralympics
            Games were held in 2002 in Salt Lake City. His Paralympic Games
            Turin in 2006 was the second Winter Paralympic Games
            where a Greek Mission participated. The Winter Paralympics
            The Vancouver Games are the third Winter Games to
            Greece will participate with the participation of the first
            athlete.
          </p>

          <hr style={{ paddingTop: "1px", borderTop: "1px solid black" }}></hr>
          
        </div>
      </div>

      {/* ///////////////////////////////////////////////// */}

      <div className="row1">
        <div className="history col-xs-10 col-sm-10 col-md-10">
          <h1>SUMMER PARALYMPICS SPORTS</h1>
          <p className="text-justify">
          The competition program of the Summer Paralympic Games
            now includes 22 summer sports. Eighteen of them are common
            with the Olympics and the other four are
            exclusively Paralympic. These are Botsia, Golbol, Arsi
            bench weights and wheelchair rugby. At the Athens Games
            added the sport of Football 5x5, while in Beijing for the first time
            once athletes competed in Rowing. At the Rio Games
            Canoe and Triathlon were added. <br />
            The records set at the Paralympic Games can
            compared to the records of Olympic athletes (as in the men's 100m
            in Athletics) and in some cases (such as in Weightlifting at
            bench) the Paralympic records surpass those of athletes without
            disability.
            <br />
            Athletes from all or most of them participate in some sports
            categories of disability, while in others from one category only.
            <br />
            In detail, the Paralympic sports are:
          </p>
          <br />
          <div className="App1">
            <a
              className="read-more-link"
              onClick={() => {
                setReadMore1(!readMore1);
              }}
            >
              <h3>{linkName1}</h3>
            </a>
            {readMore1 && extraContent1}
            <br />

            <a
              className="read-more-link"
              onClick={() => {
                setReadMore2(!readMore2);
              }}
            >
              <h3>{linkName2}</h3>
            </a>
            {readMore2 && extraContent2}
            <br />

            <a
              className="read-more-link"
              onClick={() => {
                setReadMore3(!readMore3);
              }}
            >
              <h3>{linkName3}</h3>
            </a>
            {readMore3 && extraContent3}

            <br />

            <a
              className="read-more-link"
              onClick={() => {
                setReadMore4(!readMore4);
              }}
            >
              <h3>{linkName4}</h3>
            </a>
            {readMore4 && extraContent4}
            <br />

            <a
              className="read-more-link"
              onClick={() => {
                setReadMore5(!readMore5);
              }}
            >
              <h3>{linkName5}</h3>
            </a>
            {readMore5 && extraContent5}
            <br />

            <a
              className="read-more-link"
              onClick={() => {
                setReadMore6(!readMore6);
              }}
            >
              <h3>{linkName6}</h3>
            </a>
            {readMore6 && extraContent6}
            <br />

            <a
              className="read-more-link"
              onClick={() => {
                setReadMore7(!readMore7);
              }}
            >
              <h3>{linkName7}</h3>
            </a>
            {readMore7 && extraContent7}
            <br />

            <a
              className="read-more-link"
              onClick={() => {
                setReadMore8(!readMore8);
              }}
            >
              <h3>{linkName8}</h3>
            </a>
            {readMore8 && extraContent8}
            <br />

            <a
              className="read-more-link"
              onClick={() => {
                setReadMore9(!readMore9);
              }}
            >
              <h3>{linkName9}</h3>
            </a>
            {readMore9 && extraContent9}
            <br />

            <a
              className="read-more-link"
              onClick={() => {
                setReadMore10(!readMore10);
              }}
            >
              <h3>{linkName10}</h3>
            </a>
            {readMore10 && extraContent10}
            <br />

            <a
              className="read-more-link"
              onClick={() => {
                setReadMore11(!readMore11);
              }}
            >
              <h3>{linkName11}</h3>
            </a>
            {readMore11 && extraContent11}

            <br />
            <a
              className="read-more-link"
              onClick={() => {
                setReadMore12(!readMore12);
              }}
            >
              <h3>{linkName12}</h3>
            </a>
            {readMore12 && extraContent12}

            <br />
            <a
              className="read-more-link"
              onClick={() => {
                setReadMore13(!readMore13);
              }}
            >
              <h3>{linkName13}</h3>
            </a>
            {readMore13 && extraContent13}

            <br />
            <a
              className="read-more-link"
              onClick={() => {
                setReadMore14(!readMore14);
              }}
            >
              <h3>{linkName14}</h3>
            </a>
            {readMore14 && extraContent14}

            <br />
            <a
              className="read-more-link"
              onClick={() => {
                setReadMore15(!readMore15);
              }}
            >
              <h3>{linkName15}</h3>
            </a>
            {readMore15 && extraContent15}

            <br />
            <a
              className="read-more-link"
              onClick={() => {
                setReadMore16(!readMore16);
              }}
            >
              <h3>{linkName16}</h3>
            </a>
            {readMore16 && extraContent16}

            <br />
            <a
              className="read-more-link"
              onClick={() => {
                setReadMore17(!readMore17);
              }}
            >
              <h3>{linkName17}</h3>
            </a>
            {readMore17 && extraContent17}

            <br />
            <a
              className="read-more-link"
              onClick={() => {
                setReadMore18(!readMore18);
              }}
            >
              <h3>{linkName18}</h3>
            </a>
            {readMore18 && extraContent18}

            <br />
            <a
              className="read-more-link"
              onClick={() => {
                setReadMore19(!readMore19);
              }}
            >
              <h3>{linkName19}</h3>
            </a>
            {readMore19 && extraContent19}

            <br />
            <a
              className="read-more-link"
              onClick={() => {
                setReadMore20(!readMore20);
              }}
            >
              <h3>{linkName20}</h3>
            </a>
            {readMore20 && extraContent20}

            <br />
            <a
              className="read-more-link"
              onClick={() => {
                setReadMore21(!readMore21);
              }}
            >
              <h3>{linkName21}</h3>
            </a>
            {readMore21 && extraContent21}

            <br />

            <a
              className="read-more-link"
              onClick={() => {
                setReadMore22(!readMore22);
              }}
            >
              <h3>{linkName22}</h3>
            </a>
            {readMore22 && extraContent22}
       
    
<br />
<hr
              style={{ paddingTop: "20px", borderTop: "1px solid black" }}
            ></hr>

<ul>
          
          <li>
          3) Wheelchair curling
            </li>
          <li>
          4) Endurance skiing
            </li>
          <li>
          5) Ice hockey with sleigh

            </li>

          <li>
          6) Heptathlon
            </li>
        </ul>
          <p className="text-justify">
          The sports will be displayed in order and if someone touches the mouse up or clicks, it will be taken out as a roll in detail for each sport. At first glance, sports will only seem relevant.          </p>
            <hr
              style={{ paddingTop: "50px", borderTop: "1px solid black" }}
            ></hr>
    
        </div>
        </div>
        </div>
    </div>
  );
}

export default SportParalymics;
